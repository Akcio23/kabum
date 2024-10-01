import React, { useState } from 'react';
import blogFetch from '@/backend/api/config';
import Success from './Sucess';

interface Forms {
  departament: string;
  email: string;
}

const AddContact = () => {
  const [departament, setDepartament] = useState<string>(''); 
  const [email, setEmail] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false); 

  const createContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: Forms = { email, departament };

    try {
      await blogFetch.post('/contato', data); 
      console.log('Contato adicionado com sucesso!'); 
      
      setShowSuccess(true); // Exibe o componente de sucesso

      setTimeout(() => {
        setShowSuccess(false); // Oculta o componente de sucesso após 3 segundos
        window.location.reload(); // Recarrega a página
      }, 3000); // Ajuste o tempo conforme necessário

    } catch (error) {
      console.error('Erro ao adicionar contato:', error); 
    }
  };

  return (
    <div className='flex flex-col'>
      <form onSubmit={createContact} className='flex flex-col'>
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

      {showSuccess && <Success message="Contato adicionado com sucesso!" />} {/* Renderiza o componente de sucesso se showSuccess for true */}
    </div>
  );
}

export default AddContact;
