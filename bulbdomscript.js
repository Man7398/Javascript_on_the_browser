const bulbswitch=document.querySelector('#bulbswitch');
const bulb=document.querySelector('#bulb');

bulbswitch.addEventListener('click',function(){
    console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src='Javascript/DOM/bulbon/pic_bulboff.gif';

    }
    else
    bulb.src='./pic_bulboff.gif';

})