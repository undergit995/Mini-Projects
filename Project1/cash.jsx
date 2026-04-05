import { useState } from 'react'
// import './App.css'

function Cash() {const [balance, setBalance] = useState(1000);
  const [withdrawAmt, setWithdrawAmt] = useState(null);
  const [depositAmt, setDepositAmt] = useState(null);
  const [msg, setMsg] = useState("");

  const handleWithdraw = () => {
    if (!withdrawAmt) return;
    if (withdrawAmt > balance) { setMsg("Insufficient balance!"); return; }
    setBalance(p => p - withdrawAmt);
    setWithdrawAmt(null);
    setMsg(`Withdrew ₹${withdrawAmt} successfully`);
  };

  const handleDeposit = () => {
    if (!depositAmt) return;
    setBalance(p => p + depositAmt);
    setDepositAmt(null);
    setMsg(`Deposited ₹${depositAmt} successfully`);
  };

  const amts = [50, 100, 200, 500];

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-1">ATM</h1>

        <div className="bg-blue-50 rounded-2xl p-4 text-center mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Available Balance</p>
          <p className="text-4xl font-bold text-blue-600 mt-1">₹{balance}</p>
        </div>

        {msg && (
          <p className={`text-center text-sm mb-4 font-medium ${msg.includes("Insufficient") ? "text-red-500" : "text-green-600"}`}>
            {msg}
          </p>
        )}

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Withdraw</p>
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-3">
            <span className="text-gray-400 mr-1">₹</span>
            <span className="flex-1 text-gray-700 font-medium">{withdrawAmt ?? "Select amount"}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {amts.map(a => (
              <button key={a} onClick={() => setWithdrawAmt(a)}
                className={`py-2 rounded-xl text-sm font-semibold border transition ${withdrawAmt === a ? "bg-blue-500 text-white border-blue-500" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
                {a}
              </button>
            ))}
          </div>
          <button onClick={handleWithdraw}
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition text-sm">
            Withdraw
          </button>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Deposit</p>
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-3">
            <span className="text-gray-400 mr-1">₹</span>
            <span className="flex-1 text-gray-700 font-medium">{depositAmt ?? "Select amount"}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {amts.map(a => (
              <button key={a} onClick={() => setDepositAmt(a)}
                className={`py-2 rounded-xl text-sm font-semibold border transition ${depositAmt === a ? "bg-green-500 text-white border-green-500" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
                {a}
              </button>
            ))}
          </div>
          <button onClick={handleDeposit}
            className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition text-sm">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cash
