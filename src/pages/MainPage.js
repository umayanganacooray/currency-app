import { useState } from "react"
import React from 'react'
 
 export default function MainPage() {

    //state for the form fields
    const [date, setDate]=useState(null);
    const [sourceCurrency, setSourceCurrency]=useState("");
    const [targetCurrency, setTargetCurrency]=useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] =useState(0);
    const [amountInTargeteCurrency, setAmountInTargetCurrency] =useState(0);

   return (
     <div>
        <h1 className="lg:mx-32 text-5xl font-bold text-blue-400">Convert Your Currencies Today</h1>
        <p className="lg:mx-32 opacity-40 py-6">This application allows you to easily convert Currencies based on the latest exchange rates.  </p>

        <div className="mt-5 flex items-center justify-center flex-col">
            <section className="w-full lg:w-1/2">
                <form class="">
                <div class="mb-4">
                    <label htmlForfor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                    <input type="date" id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-4">
                    <label htmlForfor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                    <select name={sourceCurrency} id={sourceCurrency} value={sourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select source currency">
                    <option value="">Select source currency</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label htmlForfor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                    <select name={targetCurrency} id={targetCurrency} value={targetCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select target currency">
                    <option value="">Select target currency</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label htmlForfor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                    <input type="text" id={amountInSourceCurrency} name={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount in source currency" required />
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{" "}Get the target currency</button>
                </form>
            </section>
        </div>
     
     </div> 
   )
 }
 