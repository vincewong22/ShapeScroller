$( document ).ready(function() {

//Set all elements with init id with block class drag enabled
	var id = [];
$( "#init .block" ).draggable({
  helper: "clone",
  connectToSortable: ".list",
  drop: function(event,ui){
	        
  }
});

//Connect empty sorted lists with draggable elements
$(".list").sortable({
  connectWith: ".list",
  receive: function(event,ui) {
	  var id = ui.item.attr("id");
	  console.log(id);
	  if(id == "box")
		  $(newItem).attr({style: "content:url(images/box.jpg)" });	
	  if(id == "triangle")
		  $(newItem).attr({style: "content:url(images/triangle.jpg)" });
	  if(id == "circle")
		  $(newItem).attr({style: "content:url(images/circle.jpg)" });	  
	 //so existing game pieces colors don't get overridden
    if(($(this).hasClass("colorBlue") ||$(this).hasClass("colorRed")||$(this).hasClass("colorGreen")))
		var colorClass = $("input:radio[name='color']:checked").val();
	console.log(colorClass);
	$(newItem).addClass(colorClass);
  },
  beforeStop: function (event, ui) { 
      newItem = ui.item;
	  
  }
});
$( "#click" ).click(function() {
  launch();
});


function launch(){
var shapelist0 = [],shapelist1 = [],shapelist2 = [];
var shapeArray =[shapelist0,shapelist1,shapelist2];
for(i=0; i < 3;i++){
	var target = "#shapelist"+i+" div";
	console.log(target);
	$(target).each(function(){
		if($(this).hasClass("colorRed"))
			myClass = "_red"
		if($(this).hasClass("colorGreen"))
			myClass = "_green"
		if($(this).hasClass("colorBlue"))
			myClass = "_blue"
   shapeArray[i].push(this.id+myClass); 
});
}


$('#output0').html("1:"+shapelist0.toString());
$('#output1').html("2:"+shapelist1.toString());
$('#output2').html("3:"+shapelist2.toString());

}
});//end of ready