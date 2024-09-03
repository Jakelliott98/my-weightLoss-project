
let userData = [];
let selectedGender = '';


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