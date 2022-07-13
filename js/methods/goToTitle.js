{
    const data_house = document.querySelectorAll('div.data_house');
    const btn_scroll = document.querySelectorAll('li.btn_scroll');

    data_house.forEach((div,ind_div)=>{
        btn_scroll.forEach((btn, ind_btn)=>{
            btn.addEventListener('click', ()=>{
                ind_div===ind_btn ? div.scrollIntoView({block: 'start', behavior: "smooth"}) : "";
            });
        });
    });
}