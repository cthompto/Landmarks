//for empire.html
// log the start of the script
console.log("start");

// set location of recognition models
const MODEL_URL = 'https://rawgit.com/justadudewhohacks/face-api.js/master/weights'

// identitfy video element from html
const video = document.getElementById("video")
//const video2 = document.getElementById("video2")

// load models
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
  faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
  faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
]).then(startVideo)

// start video from webcam
function startVideo() {
  
  // old way
  /*
  navigator.getUserMedia({ video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
  */
  
  // new way
  console.log("models loaded");
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  })
  .then(
    (cameraStream) => {
      video.srcObject = cameraStream;
      //video2.srcObject = cameraStream;
    }
  )
  console.log("video started");
}

// execute and display results
video.addEventListener("play", () => {
  //vid 1
  const canvas = faceapi.createCanvasFromMedia(video)
  canvas.className = 'stages'
  var item = document.getElementById("centerem")
  item.replaceChild(canvas, item.firstChild)
  //vid 2
  //const canvas2 = faceapi.createCanvasFromMedia(video)
  //canvas2.className = 'stages'
  //var item2 = document.getElementById("centerem3")
  //item2.replaceChild(canvas2, item2.firstChild)
  //setting for both
  const displaySize = { width: canvas.width, height: canvas.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async() => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    //vid 1
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgba(0,0,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    //vid 2
    //canvas2.getContext("2d").clearRect(0, 0, canvas2.width, canvas2.height)
    //const ctx2 = canvas2.getContext('2d')
    //ctx2.fillStyle = 'rgba(0,0,0)'
    //ctx2.fillRect(0, 0, canvas2.width, canvas2.height)
    //faceapi.draw.drawFaceLandmarks(canvas2, resizedDetections)
    
  }, 200)
  })