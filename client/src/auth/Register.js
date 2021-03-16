import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    let handleSubmit = (event) => {
        event.preventDefault();
        let newURL = `${props.url}/user/register`;
        fetch(newURL, {
            method:'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((res) => res.json())
            .then((data) => props.updateToken(data.sessionToken));
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='username'>Username:</Label>
                        <Input name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Password:</Label>
                        <Input name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <Button type='submit'>Create Account</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default Register;