//for machine.html
// log the start of the script
console.log("start");

// set location of recognition models
const MODEL_URL =
  "https://rawgit.com/justadudewhohacks/face-api.js/master/weights";

// identitfy img element from html
const img = document.getElementById("9panel");
// const img2 = document.getElementById("9panel4")

// identitfy video element from html
const video = document.getElementById("mechmech");

// load models
window.onload = function() {
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL)
  ]).then(startRead);
};

async function startRead() {
  console.log("models loaded");
  const canvas = faceapi.createCanvasFromMedia(img);
  var item = document.getElementById("centertest");
  item.replaceChild(canvas, item.firstChild);
  const displaySize = { width: img.width, height: img.height };
  faceapi.matchDimensions(canvas, displaySize);
  //setInterval(async() => {
  const detections = await faceapi
    .detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()
    .withAgeAndGender();
  const resizedDetections = faceapi.resizeResults(detections, displaySize);
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  faceapi.draw.drawDetections(canvas, resizedDetections);
  faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
  faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  resizedDetections.forEach(result => {
    const { age, gender, genderProbability } = result;
    new faceapi.draw.DrawTextField(
      [`age (${faceapi.utils.round(age, 0)})`],
      result.detection.box.topRight
    ).draw(canvas);
    new faceapi.draw.DrawTextField(
      [`${gender} (${faceapi.utils.round(genderProbability)})`],
      result.detection.box.bottomRight
    ).draw(canvas);
  });

  // execute and display results
  const canvas2 = faceapi.createCanvasFromMedia(video);
  canvas2.className = "stages";
  var item2 = document.getElementById("centertest2");
  item2.replaceChild(canvas2, item2.firstChild);
  const displaySize2 = { width: canvas2.width, height: canvas2.height };
  faceapi.matchDimensions(canvas2, displaySize2);
  setInterval(async () => {
    const detections2 = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withAgeAndGender();
    const resizedDetections2 = faceapi.resizeResults(detections2, displaySize2);
    canvas2.getContext("2d").clearRect(0, 0, canvas2.width, canvas2.height);
    //faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas2, resizedDetections2);
    faceapi.draw.drawFaceExpressions(canvas2, resizedDetections2);
    resizedDetections2.forEach(result => {
      const { age, gender, genderProbability } = result;
      new faceapi.draw.DrawTextField(
        [
          //`${faceapi.utils.round(age, 0)} years`,
          `${gender} (${faceapi.utils.round(genderProbability)})`
        ],
        result.detection.box.topRight
      ).draw(canvas2);
    });
  }, 200);

}
