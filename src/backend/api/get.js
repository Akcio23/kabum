import blogFetch from './config';

// Função para buscar posts
const getPosts = async () => {
  try {
    const response = await blogFetch.get('/contato'); // Faz a requisição para a API
    const data = response.data; // Recebe os dados da resposta da requisição

    return data; // Retorna os posts formatados

  } catch (error) {
    console.log("Erro ao buscar dados:", error);
  }
};


export default getPosts;