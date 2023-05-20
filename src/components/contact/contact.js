import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="about-content-sections">
          <div className="left-section">
            <p className="title">Send me a message</p>
            <p className="subtitle">
              Whether you wish to discuss new ideas or have a project for me,
              simply fill this form and I’ll get back to you soon.
            </p>
          </div>

          <div className="right-section">
            <form>
              <div className="name">
                <div className="form-input">
                  <label>First Name</label>
                  <input type="text"></input>
                </div>
                <div className="form-input">
                  <label>Last Name</label>
                  <input type="text"></input>
                </div>
              </div>

              <div className="email">
                <div className="form-input">
                  <label>Email</label>
                  <input type="email"></input>
                </div>
              </div>

              <div className="message">
                <div className="form-input">
                  <label>Message</label>
                  <textarea id="messageArea"></textarea>
                </div>
              </div>

              <div className="form-button">
                <button>SUBMIT</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
