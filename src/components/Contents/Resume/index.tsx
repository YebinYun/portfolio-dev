import "./index.css";
import "react-pdf/dist/Page/TextLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import PdfFile from "./resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

console.log(pdfjs.version);
const ResumeComponent = () => {
  const onLoadSuccess = () => {
    console.log("PDF loaded successfully");
  };

  const onLoadError = (error: Error) => {
    console.error("Error loading PDF: ", error);
  };

  return (
    <div className="pdf-container">
      <Document
        file={PdfFile}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onLoadError}
      >
        <Page
          pageNumber={1}
          className="pdf-page"
          scale={1.5}
          renderAnnotationLayer={false}
        />
        <Page
          pageNumber={2}
          className="pdf-page"
          scale={1.5}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

export default ResumeComponent;
