import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        let newURL = `${props.url}/user/login`;

        fetch(newURL, {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((res) => res.json())
            .then((data) => props.updateToken(data.sessionToken))
    }


    return(
        <div>
            <Modal isOpen={true}>
                <ModalHeader>Login</ModalHeader>
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
                        <Button type='submit'>Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Login;