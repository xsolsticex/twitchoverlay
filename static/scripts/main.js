const clock = document.getElementById("time");

setInterval(()=>{
    var time = new Date()
    var hour = String(time.getHours()).padStart(2,"0")
    var minutes = String(time.getMinutes()).padStart(2,"0")
    var seconds = String(time.getSeconds()).padStart(2,"0")

    let value = `${hour}:${minutes}:${seconds}`;
    clock.textContent = value
  
    


},1000)