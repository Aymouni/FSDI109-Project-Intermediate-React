import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-5 py-5">
      <h1 className="display-1 fw-bold" style={{ color: "#2d6a4f" }}>
        404
      </h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        Oops! You hit a block - this page doesn't exist.
      </p>
      <Link to="/" className="btn btn-success btn-lg px-5">
        🌿 Go Home
      </Link>
    </div>
  );
}

export default NotFound;
