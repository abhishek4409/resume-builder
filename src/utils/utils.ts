import html2canvas from 'html2canvas';
import moment from 'moment';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';

export const convertToSentenceCase = (str: string) => {
    const result = str?.replace(/([A-Z])/g, ' $1');
    const finalResult = result?.charAt(0)?.toUpperCase() + result?.slice(1);
    return finalResult || '';
};

export const downloadToPDF = (id, element, resumeTitle) => {
    html2canvas(element, {
        onclone: (documentClone) => {
            documentClone.querySelector(`#${id}`).style.boxShadow = 'none';
        },
    }).then((canvas) => {
        const fileName = `${resumeTitle}_${moment().format('MM-DD-YYYY')}`;

        const jspdf = new jsPDF({
            unit: 'px',
            hotfixes: ['px_scaling'],
            format: [canvas.width, canvas.height],
        });
        jspdf.addImage(canvas, 'png', 0, 0, canvas.width, canvas.height);
        jspdf.save(fileName);
    });
};
