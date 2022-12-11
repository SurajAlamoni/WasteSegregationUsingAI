import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UploadImageButton_ from "./components/UploadImageButton/UploadImageButton";
import WebcamCapture from "./components/Button/Button";
import { useState } from "react";
import { Result } from "./components/Result/Result";

function App() {
  const [finalResult, setFinalResult] = useState(null);
  return (
    <div>
      <Navbar />
      {/* <Button_ id="webcam" text="Webcam"></Button_> */}
      <center>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="mt-5 mb-5">Lets classify an image of waste!</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Or</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <WebcamCapture
                id="webcam"
                text="Webcam"
                finalState={setFinalResult}
              ></WebcamCapture>
            </Col>
            <Col className="verticalLine">
              <UploadImageButton_
                id="upload"
                text="Upload"
                finalState={setFinalResult}
              ></UploadImageButton_>
            </Col>
          </Row>
          <br />
          {finalResult && <Result materialType={finalResult}></Result>}
        </Container>
      </center>
    </div>
  );
}
export default App;
