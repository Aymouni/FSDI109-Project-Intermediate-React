function Home() {
  return (
    <div>
      <div className="text-center py-4">
        <p className="lead" style={{ color: "#2d6a4f", fontSize: "1.2rem" }}>
          Your trusted source for fresh, organic fruits and berries 🌿
        </p>
        <a href="/shop" className="btn btn-success btn-lg px-5 mt-2">
          Shop Now
        </a>
      </div>

      <div className="container my-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h2>🍓</h2>
              <h5 className="fw-bold mt-2">Fresh Berries</h5>
              <p className="text-muted">
                Handpicked daily from local organic farms for maximum freshness
                and flavor.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h2>🍎</h2>
              <h5 className="fw-bold mt-2">Organic Fruits</h5>
              <p className="text-muted">
                100% natural, no pesticides, no preservatives — just pure
                goodness.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h2>🚚</h2>
              <h5 className="fw-bold mt-2">Fast Delivery</h5>
              <p className="text-muted">
                Get your organic favorites delivered fresh straight to your
                doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-5" style={{ backgroundColor: "#f4f9f4" }}>
        <h3 className="fw-bold mb-3">Ready to eat healthier? 🌱</h3>
        <p className="text-muted mb-4">
          Join thousands of happy customers living a fresher, greener lifestyle.
        </p>
        <a href="/shop" className="btn btn-success btn-lg px-5">
          Browse Our Products
        </a>
      </div>
    </div>
  );
}

export default Home;
