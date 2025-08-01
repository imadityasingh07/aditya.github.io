import React, { useState, useEffect } from 'react';
import { ArrowLeft, Delete, History } from 'lucide-react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = previousValue || '0';
      const newValue = calculate(parseFloat(currentValue), inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(String(newValue));
      
      // Add to history
      const calculation = `${currentValue} ${operation} ${inputValue} = ${newValue}`;
      setHistory(prev => [calculation, ...prev.slice(0, 9)]);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const currentValue = parseFloat(previousValue);
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      
      // Add to history
      const calculation = `${previousValue} ${operation} ${inputValue} = ${newValue}`;
      setHistory(prev => [calculation, ...prev.slice(0, 9)]);

      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const buttons = [
    { label: 'C', type: 'function', action: clear, className: 'bg-red-500 hover:bg-red-600 text-white' },
    { label: '±', type: 'function', action: () => setDisplay(String(-parseFloat(display))), className: 'bg-gray-300 hover:bg-gray-400' },
    { label: '%', type: 'function', action: () => setDisplay(String(parseFloat(display) / 100)), className: 'bg-gray-300 hover:bg-gray-400' },
    { label: '÷', type: 'operator', action: () => performOperation('÷'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '7', type: 'number', action: () => inputNumber('7'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '8', type: 'number', action: () => inputNumber('8'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '9', type: 'number', action: () => inputNumber('9'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '×', type: 'operator', action: () => performOperation('×'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '4', type: 'number', action: () => inputNumber('4'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '5', type: 'number', action: () => inputNumber('5'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '6', type: 'number', action: () => inputNumber('6'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '-', type: 'operator', action: () => performOperation('-'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '1', type: 'number', action: () => inputNumber('1'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '2', type: 'number', action: () => inputNumber('2'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '3', type: 'number', action: () => inputNumber('3'), className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '+', type: 'operator', action: () => performOperation('+'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '0', type: 'number', action: () => inputNumber('0'), className: 'bg-gray-100 hover:bg-gray-200 col-span-2' },
    { label: '.', type: 'decimal', action: inputDecimal, className: 'bg-gray-100 hover:bg-gray-200' },
    { label: '=', type: 'equals', action: handleEquals, className: 'bg-green-500 hover:bg-green-600 text-white' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Calculator</h1>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <History className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Display */}
          <div className="bg-gray-900 text-white p-6">
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">
                {previousValue && operation ? `${previousValue} ${operation}` : ''}
              </div>
              <div className="text-4xl font-light break-all">
                {display}
              </div>
            </div>
          </div>

          {/* History Panel */}
          {showHistory && (
            <div className="bg-gray-50 border-b border-gray-200 max-h-40 overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-700">History</h3>
                  <button
                    onClick={() => setHistory([])}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Clear
                  </button>
                </div>
                {history.length === 0 ? (
                  <p className="text-sm text-gray-500">No calculations yet</p>
                ) : (
                  <div className="space-y-1">
                    {history.map((calc, index) => (
                      <div key={index} className="text-sm text-gray-600 font-mono">
                        {calc}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="p-4">
            <div className="grid grid-cols-4 gap-3">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.action}
                  className={`
                    h-16 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-md
                    ${button.className}
                    ${button.label === '0' ? 'col-span-2' : ''}
                  `}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Features</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Basic Operations
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Calculation History
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Memory Functions
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Responsive Design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;