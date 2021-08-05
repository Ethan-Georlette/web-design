'use strict'
function toggleSelect(elLi){
    elLi.classList.toggle('select')
    var elSelects=document.querySelectorAll('.select');
    for (var i=0;i<elSelects.length;i++){
        if(elSelects[i]===elLi){
            continue;
        }
        elSelects[i].classList.remove('select');
    }
}