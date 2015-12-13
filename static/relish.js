var count = 0;
var start = function(){
    if(count%2==0){
        console.log("started");
        $(".btn").html('STOP');
    } else{
        console.log("stopped");
        $(".btn").html("START");
    } count++;
};