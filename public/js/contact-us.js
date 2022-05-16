var pluses = document.querySelectorAll('.ques-con span');
var answers = document.querySelectorAll('.ans');

console.log(answers);

for(let i=1; i< pluses.length; i++){
    pluses[i].addEventListener('click', function(){
        console.log('cha');
        answers[i].classList.toggle('hidded');
        // pluses[i].classList.add('hidded');
    });
}

