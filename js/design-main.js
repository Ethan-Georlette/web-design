'use strict'
function toggleSelect(elLi){
    elLi.classList.toggle('active')
    var elSelects=document.querySelectorAll('.active');
    for (var i=0;i<elSelects.length;i++){
        if(elSelects[i]===elLi){
            continue;
        }
        elSelects[i].classList.remove('active');
    }
}