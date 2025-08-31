import './Footer.css';
function Footer(){


    return <div>
 <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Popular Category</h3>
        <ul>
            <li><a href="/">Car</a></li>
            <li><a href="/about">Flat Rent</a></li>
            <li><a href="/services">Mobile Phone</a></li>
            <li><a href="/contact">jobs</a></li>
          </ul>
        </div>
        <div className="footer-section">
        <h3>Treding Search</h3>
          <ul>
            <li><a href="/">Bike</a></li>
            <li><a href="/about">Watches</a></li>
            <li><a href="/services">Dog</a></li>
            <li><a href="/contact">Books</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
        <ul>
            <li><a href="/">Olx Blog</a></li>
            <li><a href="/about">Olx Buiness</a></li>
            <li><a href="/services">About Dibizzle Group</a></li>
            <li><a href="/contact">Contact US</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: 3162709897</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OLx All Rights Reserved.</p>
      </div>
    </footer>
    </div>
}

export default Footer