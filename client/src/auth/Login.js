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
            .then((data) => {
                console.log(data.sessionToken);
                props.updateToken(data.sessionToken);
            })
    }

    
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={props.toggleLogin}>&times;</button>;
    

    return(
        <div>
            <Modal isOpen={props.login} toggle={props.toggleLogin} className='Modal' external={externalCloseBtn}>
                <ModalHeader style={{color: "#292929"}}>Login</ModalHeader>
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
                        <Button type='submit' onClick={props.toggleLogin} style={{alignContent: "center"}}>Login</Button>{' '}
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Login;