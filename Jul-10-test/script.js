let btn = document.querySelector('#btn');
let mainDiv = document.querySelector('#mainDiv');

const getData = async () => {
    const url = ' https://jsonplaceholder.typicode.com/users ';
    const response = await fetch(url);
    const data = await response.json();
    showUser(data);
};

const showUser = (data) => {
    mainDiv.innerHTML =`
    <div>
         <h5>${data[0].name}</h5>
         <h6>${data[0].email}</h6>
         <h5>${data[0].address.city}</h5>
         <h6>${data[0].website}</h6>
         <div class="button">
            <button class = "btn btn-secondary" type="button" id="btn">Fetch Data</button>
         </div>  

    </div>`
};

btn.addEventListener('click', getData);






