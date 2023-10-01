$(function() {
  var fileNames = new Array();

  function placeImages() {
    console.log(fileNames);
    console.log(fileNames);
    console.log(fileNames);
    fileNames.sort(function() {return 0.5 - Math.random()});
    $("#top-bird").attr("src", fileNames[0].innerText);
    $("#top-bird").attr("alt", fileNames[0].innerText.split('/').pop().split('.')[0]);
    $("#bottom-bird").attr("src", fileNames[1].innerText);
    $("#bottom-bird").attr("alt", fileNames[1].innerText.split('/').pop().split('.')[0]);
  };
fileNames = $(".image-url");
placeImages();
});

