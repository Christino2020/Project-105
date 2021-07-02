Webcam.set({
    width: 350, 
    height: 300, 
    image_format: 'jpeg', 
    jpeg_quality: 90
})
camera = document.getElementById("cam")
Webcam.attach(camera)
function captureimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "JPEG_FINAL_IMG" src = "'+data_uri+'">'
    })
    
}
console.log("ml5version:", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tbQorKUvd/model.json', modelLoaded)
function modelLoaded(){
    console.log("Model is Loaded!")
}
function check(){
    img = document.getElementById("JPEG_FINAL_IMG")
    classifier.classify(img, gotResult)
}
function gotResult(error, results){
    if (error){
  console.error(error)

    
}
else{
console.log(results)
document.getElementById("Person_name").innerHTML = results[0].label
document.getElementById("Person_accuracy").innerHTML = results[0].confidence.toFixed(3) *100
}
}