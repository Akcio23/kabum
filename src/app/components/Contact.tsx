import React,{useState} from 'react';
import Delete from './Delete';
import Edit from './Edit';
import EmailCopied from './EmailCopied';

interface ContactProps {
  filter: string;
  contatos?: { departament: string; email: string; _id: string }[];
}

const Contact: React.FC<ContactProps> = ({ filter, contatos = [] }) => {
  const [copy, setCopy] = useState(false)

  const filteredContacts = Array.isArray(contatos)
    ? contatos.filter(contact =>
      contact.departament.toLowerCase().includes(filter.toLowerCase())
    )
    : [];

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopy(true)
   
    setTimeout(() => {
      setCopy(false)
    }, 2000)

  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {filteredContacts.length === 0 ? (
        <p>Nenhum contato encontrado.</p>
      ) : (
        filteredContacts.map(contact => (
          <div key={contact._id} className='flex justify-evenly w-[100%] md:w-[60%] p-2 border-t-2 flex-col sm:flex-row'>
            <div className='w-[90%] flex flex-col justify-center items-start'>
              <p className='font-semibold text-lg'>{contact.departament}</p>
              <div className='flex items-center'>
                <div className='flex justify-center items-center'>
                  <p className='mr-2 mt-3'>{contact.email}</p>
                  <button
                    onClick={() => copyToClipboard(contact.email)} // Chama a função de copiar
                    className=' text-black  rounded'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-row gap-2 justify-evenly '>
              <Edit _id={contact._id} />
              <Delete _id={contact._id} />
            </div>
          </div>
        ))
      )}
      {copy && <EmailCopied/>}
    </div>
  );
};

export default Contact;
