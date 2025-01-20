let arrayTab = Array.from(document.getElementsByClassName('tab'));
let activeTab = document.querySelector('.tab_active');
let arrayTabContent = Array.from(document.getElementsByClassName('tab__content'));
let activeContent = document.querySelector('.tab__content_active');


arrayTab.forEach(tab => tab.addEventListener('click', () => {
   let indexTab = arrayTab.indexOf(tab);

   activeTab.classList.remove('tab_active');
   activeTab = tab;
   activeTab.classList.add('tab_active');

   activeContent.classList.remove('tab__content_active');
   activeContent = arrayTabContent[indexTab];
   activeContent.classList.add('tab__content_active');

}));



