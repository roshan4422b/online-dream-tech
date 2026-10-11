export function ContactCTA() {
  return (
    <section className="cta-section" aria-labelledby="contact-cta-title">
      <div className="cta-panel">
        <div className="cta-copy">
          <div className="eyebrow-label">HAVE YOU PROJECT IN MIND?</div>
          <h2 id="contact-cta-title">For instant support Please reach us</h2>
        </div>

        <div className="cta-details">
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">☎</span>
            <div>
              <h3>Phone</h3>
              <a href="tel:+4733378901">+47 333 78 901</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">✉</span>
            <div>
              <h3>Official Email</h3>
              <a href="mailto:hello@onlinedreamtech.com">hello@onlinedreamtech.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-labelledby="footer-brand">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <div id="footer-brand" className="wordmark footer-wordmark">
            <span className="brand-mark-wrap" aria-hidden="true">OD</span>
            <span>Online Dream Tech</span>
          </div>
          <p>
            Building memorable digital experiences through brand strategy, content, and design systems that grow with ambitious businesses.
          </p>
        </div>

        <div className="footer-links-wrap">
          <div>
            <h3>Useful Link</h3>
            <ul>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/aboutus">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:hello@onlinedreamtech.com">hello@onlinedreamtech.com</a></li>
              <li><a href="tel:+4733378901">+47 333 78 901</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <small>Copyright © 2026 Online Dream Tech. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
