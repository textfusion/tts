
// const { text } = require("body-parser");
const speech = new SpeechSynthesisUtterance();
speech.lang = "en";
// var flag = 0;



// function setFlag(){
//   flag = 1;
// }


// function diverge(){
//   alert("in diverge fun "  + flag);
//   if(flag == 1){
//     alert("going to pdf");
//     pdfSyn();
//   }else{
//     alert("going to text");
//     textSyn();
//   }
// }


function textSyn(){
        speech.text = document.getElementById("textToSyn").value;
        console.log(document.getElementById("textToSyn").value);
        window.speechSynthesis.speak(speech);
}




function pdfSyn() {
  let text;
  // Get the selected file from the input element
  const selectedFile = document.getElementById("psdFile").files[0];
  
  // Create a new FileReader to read the selected file
  const reader = new FileReader();
  
  // Set the onload function to handle the file reading
  reader.onload = function() {
    // Load the PDF data into pdf.js
    pdfjsLib.getDocument({ data: new Uint8Array(reader.result) })
      .promise.then(function(pdf) {
        // Get the first page of the PDF
        pdf.getPage(1).then(function(page) {
          // Extract the text content of the page
          page.getTextContent().then(function(textContent) {
            // Concatenate the text items into a single string
             text = textContent.items.map(function(item) {
              return item.str;
            }).join('');
            
            // Output the text to the console (replace with your desired output method)
            console.log(text);
            speech.text = text;
            window.speechSynthesis.speak(speech);
            // document.getElementById("textEntered").value = text;
            // start();
          });
        });
      });
  };
  
  // Read the selected file as an ArrayBuffer
  reader.readAsArrayBuffer(selectedFile);
}




// const speech = new SpeechSynthesisUtterance();
// speech.lang = "en";
// let flag = 0;

// // const { text } = require("body-parser");



// function parsePDF() {
//   let text;
//   // Get the selected file from the input element
//   const selectedFile = document.getElementById('pdfFile').files[0];
  
//   // Create a new FileReader to read the selected file
//   const reader = new FileReader();
  
//   // Set the onload function to handle the file reading
//   reader.onload = function() {
//     // Load the PDF data into pdf.js
//     pdfjsLib.getDocument({ data: new Uint8Array(reader.result) })
//       .promise.then(function(pdf) {
//         // Get the first page of the PDF
//         pdf.getPage(1).then(function(page) {
//           // Extract the text content of the page
//           page.getTextContent().then(function(textContent) {
//             // Concatenate the text items into a single string
//              text = textContent.items.map(function(item) {
//               return item.str;
//             }).join('');
            
//             // Output the text to the console (replace with your desired output method)
//             console.log(text);
//             document.getElementById("textEntered").value = text;
//             start();
//           });
//         });
//       });
//   };
  
//   // Read the selected file as an ArrayBuffer
//   reader.readAsArrayBuffer(selectedFile);
// }

// function start(){
//     speech.text = document.getElementById("textEntered").value;
//     window.speechSynthesis.speak(speech);
// }

// function set(){
//   flag = 1;
// }

// function play(){
//   if(flag===1){
//     parsePDF();
//   }else{
//     start();
//   }
// }
