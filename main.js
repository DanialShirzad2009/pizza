menu_list_array = ["Peperoni With Olives","Hawwian","Chicago","Deep Dish","Chesse Pizza"];
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>';
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>";
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'+'<img src="https://lh3.googleusercontent.com/proxy/RJwcc99f1ZeirFW-zpDwzCQL0EJR0N96W4bCWJ9JTPNlzMi7cFzI6iL6sUtn8a6xZgXHV4WOjnQRE47EkUrxldm7qi4oyn5fAK45kYUciMcp2LeNY3cX6AZn8pRlS6SuoN0--HlRtos6QIwaXDMp2PLxM6qF_t_jxp3X3g" style="width: 100px; height:80px;"/>'+menu_list_array[i]+'</div>';
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}