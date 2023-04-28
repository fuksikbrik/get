
const questions = [
	//1
	{
        question:"ТИП ПОМЕЩЕНИЯ",
        answers:[
            "ДОМ",
            "КВАРТИРА",
            "КОММЕРЧЕСКОЕ",
            "ДРУГОЕ"
        ]
    },
    {
        question:"ВИД РЕМОНТА",
        answers:[
            "ЧЕРНОВОЙ",
            "КАПИТАЛЬНЫЙ",
            "КОСМЕТИЧЕСКИЙ",
            "ДИЗАЙНЕРСКИЙ"
        ]
    },
    {
        question:"ТИП НЕДВИЖИМОСТИ",
        answers:[
            "НОВОСТРОЙКА",
            "ВТОРИЧНАЯ"
        ]
    },
    {
        question:"УКАЖИТЕ ПЛОЩАДЬ КВАРТИРЫ",
        isInput: true,
        input: '<input type="number" placeholder="0м²">',
    },
    {
        question:" ВЫБЕРИТЕ ПОДАРОК",
        answers:[
            "ДОПОЛНИТЕЛЬНАЯ СКИДКА 10%",
            "ДИЗАЙН-ПРОЕКТ",
            "ПОДБОР ЧИСТОВЫХ МАТЕРИАЛОВ",
            "СПЕЦИФИКАЦИЯ НА ЧЕРНОВОЙ МАТЕРИАЛ"
        ]
    },
    {
        question:"УКАЖИТЕ НОМЕР ТЕЛЕФОНА",
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
let answer = document.querySelector(".answer-quiz-end");
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

  if(!questions[index].isInput){
      answers = questions[index].answers.map((el, index) => {
        const answer = document.createElement("div");
        answer.innerHTML = `
                            <p class="answer" data-value="${el}">${el}</p>`;

        answer.classList.add('quiz-card')
        answer.dataset.value = index + 1
        return answer;

      });

      answers.forEach( (answer) =>{
        answer.addEventListener('click', function (event) {
            finalAnswers[index] = event.target.dataset.value;
        });
      });

      quizDiv.appendChild(question);
      answers.forEach((answer) => {
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
	prevButton.disabled = false
	
	if(indexQuestion == questions.length ){
		
		btns.innerHTML = ``;
    quizDiv.innerHTML = ``;
    answer.classList.add('active-answer-quiz')
    
		
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