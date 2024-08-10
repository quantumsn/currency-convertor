import { useState, useEffect, useCallback } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
  let [amount, setAmount] = useState(0);
  let [from, setForm] = useState("usd");
  let [to, setTo] = useState("inr");
  let [updatedValue, setUpdatedValue] = useState(0);

  let currencys = useCurrencyInfo(from);
  let options = Object.keys(currencys);

  let swap = () => {
    setForm(to);
    setTo(from);
    setAmount(updatedValue);
    setUpdatedValue(amount);
  };

  let converter = () => {
    setUpdatedValue(amount * currencys[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              converter();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setForm(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                disableAmount
                amount={updatedValue}
                selectedCurrency={to}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
