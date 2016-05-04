function startTimer(){
var countdown =  $("#countdown").countdown360({
    radius      : 60,
    seconds     : 2,
    fontColor   : '#FFFFFF',
    autostart   : false,
    onComplete : function() {window.location = "input.html"}
    <!--onComplete  : function() { console.log('done') } -->
});
countdown.start();
console.log('countdown360 ',countdown);
}
