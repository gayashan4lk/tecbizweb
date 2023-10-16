import React from 'react';
import TPComponent from '../convert/TPComponent';

function App() {
  return (
    <div id="payment" className="payment-container">
      <div>
        <TPComponent />
      </div>
      <div className="max-w-screen-xl mx-auto p-4 rounded-lg bg-gray-800 text-white">
        <div className="w-96 mx-auto p-5 border border-gray-300 rounded-lg shadow-md">
          <h2>Card Information</h2>
          <form action="#" method="post">
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="cardNumber" className="font-bold">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" className="w-full p-2 border border-gray-300 rounded" placeholder="XXXX XXXX XXXX" required />
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="expMonth" className="form-label">Month & Year</label>
              <input type="text" id="expMonth" name="expMonth" className="w-full p-2 border border-gray-300 rounded" placeholder="MM / YYYY" required />
            </div>

            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="cvv" className="form-label">CVV Number</label>
              <input type="text" id="cvv" name="cvv" className="w-full p-2 border border-gray-300 rounded" placeholder="XXX" required />
            </div>
          </form>
        </div>

        <div className="w-96 mx-auto p-5 border border-gray-300 rounded-lg shadow-md">
          <h2>Personal Information</h2>
          <form action="#" method="post">
            <div className="flex justify-between flex-1 mr-4">
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="cvv" className="form-label">CVV Number</label>
              <input type="text" id="cvv" name="cvv" className="w-full p-2 border border-gray-300 rounded" placeholder="XXX" required />
            </div>
              <div className="mb-4 flex-1 mr-4">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                {/* Add more country options here */}
              </select>
            </div>
            <div className="flex justify-between flex-1 mr-4">
              <div className="mb-4 flex-1 mr-4">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required />
              </div>
              <div className="mb-4 flex-1 mr-4">
                <label htmlFor="zipCode">ZIP Code</label>
                <input type="text" id="zipCode" name="zipCode" placeholder="XXXX" required />
              </div>
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="" placeholder="XXX-XXXXXXX" required />
            </div>
            <button className='bg-blue-500 text-white p-2 px-4 rounded cursor-pointer'>submit</button>
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