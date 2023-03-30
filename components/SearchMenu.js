import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SearchMenu() {
  return (
    <>
    <div className="container d-none d-md-block">
      <div className="d-flex justify-content-between bd-highlight mb-3">
        <div className="p-2 bd-highlight logotext">OrgTechnik</div>
        <div className="p-2 bd-highlight d-flex flex-row topColor">
        <span className="navbar-text topColor p-2">г.Киев<br />(работаем на выезде)</span>
          <span className="navbar-text topColor p-2">г.Обухов<br />(Офис) ул.Киевская д.113А</span>
          <span className="navbar-text topColor p-2">Т. (067) 375 33 43<br />&nbsp;</span>
          <span className="navbar-text topColor p-2">График работы<br />Пн-Пт 09.00-18.00<br />Сб(Обухов)10.00-17.00</span>
        </div>
      </div>
    </div>
    <div className='container'>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="m-0 p-0">
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                OrgTechnik
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='searchBody'>
                <Form className="search">
                  <Form.Control
                    type="search"
                    placeholder="Поиск"
                    className="me-2"
                    aria-label="Search"
                  />
                  {/* <Button variant="outline-success">Поиск</Button> */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>

    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-2  shadow text-center topBottons btn btn-outline-light hover-overlay'><a className="noUnder" href="#" >ЗАПРАВКА И РЕМОНТ КАРТРИДЖЕЙ</a></div>
        <div className='col-lg-2  shadow text-center topBottons btn btn-outline-light hover-overlay'><a className="noUnder" href="#" >РЕМОНТ ПРИНТЕРОВ И МФУ</a></div>
        <div className='col-lg-2  shadow text-center topBottons btn btn-outline-light hover-overlay'><a className="noUnder" href="#" >ПРОШИВКА ПРИНТЕРОВ И МФУ</a></div>
        <div className='col-lg-2  shadow text-center topBottons btn btn-outline-light hover-overlay pt-3'><a className="noUnder" href="#" >НОВИНКИ</a></div>
        <div className='col-lg-2  shadow text-center topBottons btn btn-outline-light hover-overlay'><a className="noUnder" href="#" >ПОЛЕЗНАЯ ИНФОРМАЦИЯ F.A.Q.</a></div>
      </div>
    </div>
    </>
  );
}

export default SearchMenu