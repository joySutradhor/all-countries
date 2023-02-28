

const randomUsers = () => {
    fetch ("https://randomuser.me/api/?gender=female")
    .then(res => res.json())
    .then(data => displayUsers(data))
}

const displayUsers = (data) =>{
    const person = data.results[0];
    const information = document.getElementById("info");
    const para = document.createElement("div")
    para.innerHTML = `
    <img src="${person.picture.large}">
    <hr>
    <li> Name : ${person.name.title + " " + person.name.first +" " + person.name.last} </li>
    <li> Gender : ${person.gender} </li>
    <li> Street Name : ${person.location.street.name} </li>
    <li> Street Number : ${person.location.street.number} </li>
    <li> City : ${person.location.city} </li>
    <li> Postcode : ${person.location.postcode} </li>
    <li> State : ${person.location.state} </li>
    <li> country : ${person.location.country} </li>
    <li> Timezone : ${person.location.timezone.description} </li>
    <hr>
    <li> Email : ${person.email}</li>
    <li> UserName : ${person.login.username}</li>
    <li> Password : ${person.login.password}</li>
    <li> DOB : ${person.dob.age} Age</li>
    <li> Phone : ${person.phone}</li>
    

    
    `
information.appendChild(para)
// console.log(data.results)

}
randomUsers()

