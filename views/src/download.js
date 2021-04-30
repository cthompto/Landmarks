//Create variable for download function
// const download = document.getElementById("download");

// const drawingBoard = document.getElementById("drawingBoard");

// download.addEventListener("click", function(e) {
//   var link = document.createElement("a");
//   link.download = "rote.png";
//   link.href = drawingBoard.toDataURL();
//   link.click();
//   link.delete;
// });

// function download() {
//   console.log("button clicked");
//   var download = document.getElementById("download");
//   var image = document
//     .getElementById("drawingBoard")
//     .toDataURL("image/png")
//     .replace("image/png", "image/octet-stream");
//   download.setAttribute("href", image);
//   //download.setAttribute("download","archive.png");
// }

function download() {
  console.log("button clicked");
  var canvas = document.getElementById("drawingBoard");
  var image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "rote.png";
  link.href = image;
  link.click();
}

var download_img = function(el) {
  var canvas = document.getElementById("drawingBoard");
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};