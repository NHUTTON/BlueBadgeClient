import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import {useForm} from 'react-hook-form';
import APIURL from '../helpers/environment'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    


    /*

    This is the client side login function that is fetching to the server and grabbing our session token. this is supplying our session token by using the prop passed from the Auth component, updateToken(). this grabs the data from our server and supplies a session token with the word Bearer supplied. 
    
    */ 
    let loginSubmit = (event) => {
        event.preventDefault();

if(password === "" || username.length < 4){
    alert('Your username and password need to be filled in correctly.')
}else {
    props.clearToken();

    let newURL = `${APIURL}/user/login`;  

    fetch(newURL, {
        method: 'POST',
        body: JSON.stringify({user: {username: username, password: password}}),
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            alert(data.message);
            props.updateToken(data.sessionToken);

        // props.clearToken();

        // let newURL = `${props.url}/user/login`;

        // fetch(newURL, {
        //     method: 'POST',
        //     body: JSON.stringify({user: {username: username, password: password}}),
        //     headers: new Headers({
        //         'Content-Type': 'application/json',
        //     })
        })
}
    } //here we utilize the toggleLoginOff prop passed from Auth.js and use it "onClick"
const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px', color:"white" }} onClick={props.toggleLoginOff}>&times;</button>;


return(
    <Modal isOpen={true} toggle={props.toggleLogin} modalClassName='modal-class' external={externalCloseBtn} style={{backgroundColor: "#121212"}}>
        <ModalHeader style={{color: "#292929"}}>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={loginSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username:</Label>
                    <Input name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password:</Label>
                    <Input name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button style={{alignContent: "center"}}>Login</Button>
            </Form>
        </ModalBody>
    </Modal>
)
}

export default Login;
