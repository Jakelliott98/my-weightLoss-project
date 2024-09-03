
let userData = [];
let selectedGender = '';


const maleButton = document.getElementById('maleChoice');
const femaleButton = document.getElementById('femaleChoice');

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

console.log(selectGender);
