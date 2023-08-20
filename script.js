function toggleImage(){
    var img = document.getElementById('tick');
    if (img.src.match('Check_ring_light')){
        img.src = "Images/Check_fill.png";
    }
    else{
        img.src = "Images/Check_ring_light.png";
    }
}