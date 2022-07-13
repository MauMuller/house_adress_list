class FormControl{
    get inputs() { return document.querySelectorAll(".input_text") };

    changeEvent(element, ind_element, fieldset_seach){
        switch(ind_element){
            case 1: case 2: case 5:
                element.value = element.value.trim();
                break;
            case 4:
                if(element.value != ""){
                    fieldset_seach.disabled = false;
                    fieldset_seach.children[0].children[0].innerText = element.value;
                } else {
                    fieldset_seach.disabled = true;
                    fieldset_seach.children[1].value = "";
                    fieldset_seach.children[0].children[0].innerText = "...";
                }
                break;
        }
    }

    insertingIDintoTag(options, span_search, inputs){
        const inputSearch = inputs[5];

        options.forEach((opt, ind_opt)=>{
            if(opt.value === span_search.innerText){
                inputSearch.name = ind_opt;
            }
        });
    }

    filterHouse(inputSearch, fieldset_houses){

        const serachingElement = (data, field)=>{
            let section = field.parentNode.parentNode;

            if(data.value.includes(inputSearch.value)){
                section.classList.remove('hidden')
                section.classList.add('flex');
            } else {
                section.classList.add('hidden')
                section.classList.remove('flex');
            }
        }

        fieldset_houses.forEach(field=>{
            const data = field.querySelectorAll('.input_house');

            data.forEach((data, ind_data)=>{
                if(parseInt(inputSearch.name)===ind_data){
                    serachingElement(data, field);
                }
            });
        });
    }
    
    cleanInputs(){
        this.inputs.forEach((input,indiceInput)=>{
            if(indiceInput <= 3) { input.value=""; }
        });
    }
}