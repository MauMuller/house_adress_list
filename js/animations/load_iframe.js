{
    const main_body = document.querySelector('body.main_body');
    let data = localStorage.getItem('indiceLoadTransition');

    data = data === null ? 0 : data;

    const loadingElement = (indiceLoad) => {
        switch(indiceLoad){
            case 0:
                main_body.classList.remove('hidden');
                main_body.classList.add('flex','animate-show_elements');
                break;
            case 1:
                main_body.classList.remove('hidden');
                main_body.classList.add('flex','animate-translate_right_center');
                break;
            case -1:
                main_body.classList.remove('hidden');
                main_body.classList.add('flex','animate-translate_left_center');
                break;
        }
        localStorage.setItem('indiceLoadTransition', 0);
    };

    if(data !== null){
        let indiceLoad = JSON.parse(data);

        loadingElement(indiceLoad);
    }
}