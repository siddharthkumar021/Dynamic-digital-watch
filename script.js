let section = document.querySelector("section"),
icon = document.querySelector(".icon");

icon.onclick =()=>{
    section.classList.toggle("dark");
}


// creating a function and calling it in every seconds


setInterval(()=>{

    let date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();


    let d;
    d = hour < 12 ? "AM" : "PM" ;   // if hour is smaller 12 than  its value will be AM else its value will be PM
    hour = hour > 12 ? hour - 12 : hour;   // if hour value is greater than 12 than 12 will subtract (by doing this we will get value till 12)
    hour = hour == 0? hour = 12 : hour;    // if hour value is 0 than it value will be 12

// adding 0 to all tha value if they will less than 10



    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
     

    console.log(min);

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;

}, 1000)