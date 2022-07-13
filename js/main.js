{
    const input_text = document.querySelectorAll('.input_text');
    const btn_form = document.querySelectorAll('input.btn_form');
    const inputs_btn_painel = document.querySelectorAll('.inputs_btn_painel');
    const manager = new Manager();
    const fieldset_seach = input_text[5].parentNode;
    const arrInputValues = [];

    input_text.forEach((input, ind_input)=>{
        input.addEventListener('change', ()=>{
            manager.formChangeEvt(input, ind_input, fieldset_seach);
        });

        input.addEventListener('input', ()=>{
            if(ind_input != 4){
                input.value = noSpecialChars(input.value);

                switch(ind_input){
                    case 0: case 3:
                        input.value = onlyNumbers(input.value);
                        break;
                    case 2:
                        input.value = noNumbersChars(input.value);
                        break;
                }
            }

            if(ind_input===5){
                manager.filterringManager(input);
            }
        });
    });

    

    btn_form.forEach((btn, indiceBtn)=>{

        const addAdress = (input)=>{
            let valorInput = !isNaN(input.value) ? parseInt(input.value) : input.value;
            arrInputValues.push(valorInput);

            if(arrInputValues.length === 4){
                if(manager.verifyInputs(arrInputValues)){
                    alert('Da um jeito ai!');
                } else {
                    manager.houseList.verifyNumberResidenceExists(arrInputValues[0]) ?  alert('Número de Residência já existente!') : manager.manageringInsertHouse(arrInputValues);
                }

                manager.cleanData(arrInputValues);
                manager.formControl.cleanInputs();
            }
        }

        const manageringButtons = ()=>{
            switch(indiceBtn){
                case 0: //ADICIONAR ENDEREÇO
                    input_text.forEach((input, indiceInput)=>{
                        if(indiceInput <= 3){
                            addAdress(input);
                        }
                    });
                    break;
                case 1: //REMOVER ENDEREÇOS
                    manager.manageringRemoveAll();
                    break;
            }
        }

        btn.addEventListener('click', manageringButtons);
    });

    // window.addEventListener('load',()=>{
        // manager.iframe.src = manager.iframe.src;
        // manager.verifyHousesExists();
    // });

    manager.iframe.addEventListener('load',()=>{
        if(manager.iframe.name==="0"){ manager.manageringDataStored(); } 
        manager.changingTouchForm(manager.iframe.name, inputs_btn_painel)  //enabled ou disabled campos e botões
    });
}