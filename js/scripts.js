$(document).ready(function(){
    console.log("test");
    $("form#appointment").submit(function(event){
        console.log("submit");
        event.preventDefault();
        const name = $("#name").val();
        const service = $("#service").val();
        const date = $("#date").val();
        const time = $("input:radio[name=time]:checked").val();
        const comment = $("#comment").val();

        $(".name").text(name);
        $(".service").text(service);
        $(".date").text(date);
        $(".time").text(time);

        //alert("Thank you! We are waiting for " + name + " on " + date + " at " + time + " for " + service + " .");
        $("#confirmation").show();
    });
});