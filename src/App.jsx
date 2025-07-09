import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
 
   const [amount, setAmount] = useState(0)
   const [from, SetForm] = useState("usd")
   const [to, setTo] = useState("inr")
   const [convertedAmount, setConvertedAmount] = useState(0)
  
   const CurrencyInfo = useCurrencyInfo(from)

  const Options = Object.keys(CurrencyInfo)

  const swap = () => {
    const prevForm = from;
    SetForm(to)
    setTo(prevForm);
      setAmount(convertedAmount)
    setConvertedAmount(amount)
  };
  
   const convert = () => {
      if (!CurrencyInfo[to]) return;
    setConvertedAmount(amount * CurrencyInfo[to])
   }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://i.pinimg.com/736x/ef/15/da/ef15daf4a0936a9a39791155ee2fb940.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={Options}
                                 onCurrencyChange={(currency) => SetForm(currency)}
                                        selectCurrency={from}
                                            onAmountChange={(val) => setAmount(val)}
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
                                amount={convertedAmount}
                                currencyOptions={Options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable = {true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase() } to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
