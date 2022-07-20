{
    const container_transition = document.querySelector('section.container_transition'),
          btn_lets_start = document.querySelector('a.anchor_go_page');

    const activeContainerTransition = () => {
        container_transition.classList.remove('hidden');
    };

    btn_lets_start.addEventListener('click',()=>{
        activeContainerTransition();
    });
}