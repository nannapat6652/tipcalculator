"use client";
import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState<number | "">("");
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [tipTotal, setTipTotal] = useState<number>(0);
  const [billTotal, setBillTotal] = useState<number>(0);

  const calculate = () => {
    if (bill === "") {
      setTipTotal(0);
      setBillTotal(0);
      return;
    }

    const tip = bill * (tipPercent / 100);
    setTipTotal(tip);
    setBillTotal(bill + tip);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Tip Calculator
        </h1>

        <div className="grid grid-cols-2 gap-6">
       
          <div>
            <label className="text-xl font-bold">bill</label>
            <input
              type="number"
              value={bill}
              onChange={(e) =>
                setBill(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full mt-2 p-4 text-center text-xl bg-yellow-400 rounded"
              placeholder="ใส่จำนวนเงิน"
            />

            <div className="mt-6">
              <p className="text-xl font-bold mb-2">Tip</p>
              <button
                onClick={() => setTipPercent(5)}
                className={`w-32 p-4 rounded text-xl ${
                  tipPercent === 5
                    ? "bg-blue-300"
                    : "bg-blue-100"
                }`}
              >
                5%
              </button>
            </div>

            <button
              onClick={calculate}
              className="mt-6 w-full p-4 bg-teal-300 text-xl rounded"
            >
              Calculate
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-2xl font-bold">Tip Total</p>
              <div className="bg-pink-200 p-6 text-center text-2xl rounded">
                {tipTotal}
              </div>
            </div>

            <div>
              <p className="text-2xl font-bold">Bill Total</p>
              <div className="bg-pink-200 p-6 text-center text-4xl font-bold rounded">
                {billTotal}
              </div>
            </div>
          </div>
        </div>

        <p className="text-red-500 mt-6 text-sm">
      
        </p>
        <p className="text-blue-500 text-sm">
     
        </p>
      </div>
    </div>
  );
}