document.addEventListener('DOMContentLoaded', () => {

    // let advice = ['My advice to you at last in the day!','My advice to you Rudy.', 'Once upon a word of wisdom we flew high']

    let adviceData = []

    // ACCESS DOM
    const die = document.querySelector('.cta-change-advice')

    const actualAdvice = document.querySelector('.actual-advice')

    const adviceNum = document.querySelector('.advice-num')

    // const generateNum = () => {
        
    // return Math.floor(Math.random() * advice.length)
        
    // } 

    // ACCESS API
    const appendData = (adviceData)=> {
        
        adviceAdvice = adviceData.slip.advice
        adviceID = adviceData.slip.id
        
        actualAdvice.innerHTML = adviceAdvice
        adviceNum.innerHTML = adviceID

    }

    // Fetch Request Function
    const fetchReq = () => {
        
        fetch('https://api.adviceslip.com/advice')
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              appendData(data);
            })
            .catch(function (err) {
              console.log(err);
            });
    }
    
    
    die.addEventListener('click', ()=>{
        
        adviceData = fetchReq()
    



        // randomNum = generateNum()

        // while(randomNum === counter){
        //     randomNum = generateNum()
        // }

        // actualAdvice.innerHTML = advice[randomNum]
        // adviceNum.innerHTML = randomNum+1 
        
        // counter = randomNum 


        
        
    })
    
    
    // RANDO NUMBER AND ADVICE ON PAGE LOAD
    adviceData = fetchReq();


        
    

    

})
