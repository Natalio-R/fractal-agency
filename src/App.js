import "./App.css";
import { Container, Button } from "react-bootstrap";
import { Menu, Footer } from "./components";

function App() {
  return (
    <Container fluid>
      <Menu />
      <Footer />
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </Container>
  );
}

export default App;
