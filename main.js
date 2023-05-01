
const questions = [
	//1
	{
        question:"ТИП ПОМЕЩЕНИЯ",
        lvl: 'type',
        answers:[
            "ДОМ",
            "КВАРТИРА",
            "КОММЕРЧЕСКОЕ",
            "ДРУГОЕ"
        ]
    },
    {
        question:"ВИД РЕМОНТА",
        lvl: 'view',
        answers:[
            "ЧЕРНОВОЙ",
            "КАПИТАЛЬНЫЙ",
            "КОСМЕТИЧЕСКИЙ",
            "ДИЗАЙНЕРСКИЙ"
        ],
        desc:[
            "Стяжка пола,<br> отштукатурим и <br> отшпаклюем стены, <br> поставим гидроизоляции.",
            "Стяжка пола,<br> отштукатурим и <br> отшпаклюем стены, <br> поставим гидроизоляции.2",
            "Стяжка пола,<br> отштукатурим и <br> отшпаклюем стены, <br> поставим гидроизоляции.3",
            "Стяжка пола,<br> отштукатурим и <br> отшпаклюем стены, <br> поставим гидроизоляции.4",
        ]
    },
    {
        question:"ТИП НЕДВИЖИМОСТИ",
        lvl: 'home',
        answers:[
            "НОВОСТРОЙКА",
            "ВТОРИЧНАЯ"
        ]
    },
    {
        question:"УКАЖИТЕ ПЛОЩАДЬ КВАРТИРЫ",
        lvl: 'size',
        isInput: true,
        input: '<input type="number" placeholder="0м²">',
    },
    {
        question:"ВЫБЕРИТЕ ПОДАРОК",
        lvl: 'gift',
        answers:[
            "ДОПОЛНИТЕЛЬНАЯ СКИДКА 10%",
            "ДИЗАЙН-ПРОЕКТ",
            "ПОДБОР ЧИСТОВЫХ МАТЕРИАЛОВ",
            "СПЕЦИФИКАЦИЯ НА ЧЕРНОВОЙ МАТЕРИАЛ"
        ]
    },
    {
        question:"",
        lvl: 'calc',
        answers:[
            "СРОК РАБОТ",
            "СКИДКА СОСТАВИТ"
        ]
    },
    {
        question:"УКАЖИТЕ НОМЕР ТЕЛЕФОНА",
        lvl: 'tel',
        isInput: true,
        input: '<input placeholder="+7">'
    }    

];







const quizDiv     = document.querySelector(".quiz");
const btns        = document.querySelector(".btns");
let lastLevel     = 0;
let indexQuestion = 1;
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let answerQuiz = document.querySelector(".answer-quiz-end");
nextButton.disabled = true
prevButton.disabled = true


let finalAnswers = [];

const showQuestion = (index) => {
  const question = document.createElement("div");

  question.innerHTML = `
  						<h1 class="question-center">${questions[index].question}</h1>
						`;
  question.classList.add('title-and-number');

  let answers = [];
  let desc = [];
  if(!questions[index].isInput){
    let p = questions[index].lvl
      answers = questions[index].answers.map((el, index) => {
        const answer = document.createElement("div");
        answer.innerHTML = `
                            <p class="answer" data-value="${el}">${el}</p>`;
        answer.classList.add('quiz-card')
        
        answer.classList.add(p)
        answer.dataset.value = index + 1
        return answer;

      });
      if(questions[index].hasOwnProperty('desc')) {
        desc = questions[index].desc
      }

      
        // console.log(false)
      
      answers.forEach( (answer) =>{
        answer.addEventListener('click', function (event) {
            finalAnswers[index] = event.target.dataset.value;
        });
      });
      
      quizDiv.appendChild(question);
      answers.forEach((answer, i) => {
        if(questions[index].hasOwnProperty('desc')) {
            const e = document.createElement('div')
            e.innerHTML = desc[i]
            answer.appendChild(e)
            const icon = document.createElement('span')
            icon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2" clip-path="url(#clip0_460_89)"><path d="M12 6.24023C11.4701 6.24023 11.04 6.67031 11.04 7.20023C11.04 7.73016 11.4701 8.16023 12 8.16023C12.53 8.16023 12.96 7.73016 12.96 7.20023C12.96 6.67031 12.53 6.24023 12 6.24023Z" fill="black"/><path d="M12.0001 5.75977C11.2061 5.75977 10.5601 6.40584 10.5601 7.19977C10.5601 7.99369 11.2061 8.63977 12.0001 8.63977C12.794 8.63977 13.4401 7.99369 13.4401 7.19977C13.4401 6.40584 12.794 5.75977 12.0001 5.75977ZM12.0001 7.67977C11.7351 7.67977 11.5201 7.46475 11.5201 7.19977C11.5201 6.93483 11.7351 6.71977 12.0001 6.71977C12.265 6.71977 12.4801 6.93483 12.4801 7.19977C12.4801 7.46475 12.265 7.67977 12.0001 7.67977Z" fill="black"/><path d="M12.48 10.0801H11.52V17.7601H12.48V10.0801Z" fill="black"/><path d="M12.48 9.6001H11.52C11.2551 9.6001 11.04 9.81516 11.04 10.0801V17.7601C11.04 18.025 11.2551 18.2401 11.52 18.2401H12.48C12.745 18.2401 12.96 18.025 12.96 17.7601V10.0801C12.96 9.81516 12.745 9.6001 12.48 9.6001Z" fill="black"/><path d="M12.0001 16.3198L10.5601 17.7598H13.4401L12.0001 16.3198Z" fill="black"/><path d="M13.7789 17.4203L12.3389 15.9803C12.1517 15.793 11.8473 15.793 11.6602 15.9803L10.2202 17.4203C10.0829 17.5576 10.0416 17.7639 10.1165 17.9435C10.1904 18.123 10.3661 18.2401 10.56 18.2401H13.44C13.6339 18.2401 13.8077 18.123 13.8826 17.9435C13.9575 17.7639 13.9162 17.5576 13.7789 17.4203ZM11.7187 17.2801L12 16.9988L12.2813 17.2801H11.7187Z" fill="black"/><path d="M10.5601 10.0801L12.0001 11.5201V10.0801H10.5601Z" fill="black"/><path d="M12 9.6001H10.56C10.3661 9.6001 10.1904 9.71724 10.1165 9.89672C10.0416 10.0763 10.0829 10.2826 10.2202 10.4199L11.6602 11.8599C11.7523 11.9512 11.8752 12.0001 12 12.0001C12.0615 12.0001 12.1239 11.9886 12.1834 11.9636C12.3629 11.8897 12.48 11.714 12.48 11.5201V10.0801C12.48 9.81516 12.265 9.6001 12 9.6001Z" fill="black"/><path d="M12 0C5.3827 0 0 5.3827 0 12C0 18.6173 5.3827 24 12 24C18.6173 24 24 18.6173 24 12C24 5.3827 18.6173 0 12 0ZM12 23.04C5.91263 23.04 0.96 18.0874 0.96 12C0.96 5.91263 5.91263 0.96 12 0.96C18.0874 0.96 23.04 5.91263 23.04 12C23.04 18.0874 18.0874 23.04 12 23.04Z" fill="black"/></g><defs><clipPath id="clip0_460_89"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>'
            answer.appendChild(icon)
        }
        quizDiv.appendChild(answer);
      });

      answers.forEach((answer) => {
          answer.addEventListener("click", (event) => {
              nextButton.disabled = false
              answers.forEach((removeClass) => {
                  removeClass.classList.remove('active');
              });
              answer.classList.add('active')
          });
      });
  }
  else{
      const input = document.createElement("div")
      input.innerHTML = questions[index].input;
      quizDiv.appendChild(input);

      input.addEventListener("input", (e)=>{
          finalAnswers[index] = e.target.value;
          if(e.target.value) nextButton.disabled = false
          else nextButton.disabled = true
      })
  }

};
 

const start = () => {
  let questionIndex = 0;
  let divBtns    = document.querySelector(".btns");

 nextButton.addEventListener("click", (event) => {
	
	nextButton.disabled = true
    if(indexQuestion == 6) {
        nextButton.disabled = false
    }
	prevButton.disabled = false
	
	if(indexQuestion == questions.length ){
		
		btns.innerHTML = ``;
    quizDiv.innerHTML = ``;
    answerQuiz.classList.add('active-answer-quiz')
    
		
	}
	quizDiv.innerHTML = ``;
	indexQuestion++;
    showQuestion(++questionIndex);

	

  });
  
  
  prevButton.addEventListener("click", (e) => {
	console.log(questionIndex)
	
	finalAnswers.pop()
	if(questionIndex > 1){
		prevButton.disabled = false;
		indexQuestion--;
		quizDiv.innerHTML = ``;
		showQuestion(--questionIndex)
	}else{
		prevButton.disabled = true;
		indexQuestion--;
		quizDiv.innerHTML = ``;
		showQuestion(--questionIndex)
	}

  });
  
  showQuestion(questionIndex);
};

start();



nextButton.addEventListener('click', function (){
	console.log(finalAnswers)
})