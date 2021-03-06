import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import Logo from '../assets/Logo.png';


const TopBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [games, setGames] = useState('')
    let secret = `Bearer ${props.token}`;
    console.log(props, "topBar.js")

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
<Navbar color='faded' light expand='md'>
            <NavbarBrand><img src={Logo} alt='logo' style={{height: "80px", marginLeft: "4em"}}/></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Button onClick={props.clearToken} size='lg' style={{backgroundColor: "#BB86FC", color: "#292929", border: "none", borderRadius: "25px", marginRight: "4em"}}>LOGOUT</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default TopBar;