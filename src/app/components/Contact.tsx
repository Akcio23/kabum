import React from 'react';
import Delete from './Delete';
import Edit from './Edit';


interface ContactProps {
  filter: string; 
  contatos?: { departament: string; email: string; _id: string }[]; 
}

const Contact: React.FC<ContactProps> = ({ filter, contatos = [] }) => {
  const filteredContacts = Array.isArray(contatos)
    ? contatos.filter(contact =>
        contact.departament.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div className='flex flex-col justify-center items-center'>
      
      {filteredContacts.length === 0 ? (
        <p>Nenhum contato encontrado.</p>
      ) : (
        filteredContacts.map(contact => (
          <div key={contact._id} className='flex justify-evenly w-[100%] md:w-[60%] p-2 border-t-2'>
            <div className='w-[90%] md:w-[40%] flex flex-col justify-center items-start'>
              <p className='font-semibold text-lg'>{contact.departament}</p>
              <p>{contact.email}</p>
            </div>
            <div className='flex flex-col gap-2 md:flex-row'>
              <Edit _id={contact._id} />
              <Delete _id={contact._id} />
            </div>
          </div>
        ))
      )}
  
    </div>
  );
};

export default Contact;
