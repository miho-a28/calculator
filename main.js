function clickbutton(target){
    let displey=document.getElementById("displey")
    let target_value=target.innerHTML;
    
    if(target_value=="AC"){
        displey.innerHTML="0"
    }else if(target_value=="="){
        displey.innerHTML=eval(displey.innerHTML);
    }else{
        if( displey.innerHTML=="0"){
             displey.innerHTML=target_value
        }else{
             displey.innerHTML+=target_value
        }
    } 
}
    