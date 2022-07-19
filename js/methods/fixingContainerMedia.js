{
    const last_container = document.querySelector('div.last_container');

    window.addEventListener('scroll',()=>{
        let container_top_distance = last_container.getBoundingClientRect().top;
        const div_media = last_container.children[0];

        container_top_distance <= 0 ? div_media.classList.add('fixed','top-48') : div_media.classList.remove('fixed','top-48');
    });
}