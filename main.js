let btn= document.getElementById("hundred")


function clickbutton(target){
    let displey=document.getElementById("displey")
    let target_value=target.innerHTML;
    
    if(target_value=="AC"){        //AC押されたとき０と表示
        displey.innerHTML="0"
        
    }else if(target_value=="="){　　　　//=押されたとき結果を表示
        displey.innerHTML=eval(displey.innerHTML);
    
    
 }else {                           //それ意外が押された時
        
        if(target_value == "+" && displey.innerHTML.slice(-1) === "+"){
            return;
        }else if(target_value == "+" && displey.innerHTML.slice(-1) === "-"){
            return;
        }else if(target_value == "+" && displey.innerHTML.slice(-1) === "*"){
            return;
        }else if(target_value == "+" && displey.innerHTML.slice(-1) === "/"){
            return;
            

        }else if(target_value == "-" && displey.innerHTML.slice(-1) === "+"){
            return;
        }else if(target_value == "-" && displey.innerHTML.slice(-1) === "-"){
            return;
        }else if(target_value == "-" && displey.innerHTML.slice(-1) === "*"){
            return;
        }else if(target_value == "-" && displey.innerHTML.slice(-1) === "/"){
            return;

        }else if(target_value == "*" && displey.innerHTML.slice(-1) === "+"){
            return;
        }else if(target_value == "*" && displey.innerHTML.slice(-1) === "-"){
            return;
        }else if(target_value == "*" && displey.innerHTML.slice(-1) === "*"){
            return;
        }else if(target_value == "*" && displey.innerHTML.slice(-1) === "/"){
            return;

        }else if(target_value == "/" && displey.innerHTML.slice(-1) === "+"){
            return;
        }else if(target_value == "/" && displey.innerHTML.slice(-1) === "-"){
            return;
        }else if(target_value == "/" && displey.innerHTML.slice(-1) === "*"){
            return;
        }else if(target_value == "/" && displey.innerHTML.slice(-1) === "/"){
            return;

        }else{
            displey.innerHTML = displey.innerHTML + target_value
        }
    }}