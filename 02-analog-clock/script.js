setInterval(()=>{
    t = new Date();
    hrs = t.getHours();
    mins = t.getMinutes();
    secs = t.getSeconds();

    hHand = 30*hrs + mins/2 + secs/120;
    mHand = 6*mins + secs/10;
    sHand = 6*secs;


    hourHand.style.transform = `rotate(${hHand}deg)`;
    minHand.style.transform = `rotate(${mHand}deg)`;
    secHand.style.transform = `rotate(${sHand}deg)`;
},1000); //executes the code every 1000ms
