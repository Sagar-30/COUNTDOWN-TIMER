 var dest = new Date("August 30,2022 9:30:30").getTime();

     var x = setInterval(function() {

     var now = new Date().getTime();

     var diff = dest - now ;

     var days = Math.floor(diff/ (1000*24*60*60));

    var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60));

    var minute = Math.floor((diff % (1000*60*60)) / (1000*60));

    var second = Math.floor((diff % (1000*60)) / 1000);
    

    document.getElementById("demo").innerHTML = days +"d, " + hours + "hrs: " + minute + "m: " + second + "s "

    }, 1000 );