// log the start of the script
console.log("start");

// set location of recognition models
const MODEL_URL = 'https://rawgit.com/justadudewhohacks/face-api.js/master/weights'

// identitfy video element from html
const video = document.getElementById("video")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")

// load models
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
  faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
  faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
  faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
  faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL)
]).then(startVideo)

//start videos
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
      video2.srcObject = cameraStream;
      video3.srcObject = cameraStream; 
    }
  )
}

// execute and display results
video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  var item = document.getElementById("center")
  item.replaceChild(canvas, item.firstChild)
  const canvas2 = faceapi.createCanvasFromMedia(video)
  var item2 = document.getElementById("center2")
  item2.replaceChild(canvas2, item2.firstChild)
  const canvas3 = faceapi.createCanvasFromMedia(video)
  var item3 = document.getElementById("center3")
  item3.replaceChild(canvas3, item3.firstChild)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  faceapi.matchDimensions(canvas2, displaySize)
  faceapi.matchDimensions(canvas3, displaySize)
  //drawing loop, executed every ~1 second. Liking the choppy/laggy effect of that speed.
  setInterval(async() => {
    //excute and resize face detections
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    //fill each video with the selected color
    //video 1
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgba(0,0,255,0.175)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    //video 2
    const ctx2 = canvas2.getContext('2d')
    ctx2.fillStyle = 'rgba(0,255,255,0.225)'
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height)
    //video 3
    const ctx3 = canvas3.getContext('2d')
    ctx3.fillStyle = 'rgba(20,20,20,0.225)'
    ctx3.fillRect(0, 0, canvas3.width, canvas3.height)
    //add the detection results on top of each video screen
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas2, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas3, resizedDetections)
  }, 1000)

  //reset
  setInterval(async() => {
     canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
     canvas2.getContext("2d").clearRect(0, 0, canvas2.width, canvas2.height)
     canvas3.getContext("2d").clearRect(0, 0, canvas3.width, canvas3.height)
     console.log("wipe")
  }, 65000)
})