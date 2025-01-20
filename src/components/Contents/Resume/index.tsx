import "./index.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import PdfFile from "../../../assets/document/resume.pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeComponent = () => {
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: pdfjs.PDFDocumentProxy) => {
    setNumPages(numPages);
  };

  return (
    <div className="resume">
      <button onClick={() => window.open(PdfFile, "_blank")}>Download</button>
      <Document file={PdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            className="pdf-page"
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ))}
      </Document>
    </div>
  );
};

export default ResumeComponent;
