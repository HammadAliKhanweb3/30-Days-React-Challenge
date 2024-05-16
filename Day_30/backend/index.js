// Ensure you have installed express first by running: npm install express

const app = express();

app.get("/app/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
    },
    {
      id: 2,
      name: "table glass",
      price: 250,
    },
  ];

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
