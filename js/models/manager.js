class Manager{
    constructor(){
        this.formControl = new FormControl();
        this.houseList = new HouseList();
    }
    get generateRandomColors(){
        return randomHexadecimal();
    }

    filterringManager(searchInput){
        this.formControl.filterHouse(searchInput, this.fieldset_house);
    }

    formChangeEvt(input, ind_input, fieldset_seach){
        this.formControl.changeEvent(input, ind_input, fieldset_seach);
        this.formControl.insertingIDintoTag(this.option_input, this.span_search, this.formControl.inputs);
    }

    verifyInputs(arrInputValues){
        const conditions = [undefined, NaN, null, "", 0];
        let boolInputs = conditions.some(condition=>arrInputValues.includes(condition));
        return boolInputs;
    }

    scrollToHouse(house){
        setTimeout(()=>{
            house.scrollIntoView({block:"center", behavior:"smooth"});
        }, 600);
    }

    manageringInsertHouse(arrInputValues){
        this.instanceHouseClass(arrInputValues, this.generateRandomColors);
        this.house.insertHouseAdress(this.houseList.upIndice);
        this.house.allColors(this.house.color, arrInputValues[0]);
        this.houseList.populateArrHouse(arrInputValues, this.house.color);
        this.limitingLengthValue(this.house.inputHouse);
        

        const lastHouse = this.adressList.children[this.adressList.children.length-1];
        // console.log(lastHouse);
        this.scrollToHouse(lastHouse);

        //Pegando Botões do endereço
        this.capturingHouses();
    }

    cleanData(array){ return array.splice(0, array.length); }

    verifyHousesExists() {
        const backgroundFull = () => { this.mainBody.classList.add('h-screen'); }
        const backgroundAuto = () => { this.mainBody.classList.remove('h-screen'); }

        const removingImg = () => {
            this.imgCover.classList.remove('block');
            this.imgCover.classList.add('hidden');
            backgroundAuto();
        }

        const addingImg = () => {
            this.imgCover.classList.add('hidden');
            this.imgCover.classList.remove('flex');

            setTimeout(()=>{
                this.imgCover.classList.add('block','animate-show_elements');
                this.imgCover.classList.remove('hidden');
                backgroundFull();

                setTimeout(()=>{
                    this.imgCover.classList.remove('animate-show_elements');
                }, 800);

            }, 100);
        }
        
        this.adressList.children.length > 0 ? removingImg() : addingImg();
    };

    limitingLengthValue(inputsValue){
        const maxWidth = 280;
        const lengthToSum = window.innerWidth > maxWidth ?  window.innerWidth - maxWidth : 0;  
        const lengthInputText = lengthToSum !== 0 ? (10 + lengthToSum)/11 : 10;

        inputsValue.forEach((input)=>{
            if(input.value.length >= lengthInputText){
                input.value = `${input.value.substr(0, lengthInputText)}...`;

            }
        });
    }

    manageringDataStored(){
        const verifyItens = ![undefined, null].includes(this.houseList.getLocalStoredData) ? true : false;

        if(verifyItens){
            const arrayHouse = this.houseList.objectToArray(this.houseList.getLocalStoredData[0]);
            const indiceHouse = this.houseList.getLocalStoredData[1];

            const insertingStoredHouses = (arrayHouse)=>{
                arrayHouse.forEach((objArr, ind_objArr)=>{
                    let indiceHouses = ind_objArr + 1;
                    this.intanceHouseObj = objArr;

                    this.house.addingHTMLStored(indiceHouses);
                    this.house.allColors(objArr.color, objArr.nResidencia);
                    this.limitingLengthValue(this.house.inputHouse);
                    this.capturingHouses();
                });
            };

            this.houseList.replacingDataExits(arrayHouse, indiceHouse);
            insertingStoredHouses(arrayHouse);
        }

        this.verifyHousesExists();
    }

    capturingHouses(){
        if(this.houses_adress.length > 0) { this.manageringHousesButtons(this.houses_adress); }
    };

    changingTouchForm(iframeID, inputs_btn_painel){
        inputs_btn_painel.forEach(inpBtn => {
            inpBtn.disabled = iframeID === "0" ? false : true; 
        });
    }

    manageringRemoveAll(){ 
        const clealingData = ()=>{
            this.cleanData(this.houseList.arrHouses);
            this.houseList.indiceHouse = 1;
        };

        const deleteAnimateHouse = (house, indice)=>{ 
            setTimeout(()=>{
                house.classList.add('animate-translate_center_right');
            }, indice * 100);
        }

        const deleteHTMLHouse = (house, adressList)=>{ 
            setTimeout(()=>{
                adressList.removeChild(house);
                this.house.verifyHousesExists();
            }, 800);
        }

        const deletingHouse = (adressList)=>{ 
            let housesList = adressList.children;

            for(let i=0; i<housesList.length; i++){
                deleteAnimateHouse(housesList[i], i);
                deleteHTMLHouse(housesList[i], adressList);
            } 
        }
        
        clealingData();
        this.houseList.setLocalStoredData();
        deletingHouse(this.house.adressList);
    }

    managerinfInputsEdit(data_house, typeOfControll){
        const stylesInputEnabled = (input, title)=>{ 
            title.classList.remove('border-b-2');
            input.classList.remove('outline-none');
            input.classList.add('bg-color_white_second','outline','outline-2','outline-color_black_thirty');
         };

         const stylesInputDisabled = (input, title)=>{ 
            title.classList.add('border-b-2');
            input.classList.add('outline-none');
            input.classList.remove('bg-color_white_second','outline','outline-2','outline-color_black_thirty');
         };

         data_house.forEach((data, ind_data)=>{
            if(ind_data != 0){
                let titleText = data.children[0];
                let input = data.children[1];

                switch(typeOfControll){
                    case 'disabled':
                        stylesInputDisabled(input, titleText);
                        input.disabled = true;
                        break;
                    case 'enabled':
                        stylesInputEnabled(input, titleText);
                        input.disabled = false;
                        break;
                 }
            }
        });
    }

    manageringOthersButtons(arrButtons, typeOfControll){
        arrButtons.forEach(btn=>{
            switch(typeOfControll){
                case 'disabled':
                    btn.classList.add('pointer-events-none','opacity-60');
                    break;
                case 'enabled':
                    btn.classList.remove('pointer-events-none','opacity-60');
                    break;
            }
        });
    }

    manageringVerifyBtn(verifyBtn,typeOfControll){
        switch(typeOfControll){
            case 'disabled':
                verifyBtn.classList.add('pointer-events-none','animate-translate_center_top');
                setTimeout(()=>{
                    verifyBtn.classList.add('hidden');
                    verifyBtn.classList.remove('animate-translate_center_top');
                }, 1000);
                break;

            case 'enabled':
                verifyBtn.classList.remove('hidden','pointer-events-none');
                verifyBtn.classList.add('animate-translate_top_center');
                setTimeout(()=>{
                    verifyBtn.classList.remove('animate-translate_top_center');
                }, 1000);
                break;
        }
    }

    changingInformation(newDataHouse){
        let changingOldDataForNew = false;

        const checkingInformartions = ()=>{

            for(let data of newDataHouse){
                if(data.value === ""){
                    changingOldDataForNew=false;
                    break;
                } else {
                    changingOldDataForNew=true;
                }
            }

            return changingOldDataForNew;
        };

        const addNewinformationsInArray = (arrayList, idResidencia)=>{ 
            arrayList.forEach(obj=>{
                if(obj.nResidencia === idResidencia){
                    obj.bairro = newDataHouse[1].value;
                    obj.cidade = newDataHouse[2].value;
                    obj.areaCasa = parseInt(newDataHouse[3].value);
                }
            });
        };
        
        if(checkingInformartions()){
            const nResidencia = parseInt(newDataHouse[0].value);
            addNewinformationsInArray(this.houseList.arrHouses, nResidencia);
            this.houseList.setLocalStoredData();
        } else {
            alert('Informações em branco!');
        }
        return changingOldDataForNew;
    }

    reloadHouses(){
        this.iframe.src = this.iframe.src;
    }

    openFullscrenHouse(divForm, house){
        this.fullscren_container.classList.remove('hidden');
        this.fullscren_container.classList.add('animate-show_elements','flex');

        setTimeout(()=>{
            this.fullscren_container.classList.remove('show_elements');
        },1000);

        const closeScreen = this.fullscren_container.querySelector('div.fullscreenClose');
        closeScreen.addEventListener('click',()=>{
            this.closeFullscrenHouse(divForm);
            this.scrollToHouse(house);
        });
    }

    objToArrayTruthy(obj){
        let newArray=[];
        for(let i=0; i<Object.keys(obj).length; i++){
            newArray.push(Object.values(obj)[i]);
        }
        return newArray;
    }

    closeFullscrenHouse(divForm){
        this.fullscren_container.classList.add('animate-hidden_elements');
        divForm.classList.remove('h-screen');

        setTimeout(()=>{
            this.fullscren_container.classList.remove('flex','animate-hidden_elements');
            this.fullscren_container.classList.add('hidden');
        },1000);
    }

    addingDataToExpandHouse(legendHouse, arrayHouse, colorHouse){
        const spanTag = this.fullscren_container.querySelector('span.fullscreenLegend');
        const valuesTag = this.fullscren_container.querySelectorAll('p.fullscreenValuesHouse');
        const colorTag = this.fullscren_container.querySelector('div.fullscreenRandomColor');

        spanTag.innerText = legendHouse;

        valuesTag.forEach((tag,ind_tag)=>{
            arrayHouse.forEach((element, ind_element)=>{
                if(ind_tag===ind_element){
                    tag.innerText = element;
                }
            });
        });

        colorTag.style.backgroundColor = colorHouse;
    }

    insertingValuesIntoInput(arr_values, data_house){
        const arrValues = this.objToArrayTruthy(arr_values);

        data_house.forEach((valorInput, indInput)=>{
            arrValues.forEach((valorArray,indValorArray)=>{
                if(indInput===indValorArray){
                    valorInput.value = valorArray;
                }
            });
        });
    }

    configSectionField(){
        const field = document.querySelector('fieldset.fieldset_house');
        const heightSection = field.getBoundingClientRect().height;
        const sectionField = field.parentNode;

        if(heightSection >= 700){
            sectionField.classList.add('h-35rem');
            sectionField.classList.remove('h-30rem');
        } else {
            sectionField.classList.add('h-30rem');
            sectionField.classList.remove('h-35rem');
        }
    }

    configWidthDiv(){
        const data_house = document.querySelectorAll('div.data_house');
        const minWidthToReduce = 1380;
        const minWidthToReduceMobile = 767;

        if(window.innerWidth >= minWidthToReduceMobile && window.innerWidth < minWidthToReduce){
            const qtdNeedToReduceMinValue = Math.floor((minWidthToReduce-window.innerWidth)/16);
            
            data_house.forEach(element=>{
                const elementWidth = 65; 
                const newWidth = (elementWidth-qtdNeedToReduceMinValue);
                element.style.width = `${newWidth}rem`;  
            });
        }

        if(window.innerWidth < minWidthToReduceMobile){
            const qtdNeedToReduceMinValue = Math.floor((minWidthToReduceMobile-window.innerWidth)/16);
            
            data_house.forEach(element=>{
                const elementWidth = 35; 
                const newWidth = (elementWidth-qtdNeedToReduceMinValue);
                element.style.width = `${newWidth}rem`;  
            });
        }
    }

    expandOnMobile(divForm){
        window.innerWidth <= 767 ? divForm.classList.add('h-screen') : divForm.classList.remove('h-screen')
    }

    manageringHousesButtons(houses_adress){
        houses_adress.forEach((house,ind_house)=>{
            const container_buttons = house.children[1];
            const buttons_house = container_buttons.children;

            const fieldset_house = house.children[0].children[0];
            const data_house = fieldset_house.querySelectorAll('div.data_house');
            const newDataHouse = fieldset_house.querySelectorAll('.input_house');

            for(let i=0; i<buttons_house.length; i++){
                buttons_house[i].addEventListener('click',()=>{
                    switch(i){
                        case 0: //REMOVER
                            let idResidencia = this.house.capturingIdHouse(data_house);
                            let indiceRemoveLegend = fieldset_house.children[0].children[0].innerText;
            
                            this.houseList.downIndice();
                            this.houseList.removeArrHouse(idResidencia);
                            this.houseList.decrementaionLegendHouse(this.indiceLegends, parseInt(indiceRemoveLegend));
                            this.house.removeHouseAdress(house);
                            break;
                        case 1: //EXPANDIR
                            const objHousesArray = this.houseList.arrHouses.find((element,ind_element)=>ind_element===ind_house);
                            const arrayHouses = this.objToArrayTruthy(objHousesArray);
                            const legendHouse = fieldset_house.querySelector('span.indiceLegends').innerText;
                            const colorHouse = house.querySelector('div.random_colors').style.backgroundColor;
                            const divForm = document.querySelector('.flexbox_container').children[0];

                            this.openFullscrenHouse(divForm, house);
                            this.addingDataToExpandHouse(legendHouse, arrayHouses, colorHouse);
                            this.configSectionField();
                            this.configWidthDiv();
                            this.expandOnMobile(divForm);
                            break;
                        case 2: //EDITAR 
                            const arr_values = this.houseList.arrHouses[ind_house];

                            this.insertingValuesIntoInput(arr_values, newDataHouse);
                            this.manageringOthersButtons([buttons_house[0], buttons_house[1], buttons_house[2]], 'disabled');
                            this.managerinfInputsEdit(data_house, 'enabled');
                            this.manageringVerifyBtn(buttons_house[3], 'enabled');
                            break;
                        case 3: //CONCLUIR ALTERAÇÕES
                            if(!this.changingInformation(newDataHouse)){
                                this.reloadHouses();
                            }
            
                            this.manageringOthersButtons([buttons_house[0], buttons_house[1], buttons_house[2]], 'enabled');
                            this.managerinfInputsEdit(data_house, 'disabled');
                            this.manageringVerifyBtn(buttons_house[3], 'disabled');
                            this.limitingLengthValue(this.house.inputHouse);
                            break;
                    }
                });
            }
        });
    }

    get iframe() { return document.querySelector('iframe.iframe_select')}
    get houses_adress() { return this.iframe.contentWindow.document.querySelectorAll('section.houses_adress'); }
    get indiceLegends() { return this.iframe.contentWindow.document.querySelectorAll('span.indiceLegends'); }
    get fieldset_house() {return this.iframe.contentWindow.document.querySelectorAll('fieldset.fieldset_house'); }
    get option_input() { return document.querySelectorAll("option.option_input"); }
    get span_search() { return document.querySelector("span.span_search"); }
    get mainBody() { return this.iframe.contentWindow.document.querySelector('body.main_body') };
    get imgCover() { return this.mainBody.children[0].children[0]; }
    get adressList() { return this.iframe.contentWindow.document.querySelector('div.list_adress'); }
    get fullscren_container() { return document.querySelector('div.fullscren_container'); }

    instanceHouseClass(arrInputValues, color){
        this.house = new House(arrInputValues[0],arrInputValues[1],arrInputValues[2],arrInputValues[3],color);
    }

    set intanceHouseObj(objValues){ 
        this.house = new House(objValues.nResidencia, objValues.bairro, objValues.cidade, objValues.areaCasa, objValues.color); 
    }
}