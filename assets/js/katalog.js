const card = document.querySelector(".card")

async function urunleriGetir() {
    const response = await fetch(`/carsGrupSite/assets/json/cars.json`);
    const data = await response.json();
    return data;
}

async function ekranaYaz() {
    const data = await urunleriGetir();
    for (const car of data) {
        card.innerHTML +=`
        <div class="cards">
        <img src="${car.images}" alt="">
        <h1 class="name">${car.Araba}</h1>
        <span class="year">${car.Model}</span>
        <span class="detail">${car.Detay}</span>
        </div>`
}}

urunleriGetir();
ekranaYaz();
