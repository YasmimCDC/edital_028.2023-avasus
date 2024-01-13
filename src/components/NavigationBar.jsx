import { Navbar, Container, Nav, Button, Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavigationBar.sass';
import '../styles/styleGuide/Typography.sass';
import '../styles/styleGuide/Buttons.sass';

export default function NavigationBar({ activePage }) {
  return (
    <Navbar className="nav-bar" sticky='top' bg="white" expand="lg">
      <Container className="navBar-content" fluid>
        <Navbar.Brand href="/">
          <img
            width={'90%'}
            src={require(`../assets/logos/logo_avasus.svg`).default}
            alt="Logo AvaSUS"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav
            className="navigation-links"
            navbarScroll
          >
            <Nav.Link className={`nav-bar-itens ${activePage === '/' ? 'active-menu' : ''}`}
              href="/">Início</Nav.Link>
            <Nav.Link className="nav-bar-itens" disabled href="#">Sobre Nós</Nav.Link>
            <Nav.Link className={`nav-bar-itens ${activePage === '/courses' ? 'active-menu' : ''}`}
              href="courses">Cursos</Nav.Link>
            <Nav.Link className={`nav-bar-itens ${activePage === '/partners' ? 'active-menu' : ''}`}
              href="partners">Parceiros</Nav.Link>
            <Nav.Link className={`nav-bar-itens ${activePage === '/transparency' ? 'active-menu' : ''}`}
              href="transparency">Transparência</Nav.Link>
            <Nav.Link className="nav-bar-itens" disabled href="#">Contato</Nav.Link>
          </Nav>
          <div id="navbarScroll" className="navbar-collapse">
              <InputGroup controlid="search">
              <InputGroup.Text className="prefix-icon">
                <BsSearch />
              </InputGroup.Text>
              <Form.Control
                type="search"
                className="search-bar"
                placeholder="Busque por um assunto..."
                aria-label="Search"
              />
            </InputGroup>
            <Button id="login-button" className="primary-button">Entrar</Button>
            <Button className="secondary-button">Cadastrar</Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}