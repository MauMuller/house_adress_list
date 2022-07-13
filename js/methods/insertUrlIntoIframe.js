{
    const iframe = document.querySelector('iframe.iframe_select');
    const buttons = document.querySelectorAll('a.btn_task');

    const adicionarHrefNoIframe = (btn)=>{
        iframe.src = btn.href;
    }

    const guardarIndiceButton = (ind_btn)=> {
        iframe.name = ind_btn;
    };

    buttons.forEach((btn,ind_btn)=>{
        btn.addEventListener('click',(evt)=>{
            evt.preventDefault();

            setTimeout(()=>{
                adicionarHrefNoIframe(btn);
                guardarIndiceButton(ind_btn);
            }, 380);
        });
    });
}