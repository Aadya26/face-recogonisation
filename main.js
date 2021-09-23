Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function Image()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= '<img id="data" src="'+data_uri+'">';
    });
}