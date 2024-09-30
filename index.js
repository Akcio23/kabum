import express from "express";
import mongoose from "mongoose";
import cors from 'cors'; // Importando o middleware CORS
import dotenv from 'dotenv';

dotenv.config();
const dbUrl = process.env.DATABASE_URL || 3001;



// Realizando a conexão com o banco de dados
mongoose.connect(dbUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;
app.use(cors());

// Configurando modelo de dados
const Contato = mongoose.model('Contato', {
  email: String,
  departament: String,
});

// Rota GET contato
app.get('/contato', async (req, res) => {
  try {
    const contatos = await Contato.find();
    return res.status(200).send(contatos);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Rota POST contato
app.post('/contato', async (req, res) => {
  try {
    const { email, departament } = req.body;

    if (!email || !departament) {
      return res.status(400).send("Incomplete data, check the request.");
    }

    const contato = new Contato({ email, departament });
    await contato.save();
    return res.status(201).send("Contato saved");
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// Rota DELETE contato
app.delete('/contato/:id', async (req, res) => {
  try {
    const contato = await Contato.findById(req.params.id);

    if (!contato) {
      return res.status(404).send("ID not found");
    }

    await Contato.findByIdAndDelete(req.params.id);
    return res.status(200).send("Deleted successfully!");
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// Rota PUT contato
app.put('/contato/:id', async (req, res) => {
  try {
    const contato = await Contato.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!contato) {
      return res.status(404).send("ID not found");
    }

    return res.status(200).send(contato);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
