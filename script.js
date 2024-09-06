
let selectedGender = '';
let selectedActivity = '';
let activityFactor ='';
let usersBmr = '';

/* Set the different activity for calucation*/

const sedentary = document.getElementById('sedentary');
const lightActivity = document.getElementById('lightActivity');
const moderatelyActive = document.getElementById('moderatelyActive');
const veryActive = document.getElementById('veryActive');

const maleButton = document.getElementById('maleChoice');
const femaleButton = document.getElementById('femaleChoice');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

let form = document.getElementById('userForm');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const user = {
        age: age,
        weight: weight,
        height: height,
        gender: selectedGender,
    };

    const bmr = calculateBmr(user.weight, user.height, user.age, user.gender);
    usersBmr = bmr;
    console.log("BMR = " + bmr);

})

function selectGender(gender){

    maleButton.classList.remove('active');
    femaleButton.classList.remove('active');

    if (gender === 'male'){
        maleButton.classList.add('active');
        selectedGender = 'male';
    } else if (gender === 'female'){
        femaleButton.classList.add('active');
        selectedGender = 'female';
    }
}

maleButton.addEventListener('click', function(){
    selectGender('male');
});

femaleButton.addEventListener('click', function(){
    selectGender('female');
});


/* BMR Function */

function calculateBmr(weight, height, age, gender){
    if (gender === 'male'){
        return (10 * weight) + (6.25 * height) + (5 * age) + 5;
    } else if (gender === selectedGender){
        return (10 * weight) + (6.25 * height) + (5 * age) - 161;
    }

};

/* Energy Expenditure Function 

function calculateTdee(bmr, activityFactor){
    DailyEnergyExpenditure = bmr * activityFactor
}

*/

function activitySelected(activity){

    sedentary.classList.remove('activeChoice');
    lightActivity.classList.remove('activeChoice');
    moderatelyActive.classList.remove('activeChoice');
    veryActive.classList.remove('activeChoice');

    if (activity === 'sedentary'){
        sedentary.classList.add('activeChoice');
        selectedActivity = 'sedentary';
    } else if (activity === 'lightActivity'){
        lightActivity.classList.add('activeChoice');
        selectedActivity = 'lightActivity';
    } else if (activity === 'moderatelyActive'){
        modActive.classList.add('activeChoice');
        selectedActivity = 'moderatelyActive';
    } else if (activity === 'veryActive'){
        veryActive.classList.add('activeChoice');
        selectedActivity = 'veryActive';
    }
}

sedentary.addEventListener('click', function(){
    activitySelected('sedentary');
});
lightActivity.addEventListener('click', function(){
    activitySelected('lightActivity');
});
moderatelyActive.addEventListener('click', function(){
    activitySelected('moderatelyActive');
});
veryActive.addEventListener('click', function(){
    activitySelected('veryActive');
});


function changePage(currentPage, nextPage){

    if (currentPage) {
        currentPage.classList.remove('active');
    }

    if (nextPage){
        nextPage.classList.add('active');
    }

}

document.addEventListener('DOMContentLoaded', () => {
    changePage(page1, page1);

    document.getElementById('nextPage1').addEventListener('click', () => {
        changePage(page1, page2);
    })

    document.getElementById('nextPage2').addEventListener('click', () => {
        changePage(page2, page3);
    })

})

