// log the start of the script
console.log("start");

// set location of recognition models
const MODEL_URL = 'https://rawgit.com/justadudewhohacks/face-api.js/master/weights'

// identitfy video element from html
const video = document.getElementById("video")

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
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  })
  .then(
    (cameraStream) => {
      video.srcObject = cameraStream;
    }
  )
  
}

// execute and display results
video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  canvas.className = 'stages'
  var item = document.getElementById("centerem")
  item.replaceChild(canvas, item.firstChild)
  const displaySize = { width: canvas.width, height: canvas.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async() => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgba(0,0,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    //faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    //faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    //resizedDetections.forEach( detection => {
      //const box = detection.detection.box
      //const drawBox = new faceapi.draw.DrawBox(box, { label: Math.round(detection.age) + " year old " })
      //drawBox.draw(canvas)
    //})
  }, 200)
  })