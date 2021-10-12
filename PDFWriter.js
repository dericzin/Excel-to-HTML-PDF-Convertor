var pdf = require("html-pdf");
var util = require("util");
 
class PdfWriter {
    static async WritePDF(filename, html) {

 
        var pdfCreate = (filename, html) => new Promise( (resolve, reject) => {
            pdf.create(html, {}).toFile(filename, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve (res);
            });
        });
        try {
            return await pdfCreate(filename, html);
        } catch (error) {
            return undefined;
        }
    }
}
 
module.exports = PdfWriter;