var score, roundScore, activePlayer;

score = [0,0];
roundScore = 0.5; 
activePlayer = 0;

// document.querySelector('#current-' + activePlayer).textContent=dice;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

//Reset
function reset(){
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0; 

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}


// document.querySelector('.btn-roll').addEventListener('click', btn) /* btn here is a callback function which is called by the eventlistener */
 
/*anonymous function*/
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // Display Number
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = "dice-" + dice + ".png";
    
    // Updating Score
    if( dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        reset();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    score[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

if(score[activePlayer] >= 100){
    alert(`Player - ${activePlayer + 1} is the winner! with score ${score[activePlayer]}`);
    score[0] = 0;
    score[1] = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    
    reset();
}else{
    reset();
}
});