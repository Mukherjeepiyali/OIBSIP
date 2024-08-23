import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Footer from './Footer';
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('celsius');
  const [convertedTemp, setConvertedTemp] = useState('');

  useEffect(() => {
    gsap.fromTo('.title',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo('.input-box input',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  const convertTemperature = () => {
    const value = parseFloat(inputValue);
  
    if (isNaN(value)) {
      alert("Please enter a valid number.");
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    if (selectedUnit === 'celsius') {
      celsius = value;
      fahrenheit = (value * 9 / 5) + 32;
      kelvin = value + 273.15;
    } else if (selectedUnit === 'fahrenheit') {
      celsius = (value - 32) * 5 / 9;
      fahrenheit = value;
      kelvin = (celsius + 273.15);
    } else if (selectedUnit === 'kelvin') {
      celsius = value - 273.15;
      fahrenheit = (celsius * 9 / 5) + 32;
      kelvin = value;
    }
  
    const converted = `${celsius.toFixed(2)} °C / ${fahrenheit.toFixed(2)} °F / ${kelvin.toFixed(2)} K`;
    setConvertedTemp(converted);
  };
  

  return (
    <div className="container bg-gradient-to-b from-yellow-400 to-orange-500 min-h-screen flex items-center justify-center">
      <div className="content-container bg-white p-8 rounded-lg shadow-lg">
        <h1 className="title text-4xl font-bold text-black mb-8">Temperature Converter</h1>
        <div className="input-box space-y-4">
          <input
            type="text"
            placeholder="Enter temperature"
            value={inputValue}
            onChange={handleInputChange}
            className="w-64 p-3 bg-white text-black rounded shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <div className="radio-buttons space-x-4">
            <label className="text-black">
              <input
                type="radio"
                value="celsius"
                checked={selectedUnit === 'celsius'}
                onChange={handleUnitChange}
                className="mr-2"
              />
              Celsius
            </label>
            <label className="text-black">
              <input
                type="radio"
                value="fahrenheit"
                checked={selectedUnit === 'fahrenheit'}
                onChange={handleUnitChange}
                className="mr-2"
              />
              Fahrenheit
            </label>
            <label className="text-black">
              <input
                type="radio"
                value="kelvin"
                checked={selectedUnit === 'kelvin'}
                onChange={handleUnitChange}
                className="mr-2"
              />
              Kelvin
            </label>
          </div>

          <button
            onClick={convertTemperature}
            className="convert-btn w-full p-3 bg-yellow-500 text-white rounded shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Convert
          </button>

          <div className="result mt-4 text-xl text-black font-semibold">
            {convertedTemp}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br> <br></br> <br></br>
      <Footer/>
    </div>
  );
 
};

export default App;
