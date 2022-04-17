
import { Container,
     FormControl, 
     Navbar, Nav, Dropdown, Badge
 } from "react-bootstrap";
 import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        

       
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <a href="/">Uniaonefamily</a>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl style={{width: 500}}
                    placeholder="search a product"
                    className="m-auto"
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown allRight>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="20px"/>
                        <Badge>{10}</Badge>
                          </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minwidth: 370 }}>
                        <span style={{ padding: 10 }}>Cart is empty!</span>
                    </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
        
    )
}

export default Header;