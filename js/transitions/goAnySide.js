{
    const buttons = document.querySelectorAll('a.btn_task');
    const iframe = document.querySelector('iframe.iframe_select');

    buttons.forEach((btn, ind_btn)=>{
        btn.addEventListener('click', ()=>{
            let indice_iframe = parseInt(iframe.name);
            let main_body = iframe.contentWindow.document.querySelector('body.main_body');

            if(ind_btn > indice_iframe){
                if(ind_btn===2 && indice_iframe===0){
                    main_body.classList.remove('animate-translate_left_center','animate-show_elements');
                    main_body.classList.add('animate-translate_center_right');
                    localStorage.setItem('indiceLoadTransition', -1);
                } else {
                    main_body.classList.remove('animate-translate_right_center','animate-show_elements');
                    main_body.classList.add('animate-translate_center_left');
                    localStorage.setItem('indiceLoadTransition', 1);
                }
            }

            if(ind_btn === indice_iframe){
                localStorage.setItem('indiceLoadTransition', 0);
                main_body.classList.remove('animate-translate_left_center','animate-translate_right_center');
                main_body.classList.add('animate-hidden_elements');
            }

            if(ind_btn < indice_iframe){
                if(ind_btn===0 && indice_iframe===2){
                    main_body.classList.remove('animate-translate_right_center','animate-show_elements');
                    main_body.classList.add('animate-translate_center_left');
                    localStorage.setItem('indiceLoadTransition', 1);

                } else {
                    main_body.classList.remove('animate-translate_left_center','animate-show_elements');
                    main_body.classList.add('animate-translate_center_right');
                    localStorage.setItem('indiceLoadTransition', -1);
                }
            }
        });
    });
}