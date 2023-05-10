import { saveAs } from "file-saver";
import { pdf, Page, Text, View, Document } from "@react-pdf/renderer";

const generatePdfDocument = async (fileName, pdfDocumentComponent) => {
  const blob = await pdf(pdfDocumentComponent).toBlob();
  saveAs(blob, fileName);
};

const MyDocument = () => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);

const DownloadButton = () => (
  <button
    type="button"
    onClick={() => {
      generatePdfDocument("MyDocument.pdf", <MyDocument />);
    }}
  >
    Download PDF
  </button>
);

export default DownloadButton;
