import Container from "./Container";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  Font,
  View,
} from "@react-pdf/renderer";
import broadsheet from "../fonts/broadsheet.ttf";
import jost from "../fonts/Jost-Regularing.ttf";
import texgyreheros from "../fonts/texgyreheros-regular.otf";

const Preview = (props) => {
  const MyDoc = () => {
    Font.register({
      family: "broadsheet",
      src: broadsheet,
    });
    Font.register({
      family: "jost",
      src: jost,
    });
    Font.register({
      family: "texgyreheros",
      src: texgyreheros,
    });
    return (
      <Document>
        <Page
          size="A0"
          orientation="landscape"
          style={{
            fontFamily: props.pdfFont,
            fontSize: props.size,
          }}
        >
          <View style={{ margin: "auto", lineHeight: "0" }}>
            <Text>{props.preview}</Text>
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <>
      <Container className="bg-white p-5 mb-5">
        <p className={`${props.font} text-[8rem]`}>{props.preview}</p>
      </Container>
      <Container>
        <p>{props.pdfFont}</p>
        <p>{props.size}</p>
      </Container>
      <PDFDownloadLink
        document={<MyDoc />}
        fileName="somename.pdf"
        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Preparing document..." : "Download"
        }
      </PDFDownloadLink>
    </>
  );
};

export default Preview;
