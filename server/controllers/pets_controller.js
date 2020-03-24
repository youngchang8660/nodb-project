let pets = [
    {
        breed: "husky",
        price: '1200',
        id: 0,
        image: 'https://images.unsplash.com/photo-1566903697359-6f8ee1c1ab20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
];
let id = 1;

module.exports = {
    get: (req, res) => {
        res.status(200).send(pets)
    },
    add: (req, res) => {
        console.log(req.body)
        const {breed, image, price} = req.body;
        pets.push({id, breed, image, price})
        id++;
        res.status(200).send(pets)
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        // console.log(deleteID)
        // console.log('pets', pets)
        petIndex = pets.findIndex(pet => pet.id == deleteID)
        // console.log('petindex', petIndex)
        pets.splice(petIndex, 1)
        // console.log('pets', pets)
        res.status(200).send(pets)
    },
    update: (req, res) => {
        console.log(req.params, req.body)
        const {breed, image, price} = req.body
        const updateID = req.params.id;
        const petIndex = pets.findIndex(pet => pet.id === +updateID)
        let pet = pets[petIndex]

        pets[petIndex] = {
            id: pet.id,
            breed: breed || pet.breed,
            image: image || pet.image,
            price: price || pet.price
        }
        // console.log(pets)
        res.status(200).send(pets)
    }
}