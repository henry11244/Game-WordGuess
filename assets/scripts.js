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
var totalWins = document.querySelector('.totalWins')
var totalwins = document.querySelector('.totalwins')
var totallose = document.querySelector('.totallose')
var totalLose = document.querySelector('.totalLose')
var winCount = 0
var loseCount = 0

var correct = 0
var timeLeft = 30
if (localStorage.getItem('winCount') === null) { winCount = 0 } else { winCount = localStorage.getItem('winCount') }
if (localStorage.getItem('loseCount') === null) { loseCount = 0 } else { loseCount = localStorage.getItem('loseCount') }



button.addEventListener('click', function () {
    section.style.display = 'block'
    button.style.display = 'none'
    var interval = setInterval(function (x) {
        if (timeLeft > 0) {
            timeLeft--; timer.innerHTML = "Timeleft: " + timeLeft
        }
        else if (correct == '5') { clearInterval(interval); }
        else {
            totalwins.innerHTML = winCount;
            totallose.innerHTML = loseCount;
            loseCount++;
            lose.style.display = 'block';
            section.style.display = 'none';
            localStorage.setItem('loseCount', loseCount);
            clearInterval(interval);

        }
    }, 1000)

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
        winCount++;
        var otherInterval = setInterval(function () {
            win.style.display = 'block';
            section.style.display = 'none';
            localStorage.setItem('winCount', winCount)
            totalWins.innerHTML = winCount;
            totalLose.innerHTML = loseCount;
        }, 1000)
    }
})


