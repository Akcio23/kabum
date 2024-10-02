"use client";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import deleteContact from '../../backend/api/delete';
import Sucess from './Sucess';

interface PropsDelete {
    _id: string;
}

const Delete = (props: PropsDelete) => {
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        await deleteContact(props._id);
        handleClose();
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
            window.location.reload();
        }, 3000);
    }

    return (
        <>
            <Button onClick={handleShow} style={{ backgroundColor: 'red', color: 'white', border: 'none',}}>
                <Image
                    src={"/excluir.png"}
                    width={20}
                    height={10}
                    alt="Excluir.icon"
                />
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja deletar este contato?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Não
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Sim
                    </Button>
                </Modal.Footer>
            </Modal>

            {showSuccess && <Sucess message="Contato deletado com sucesso!" />}
        </>
    );
}

export default Delete;
