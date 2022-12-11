import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const CustomNavBar = () => {
    const a = useLocation();
    return (
        <Navbar fixed="top" bg="primary" variant='dark' expand="md">
            <Navbar.Brand className='ms-4' as={Link} to={'/'}>ProfitAge webapp</Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />                 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >    
                        <Nav.Link active={a.pathname === '/graphs'} as={Link} to={'/graphs'}>פריטים מצט</Nav.Link>
                        <Nav.Link active={a.pathname === '/informatives'} as={Link} to={'/informatives'}>אינפורמטיבים</Nav.Link>
                        <Nav.Link as={Link} to={'/divs'}>מחלקות</Nav.Link>
                        <Nav.Link as={Link} to={'/pays'}>א. תשלום</Nav.Link>
                        <Nav.Link as={Link} to={'/stands'}>עמדות</Nav.Link>                                        
                    </Nav>
            </Navbar.Collapse>
            
      </Navbar>
    )

}