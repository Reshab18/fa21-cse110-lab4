function getTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var intervalID = setInterval(getTime, 1000); //1second =1000 miliseconds
