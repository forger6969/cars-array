






const cars_mersedes = [

    { id: 1, name: 'Mersedes 63 AMG', type: "sport", country: "germany" },

    { id: 2, name: 'Mersedes 63 cls', type: "sport", country: "germany" },

    { id: 3, name: 'Mersedes bus', type: "transport car", country: "germany" },
]

const cars_bmw = [

    {
        id: 1,
        name: "bmw m5 compitetion",
        type: "sport",
        country: "germany"

    },

    {
        id: 2,
        name: "bmw m4 compitetion",
        type: "sport",
        country: "germany"
    },

    {
        id: 3,
        name: "bmw m3 compitetion",
        type: "sport",
        country: "germany"
    },
]

const cars_tesla = [
    {
        id: 1,
        name: 'tesla model x',
        type: "electro car",
        country: "USA"

    },

    {
        id: 2,
        name: 'tesla model y',
        type: "electro car",
        country: "USA"

    },

    {
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









    const cars_mersedes = [

        { id: 1, name: 'Mersedes 63 AMG', type: "sport", country: "germany" },

        { id: 2, name: 'Mersedes 63 cls', type: "sport", country: "germany" },

        { id: 3, name: 'Mersedes bus', type: "transport car", country: "germany" },
    ]

    const cars_bmw = [

        {
            id: 1,
            name: "bmw m5 compitetion",
            type: "sport",
            country: "germany"

        },

        {
            id: 2,
            name: "bmw m4 compitetion",
            type: "sport",
            country: "germany"
        },

        {
            id: 3,
            name: "bmw m3 compitetion",
            type: "sport",
            country: "germany"
        },
    ]

    const cars_tesla = [
        {
            id: 1,
            name: 'tesla model x',
            type: "electro car",
            country: "USA"

        },

        {
            id: 2,
            name: 'tesla model y',
            type: "electro car",
            country: "USA"

        },

        {
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


}


findFunction()