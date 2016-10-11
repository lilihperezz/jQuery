var cargar = function() {
	var $enlaces = $("a");
	$enlaces.each(iterar);
};

var iterar = function(index, element) {
	var $enlace = $(element);
	var linkVideo = $enlace.attr("href");
	var linkImagen = youtube.generateThumbnailUrl(linkVideo);
	var $img = $("<img>");
	$img.attr("src", linkImagen);
	$enlace.append($img);
};

$(document).ready(cargar);