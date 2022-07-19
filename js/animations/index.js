{
    const writing_text = document.querySelector('h3.writing_text');

    window.addEventListener('load', ()=>{
        const textArr = [
            "Utilizei alguns conceitos como...",
            "Manipulação do DOM",
            "Armazenamento com LocalStored",
            "e programação Orientada a Objetos",
            "Espero que você goste!"
        ]

        let contText=0;

        setInterval(()=>{
            writing_text.innerHTML = `${textArr[contText]}`;
            contText = contText >= 4 ? 0 : contText + 1;
        }, 3500);
    });
}