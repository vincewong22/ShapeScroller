$(document).ready(function () {
//Set all elements with init id with block class drag enabled
    var id = [];
    var level_shapes = [[], [], []], user_shapes = [[], [], []];

    $("#init .block").draggable({
        helper: "clone",
        connectToSortable: ".list",
        drop: function (event, ui) {

        }
    });

//Connect empty sorted lists with draggable elements
    $(".list").sortable({
        connectWith: ".list",
        receive: function (event, ui) {
            var id = ui.item.attr("id");
            console.log(id);
            if (id == "box")
                $(newItem).attr({style: "content:url(images/box.jpg)"});
            if (id == "triangle")
                $(newItem).attr({style: "content:url(images/triangle.jpg)"});
            if (id == "circle")
                $(newItem).attr({style: "content:url(images/circle.jpg)"});
            //check to see if your dragging out a new shape, if so, then give it a color, if check was not here
            //old shapes would have color overridden
            if (($(this).hasClass("colorBlue") || $(this).hasClass("colorRed") || $(this).hasClass("colorGreen")))
                var colorClass = $("input:radio[name='color']:checked").val();
            $(newItem).addClass(colorClass);
        },
        //out: function(event, ui){
        //    ui.item.remove();
        //},
        //over: function(event, ui){
        //    ui.item.remove();
        //},
        beforeStop: function (event, ui) {
            newItem = ui.item;
        }
    });
    $( "#droppable" ).droppable({
        over: function( event, ui ) {
            ui.item.remove();
        }
    });
//button that checks the
    $("#start_click").click(function () {
        level_shapes = getListContent();
        document.cookie="level="+level_shapes.toString();
        //var json_level_shapes = JSON.stringify(arr);
        //createCookie('mycookie', json_str);
        //console.log("hello");
        //console.log(level_shapes[0].toString());
        //console.log(level_shapes[1].toString());
        //console.log(level_shapes[2].toString());
        window.location.href = "input.html";
    });
    $("#input_click").click(function () {
        user_shapes = getListContent();
        //alert(document.cookie);
        var str_me = document.cookie;
        if(("level="+user_shapes.toString()) == str_me)
            alert("match");
        else
            alert(str_me+" no match!");

        updateDebug();
        // window.location.href = "input.html";
    });

    function updateDebug() {
        $('#output3').html("1:" + user_shapes[0].toString());
        $('#output4').html("2:" + user_shapes[1].toString());
        $('#output5').html("3:" + user_shapes[2].toString());
        $('#output0').html("1:" + level_shapes[0].toString());
        $('#output1').html("2:" + level_shapes[1].toString());
        $('#output2').html("3:" + level_shapes[2].toString());

        console.log(user_shapes[0].toString());
        console.log(user_shapes[1].toString());
        console.log(user_shapes[2].toString());
    }


//gets the shapes from the 3 lists
    function getListContent() {
        var shapelist0 = [], shapelist1 = [], shapelist2 = [];
        var shapeArray = [shapelist0, shapelist1, shapelist2];
        for (i = 0; i < shapeArray.length; i++) {
            var target = "#shapelist" + i + " div";
            $(target).each(function () {
                if ($(this).hasClass("colorRed"))
                    myClass = "_red"
                if ($(this).hasClass("colorGreen"))
                    myClass = "_green"
                if ($(this).hasClass("colorBlue"))
                    myClass = "_blue"
                shapeArray[i].push(this.id + myClass);

            });

        }

//debug strings
//        $('#output0').html("1:"+shapeArray.toString());
//        $('#output1').html("2:"+shapelist1.toString());
//        $('#output2').html("3:"+shapelist2.toString());
        return shapeArray;
    }
});//end of ready