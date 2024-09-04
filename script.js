
let userData = [];
let selectedGender = '';
let selectedActivity = '';
let usersBmr = '';


let bmrWeight = userData.weight;
let bmrHeight = userData.height;
let bmrAge = userData.age;

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

    const age = document.getElementById('age').value ;
    const weight = document.getElementById('weight').value ;
    const height = document.getElementById('height').value ;

    const user = {
        age: age,
        weight: weight,
        height: height,
        gender: selectedGender,
    };

    userData.push(user);

    console.log(userData);

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

/* Function not working - struggling to connect to the userData to input into the funciton*/

function calculateBmr(weight, height, age){

    bmr = (10 * weight) + (6.25 * height) + (5 * age) + 5;
    return bmr;
};

calculateBmr(bmrWeight, bmrHeight, bmrAge);

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

