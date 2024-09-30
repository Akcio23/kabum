import React, { useState } from 'react';
import blogFetch from '@/backend/api/config';

interface Forms {
  departament: string;
  email: string;
}

const AddContact = () => {
  const [departament, setDepartament] = useState<string>(''); // Inicializando com string vazia
  const [email, setEmail] = useState<string>('');

  const createContact = async () => {

    
    const data: Forms = { email, departament };

    try {
      await blogFetch.post('/contato', data); // Enviando os dados diretamente
      console.log('Contato adicionado com sucesso!'); // Log para confirmação
    } catch (error) {
      console.error('Erro ao adicionar contato:', error); // Tratamento de erro
    }
  };

  return (
    <div className='flex flex-col'>
      <form onSubmit={createContact} className='flex flex-col'> {/* Aqui removi a arrow function */}
        <label>Responsabilidade:</label>
        <input
          type="text"
          onChange={(e) => setDepartament(e.target.value)}
          placeholder='RA'
          className='p-2 rounded border-2'
        />

        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='@example.com'
          className='p-2 rounded border-2'
        />

        <button type='submit' className='p-2 rounded border-2 bg-blue-500 text-white m-3'>
          Adicionar Contato
        </button>
      </form>
    </div>
  );
}

export default AddContact;
