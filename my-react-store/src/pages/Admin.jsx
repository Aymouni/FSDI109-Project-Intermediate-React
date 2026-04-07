import { useState } from "react";

function Admin() {
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);

  function saveProduct() {
    console.log("Saving Products");

    const product = {
      title: productTitle,
      category: productCategory,
      image: productImage,
      price: productPrice,
    };

    setProducts([...products, product]);

    setProductTitle("");
    setProductCategory("");
    setProductImage("");
    setProductPrice("");
  }

  return (
    <div>
      <div className="container mt-5" style={{ maxWidth: "600px" }}>
        <h1 className="text-center mb-2">Store Administration</h1>
        <p className="text-center text-muted mb-4">
          Manage your products and store settings.
        </p>

        <section>
          <h2 className="mb-3">Add Product</h2>

          <div className="card shadow-sm p-4">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-bold">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={productTitle}
                  onChange={(event) => setProductTitle(event.target.value)}
                  placeholder="Enter product title"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Category</label>
                <input
                  type="text"
                  className="form-control"
                  value={productCategory}
                  onChange={(event) => setProductCategory(event.target.value)}
                  placeholder="Enter product category"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Image <span className="text-secondary">(URL)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={productImage}
                  onChange={(event) => setProductImage(event.target.value)}
                  placeholder="Enter product Image URL (https://...)"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={productPrice}
                  onChange={(event) => setProductPrice(event.target.value)}
                  placeholder="Enter product price"
                />
              </div>

              <button className="btn btn-success w-100" onClick={saveProduct}>
                Add Product
              </button>
            </div>
          </div>

          <hr />
        </section>
      </div>

      <div className="container mt-4">
        <div className="d-flex flex-column gap-2 mb-3 align-items-center">
          <div className="bg-dark bg-opacity-50 rounded p-3 align-self-center">
            <h5 className="text-white mb-0">Products List:</h5>
          </div>

          {products.length == 0 && (
            <div className="bg-dark bg-opacity-50 rounded p-3 align-self-center">
              <p className="text-white mb-0">There aren't any products</p>
            </div>
          )}
        </div>

        {products.length > 0 && (
          <div className="row g-3">
            {products.map((product) => (
              <div key={product.title} className="col-md-4">
                <div className="card h-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top object-fit-cover"
                    style={{ height: "200px" }}
                  />
                  <div className="card-body">
                    <p className="text-muted mb-1">{product.category}</p>
                    <h5>{product.title}</h5>
                    <h5 className="text-success">${product.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
