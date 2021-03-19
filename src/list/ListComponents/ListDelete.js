import React, {useState, useEffect} from 'react';
import {Alert, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const ListDelete = (props) => {
    const [errForm, setErrForm] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    const deleteOff = () => {
        props.setDeleteList(false);
    };

    const handleShow = () => {
        setIsOpen(false);
        deleteOff();
    };

    let url = `${props.baseURL}/list/delete/${props.activeList}`;

    const deleteList = (event) => {
        event.preventDefault();
        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then((res) => {
            props.getList();
            deleteOff();
        })
        .catch(err => {
            console.log(err);
            setErrForm(err);
        })
    };


    return(
       <Modal isOpen={isOpen}>
           <ModalHeader>Are you sure you want to delete this list?</ModalHeader>
           <ModalBody>
               {errForm !== "" ? <Alert color="danger">{errForm}</Alert> : ""}
               <Button className="mr-3" color="danger" onClick={deleteList} type="submit">Confirm Delete</Button>
               <Button outline color="secondary" onClick={handleShow}>Close</Button>
           </ModalBody>
       </Modal>
    )
}

export default ListDelete;