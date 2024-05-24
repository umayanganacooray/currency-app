import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
 
 export default function MainPage() {

    //state for the form fields
    const [date, setDate]=useState(null);
    const [sourceCurrency, setSourceCurrency]=useState("");
    const [targetCurrency, setTargetCurrency]=useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] =useState(0);
    const [amountInTargeteCurrency, setAmountInTargetCurrency] =useState(0);
    const [currencyNames, setCurrencyNames]=useState([]);
    const [loading, setLoading] = useState(true);

    //HandleSubmit
    const handleSubmit= async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.get("http://localhost:5000/convert",{
                params: {
                    date,
                    sourceCurrency,
                    targetCurrency,
                    amountInSourceCurrency,
                },
            });
            
            setAmountInTargetCurrency(response.data);
            setLoading(false);

        }catch(err){
            console.error(err);
        }
    };

    //Get all currency names
    useEffect(()=>{
        const getCurrencyNames = async() =>{
            try{
                
                const response = await axios.get(
                    "http://localhost:5000/getAllCurrencies"
                );
                setCurrencyNames(response.data);
            }catch(err){
                console.log(err);
            }
        };
        getCurrencyNames();
    }, []);

   return (
     <div>
        <h1 className="lg:mx-32 text-5xl font-bold text-blue-400">Convert Your Currencies Today</h1>
        <p className="lg:mx-32 opacity-40 py-6">This application allows you to easily convert Currencies based on the latest exchange rates.  </p>

        <div className="mt-5 flex items-center justify-center flex-col">
            <section className="w-full lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="date" 
                        onChange={(e)=> setDate(e.target.value)}
                        id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                        <select onChange = {(e)=>setSourceCurrency(e.target.value)} name={sourceCurrency} id={sourceCurrency} value={sourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select source currency">
                            <option value="">Select source currency</option>
                            {Object.keys(currencyNames).map((currency)=>(
                                <option className="p-1" key={currency} value={currency}>
                                    {currencyNames[currency]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                        <select onChange={(e)=>setTargetCurrency(e.target.value)}
                            name={targetCurrency} id={targetCurrency} value={targetCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select target currency">
                            <option value="">Select target currency</option>
                            {Object.keys(currencyNames).map((currency)=>(
                                <option className="p-1" key={currency} value={currency}>
                                    {currencyNames[currency]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                        <input 
                        onChange={(e)=>setAmountInSourceCurrency(e.target.value)}
                        type="text" id={amountInSourceCurrency} name={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount in source currency" required />
                    </div>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{" "}Get the target currency</button>
                </form>
            </section>
        </div>
        {!loading ? 
        <section className="lg:mx-80 text-xl mt-5" >
            {amountInSourceCurrency} {currencyNames[sourceCurrency]} is equals to{" "}
            <span className="text-blue-500 font-bold">{amountInTargeteCurrency}</span> in {currencyNames[targetCurrency]}
        </section>
        : null} 
     </div> 
   )
 }
 