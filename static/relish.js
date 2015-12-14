var count = 0;
var time = 100;
var score = 0;
var myVar;
var mole;
var start = function(){
    if(count%2==0){
        console.log("started");
        $(".btn").html('STOP');
        startTimer();
        clear();
        play();
        
    } else{
        console.log("stopped");
        $(".btn").html("START");
        stopTimer();
        clearInterval(mole);
        score = 0;
        $("#completion").html(score.toString()+"%");
        $("#completion").css({
            'width':'0%'
        });
    } count++;
};

function play() {
    console.log("playing");
    mole = setInterval(function(){
        var id = (Math.floor(Math.random()*(25))+1).toString();
        var id2 = (Math.floor(Math.random()*(25))+1).toString();
        while (id2 == id){
            id2 = (Math.floor(Math.random()*(25))+1).toString();
        }
        console.log(id);
        console.log(id2);
        $("#"+id).fadeIn();
        setTimeout(function(){
            $("#"+id).fadeOut();
        }, 1500);
        $("#"+id2).fadeIn();
        setTimeout(function(){
            $("#"+id2).fadeOut();
        }, 1500);
    }, 2000);
}
function clear() {
    var i = 1;
    while (i < 26) {
        $("#"+i.toString()).fadeOut();
        i++;
    }
}

var scoreUp = function(e) {
    score++;
    console.log((score/2).toString());
    $("#completion").html((score/2).toString()+"%");
    $("#completion").css({'width':((score/2).toString()+"%")});
    if((score/2) >= 100){
        console.log("win!");
        clearInterval(mole);
        clearInterval(myVar);
        $("#completion").html("100%");
        $("#completion").css({'width':"100%"});
    }
};

var startTimer = function(){
    myVar = setInterval(function(){
        time--;
        $("#timer").html(time.toString()+"%");
        $("#timer").css({
           'width':time.toString()+'%' 
        });
    }, 1000);
};

var stopTimer = function(){
    clearInterval(myVar);
    time = 100;
    $("#timer").html(time.toString()+"%");
    $("#timer").css({
        'width':time.toString()+'%'
    });
};