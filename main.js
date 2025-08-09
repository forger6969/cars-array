

const cars_mersedes = [

    { img: `https://vehicle-images.dealerinspire.com/stock-images/chrome/118269aa945555d28e821240dd58dcb2.png`, id: 1, name: 'Mersedes 63 AMG', type: "sport", country: "germany" },

    { img: `https://vehicle-images.dealerinspire.com/stock-images/chrome/7a12d0f4c167b1ce56ba684f353c0c0d.png` , id: 2, name: 'Mersedes G-class', type: "sport", country: "germany" },

    { img:`https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-2019-mercedes-tourismo-bus-painted-white-with-sleek-black-stripes-png-image_16212824.png` ,id: 3, name: 'Mersedes bus', type: "transport car", country: "germany" },
]

const cars_bmw = [

    {
        img:`https://file.aiquickdraw.com/imgcompressed/img/compressed_700d86237d260e5b5baea1c0e40128a5.webp`,
        id: 1,
        name: "bmw m5 compitetion",
        type: "sport",
        country: "germany"

    },

    {
        img:`https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2024/bmw/m4-coupe/m4/coupe/exteriorColors/2024_bmw_m4-coupe_base_032_300.png`,
        id: 2,
        name: "bmw m4 compitetion",
        type: "sport",
        country: "germany"
    },

    {
        img:`https://i.postimg.cc/W33zhGHz/Chat-GPT-Image-Aug-10-2025-12-45-33-AM.png`,
        id: 3,
        name: "bmw m3 compitetion",
        type: "sport",
        country: "germany"
    },
]

const cars_tesla = [
    {
        img:`https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb65a4058021e3d8e88cb/stills_0640_png/MY2022/50199/50199_st0640_116.png`,
        id: 1,
        name: 'tesla model x',
        type: "electro car",
        country: "USA"

    },

    {
        img:`https://www.pngmart.com/files/22/Tesla-Model-Y-PNG-Free-Download.png`,
        id: 2,
        name: 'tesla model y',
        type: "electro car",
        country: "USA"

    },

    {
        img:`https://www.pngarts.com/files/11/Tesla-Model-S-Transparent-Image.png`,
        id: 3,
        name: 'tesla model s',
        type: "electro car",
        country: "USA"

    },

]

const cars_card = document.getElementById('cars_card')

let marka = prompt('Введите марку машину : mersedes , bmw , tesla.').toLowerCase();

let index = Number(prompt('Введите индекс 0 , 1 или 2'));

let carsArray;

if (marka === "mersedes") {
    carsArray = cars_mersedes;
} else if (marka === "bmw") {
    carsArray = cars_bmw;
} else if (marka === "tesla") {
    carsArray = cars_tesla;
} else {
    alert("Такой марки машины нет!")
}

if (carsArray && carsArray[index]) {

    let car = carsArray[index];

    cars_card.innerHTML = `
    <h6> ${car.name} </h6>
    <p>тип:${car.type}</p>
    <p>страна:${car.country}</p>
    `
} else {
    cars_card.innerHTML = "<p>Машина с таким индексом не найдена</p>";
}



function findFunction() {


    const cars_card = document.getElementById('cars_card')

    let marka = prompt('Введите марку машину : mersedes , bmw , tesla.').toLowerCase();

    let index = Number(prompt('Введите индекс 0 , 1 или 2'));

    let carsArray;

    if (marka === "mersedes") {
        carsArray = cars_mersedes;
    } else if (marka === "bmw") {
        carsArray = cars_bmw;
    } else if (marka === "tesla") {
        carsArray = cars_tesla;
    } else {
        alert("Такой марки машины нет!")
    }

    if (carsArray && carsArray[index]) {

        let car = carsArray[index];

        cars_card.innerHTML = `
     <img src="${car.img}" alt="">   
    <h6> ${car.name} </h6>
    <p>тип:${car.type}</p>
    <p>страна:${car.country}</p>
    `
    } else {
        cars_card.innerHTML = "<p>Машина с таким индексом не найдена</p>";
    }


}


findFunction()