{
    const painel = document.querySelector('aside.painel');
    const transitionToPainel = localStorage.getItem('transitionToPainel');

    painel.classList.remove('hidden');

    if(transitionToPainel){
        painel.classList.add('flex');
        painel.classList.add('animate-translate_left_center');
    }
}