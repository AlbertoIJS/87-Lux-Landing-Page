import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarContainer() {
    return (
        <header>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top" className='justify-content-around bottom__shadow'>
                <Container>
                    <Navbar.Brand href="#home" className='logo'>87Lux</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href='#' className='text-dark'>Themes</Nav.Link>
                            <Nav.Link href='#' className='text-dark'>Apps</Nav.Link>
                            <Nav.Link href='#' className='text-dark'>Assets</Nav.Link>
                            <Nav.Link href='#' className='text-dark'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}