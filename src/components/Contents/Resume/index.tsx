import "./index.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import PdfFile from "../../../assets/document/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeComponent = () => {
  return (
    <div className="resume">
      <button onClick={() => window.open(PdfFile, "_blank")}>Download</button>
      <Document file={PdfFile}>
        <Page className="pdf-page" pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumeComponent;
