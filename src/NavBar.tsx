import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export const CustomNavBar = () => {
    const [expanded, setExpanded] = useState(false as boolean);
    const a = useLocation();

    return (
        <Navbar expanded={expanded} fixed="top" bg="primary" variant='dark' expand="md">
            <Navbar.Brand className='ms-4' as={Link} to={'/'}>ProfitAge webapp</Navbar.Brand> 
            <Navbar.Toggle onClick={() => setExpanded(old => !old)} aria-controls="basic-navbar-nav" />                 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >    
                        <Nav.Link onClick={() => setExpanded(false)} active={a.pathname === '/graphs'} as={Link} to={'/graphs'}>פריטים מצט</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} active={a.pathname === '/informatives'} as={Link} to={'/informatives'}>אינפורמטיבים</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to={'/divs'}>מחלקות</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to={'/pays'}>א. תשלום</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to={'/stands'}>עמדות</Nav.Link>                                        
                    </Nav>
            </Navbar.Collapse>
            
      </Navbar>
    )

}