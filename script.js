const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const calculator = document.querySelector('.calculator');


// Dark-Theme toggle button
toggleSwitch.addEventListener('change',(e)=>{
    if (e.target.checked) {
        //here setting attribute(data-theme) in html to dark;
        document.documentElement.setAttribute('data-theme', 'dark');
        calculator.style.transition = '.40s ease-in-out'
        
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// Calculator functionality

let displayVal=document.querySelector(".display");
let calculate = document.querySelector('.equal')
let keys = document.querySelectorAll('.calNum')
let clearBtn = document.querySelector('.C');
let displayValue = '';
let deleteBtn = document.querySelector('.delete')


keys.forEach((key)=>{
key.addEventListener('click',(e)=>{
    // console.log(e.target.textContent);
    displayValue += e.target.textContent;
    displayVal.innerText = displayValue;
    })
})

clearBtn.addEventListener("click",()=>{
    displayValue = '';
    displayVal.innerText = displayValue
})

deleteBtn.addEventListener("click",()=>{
    let del = displayValue.split('');  //Converting  (displayValue) into array of characters
    del.pop();     //Deleting last element in an array
     displayValue =del.join('');  //Again converting array into string
    displayVal.innerText = displayValue;
})


calculate.addEventListener('click', () => {
    // console.log(displayValue);
    
    try {
        const result = eval(displayValue);
        displayVal.textContent = result;
        displayValue = '';
    } catch (error) {
        displayVal.textContent = 'Error';
        displayValue = '';
    }

})