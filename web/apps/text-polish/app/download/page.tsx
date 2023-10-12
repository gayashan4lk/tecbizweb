import React from 'react';
import TPComponent from '../convert/TPComponent';

function App() {
  return (
    <div id="payment" className="payment-container">
      <div>
        <TPComponent />
      </div>
      <div className="main-form-container">
        <div className="form-container">
          <h2>Card Information</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" className="form-input" placeholder="XXXX XXXX XXXX" required />
            </div>
            <div className="form-group">
              <label htmlFor="expMonth" className="form-label">Month & Year</label>
              <input type="text" id="expMonth" name="expMonth" className="form-input" placeholder="MM / YYYY" required />
            </div>

            <div className="form-group">
              <label htmlFor="cvv" className="form-label">CVV Number</label>
              <input type="text" id="cvv" name="cvv" className="form-input" placeholder="XXX" required />
            </div>
          </form>
        </div>

        <div className="personal-info-container">
          <h2>Personal Information</h2>
          <form action="#" method="post">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                {/* Add more country options here */}
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input type="text" id="zipCode" name="zipCode" placeholder="XXXX" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="" placeholder="XXX-XXXXXXX" required />
            </div>
            <button className='form-button'>submit</button>
          </form>
        </div>
      </div>
      <div>
        <p className='buttonR'>
          <button className='downloadbtn'>Download PDF</button>
        </p>
      </div>
    </div>
  );
}

export default App;