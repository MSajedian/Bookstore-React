import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const MyNav = () => (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Browse</Nav.Link>
            </Nav>
            {/* 
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form> 
            */}
        </Navbar>
    </>
);
export default MyNav;
