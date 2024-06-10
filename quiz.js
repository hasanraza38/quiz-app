const quizQuestion=document.querySelector('#quiz')

const getQuestion = async()=>{

    try {
        const data = await fetch('https://the-trivia-api.com/v2/questions');
        const response = await data.json();
        console.log(response);
        
    } 
    catch (err) {
        console.log(err);
    }
} 

getQuestion();

const arr=[]
const renderQuestions=()=>{

  const answersArr=[
    ...arr.incorrectAnswers,

    arr.correctAnswer
     
  ]

  console.log(answersArr);
}
renderQuestions()
  