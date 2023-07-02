const PDFDocument = require('pdfkit');
const fs = require('fs');

function buildPDF(res) {
    var doc = new PDFDocument();

var writeStream = fs.createWriteStream('filename3.pdf');
doc.pipe(writeStream);
doc.table
//line to the middle

var tableOptions = {
    width: 100, // other units should be allowed.
                      // If not specified then (page width - left page margin - right page margin)
    columns: [
        {width: 20}, // 20 %. other possibilities for widthare '20pt', '14px', '10cm', '1in'
        {}, // auto calculated column width if space remained
        {}
    ]
    //other options
};
doc.table(tableOptions, function(){
    doc.tableHeaderRow(); // the same as tableRow but may auto repeat header on page break
    doc.tableRow(rowOptions); // internal code should allow the page to break
    doc.tableRow(rowOptions, function(){
        doc.tableCell(cellOptions); 
    });
});

doc.end();

      
}

function textInRowFirst(doc, text, heigth) {
    doc.y = heigth;
    doc.x = 30;
    doc.fillColor('black')
    doc.text(text, {
      paragraphGap: 5,
      indent: 5,
      align: 'justify',
      columns: 1,
    });
    return doc
  }
  
function row(doc, heigth) {
    doc.lineJoin('miter')
      .rect(30, heigth, 500, 20)
      .stroke()
    return doc
  }

module.exports = { buildPDF };