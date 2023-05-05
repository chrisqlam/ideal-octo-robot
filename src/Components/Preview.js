import Container from "./Container";

const Preview = (props) => {
  return (
    <Container className="bg-white p-5">
      <p className={`font-${props.font}`}>{props.preview}</p>
    </Container>
  );
};

export default Preview;
