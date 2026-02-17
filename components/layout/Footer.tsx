export default function Footer() {
  return (
    <footer className="rm-footer">

      {/* TOP BAR */}
      <div className="rm-footer-top">
        <div className="rm-footer-top-inner">
          <div>
            <strong>Subscribe to our newsletter</strong><br />
            <small>Get updates on new products & offers</small>
          </div>

          <div className="rm-footer-subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="rm-footer-main">

        {/* BRAND */}
        <div>
          <h4>Royal Mart</h4>
          <p>
            Premium Quality Clothing Brand in Bangladesh.<br />
            Quality • Comfort • Style
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/hoodie">Hoodie</a></li>
            <li><a href="/tshirt">T-Shirt</a></li>
            <li><a href="/men">Men</a></li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h4>Customer Care</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h4>Contact</h4>
          <p>📞 01631-185166</p>
          <p>📧 support@royalmart.com</p>
          <p>📍 Dhaka, Bangladesh</p>

          <div className="rm-social">
            <a href="https://facebook.com" target="_blank">FB</a>
            <a href="https://instagram.com" target="_blank">IG</a>
            <a href="https://youtube.com" target="_blank">YT</a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="rm-footer-bottom">
        <p>© {new Date().getFullYear()} Royal Mart. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
