var word = ['r', 'u', 's', 't', 'y']
var guess = document.querySelector('#guess')
var button = document.querySelector('button')
var section = document.querySelector('section')
var h1 = document.querySelector('h1')
var win = document.querySelector('#win')
var lose = document.querySelector('#lose')
var first = document.querySelector('#first')
var second = document.querySelector('#second')
var third = document.querySelector('#third')
var fourth = document.querySelector('#fourth')
var fifth = document.querySelector('#fifth')
var timer = document.querySelector('#timer')
var correct = 0
var timeLeft = 20

// const letterCount = Array.from(Array(26)).map((e, i) => i + 65);

// // Capitalized letters array
// const alphabetCap = letterCount.map((x) => String.fromCharCode(x));


button.addEventListener('click', function () {
    section.style.display = 'block'
    button.style.display = 'none'
})

guess.addEventListener('input', function () {


    if (guess.value === word[0]) { first.innerHTML = word[0]; correct++ }
    else if (guess.value === word[1]) { second.innerHTML = word[1], correct++ }
    else if (guess.value === word[2]) { third.innerHTML = word[2], correct++ }
    else if (guess.value === word[3]) { fourth.innerHTML = word[3], correct++ }
    else if (guess.value === word[4]) { fifth.innerHTML = word[4], correct++ }
    else (alert('wrong!!'))
        ;
    guess.value = null
    console.log(correct)
    if (correct == '5') {
        clearInterval(interval)
        setInterval(function () {
            win.style.display = 'block';
            section.style.display = 'none'
        }, 1000)
    }
})

var interval = setInterval(function (x) {
    if (timeLeft > 0) {
        timeLeft--; timer.innerHTML = "Timeleft: " + timeLeft
    } else {
        lose.style.display = 'block';
        section.style.display = 'none'
        clearInterval(interval)
    }
}, 1000)

