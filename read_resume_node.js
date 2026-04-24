import fs from 'fs';
import PDFParser from "pdf2json";

const pdfParser = new PDFParser(this, 1);
pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log("---RESUME TEXT START---");
    console.log(pdfParser.getRawTextContent());
    console.log("---RESUME TEXT END---");
});
pdfParser.loadPDF('C:/Users/Anshb/Downloads/Ansh Bathija Website/Assets/Resume.pdf');
