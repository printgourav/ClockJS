function time_show(){
    let currentTime = new Date();
    let latestHrs = currentTime.getHours();
    let latestMin = currentTime.getMinutes();
    let latestSec = currentTime.getSeconds();
    let watch = document.getElementById('clock')
    watch.textContent = `${latestHrs}h:${latestMin}m:${latestSec}sec`;
    watch.style.fontSize = "100";
    watch.style.textAlign = "center";
    watch.style.color="white";
    watch.style.fontFamily = "system-ui";
    watch.style.outlineWidth = "thick";
    watch.style.outlineStyle = "dotted";
    watch.style.outlineColor = "black";
    watch.style.backgroundColor = "black";
    document.body.backgroundColor="black";
}
setInterval(time_show,1000);
