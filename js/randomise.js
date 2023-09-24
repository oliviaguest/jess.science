$(function() {
  var fileNames = new Array();

  function placeImages() {
    console.log(fileNames);
    console.log(fileNames);
    console.log(fileNames);
    fileNames.sort(function() {return 0.5 - Math.random()});
    $( "#top-bird" ).attr("src", fileNames[0].innerText);
    $( "#bottom-bird" ).attr("src", fileNames[1].innerText);
  };

fileNames = $(".image-url");
console.log(fileNames[0].innerText);
placeImages();
});

