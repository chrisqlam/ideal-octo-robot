import { useState } from "react";
import Container from "./Container";

const Form = (props) => {
  const [input, setInput] = useState("Hello");
  const [font, setFont] = useState("font-jost");
  const [size, setSize] = useState("150mm");

  const typeHandler = (event) => {
    setInput(event.target.value);
  };

  const fontHandler = (event) => {
    setFont(event.target.value);
  };

  const sizeHandler = (event) => {
    setSize(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const previewData = {
      input: input,
      font: font,
      size: size,
      pdfFont: font.replace("font-", ""),
    };
    props.handleHouseNumberCallback(previewData);
  };

  return (
    <Container className="mx-auto mb-5">
      <form>
        <div>
          <div>
            <div>
              <label className="text-white font-bold">Content</label>
            </div>
            <input
              className="rounded-md py-1 px-4 mb-5"
              onChange={typeHandler}
              value={input}
            />
          </div>
          <div>
            <div>
              <label className="text-white font-bold">Font</label>
            </div>
            <select
              className="rounded-md py-1 px-4 mb-5"
              onChange={fontHandler}
            >
              <option value="font-jost">Strathcona</option>
              <option value="font-texgyreheros">Rundle</option>
              <option value="font-broadsheet">Westmount</option>
              <option value="font-vonique">Highlevel</option>
              <option value="font-advent">Garneau</option>
            </select>
          </div>
          <div>
            <div>
              <label className="text-white font-bold">Size</label>
            </div>
            <select
              className="rounded-md py-1 px-4 mb-5"
              onChange={sizeHandler}
              value={size}
            >
              <option value="150mm">150mm</option>
              <option value="200mm">200mm</option>
              <option value="250mm">250mm</option>
              <option value="300mm">300mm</option>
              <option value="400mm">400mm</option>
            </select>
          </div>
        </div>
        <button
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={submitHandler}
        >
          Create
        </button>
      </form>
    </Container>
  );
};

export default Form;
