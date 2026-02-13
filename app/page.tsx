"use client"
import { useState, ChangeEvent } from "react"

interface BillInputProps {
  bill: number
  setBill: (value: number) => void
}

const BillInput = ({ bill, setBill }: BillInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value))
  }

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium">Bill Amount</label>
      <input
        type="number"
        value={bill}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        placeholder="Enter bill amount"
      />
    </div>
  )
}

interface TipSelectorProps {
  tipChecked: boolean
  setTipChecked: (value: boolean) => void
}

const TipSelector = ({ tipChecked, setTipChecked }: TipSelectorProps) => {
  return (
    <div className="mb-4">
      <button
        onClick={() => setTipChecked(!tipChecked)}
        className={`w-full px-4 py-2 rounded text-white transition 
        ${tipChecked ? "bg-green-500" : "bg-gray-400"}`}
      >
        5% Tip
      </button>
    </div>
  )
}

interface ResultProps {
  tipTotal: number
  billTotal: number
}

const Result = ({ tipTotal, billTotal }: ResultProps) => {
  return (
    <div className="mt-6 bg-pink-200 p-4 rounded text-center">
      <p className="text-xl">Tip Total: {tipTotal}</p>
      <p className="text-xl font-bold">Bill Total: {billTotal}</p>
    </div>
  )
}

export default function Page() {
  const [bill, setBill] = useState<number>(0)
  const [tipChecked, setTipChecked] = useState<boolean>(false)
  const [tipTotal, setTipTotal] = useState<number>(0)
  const [billTotal, setBillTotal] = useState<number>(0)

  const calculate = () => {
    const tip = tipChecked ? bill * 0.05 : 0
    setTipTotal(tip)
    setBillTotal(bill + tip)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Tip Calculator
      </h1>

      <BillInput bill={bill} setBill={setBill} />
      <TipSelector tipChecked={tipChecked} setTipChecked={setTipChecked} />

      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-blue-600 transition"
      >
        Calculate
      </button>

      <Result tipTotal={tipTotal} billTotal={billTotal} />
    </div>
  )
}