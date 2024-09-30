import blogFetch from './config';

// Função para atualizar um post
export const updateContat = async (id, emailUpdata) => {
  try {
    // Modifique a estrutura do dado a ser enviado no PUT
    const response = await blogFetch.put(`/contato/${id}`, {
     email : emailUpdata 
      
    });

    return response.data; 
  } catch (error) {
    console.error("Erro ao atualizar o contato:", error); 
    throw error; 
  }
};

export default updateContat;