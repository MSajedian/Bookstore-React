import { Navbar, Nav } from "react-bootstrap";
const MyNav = () => (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">Bookstore</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">About</Nav.Link>
                <Nav.Link href="">Browse</Nav.Link>
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
