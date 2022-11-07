(function(){
    
    const sliders = [...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony_body--show');

    }

})();



                      // QUESTIONS 
              
                      
(function(){
    const titleQuestions = [...document.querySelectorAll('.questions_title')];
   
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions_padding--add')
            question.children[0].classList.toggle('questions_arrow--rotate')

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
           
        })

    })

})();

                    //    MENU

(function(){
    const openButton  = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');



    openButton.addEventListener('click', ()=>{
       menu.classList.add('nav_link--show');
    })

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove ('nav_link--show')
    })
    

})();                   

