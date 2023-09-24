$(function() {

  var ImagesDir = "/images/birds/";
  function openFile(file) {
    var extension = file.substr( (file.lastIndexOf('.') +1) );
    switch(extension) {
        case 'png':
            return true;
        default:
            return false;
    }
  };

  function placeImages() {
    console.log(fileNames);
    console.log(fileNames);
    console.log(fileNames);
    fileNames.sort(function() {return 0.5 - Math.random()});
    console.log(ImagesDir+fileNames[0]);
    $( "#top-bird" ).attr("src", ImagesDir+fileNames[0]);
    $( "#bottom-bird" ).attr("src", ImagesDir+fileNames[1]);


  };

  console.log( "ready!" );
  var fileNames = new Array();

  function getFiles() {
      // return new Promise((resolve) => {

        $.ajax({
        url: ImagesDir,
        success: function(data){
          $(data).find("td > a").each(function(){
              if(openFile($(this).attr("href"))){
                  fileNames.push($(this).attr("href"));
              }           
          });
        }
      }).done(function( data ) {
        if ( console && console.log ) {
          placeImages();
        }
    });
    // });
  };


    // console.log(fileNames);

    // var randomItem = fileNames[Math.floor(Math.random()*fileNames.length)]
    // fileNames = fileNames.sort(function() {return 0.5 - Math.random()})
    // console.log(fileNames);

    // console.log(randomItem);

    // console.log(fileNames.length);

    // function getFiles() {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('resolved');
    //     }, 2000);
    //   });
    // }
    
    async function asyncCall() {
      console.log('calling');
      const fileNames = await getFiles();
      // console.log(fileNames.length);



      // Expected output: "resolved"
    }
    
    asyncCall();



});

