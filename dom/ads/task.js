const allRotatorClass = document.querySelectorAll('.rotator__case'); //получили псевдомассив
// const allSpan = document.querySelectorAll('span');
let count = 1;

function rotator() {
    
    allRotatorClass.forEach(function(e, i){
        e.classList.toggle('rotator__case_active', count === i);
    })

    count++;
    if(count >= allRotatorClass.length){
        count = 0;
    }
    
}
// function delay(){
//     for (i = 0; i < allSpan.length; i++){
//     delayValue = Number(allSpan[i].dataset.speed);
//     return delayValue;
// }



setInterval(rotator, 1000);