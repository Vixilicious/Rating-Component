let ratingNumbers = document.querySelectorAll('.btnRate');
let button = document.getElementById('submitBtn');
let evaluation = document.querySelector('.container1');
let thanks = document.querySelector('.container2');
let selectedRating = document.getElementById('rating');
let selectBtn = document.getElementById('spanText');
let spanSub = document.getElementById('spanSub');


spanSub.style.display = 'none';

for (let i = 0; i < ratingNumbers.length; i++) {
    ratingNumbers[i].addEventListener('click', () => {
        let rating = ratingNumbers[i].innerHTML;
        
        button.disabled = false;
        selectBtn.style.display = 'none';
        spanSub.style.display = 'block';

    button.addEventListener('click', () => {
        evaluation.style.display = 'none';
        thanks.style.display = 'flex';
        selectedRating.innerHTML = rating;
    })
    })
}

