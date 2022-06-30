var word = ['r', 'u', 's', 't', 'y']
var guess = document.querySelector('#guess')
var body = document.querySelector('body')
var start = document.querySelector('#start')
var section = document.querySelector('section')
var h1 = document.querySelector('h1')
var answer = document.querySelector('#answer')
var win = document.querySelector('#win')
var lose = document.querySelector('#lose')
var timer = document.querySelector('#timer')
var totalWins = document.querySelector('.totalWins')
var totalwins = document.querySelector('.totalwins')
var totallose = document.querySelector('.totallose')
var totalLose = document.querySelector('.totalLose')
var winCount = 0
var loseCount = 0

var correct = 0
var timeLeft = 40
if (localStorage.getItem('winCount') === null) { winCount = 0 } else { winCount = localStorage.getItem('winCount') }
if (localStorage.getItem('loseCount') === null) { loseCount = 0 } else { loseCount = localStorage.getItem('loseCount') }



start.addEventListener('click', function () {
    section.style.display = 'block'
    start.style.display = 'none'
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

document.addEventListener('keydown', function (e) {
    var key = e.key.toLowerCase();
    console.log(key)
    for (var i = 0; i < word.length; i++) {
        if (key === word[i]) { answer.children[i].innerHTML = word[i]; correct++ }
    };
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


