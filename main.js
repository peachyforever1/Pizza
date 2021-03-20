menu_list_array=["Tandori Pizza","Veg Supreme Pizza","Paneer Tika Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</i>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}