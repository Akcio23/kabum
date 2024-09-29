import React from 'react'
import { useState } from 'react'


interface Forms{
  departament: string;
  name: string;
 
}


const AddContact = () => {
  const [departament, setDepartament] = useState<string>(''); // Inicializando com string vazia
  const [name, setName] = useState<string>('')

  const createContact = async(e : React.FormEvent) => {
    e.preventDefault(); // Evitando que a pagina se recarregue no envio dos dados
    
    const data: Forms = { departament, name };

  
    
  }


  return (
    <div className='flex flex-col'>
   

        <form onSubmit={(e) => createContact(e)} className='flex flex-col'>
            <label>Resposabilidade:</label>
            <input type="text" value={departament} onChange={(e) => setDepartament(e.target.value)} placeholder='Entrega' className='p-2 rounded border-2'/>

            <label>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Pedro' className='p-2 rounded border-2' />

        </form>
      
    </div>
  )
}

export default AddContact
