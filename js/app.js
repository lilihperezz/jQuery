window.addEventListener("load",function(){
var videos = document.querySelectorAll("a"); 
    for(var i = 0; i<videos.length ; i++){
		 var videosLinks = videos[i];

var link = videosLinks.getAttribute("href");
var thumbnail = youtube.generateThumbnailUrl(link);
var imagen = document.createElement("img");
    imagen.setAttribute ( "src",thumbnail);
    videosLinks.appendChild(imagen);
    }
});
