menu_list_array = ["Cheesy Corn Pizza","Chicken Tandoori Pizza","Mexicon Pizza","Pareer Tikka Pizza","Veg Supreme Pizza","Veg Cheese Pizza"];
function getmenu(){
    var htmldata;
    htmldata="<o1 class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.lenght;i){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '/li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").Value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata=htmldata+"<div class="card">"
    }
} 