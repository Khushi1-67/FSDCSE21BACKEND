const express = require("express");

const app = express();
app.use(express.json());

let products = [];

for (let i = 1; i <= 100; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        price: i * 100,
        category: i % 2 === 0 ? "Electronics" : "Accessories",
        stock: i + 10
    });
}

app.get("/", (req, res) => {
    res.json({ message: "Product REST API is running" });
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

app.post("/products", (req, res) => {
    const { name, price, category, stock } = req.body;

    if (!name || price === undefined || !category || stock === undefined) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const product = {
        id: products.length + 1,
        name,
        price,
        category,
        stock
    };

    products.push(product);

    res.status(201).json(product);
});

app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const { name, price, category, stock } = req.body;

    products[index] = {
        id,
        name,
        price,
        category,
        stock
    };

    res.json(products[index]);
});

app.patch("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    Object.assign(product, req.body);

    res.json(product);
});

app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});