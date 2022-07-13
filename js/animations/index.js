{
    const anchor_go_page = document.querySelector('a.anchor_go_page');
    const title = document.querySelector('h1.title_main');
    const container_title = document.querySelector('div.container_title');
    const [ tringule, background ] = [document.querySelector('div#tringular_figure'), document.querySelector('div#background_green')];

    window.addEventListener('load', ()=>{
        const textArr = [
            "Utilizei alguns conceitos como...",
            "Manipulação do DOM",
            "Armazenamento com LocalStored",
            "e programação Orientada a Objetos",
            "Espero que você goste!"
        ]

        const subtitle = container_title.children[0];
        let contText=0;

        setInterval(()=>{
            subtitle.classList.remove('hidden_element');
            subtitle.innerHTML = `${textArr[contText]}`;
            contText = contText >= 4 ? 0 : contText + 1;
        }, 3500);
    });

    anchor_go_page.addEventListener('click', ()=>{
        title.classList.add('translate_center_to_right');
        container_title.classList.add('hidden_element_animation');

        setTimeout(()=>{
            [tringule, background].forEach(element=>element.classList.add('translate_bottom_to_top'));
        }, 400);
    });
}