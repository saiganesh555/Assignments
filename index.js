function start(){
        var day = new Date();
        var hr = day.getHours();
if (hr == 5 & hr < 10) {
 document.getElementById("msg").innerHTML="Good morning! still your going! ";
}
else if ((hr == 15) || (hr == 16) || (hr == 13)) {
 document.getElementById("msg").innerHTML="Good Afternoon!";
}
else if ((hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22)) {
 document.getElementById("msg").innerHTML="Good Evening! Welcome to prime time on the web!";
}
else if (hr == 23) {
 document.getElementById("msg").innerHTML="It's almost midnight...Aren't you sleepy yet?";
}
else if (hr==0) {
 document.getElementById("msg").innerHTML="It's midnight... do you ever sleep?";
}


}