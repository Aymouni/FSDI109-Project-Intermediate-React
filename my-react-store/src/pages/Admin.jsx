function Admin() {
  return (
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
                placeholder="Enter product title"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product category"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Image</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product Image"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter product price"
              />
            </div>

            <button className="btn btn-success w-100">Add Product</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
