$( document ).ready(function() {

	var id = [];
$( "#init .block" ).draggable({
  helper: "clone",
  connectToSortable: ".list",
  drop: function(event,ui){
	        
  }
});

$(".list").sortable({
  connectWith: ".list",
  receive: function(event,ui) {
	  var id = ui.item.attr("id");
	  console.log(id);
	  if(id == "box"){
		  $(newItem).attr({style: "content:url(images/box.jpg)" });	
	  //$(newItem).addClass("redColor");
	  
	  }
	  if(id == "triangle")
		  $(newItem).attr({style: "content:url(images/triangle.jpg)" });
		if(id == "circle")
		  $(newItem).attr({style: "content:url(images/circle.jpg)" });	  
    //  $(newItem).css("color","white"); 
	//$(newItem).attr("id","bb"); 
	//console.log($("input:radio[name='chickenEgg']:checked").val());
	
	var colorClass = $("input:radio[name='chickenEgg']:checked").val();
	console.log(colorClass);
	$(newItem).addClass(colorClass);
  },
  beforeStop: function (event, ui) { 
      newItem = ui.item;
	  
  }
});
$( "#click" ).click(function() {
	//alert("click");
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

/* $("#shapelist0 div").each(function(){
	
   shapelist0.push(this.id); 
});
$("#shapelist1 div").each(function(){
   shapelist1.push(this.id); 
});

$("#shapelist2 div").each(function(){
	if($(this).hasClass("colorRed"))
		myClass = "1"
	if($(this).hasClass("colorGreen"))
		myClass = "2"
	if($(this).hasClass("colorBlue"))
		myClass = "3"
	
   shapelist2.push(this.id+myClass); 
}); */


$('#output0').html("1:"+shapelist0.toString());
$('#output1').html("2:"+shapelist1.toString());
$('#output2').html("3:"+shapelist2.toString());

}
});//end of ready