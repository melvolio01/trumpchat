const newQuote = document.getElementById('new-quote');
const quoteDiv = document.getElementById('quote-div');
const colorArr = ['#8bc34a', '#ffab40', '#90a4ae', '#90caf9', '#ff5252', '#ff80ab', '#8d6e63', '#212121', '#4e342e', '#bf360c', '#00b0ff'];
const welcome = document.getElementById('welcome');
// const body = document.getElementsByTagName('body');

newQuote.addEventListener('click', function(e){
    newQuote.innerText = 'New quote';
    getApiData();
    setBackground();
    welcome.style.display = 'none';
});


function getApiData(){
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        quoteDiv.innerHTML = `
                    <p><i class="fas fa-quote-left"></i>${data.message}<i class="fas fa-quote-right"></i><p>
                            `;
    })
}

function setBackground(){
    randomColor = colorArr[Math.floor(Math.random()*colorArr.length)];
    console.log(randomColor);
    document.body.style.backgroundColor = `${randomColor}`;
    newQuote.style.backgroundColor = `${randomColor}`;
}

