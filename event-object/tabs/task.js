let arrayTab = Array.from(document.getElementsByClassName('tab'));
let arrayTabContent = Array.from(document.getElementsByClassName('tab__content'));

arrayTab.forEach(tab => tab.addEventListener('click', checkTab));

function checkTab(event){
    // console.log(event.target);
    if (!event.target.classList.contains('tab_active')){
        event.target.parentElement.querySelector('.tab_active').classList.remove('tab_active');
        event.target.classList.add('tab_active');
    }
    let indexTab = arrayTab.findIndex(element => element.classList.contains('tab_active'));
    arrayTabContent[indexTab].classList.add('tab__content_active');
    let indexContent = arrayTabContent.findIndex(element => element.classList.contains('tab__content_active'));
    arrayTabContent[indexContent].classList.remove('tab__content_active');



}
