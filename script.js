function get(id){
     document.getElementById(id);

}
cl("DEBUG------")
function cl(x){
    console.log(x)
}
cl("DEBUG------")

// get("login_button").addEventListener("click" , function(){
//     cl("DEBUG------");
//     get("login_button").setAttribute("class", "after_click_login_button")
// })
function translate_left(){
cl("DEBUG------")

    document.getElementById("login_button").setAttribute("class","after_click_login_button")
    document.getElementById("cancel_button").setAttribute("class","after_click_cancel_button")
    document.getElementById("logo").setAttribute("class","after_click_logo")
    
}
function translate_right(){
    cl("DEBUG------")
    document.getElementById("cancel_button").setAttribute("class","cancel_button")


    document.getElementById("login_button").setAttribute("class","login_button")
    document.getElementById("logo").setAttribute("class","logo")
}