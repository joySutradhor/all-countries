

function allCountry() {
  const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data))
}

function displayCountry(data) {
    data.map(user => {
        // console.log(user.cca2);

        const cardContainer = document.getElementById('card-container');
        const createCard = document.createElement("div");
        createCard.classList.add('box-container')
        createCard.innerHTML = `
    <div class="card card-compact w-auto h-[320px] bg-base-100 shadow-xl">
            <figure><img src="${user.flags.png}" alt="" class="object-contain"/></figure>
            <div class="card-body">
              <h2 class="card-title">Country : ${user.name.common}</h2>
              <p>Capital : ${user.capital ? user.capital[0] : "No Capital"}</p>
              <div class="card-actions justify-end">
                
                <label for="my-modal" class="btn" onClick="details('${user.cca2}')">Details</label>
              </div>
            </div>
          </div>
    `
        cardContainer.appendChild(createCard)

    })

}


const details = async (code)=> {

  const countryUrl = `https://restcountries.com/v3.1/alpha/${code}`
  const res = await fetch(countryUrl) ;
  const data = await res.json() ;
  displayModal(data[0])
  
}
const displayModal = (data) => {
  console.log(data);
const container = document.getElementById("modal-box");
container.innerHTML = `
    <img src= "${data.flags.png}" class="h-12">
    <h3 class="font-bold text-lg mt-4">${data.name.common} <span> (${data.cca2})</span></h3>
    <p> Capital : ${data.capital? data.capital[0] : "No Capital"}</p>
    <p> Region : ${data.region} </p>
    <p> Population : ${data.population} </p>
    <p> Start Of Week : ${data.startOfWeek} </p>
    <p> TimeZone : ${(data.timezones)} </p>
    <p> Languages : ${Object.values(data.languages)} </p>
    <div class="modal-action">
      <label for="my-modal" class="btn">close!</label>
    </div>

`

}





allCountry()