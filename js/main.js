

let divData = document.getElementById("divData");


function getData(){
    const promesa = fetch("https://freetestapi.com/api/v1/products",{method: "GET"});
    promesa
    .then( (response) => {
        response.json().then(
            (data) => {
                console.log(data);
                createCards(data);
            })
    .catch( (error) => console.log("Problema con el JSON", error))
    }
    )
    .catch( (err) => console.log("Existio un problema con la solicitud",err) )
}

function createCards(products){
    console.log(products.length)

    // Generar tarjetas con bootstrap
    products.forEach( product => {
        card = `<div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body position-relative">
                        <h5 class="card-title text-center">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                    <div class="container"> 
                        <h3 class="text-center btn-warning  m-3 pb-0 rounded-pill">${"$ " + product.price}</h3>
                    </div>
                </div>`
        divData.insertAdjacentHTML("beforeend",card)
    })
}

getData();