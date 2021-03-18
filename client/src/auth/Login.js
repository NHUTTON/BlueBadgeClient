import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import {useForm} from 'react-hook-form';

const Login = (props) => {
    console.log('login:', props);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    //form validation

    // const {register, handleSubmit} = useForm();
    // const onSubmit = (data) => console.log(data);


    //fetch to our server
    let loginSubmit = (event) => {
        event.preventDefault();

        props.clearToken();

        let newURL = `${props.url}/user/login`;

        fetch(newURL, {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.sessionToken);
                props.updateToken(data.sessionToken);
            })
    }

    

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px', color:"white" }} onClick={props.toggleLogin}>&times;</button>;

    return(
        <div>
            <Modal isOpen={props.login} toggle={props.toggleLogin} className='Modal' external={externalCloseBtn}>
                <ModalHeader style={{color: "#292929"}}>Login</ModalHeader>
                <ModalBody>
                    <form onSubmit={loginSubmit}>
                        <FormGroup>
                            <label htmlFor='username'>Username:</label>
                            <input name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor='password'>Password:</label>
                            <input name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </FormGroup>
                        <Button style={{alignContent: "center"}}>Login</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Login;
