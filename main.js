$(".message a").click(function () {
    $("form").animate({height: "toggle", opacity: "toggle"}, "slow");
  });

  // slider

  var i = 0;
  var images = [ ];
  var time = 1800;

  images[0] = 'images/image1.png';
  images[1] = 'images/image2.png';
  images[2] = 'images/image3.png';
  images[3] = 'images/image4.png';
  images[4] = 'images/image5.png';
  images[5] = 'images/image6.png';
  images[6] = 'images/image7.png';

  function changeImg(){
      document.slide.src = images[i];

      if(i < images.length - 1){
          i++;
      } else {
          i = 0;
      }

      setTimeout("changeImg()", time);
  }

  window.onload = changeImg;

//   side nav 


var menubtn = document.getElementById ("menubtn")
var navtwo = document.getElementById ("navtwo")

navtwo.style.right ="-250px"
menubtn.onclick = function(){
    if(navtwo.style.right == "-250px"){
        navtwo.style.right = "0"
    }
    else{
        navtwo.style.right = "-250px"
    }
}

