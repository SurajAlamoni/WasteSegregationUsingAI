import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Navbar/Navbar";
import Button_ from "./components/Button/Button";
// import ModelPrediction from "./components/ModelPrediction/ModelPrediction";
import UploadImageButton_ from "./components/UploadImageButton/UploadImageButton";
import WebcamCapture from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Button_ id="webcam" text="Webcam"></Button_> */}
      <WebcamCapture id="webcam" text="Webcam"></WebcamCapture>
      <UploadImageButton_ id="upload" text="Upload"></UploadImageButton_>
    </div>
  );
}
export default App;
