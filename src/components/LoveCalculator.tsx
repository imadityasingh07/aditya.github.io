import React, { useState } from 'react';
import { ArrowLeft, Heart, Sparkles, RefreshCw } from 'lucide-react';

interface LoveResult {
  percentage: number;
  message: string;
  compatibility: string;
  advice: string;
}

const LoveCalculator = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<LoveResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [history, setHistory] = useState<Array<{names: string, percentage: number}>>([]);

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) return;

    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      // Simple algorithm based on name characters (for fun purposes)
      const combined = (name1 + name2).toLowerCase().replace(/\s/g, '');
      let sum = 0;
      for (let i = 0; i < combined.length; i++) {
        sum += combined.charCodeAt(i);
      }
      
      // Generate a percentage between 1-100
      const percentage = ((sum % 100) + 1);
      
      const loveResult: LoveResult = {
        percentage,
        message: getLoveMessage(percentage),
        compatibility: getCompatibility(percentage),
        advice: getAdvice(percentage)
      };

      setResult(loveResult);
      
      // Add to history
      const historyEntry = {
        names: `${name1} & ${name2}`,
        percentage
      };
      setHistory(prev => [historyEntry, ...prev.slice(0, 4)]);
      
      setIsCalculating(false);
    }, 2000);
  };

  const getLoveMessage = (percentage: number): string => {
    if (percentage >= 90) return "Perfect Match! You two are soulmates! 💕";
    if (percentage >= 80) return "Excellent compatibility! Love is in the air! 💖";
    if (percentage >= 70) return "Great potential! You make a wonderful couple! 💗";
    if (percentage >= 60) return "Good match! With effort, love will bloom! 💝";
    if (percentage >= 50) return "Decent compatibility! Friendship can grow into love! 💓";
    if (percentage >= 40) return "Some challenges ahead, but love conquers all! 💘";
    if (percentage >= 30) return "Opposites attract! You might surprise each other! 💞";
    return "Friendship might be better than romance! 💙";
  };

  const getCompatibility = (percentage: number): string => {
    if (percentage >= 80) return "Excellent";
    if (percentage >= 60) return "Very Good";
    if (percentage >= 40) return "Good";
    if (percentage >= 20) return "Fair";
    return "Challenging";
  };

  const getAdvice = (percentage: number): string => {
    if (percentage >= 80) return "You're meant to be together! Cherish each other and build a beautiful future.";
    if (percentage >= 60) return "Communication and understanding will strengthen your bond. Keep nurturing your relationship!";
    if (percentage >= 40) return "Focus on your common interests and be patient with differences. Love grows with time!";
    return "Sometimes the best relationships start as friendships. Take time to know each other better!";
  };

  const reset = () => {
    setName1('');
    setName2('');
    setResult(null);
  };

  const getHeartColor = (percentage: number): string => {
    if (percentage >= 80) return 'text-red-500';
    if (percentage >= 60) return 'text-pink-500';
    if (percentage >= 40) return 'text-purple-500';
    return 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Heart className="w-8 h-8 mr-2 text-red-500" />
            Love Calculator
          </h1>
          <div className="w-20"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Input Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-4">
                <Heart className="w-12 h-12 text-red-500 animate-pulse" />
                <Sparkles className="w-8 h-8 text-yellow-500 ml-2" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Your Love Compatibility</h2>
              <p className="text-gray-600">Enter both names to discover your love percentage!</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Person's Name</label>
                <input
                  type="text"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  placeholder="Enter first name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                />
              </div>

              <div className="text-center">
                <Heart className="w-8 h-8 text-red-400 mx-auto" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Second Person's Name</label>
                <input
                  type="text"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  placeholder="Enter second name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateLove}
                  disabled={!name1.trim() || !name2.trim() || isCalculating}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 shadow-lg"
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Calculating...
                    </div>
                  ) : (
                    'Calculate Love ❤️'
                  )}
                </button>
                <button
                  onClick={reset}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Result */}
          {result && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 animate-fade-in">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className={`text-8xl font-bold ${getHeartColor(result.percentage)} mb-4`}>
                    {result.percentage}%
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Heart className={`w-8 h-8 ${getHeartColor(result.percentage)} animate-bounce`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{name1} & {name2}</h3>
                <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${
                  result.percentage >= 80 ? 'bg-red-500' :
                  result.percentage >= 60 ? 'bg-pink-500' :
                  result.percentage >= 40 ? 'bg-purple-500' : 'bg-gray-500'
                }`}>
                  {result.compatibility} Compatibility
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💕 Love Message</h4>
                  <p className="text-gray-700">{result.message}</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💡 Relationship Advice</h4>
                  <p className="text-gray-700">{result.advice}</p>
                </div>
              </div>

              {/* Share Button */}
              <div className="text-center mt-6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all transform hover:-translate-y-0.5">
                  Share Result 📱
                </button>
              </div>
            </div>
          )}

          {/* History */}
          {history.length > 0 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Recent Calculations
              </h3>
              <div className="space-y-3">
                {history.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-700">{item.names}</span>
                    <span className={`font-bold ${getHeartColor(item.percentage)}`}>
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">App Features</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Love Percentage Calculator
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                Compatibility Analysis
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Relationship Advice
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Calculation History
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveCalculator;