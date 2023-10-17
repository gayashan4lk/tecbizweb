import React from 'react';
import TPComponent from '../convert/TPComponent';

function App() {
  return (
    <div id="payment" className="payment-container">
      <div>
        <TPComponent />
      </div>
      <div className="max-w-screen-xl mx-auto p-10 rounded-lg bg-black text-white flex">
        <div className="mr-2 w-96 mx-auto p-5 border border-gray-300 rounded-lg shadow-md bg-zinc-900">
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

        <div className="mr-2 w-96 mx-auto p-5 border border-gray-300 rounded-lg shadow-md bg-zinc-900">
          <h2>Personal Information</h2>
          <form action="#" method="post">
            <div className="flex justify-between flex-1 mr-4">
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" id="cvv" name="cvv" className="w-full p-2 border border-gray-300 rounded" placeholder="XXX" required />
            </div>
              <div className="mb-4 flex-1 mr-4">
                <label htmlFor="lastName">Last Name</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" id="lastName" name="lastName"  required />
              </div>
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="country">Country</label>
              <select className="w-full p-2 border border-gray-300 rounded" id="country" name="country">
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                {/* Add more country options here */}
              </select>
            </div>
            <div className="flex justify-between flex-1 mr-4">
              <div className="mb-4 flex-1 mr-4">
                <label  htmlFor="city">City</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" id="city" name="city" required />
              </div>
              <div className="mb-4 flex-1 mr-4">
                <label htmlFor="zipCode">ZIP Code</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" id="zipCode" name="zipCode" placeholder="XXXX" required />
              </div>
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="email">Email</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="tel" id="phoneNumber" name="" placeholder="XXX-XXXXXXX" required />
            </div>
            <button className='bg-blue-600 text-white p-2 px-4 rounded cursor-pointer hover:bg-blue-400'>submit</button>
          </form>
        </div>
      </div>
      <div>
        <p className='text-center'>
          <button className='cursor-pointer transition duration-300 ease-in-out text-center bg-green-400 text-white text-lg px-8 py-4 rounded-full hover:bg-green-600'>Download PDF</button>
        </p>
      </div>
    </div>
  );
}

export default App;