function clock() {
    const todayDate = new Date();
    let currentHours = todayDate.getHours();
    let currentMinutes = todayDate.getMinutes();
    let currentSeconds = todayDate.getSeconds();

    if(currentHours < 10){
        currentHours = "0" + currentHours;
    }

    if(currentMinutes < 10){
        currentMinutes = "0" + currentMinutes;
    }

    if(currentSeconds < 10){
        currentSeconds = "0" + currentSeconds;
    }
    document.querySelector('#hours').innerHTML = currentHours;
    document.querySelector('#minutes').innerHTML = ":" + currentMinutes;
    document.querySelector('#seconds').innerHTML= ":" + currentSeconds;
}

setInterval(clock, 1000);