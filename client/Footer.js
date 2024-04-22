
import React from 'react';

function Footer() {
  return (
    <footer >
      <div className="footer-content" style={{ maxWidth: '960px', margin: '0 auto' }}>
        <p>&copy; {new Date().getFullYear()} BlogVerse. All rights reserved.</p>
        <p>Contact us: raghav@gmail.com</p>
        <p>Follow us on social media: <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      </div>
    </footer>
  );
}

export default Footer;
