import "./index.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import PdfFile from "./resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeComponent = () => {
  const pages = [1, 2];

  return (
    <div className="resume">
      <button onClick={() => window.open(PdfFile, "_blank")}>Download</button>
      <Document file={PdfFile}>
        {pages.map((page) => (
          <Page className="pdf-page" key={page} pageNumber={page} />
        ))}
      </Document>
    </div>
  );
};

export default ResumeComponent;
