const quizQuestion=document.querySelector('#quiz')


let index = 0;
let quesArr =[];

// const getQuestion = async()=>{

//     try {
//         const data = await fetch('https://the-trivia-api.com/v2/questions');
//         const response = await data.json();
//         quesArr=response
//         // console.log(quesArr);
//     } 
//     catch (err) {
//         console.log(err);
//     }

//   // console.log(quesArr.length);
//     } 
    
//     getQuestion();

const renderQuestions=(arr)=>{
  console.log(quesArr.length);
if (index < quesArr.lengh) {
  
  const answersArr=[
    ...arr[index].incorrectAnswers,
    arr[index].correctAnswer
  ]
  console.log(answersArr)

  quizQuestion.innerHTML+=`
  <h1>${arr[index].question.text}</h1>
  `
}
  //  else {

    // console.log('completed');
// }
     
  

}


renderQuestions(quesArr);
  

const getQuestion = async()=>{

  try {
      const data = await fetch('https://the-trivia-api.com/v2/questions');
      const response = await data.json();
      quesArr=response
      // console.log(quesArr);
  } 
  catch (err) {
      console.log(err);
  }

// console.log(quesArr.length);
  } 
  
  getQuestion();