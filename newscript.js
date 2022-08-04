var btnCheck = document.querySelector('#btn-check')
var birthDate = document.querySelector('#birth-date')
var luckyNumber = document.querySelector('#lucky-number')
var outputDiv = document.querySelector('.output')

btnCheck.addEventListener('click',function getValues(){
    var dob = birthDate.value
    var calc = calculateSum(dob)
    checkMyBirthDate(calc,luckyNumber.value)
 

    function checkMyBirthDate(m,n){
        if(dob===''){
            outputDiv.innerText = 'please choose your birthday'
        }
        else if(m%n===0){
            outputDiv.innerText = 'Your birthday is  lucky 😍'
        }
        else if(luckyNumber.value=== ''){
            outputDiv.innerText = 'please choose your lucky number'
        } else if(luckyNumber.value<0){
            outputDiv.innerText  = 'Number entered should be positive'
        }
        else{
            outputDiv.innerText = 'Your birthday is not lucky 😧'
        }
    }


    function calculateSum(dob){
        dob = dob.replaceAll('-','')
        let add = 0;
        for(i=0;i<dob.length;i++){
            add = add+Number(dob.charAt(i))
        }
        return add;

    }
})