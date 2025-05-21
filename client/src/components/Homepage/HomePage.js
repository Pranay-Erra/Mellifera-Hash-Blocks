// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronDown, FaBars, FaArrowUp, FaGlobe, FaBox, FaHeadset, FaEnvelope, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Added social media icons
import { BsWhatsapp } from 'react-icons/bs'; // WhatsApp icon
import { FaTelegramPlane } from 'react-icons/fa'; // Telegram icon
import './HomePage.css'; // Import the external CSS
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  // State for dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const nav=useNavigate();
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for blog form
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  // State for subscription email
  const [email, setEmail] = useState('');

  // Handle mouse enter for dropdown
  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(dropdownName);
  };

  // Handle mouse leave for dropdown with a delay
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      console.log('Toggling menu, new state:', !prev); // Debug log
      return !prev;
    });
  };

  // Handle blog form submission
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    console.log('Blog Submitted:', { title: blogTitle, content: blogContent });
    setBlogTitle('');
    setBlogContent('');
  };

  // Handle subscription form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail(''); // Reset email input
  };

  // Clean up timeout on component unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);
  const handleSubmit=()=>{
    nav('/contact');
  }
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        {/* Logo */}
        <div className="logo">
          <span className="logo-part">MELLIFERA</span>
          
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About Us
          </a>
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('web3')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-toggle">
              Web 3.0 <FaChevronDown className="dropdown-icon" />
            </button>
            <div className={`dropdown-menu ${openDropdown === 'web3' ? 'show' : ''}`}>
              <a href="#" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Web 3.0 Item 1
              </a>
              <a href="#" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Web 3.0 Item 2
              </a>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-toggle">
              Products <FaChevronDown className="dropdown-icon" />
            </button>
            <div className={`dropdown-menu ${openDropdown === 'products' ? 'show' : ''}`}>
              <a href="#" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Product 1
              </a>
              <a href="#" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Product 2
              </a>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('consulting')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-toggle">
              Consulting <FaChevronDown className="dropdown-icon" />
            </button>
            <div className={`dropdown-menu ${openDropdown === 'consulting' ? 'show' : ''}`}>
              <a href="#" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Consulting 1
              </a>
              <a href="#" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Consulting 2
              </a>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('collaboration')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-toggle">
              Collaboration <FaChevronDown className="dropdown-icon" />
            </button>
            <div className={`dropdown-menu ${openDropdown === 'collaboration' ? 'show' : ''}`}>
              <a href="#" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Collaboration 1
              </a>
              <a href="#" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Collaboration 2
              </a>
            </div>
          </div>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Knowledge Center
          </a>
        </nav>
      </header>

      {/* Main Content (Hero Section) */}
      <main className="main-content">
        <h1 className="headline">
          Transforming Enterprises with Web 3.0 <br /> Solutions & Consulting Services
        </h1>
        <div className="button-group">
          <button className="btn btn-primary">
            Learn More <FaArrowRight className="btn-icon" />
          </button>
          <button className="btn btn-secondary"onClick={handleSubmit}>Contact Us</button>
        </div>
      </main>

      {/* Scroll Down Indicator */}
      {/* <div className="scroll-indicator">
        <FaChevronDown className="scroll-icon" />
      </div> */}

      {/* Section: Connecting the World with Web 3.0 */}
      <section className="web3-section">
        <h2 className="section-heading">Connecting the World with Web 3.0</h2>
        <div className="cards-container">
          <div className="card">
            <FaGlobe className="card-icon" />
            <h3 className="card-title">Web 3.0 Services</h3>
            <p className="card-description">
              Helping enterprises with a digital transformation, from Web2 to Web3
            </p>
          </div>
          <div className="card">
            <FaBox className="card-icon" />
            <h3 className="card-title">Our Products</h3>
            <p className="card-description">
              Offering a leading suite of innovative products to fuel your business moves
            </p>
          </div>
          <div className="card">
            <FaHeadset className="card-icon" />
            <h3 className="card-title">Consulting Services</h3>
            <p className="card-description">
              Accelerating enterprises’ Web3 transformation with our consulting services
            </p>
          </div>
        </div>
      </section>

      {/* Section: Knowledge Center */}
      <section className="knowledge-center-section">
        <h2 className="section-heading">Knowledge Center</h2>
        <div className="blog-form-container">
          <form className="blog-form" onSubmit={handleBlogSubmit}>
            <div className="form-group">
              <label htmlFor="blog-title">Blog Title</label>
              <input
                type="text"
                id="blog-title"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Enter the title of your blog"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="blog-content">Blog Content</label>
              <textarea
                id="blog-content"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                placeholder="Write your blog content here..."
                rows="6"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Blog
            </button>
          </form>
        </div>
      </section>

      {/* New Section: Footer */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="subscription-form">
            <p className="subscription-text">Stay up-to-date on the latest Web3 innovations</p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Mail Address"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
          <div className="footer-details">
            {/* <div className="footer-column">
              <h3>Corporate Office : Bangalore</h3>
              <p>
                576, 3rd Floor, Service Road, 100 Feet Ring Rd, near Bank of India, HSR Layout, Bengaluru, Karnataka 560102
              </p>
              <p>GSTIN : 29AAJCB6034B1ZW</p>
              <h3>Regional Office : Mumbai</h3>
              <p>WhatsApp : <a href="mailto:hello@blockstack.tech">hello@blockstack.tech</a></p>
            </div> */}
            <div className="footer-column">
              <h3>About Us</h3>
              <a href="#">Contact Us</a>
              <a href="#">Knowledge Center</a>
              <a href="#">Partner Program</a>
            </div>
            <div className="footer-column">
              <h3>Privacy Policy</h3>
              <a href="#">Terms of Use</a>
              <a href="#">GDPR Policy</a>
              <a href="#">Cookies Policy</a>
            </div>
            <div className="footer-column">
              <h3>Certified</h3>
              <div className="certifications">
                <span>ISO 2015</span>
                <span>MSME</span>
              </div>
              <h3>#startupindia</h3>
            </div>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaEnvelope size={20} /></a>
            <a href="#" className="social-icon"><FaTwitter size={20} /></a>
            <a href="#" className="social-icon"><FaLinkedin size={20} /></a>
            <a href="#" className="social-icon"><FaInstagram size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Floating Chat Icons */}
      <div className="chat-icons">
        <a href="#" className="chat-icon whatsapp">
          <BsWhatsapp size={24} />
        </a>
        <a href="#" className="chat-icon telegram">
          <FaTelegramPlane size={24} />
        </a>
      </div>

      {/* Back to Top Button */}
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

export default HomePage;