import React from 'react';
import TPComponent from '../convert/TPComponent';

function App() {
  return (
    <div id="payment" className="payment-container">
      <div>
        <TPComponent />
      </div>
      <div className="max-w-screen-xl mx-auto p-10 bg-black text-white flex justify-center"> 
        <div className="transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105 mr-2 w-96 p-5 border border-gray-300 rounded-lg shadow-md bg-zinc-900">
          <h1>Card Information</h1>
          <form action="#" method="post">
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="cardNumber" className="font-bold">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" placeholder="XXXX XXXX XXXX" required />
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="expMonth" className="form-label">Month & Year</label>
              <input type="text" id="expMonth" name="expMonth" className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" placeholder="MM / YYYY" required />
            </div>
            <div className="mb-4 flex-1 mr-4">
              <label htmlFor="cvv" className="form-label">CVV Number</label>
              <input type="text" id="cvv" name="cvv" className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" placeholder="XXX" required />
            </div>
          </form>
        </div>

        <div className="transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105 mr-2 w-96 p-5 border border-gray-300 rounded-lg shadow-md bg-zinc-900">
          <h2>Personal Information</h2>
          <form action="#" method="post">
            <div className="flex justify-between">
              <div className="mb-4 flex-1 mr-4">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" id="cvv" name="cvv" className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" placeholder="XXX" required />
              </div>
              <div className="mb-4 flex-1 mr-4">
                <label htmlFor="lastName">Last Name</label>
                <input className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="mb-4 flex-1">
              <label htmlFor="country">Country</label>
              <select className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" id="country" name="country">
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                {/* Add more country options here */}
              </select>
            </div>
            <div className="flex justify-between">
              <div className="mb-4 flex-1 mr-4">
                <label htmlFor="city">City</label>
                <input className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" type="text" id="city" name="city" required />
              </div>
              <div className="mb-4 flex-1">
                <label htmlFor="zipCode">ZIP Code</label>
                <input className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" type="text" id="zipCode" name="zipCode" placeholder="XXXX" required />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input className="text-black transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out w-full p-2 border border-gray-300 rounded" type="tel" id="phoneNumber" name="" placeholder="XXX-XXXXXXX" required />
            </div>
            <button className='transform scale-100 hover:scale-105 transition duration-300 ease-in-out bg-blue-600 text-white p-2 px-4 rounded-xl cursor-pointer hover:bg-blue-400'>submit</button>
          </form>
        </div>
      </div>
      <div>
        <p className='text-center'>
          <button className='transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out text-center bg-green-600 text-white text-lg px-8 py-4 rounded-xl hover:bg-green-400'>Download PDF</button>
        </p>
      </div>
    </div>
  );
}

export default App;