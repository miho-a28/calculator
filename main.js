 let displey=document.getElementById("displey")
 
 
function clickbutton_clear(target){　　　   //AC押すと０表示
    displey.innerHTML="0"
}


function clickbutton_result(target){     　//＝押すと結果表示
　　displey.innerHTML=eval(displey.innerHTML);
}

function clickbutton_num(target){       　//０〜９の数字入力
    let target_value=target.innerHTML
    if(displey.innerHTML=="0"){
        displey.innerHTML=target_value
    }else{
         displey.innerHTML+=target_value
    }
}

function clickbutton_hum(target){         //00を押した時
    let target_value=target.innerHTML
    if(displey.innerHTML=="0"){          //もし０が入ってたら０を表示
      displey.innerHTML="0"
    }else{
      displey.innerHTML+=target_value　　//もしそれ以外なら表示に＋00
    }
}

function clickbutton_point(target){ 　    //小数点表示
    let target_value=target.innerHTML
    if(displey.innerHTML=="0"||"00"){
        displey.innerHTML+=target_value
    }
    
        
}



function clickbutton_sym(target){        //記号が押されたら     
    let target_value=target.innerHTML
    if(displey.innerHTML=="0"){　        //もし０が入ってたら０を表示
        displey.innerHTML="0"
    //}else if(displey.innerHTML.slice(-1)==target_value){　 //それ以外で記号が入ってたらそれ消して新しく入力
    　　//return;
        }else if(target_value == "+" && displey.innerHTML.slice(-1) === "+"){
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
       displey.innerHTML+=target_value 
    }
    
    
    
    
       
 
}