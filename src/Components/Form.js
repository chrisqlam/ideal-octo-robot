import { useState } from "react";
import Container from "./Container";

const Form = (props) => {
  const [input, setInput] = useState("Hello");
  const [font, setFont] = useState("jost");
  const [size, setSize] = useState("4");

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
              value={font}
            >
              <option value="jost">Strathcona</option>
              <option value="texgyreheros">Rundle</option>
              <option value="broadsheet">Westmount</option>
              <option value="vonique">Highlevel</option>
              <option value="advent">Garneau</option>
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
              <option value="4">4"</option>
              <option value="8">8"</option>
              <option value="12">12"</option>
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
