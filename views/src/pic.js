window.onload = choosePic;

var myPix = new Array("assets/rote1.jpg","assets/rote2.jpg","assets/rote3.jpg","assets/rote4.jpg","assets/rote5.jpg","assets/rote6.jpg","assets/rote7.jpg","assets/rote8.jpg","assets/rote9.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("bgImg").src = myPix[randomNum];
   }
