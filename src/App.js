import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Container from "./Components/Container";
import Preview from "./Components/Preview";

function App() {
  document.body.classList.add("bg-neutral-800");
  const [previewInput, setPreviewInput] = useState("");
  const [previewFont, setPreviewFont] = useState("");
  const [previewSize, setPreviewSize] = useState("");
  const [previewPdfFont, setPreviewPdfFont] = useState("");
  const houseNumberCallback = (childData) => {
    setPreviewInput(childData.input);
    setPreviewFont(childData.font);
    setPreviewSize(childData.size);
    setPreviewPdfFont(childData.pdfFont);
    console.log(childData);
  };

  return (
    <>
      <Container className="mb-5">
        <Form handleHouseNumberCallback={houseNumberCallback}></Form>
        <Preview
          preview={previewInput}
          font={previewFont}
          size={previewSize}
          pdfFont={previewPdfFont}
        />
      </Container>
    </>
  );
}

export default App;

// Create Document Component
