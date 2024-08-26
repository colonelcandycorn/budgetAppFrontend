import { FC } from "react";
import "../src/assets/css/main.css";
import MainNav from "./components/MainNav";
import BudgetEntry from "./components/BudgetEntry";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

//nav needs to be at top and fullscreen width
const App: FC = () => {
  return (
    <>
      <header className="m-0">
        <MainNav />
      </header>
      <main className={"container-fluid bg-light m-0 mt-5 p-0"}>
        <Container>
          <Row>
            <Col md={8} lg={6}>
              <BudgetEntry />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default App;
