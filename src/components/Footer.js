import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#C0C0C0",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        color: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "20px",
        }}
      >
        {/* About Us */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>ABOUT US</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>About Y Axis</li>
            <li>Careers</li>
            <li>CSR</li>
            <li>Office Network</li>
            <li>Press and News</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>TESTIMONIALS</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>Success Videos</li>
            <li>Customer Reviews</li>
            <li>Social Reviews</li>
            <li>Visa Success</li>
          </ul>
        </div>

        {/* Blogs */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>BLOGS</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>Immigration News</li>
            <li>Immigration Blog</li>
            <li>Overseas Jobs</li>
            <li>Newsletter</li>
            <li>Visa Stories</li>
          </ul>
        </div>

        {/* Indian Languages */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>INDIAN LANGUAGES</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>Hindi</li>
            <li>Tamil</li>
            <li>Gujarati</li>
            <li>Telugu</li>
            <li>Marathi</li>
            <li>Kannada</li>
          </ul>
        </div>

        {/* Foreign Languages */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>FOREIGN LANGUAGES</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>Arabic</li>
            <li>French</li>
            <li>Chinese</li>
            <li>German</li>
            <li>Korean</li>
            <li>Ukrainian</li>
            <li>Italian</li>
          </ul>
        </div>

        {/* Contact Us */}
        {/* <div style={{ flex: 1, minWidth: "200px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>CONTACT US</h4>
          <p>INDIA</p>
          <p>+91 7670800001</p>
          <p>info@y-axis.com</p>
          <p>www.y-axis.com</p>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          borderTop: "3px solid #FF0000",
          paddingTop: "20px",
          backgroundColor: "#008080",
          color:"#FFFFFF",
         
        }}
      >
        <div style={{ display: "flex", gap: "10px"}}>
          <div>
            <p>AUSTRALIA</p>
            <p>+61 399394818</p>
            <p>australia@y-axis.com.au</p>
            <p>www.y-axis.com.au</p>
          </div>
          <div>
            <p>UAE</p>
            <p>+971 (0)42483900</p>
            <p>dubai@y-axis.ae</p>
            <p>www.y-axis.ae</p>
          </div>
          <div>
            <p>UK</p>
            <p>+44 1253226009</p>
            <p>info@y-axis.co.uk</p>
            <p>www.y-axis.co.uk</p>
          </div>
          <div>
            <p>Canada</p>
            <p>+1 226 243 2213</p>
            <p>info@y-axis.ca</p>
            <p>www.y-axis.ca</p>
          </div>
          <div>
            <p>India</p>
            <p>+1 226 243 2213</p>
            <p>info@y-axis.ca</p>
            <p>www.y-axis.ca</p>
          </div>
        </div>

        <div>
          <p>FOLLOW US</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="/"><img src="/youtube.png" alt="YouTube" /></a>
            <a href="/"><img src="/instagram.png" alt="Instagram" /></a>
            <a href="/"><img src="/linkedin.png" alt="LinkedIn" /></a>
            <a href="/"><img src="/facebook.png" alt="Facebook" /></a>
          </div>
        </div>

        <div>
          <h4>SUBSCRIBE NEWSLETTER</h4>
          <form style={{ display: "flex", gap: "10px" }}>
            <input
              type="email"
              placeholder="Enter your Email"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
