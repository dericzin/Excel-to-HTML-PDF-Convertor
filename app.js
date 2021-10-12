let Reader = require("./Reader");
let Writer = require("./Writer")
let Processor = require("./Processor")
let Table = require("./Table")
let HtmlParser= require("./HTMLParser")
let PDFWriter = require("./PDFWriter")


let leitor = new Reader();
let escritor = new Writer();




async function main(){
   let dados = await leitor.Read("./users.csv");


  let processedData =  Processor.Process(dados);

  let usuarios = new Table(processedData);

  let html = await HtmlParser.Parse(usuarios);


  escritor.Write(Date.now() + ".html", html)
  PDFWriter.WritePDF(Date.now() + ".PDF", html)

  

}

main();