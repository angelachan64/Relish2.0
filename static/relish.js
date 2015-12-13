var count = 0;
var start = function(){
    if(count%2==0){
        console.log("started");
        $(".btn").html('STOP');
        $("#timer").html("99%");
        $("#timer").css({
        'width':'99%'
        });
        var i = 1;
        while (i < 26) {
            $("#"+i.toString()).fadeOut();
            i++;
        }
        
    } else{
        console.log("stopped");
        $(".btn").html("START");
        $("#timer").html("100%");
        $("#timer").css({
        'width':'100%'
        });
    } count++;
};

