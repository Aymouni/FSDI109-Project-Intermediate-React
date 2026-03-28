// Prodcut into the catalog
const catalog = [
    {
        "title":"Orange",
        "category":"Fruit",
        "price":11.99,
        "image":"orange.png",
        "_id":"1" // Unique
    },
    {
        "title":"Banana",
        "category":"Fruit",
        "price":4.99,
        "image":"banana.png",
        "_id":"4" // Unique
    },
    {
        "title":"Apple",
        "category":"Fruit",
        "price":8.99,
        "image":"apple.png",
        "_id":"2" // Unique
    },
    {
        "title":"Strawberries",
        "category":"Berry",
        "price":15.99,
        "image":"strawberry.png",
        "_id":"3" // Unique
    },
    {
        "title":"Kiwi",
        "category":"Berry",
        "price":5.99,
        "image":"kiwi.png",
        "_id":"5" // Unique
    }
];

class DataService {
    getProducts(){
        return catalog;
    }
}

export default DataService;