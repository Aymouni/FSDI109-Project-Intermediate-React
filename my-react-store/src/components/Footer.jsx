import "./Footer.css"

// Logic
function Footer(){
    return(
        <footer className="bg-dark text-light mt-5 py-4">
            <div className="container text-center">
                <h5 className="fw-bold mb-2">🌿 Organika</h5>
                <p className="text-secondary mb-2">Fresh, organic, and locally sourced fruits and berries.</p>
                <div className="d-flex justify-content-center gap-3 mb-3">
                    <a href="#" className="text-secondary text-decoration-none">Home</a>
                    <a href="#" className="text-secondary text-decoration-none">Shop</a>
                    <a href="#" className="text-secondary text-decoration-none">About</a>
                    <a href="#" className="text-secondary text-decoration-none">Contact</a>
                </div>
                <p className="text-secondary small mb-0">© 2026 Organika. All rights reserved.</p>
            </div>
        </footer>
    )
}

// Export
export default Footer;