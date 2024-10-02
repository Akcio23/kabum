"use client";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import updateContact from '../../backend/api/put';
import Sucess from './Sucess'; 

interface PropsEdit {
  _id: string;
}

function Edit(props: PropsEdit) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false); // Estado para controlar a exibição do sucesso

  const handleEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateContact(props._id, email); // Passa o ID e o novo email
      handleClose(); // Fecha o modal
      setShowSuccess(true); // Exibe a mensagem de sucesso

      setTimeout(() => {
        setShowSuccess(false); // Oculta a mensagem após 3 segundos
        window.location.reload(); // Recarrega a página
      }, 3000);
    } catch (error) {
      console.error("Erro ao atualizar o contato:", error); // Captura erros
    }
  }

  return (
    <>
      <Button onClick={handleShow} style={{ backgroundColor: '#FFA500', color: 'white', border: 'none',}}>
        <Image
          src={"/escrever.png"}
          width={20}
          height={15}
          alt="Editar"
        />
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Alterar contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='flex justify-start gap-3'>
            <form onSubmit={handleEdit} className='w-[100%]'>
              <input
                type="email"
                className='p-1 rounded border-2 w-[90%]'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Altere o email'
                required
              />
              <div className='flex flex-row justify-center items-center'>
                <button
                  type="button"
                  onClick={handleClose}
                  className='p-2 rounded border-2 bg-gray-500 text-white m-3 border-none'
                >
                  Fechar
                </button>
                <button type="submit" className='p-2 rounded border-2 bg-blue-500 text-white m-3'>
                  Realizar Alteração
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {showSuccess && <Sucess message="Email alterado com sucesso!" />} {/* Exibindo o componente Success */}
    </>
  );
}

export default Edit;
