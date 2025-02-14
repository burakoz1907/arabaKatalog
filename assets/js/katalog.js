const card = document.querySelector(".card");

async function urunleriGetir() {
  const response = await fetch("public/assets/json/cars.json");

  if (!response.ok) {
    console.error("Dosya yüklenemedi:", response.status);
    return [];
  }

  const data = await response.json();
  return data;
}

async function ekranaYaz() {
  const data = await urunleriGetir();

  if (data.length > 0) {
    for (const car of data) {
      card.innerHTML += `
            <div class="cards">
                <img src="${car.images}" alt="Araba Resmi">
                <h1 class="name">${car.Araba}</h1>
                <span class="year">${car.Model}</span>
                <span class="detail">${car.Detay}</span>
            </div>`;
    }
  } else {
    console.error("Veri yüklenemedi veya boş.");
  }
}

ekranaYaz();
