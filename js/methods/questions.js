{
    const questions = document.querySelectorAll('li.questions');

    const checkingVisibilityOtherQuestions = (indQuestion) => {
        questions.forEach((verifingQuestion, indiceVerifing)=>{
            if(indQuestion != indiceVerifing){
                let hiddenText = verifingQuestion.children[1];
                let icon = verifingQuestion.children[0].children[1];

                closeQuestion(hiddenText, icon);
            }
        });
    }

    const moreIconAnimation = (icon)=>{
        icon.classList.add('animate-disabledRotationIcon');
        icon.classList.remove('animate-enabledRotationIcon');
        icon.classList.remove('bi-dash-lg');
        icon.classList.add('bi-plus-lg');
    }

    const lessIconAnimation = (icon)=>{
        icon.classList.add('animate-enabledRotationIcon');
        icon.classList.remove('animate-disabledRotationIcon');

        icon.classList.add('bi-dash-lg');
        icon.classList.remove('bi-plus-lg');
    }

    const openQuestion = (hiddenText, icon) => { 
        lessIconAnimation(icon);
        hiddenText.classList.remove('hidden'); 
    }

    const closeQuestion = (hiddenText, icon) => {
        moreIconAnimation(icon);
        hiddenText.classList.add('hidden');
     }

    const verifingStateQuestion = (question, indQuestion)=>{
        let hiddenText = question.children[1];
        let icon = question.children[0].children[1];

        checkingVisibilityOtherQuestions(indQuestion);
        hiddenText.classList.contains('hidden') ? openQuestion(hiddenText,icon) : closeQuestion(hiddenText,icon);
    };

    questions.forEach((question, indQuestion)=>{
        question.addEventListener('click',()=>{
            verifingStateQuestion(question, indQuestion);
        });
    });
}