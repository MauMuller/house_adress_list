{
    const anchor_go_page = document.querySelector('a.anchor_go_page');

    anchor_go_page.addEventListener('click',(evt)=>{
        evt.preventDefault();

        setTimeout(()=>{
            window.location.href = anchor_go_page.href;
            localStorage.setItem('transitionToPainel', true);
        }, 850);
    })
}