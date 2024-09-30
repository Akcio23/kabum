import blogFetch from './config';

export const deleteContact = async (id) => {
  try {
    // Faz a requisição DELETE para a API
    await blogFetch.delete(`/contato/${id}`);
    
    
  } catch (error) {
    console.error(`Erro ao deletar o contato ${id}:`, error);
  }
};

export default deleteContact;