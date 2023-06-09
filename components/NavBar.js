import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = (props) => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Оргтехник</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Заправка картриджей" id="basic-nav-dropdown1">
              <NavDropdown.Item href="/brands/1">Brother</NavDropdown.Item>
              <NavDropdown.Item href="/brands/2">Canon</NavDropdown.Item>
              <NavDropdown.Item href="/brands/3">Epson</NavDropdown.Item>
              <NavDropdown.Item href="/brands/4">HP</NavDropdown.Item>
              <NavDropdown.Item href="/brands/5">Konica Minolta</NavDropdown.Item>
              <NavDropdown.Item href="/brands/6">Lexmark</NavDropdown.Item>
              <NavDropdown.Item href="/brands/7">Panasonic</NavDropdown.Item>
              <NavDropdown.Item href="/brands/8">Samsung</NavDropdown.Item>
              <NavDropdown.Item href="/brands/9">Sharp</NavDropdown.Item>
              <NavDropdown.Item href="/brands/10">Xerox</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="Заправка цветных" id="basic-nav-dropdown2">
                <NavDropdown.Item href="/brands/21">Canon Color</NavDropdown.Item>
                <NavDropdown.Item href="/brands/41">HP Color</NavDropdown.Item>
                <NavDropdown.Item href="/brands/81">Samsung Color</NavDropdown.Item>
                <NavDropdown.Item href="/brands/101">Xerox Color</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Заправка факсов" id="basic-nav-dropdown3">
                <NavDropdown.Item href="/brands/12">Brother Fax</NavDropdown.Item>
                <NavDropdown.Item href="/brands/22">Canon Fax</NavDropdown.Item>
                <NavDropdown.Item href="/brands/72">Panasonic Fax</NavDropdown.Item>
                <NavDropdown.Item href="/brands/82">Samsung Fax</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title="Ремонт принтеров и МФУ" id="basic-nav-dropdown4">
              <NavDropdown.Item href="/remont/23">Ремонт Canon</NavDropdown.Item>
              <NavDropdown.Item href="/remont/43">Ремонт HP</NavDropdown.Item>
              <NavDropdown.Item href="/remont/83">Ремонт Samsung</NavDropdown.Item>
              <NavDropdown.Item href="/remont/103">Ремонт Xerox</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="/prices">Цены</Nav.Link> */}
            <Nav.Link href="/contacts">Контакты</Nav.Link>
            <Nav.Link href="#">Информация</Nav.Link>
            {/* <Nav.Link href="#">Поиск</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
  )
}

export default NavBar
