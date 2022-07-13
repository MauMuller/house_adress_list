class HouseList{
    constructor(){
        this.arrHouses = [];
        this.indiceHouse = 1;
    }

    downIndice() { return this.indiceHouse = this.indiceHouse < 1 ? 1 : this.indiceHouse-1 };
    get upIndice() { return this.indiceHouse++ };
    get arrayToObject() { return this.arrHouses.reduce((prev, curr, ind)=>({...prev, [`house_${ind}`]: curr}), {}) };
    
    objectToArray(obj) { 
        let newAray = [];

        for(let i=0; i<Object.keys(obj).length; i++){
            newAray.push(obj[`house_${i}`]);
        }

        return newAray;
    };

    replacingDataExits(array, indice){
        this.arrHouses = array;
        this.indiceHouse = indice;
    }

    setLocalStoredData(){
        localStorage.setItem('housesIndiceCont', this.indiceHouse);
        localStorage.setItem('housesValues', JSON.stringify(this.arrayToObject));
    }

    get getLocalStoredData(){
        let dataHouse = localStorage.getItem('housesValues');
        let indiceHouse = localStorage.getItem('housesIndiceCont');

        if(![dataHouse, indiceHouse].includes(null)){
            return [JSON.parse(dataHouse), JSON.parse(indiceHouse)];
        }
    }
    
    verifyNumberResidenceExists(id){
        return this.arrHouses.some(obj=>obj.nResidencia===id);
    }

    populateArrHouse(arrInputValues, color){
        this.arrHouses.push({
            nResidencia: arrInputValues[0],
            bairro: arrInputValues[1],
            cidade: arrInputValues[2],
            areaCasa: arrInputValues[3],
            color: color
        });
        this.setLocalStoredData();
    }
    
    removeArrHouse(idResidencia){
        let indiceIdArr;
        this.arrHouses.forEach((obj, ind_obj)=>{
           if(obj.nResidencia === idResidencia){
                indiceIdArr = ind_obj;
            }; 
        });

        this.arrHouses.splice(indiceIdArr, 1);
        this.setLocalStoredData();
    }

    decrementaionLegendHouse(legends, legendIndice){
        for(let i=0; i<legends.length; i++){
            let spanIndice = parseInt(legends[i].innerText);

            if(spanIndice > legendIndice){ 
                let newNumber = String(spanIndice-1);
                legends[i].innerText = newNumber;
            }
        }
    }
}