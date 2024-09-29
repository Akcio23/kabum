"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddContact from './AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}  >
        Adicionar Contato
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Contato</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddContact/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;