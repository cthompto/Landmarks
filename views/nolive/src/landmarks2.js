//for index.html
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
  faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
  faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL)
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
  // navigator.mediaDevices.getUserMedia({
  //   video: true,
  //   audio: false
  // })
  // .then(
  //   (cameraStream) => {
  //     video.srcObject = cameraStream;
  //   }
  // )
  console.log("video started");
}

// execute and display results
video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  canvas.className = 'cover';
  var item = document.getElementById("center")
  item.replaceChild(canvas, item.firstChild)
  const displaySize = { width: canvas.width/2, height: canvas.height/2 }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async() => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withAgeAndGender()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
    //faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    resizedDetections.forEach(result => {
        const { age, gender, genderProbability } = result
        new faceapi.draw.DrawTextField(
          [
            //`${faceapi.utils.round(age, 0)} years`,
            `${gender} (${faceapi.utils.round(genderProbability)})`
          ],
          result.detection.box.topRight
        ).draw(canvas)
      })
    //resizedDetections.forEach( detection => {
      //const box = detection.detection.box
      //const drawBox = new faceapi.draw.DrawBox(box, { label: Math.round(detection.age) + " year old " })
      //drawBox.draw(canvas)
    //})
  }, 200)

  })


  // test for extracting top emotion as text not using right now but too much of a pack rat to delete
  /*
  setInterval(async() =>{
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions()
    //const jsObj = detections[0].expressions
    var hap2 = Math.round(detections.happy*100)/100
    function sortByValue(detections){
    var sortedArray = [];
    for(var i in detections) {
      // Push each JSON Object entry in array by [value, key]
      sortedArray.push([detections[i], i]);
    }
    return sortedArray.sort();
    }
    var sortedbyValueJSONArray = sortByValue(detections);
    console.log(hap2)
    console.table(sortedbyValueJSONArray);

  }, 5000)
  */
  // wipe drawing, for use when "canvas.getContext..." isn't active in execute and display section
  /*
  setInterval(async() => {
     canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
     console.log("wipe")
  }, 15000)
  */
