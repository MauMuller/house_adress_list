class House {
    constructor(numeroResidencia, bairro, cidade, areaCasa, color) {
        this.numeroResidencia = numeroResidencia;
        this.bairro = bairro;
        this.cidade = cidade;
        this.areaCasa = areaCasa;
        this.color = color;
    }

    get iframe() { return document.querySelector('iframe.iframe_select').contentWindow };
    get mainBody() { return this.iframe.document.querySelector('body.main_body') };
    get imgCover() { return this.mainBody.children[0].children[0]; }
    get adressList() { return this.iframe.document.querySelector('div.list_adress'); }
    get inputHouse() { return this.iframe.document.querySelectorAll('.input_house'); }
    get randomColors() { return this.iframe.document.querySelectorAll('div.random_colors'); }

    insertHouseAdress(indiceHouse) {

        const showAnimateElement = ()=>{ 
            let sections = this.adressList.children;
            for(let i=0; i<sections.length; i++){
                i === sections.length-1 ? sections[i].classList.add('hidden') : "";

                if(sections[i].classList.contains('hidden')){
                    sections[i].classList.add('flex','animate-translate_right_center'); 
                    sections[i].classList.remove('hidden'); 

                    setTimeout(()=>{
                        sections[i].classList.remove('animate-translate_right_center');
                    }, 1000);
                    
                }
            }
        };

        this.adressList.innerHTML += this.adressContainer(indiceHouse);
        showAnimateElement();
        this.verifyHousesExists();
    }

    allColors(color, nResidencia){
        this.randomColors.forEach((adresDiv)=>{
            let idResidencia = parseInt((adresDiv.parentNode.children[0].querySelectorAll('.input_house')[0]).value);
            if(idResidencia===nResidencia){
                adresDiv.style.backgroundColor = color;
            }
        });
    }

    removeHouseAdress(element){
        const removeAnimateElement = ()=>{ element.classList.add('animate-translate_center_right') };

        removeAnimateElement();
        setTimeout(()=>{
            this.adressList.removeChild(element);
            this.verifyHousesExists();
        }, 1000);
    }

    capturingIdHouse(data_house){
        let idValue;

        data_house.forEach((div, ind_div)=>{
            if(ind_div===0){ idValue = div.children[1].value; };
        });

        return parseInt(idValue);
    }

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

    addingHTMLStored(indiceHouses){
        this.adressList.innerHTML += this.adressContainer(indiceHouses);
        this.verifyHousesExists();
    }

    adressContainer(indiceHouse) {
        return `
                    <section class="houses_adress flex flex-col nc:flex-row w-full justify-center items-center gap-2 border border-transparent">

                        <div class="flex flex-col w-95%">
                            <fieldset class="fieldset_house flex flex-col p-4 bg-color_white_thirty w-full rounded-t-md justify-center shadow-shadow_adress">
                                <legend class="bg-color_white_thirty px-2 py-0 mx-2 font-bold rounded-md shadow-shadow_indice">Casa <span class="indiceLegends">${indiceHouse}</span></legend>
                                
                                <div class="data_house">
                                    <h2 class="font-bold border-b-2 border-color_black_thirty text-color_black_second">Número da Residência</h2>
                                    <input type="text" class="input_house whitespace-nowrap overflow-hidden border-none outline-none text-sm text-color_black_second w-full bg-transparent" value="${this.numeroResidencia}" disabled>
                                </div>

                                <div class="data_house">
                                    <h2 class="font-bold border-b-2 border-color_black_thirty text-color_black_second">Bairro</h2>
                                    <textarea type="text" class="input_house whitespace-nowrap overflow-hidden resize-none rounded-sm outline-none text-sm w-full text-text-color_black_second bg-transparent" disabled>${this.bairro}</textarea>
                                </div>

                                <div class="data_house">
                                    <h2 class="font-bold border-b-2 border-color_black_thirty text-color_black_second">Cidade</h2>
                                    <textarea type="text" class="input_house resize-none border-none whitespace-nowrap overflow-hidden outline-none text-sm w-full text-text-color_black_second bg-transparent" disabled>${this.cidade}</textarea>
                                </div>
                            
                                <div class="data_house">
                                    <h2 class="font-bold border-b-2 border-color_black_thirty text-color_black_second">Área da Casa</h2>
                                    <input type="text" value="${this.areaCasa}" class="input_house whitespace-nowrap overflow-hidden border-none outline-none w-full text-sm  text-color_black_second bg-transparent" disabled>
                                </div>

                            </fieldset>
                            <div class="random_colors bg-white w-full rounded-b-md p-1"></div>
                        </div>

                        <aside class="flex flex-row nc:flex-col sm:w-5% bg-transparent justify-center items-center p-2 gap-2">
                            <i class="bi bi-x-square-fill btn_house cursor-pointer text-color_red_second font-sans text-4xl ease-out delay-75 hover:scale-110 hover:ease-in hover:delay-75"></i>
                            <i class="bi bi-fullscreen btn_house cursor-pointer text-color_white_second font-sans text-4xl ease-out delay-75 hover:scale-110 hover:ease-in hover:delay-75"></i>
                            <i class="bi bi-pencil-square btn_house cursor-pointer text-color_white_second font-sans text-4xl ease-out delay-75 hover:scale-110 hover:ease-in hover:delay-75"></i>
                            <i class="bi bi-patch-check-fill btn_house cursor-pointer pointer-events-none hidden text-color_green_first font-sans text-4xl ease-out delay-75 hover:scale-110 hover:ease-in hover:delay-75"></i>
                        </aside>
                    </section>
                
        `;
    }

}