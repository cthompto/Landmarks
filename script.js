/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const MODEL_URL = 'https://rawgit.com/justadudewhohacks/face-api.js/master/weights'

const video = document.getElementById("video")

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
  faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
  faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
  faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia({ video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
)
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  var item = document.getElementById("center")
  item.replaceChild(canvas, item.firstChild)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async() => {
     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
     const resizedDetections = faceapi.resizeResults(detections, displaySize)

     //faceapi.draw.drawDetections(canvas, resizedDetections)
     faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
     //faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
   }, 400)
   setInterval(async() => {
     canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
   }, 15000)
})