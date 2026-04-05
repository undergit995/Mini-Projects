import { useState } from 'react'
// import './Speed.css'

function Speed() {
const [speed, setSpeed] = useState(0);

  const speedincrement = () => {
    speed >= 200 ? alert("over the 200") : setSpeed((pre) => pre + 10);
  };


  const speeddecrement = () => {
    speed === 0 ? alert("Zero mph") : setSpeed((pre) => pre - 10);
  };

  return (
    <>  
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-blue-300 p-6">
      <div className="bg-grey-100 shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md text-center">
        
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          SPEEDOMETER
        </h1>
        <img
          src="https://media.istockphoto.com/id/523499820/photo/speedometer.jpg?b=1&s=1024x1024&w=0&k=20&c=y7UTiTbccgJIa-3wRTJavj1NvYtTXc5WkwyRFfR2570="
          alt="not found"
          className="mx-auto w-40 sm:w-56 mb-4 rounded-full "
        />

        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Speed is {speed} kph
        </h3>


        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Min Limit is 0 kph, Max Limit is 200 kph
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={speedincrement}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
          >
            Accelerate
          </button>

          <button
            onClick={speeddecrement}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
          >
            Speedly Brake
          </button>
        </div>

      </div>
    </div>
  
    </>
  )
}
export default Speed
