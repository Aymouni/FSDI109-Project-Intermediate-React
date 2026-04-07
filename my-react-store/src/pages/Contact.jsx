import { useState } from "react";

function Contact() {
  const [isEmailVisible, setIsEmailVisible] = useState(true);

  function showEmail() {
    setIsEmailVisible(true);
  }

  function hideEmail() {
    setIsEmailVisible(false);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-2">Contact Us</h1>
      <p className="text-center text-muted mb-4">
        Have a question or feedback? We'd love to hear from you!
      </p>

      <div className="card shadow-sm p-4">
        <div className="mb-3">
          <label className="form-label fw-bold">Your Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Message</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button className="btn btn-success w-100">Send Message</button>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <div className="bg-dark bg-opacity-50 rounded p-4 text-white text-center">
          <p>📍 123 Green Street, San Diego, CA</p>
          <p>📞 (555) 123-4567</p>

          {isEmailVisible == true ? (
            <p>✉️ hello@organika.com</p>
          ) : (
            <p>Click the button to show the email</p>
          )}

          <button
            className="btn btn-outline-light btn-sm me-2"
            onClick={showEmail}
          >
            Show my Email
          </button>
          <button className="btn btn-outline-light btn-sm" onClick={hideEmail}>
            Hide my Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
