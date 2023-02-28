

const quotesList = quotes =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => display(data))
}

const display = data =>{
 const box = document.getElementById('quotes');
        box.innerHTML = data.quote ;
}


