const allDiv = document.querySelectorAll('div.reveal');

window.addEventListener('scroll', () => {
    allDiv.forEach((e) => {   
        const domRect = e.getBoundingClientRect();
         if(document.documentElement.scrollTop >= domRect.top && domRect.top > 0){
            e.classList.toggle ('reveal_active');
        }
        })
})
