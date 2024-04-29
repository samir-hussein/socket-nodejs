module.exports = (req, res) => {
    let product = {
        name: "BMW",
        type: "Car",
        model: 2024,
        price: "100000 USD"
    }

    // send to single user
    // let userId = 2; // id from db;
    // socket.notification("new-product", product, 2);

    // send to all users
    socket.notification("new-product", product);

    return res.send(product);
}