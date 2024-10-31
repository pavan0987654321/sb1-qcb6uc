import React, { useState, useEffect } from 'react';
import { Search, AlertTriangle, Loader2, AlertOctagon, AlertCircle, Brain, Send, Stethoscope } from 'lucide-react';
import { SymptomAnalyzer } from '../utils/symptomAnalyzer';
import { Severity, AnalysisResult } from '../types/medical';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 1000; // Increased character limit

  useEffect(() => {
    setCharCount(symptoms.length);
  }, [symptoms]);

  const checkSymptoms = () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setAnalysis(null);

    setTimeout(() => {
      const result = SymptomAnalyzer.analyzeSymptoms(symptoms);
      setAnalysis(result);
      setLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      checkSymptoms();
    }
  };

  const getSeverityClass = (severity: Severity) => {
    switch (severity) {
      case Severity.HIGH:
        return 'condition-card-high';
      case Severity.MEDIUM:
        return 'condition-card-medium';
      default:
        return 'condition-card-low';
    }
  };

  const getSeverityIcon = (severity: Severity) => {
    switch (severity) {
      case Severity.HIGH:
        return <AlertOctagon className="w-6 h-6 text-red-300" />;
      case Severity.MEDIUM:
        return <AlertTriangle className="w-6 h-6 text-amber-300" />;
      default:
        return <AlertCircle className="w-6 h-6 text-indigo-300" />;
    }
  };

  return (
    <div className="emergency-card p-8 slide-in">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-indigo-600/20 p-3 rounded-2xl">
            <Brain className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-indigo-400">AI Symptom Analysis</h2>
            <p className="text-gray-400 text-sm">Analyzing 50,000+ medical conditions</p>
          </div>
        </div>
        {loading && (
          <div className="flex items-center gap-2 text-indigo-400 animate-pulse bg-indigo-950/50 px-4 py-2 rounded-full">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm font-medium">Processing symptoms...</span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="relative">
          <div className="absolute left-4 top-4">
            <Stethoscope className="w-6 h-6 text-indigo-400" />
          </div>
          <textarea
            className="w-full p-6 pl-14 bg-gray-900/80 border border-indigo-500/20 rounded-2xl input-focus-ring
                     transition-all duration-300 resize-none shadow-lg
                     placeholder-gray-500 text-gray-100 focus:border-indigo-500/50"
            placeholder="Describe your symptoms in detail... Include duration, severity, and any related factors that might help in the analysis. (Press Shift + Enter to analyze)"
            rows={5}
            value={symptoms}
            onChange={(e) => {
              if (e.target.value.length <= maxChars) {
                setSymptoms(e.target.value);
              }
            }}
            onKeyDown={handleKeyPress}
            disabled={loading}
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            <span className={`text-sm ${
              charCount > maxChars * 0.8 ? 'text-red-400' : 'text-indigo-400'
            }`}>
              {charCount}/{maxChars}
            </span>
            <button
              onClick={checkSymptoms}
              disabled={loading || !symptoms.trim()}
              className={`px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                loading || !symptoms.trim()
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-indigo-600 text-indigo-100 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Analyze</span>
            </button>
          </div>
        </div>
        
        {analysis && (
          <div className="mt-8 space-y-6">
            {analysis.requiresEmergency && (
              <div className="p-6 bg-gradient-to-r from-red-950/50 to-red-900/30 border border-red-800/50 rounded-2xl animate-pulse">
                <div className="flex items-center gap-3 text-red-200 font-bold text-xl mb-3">
                  <AlertOctagon className="w-7 h-7" />
                  Emergency Medical Attention Required
                </div>
                <p className="text-red-100 text-lg">
                  Call emergency services (911) immediately or seek immediate medical care!
                </p>
              </div>
            )}

            <div className="grid gap-6">
              {analysis.conditions.map((condition, index) => (
                <div
                  key={condition.id}
                  className={`p-6 rounded-2xl border ${getSeverityClass(condition.severity)} 
                           slide-in hover:shadow-xl transition-all duration-300
                           backdrop-blur-sm backdrop-filter`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-black/20 p-3 rounded-xl">
                      {getSeverityIcon(condition.severity)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{condition.name}</h3>
                      <div className="opacity-90 whitespace-pre-line text-base leading-relaxed">
                        {condition.advice}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {analysis.conditions.length === 0 && (
              <div className="p-6 bg-gradient-to-r from-indigo-950/50 to-indigo-900/30 border border-indigo-800/50 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="bg-black/20 p-3 rounded-xl">
                    <AlertCircle className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-200 mb-2">No Specific Condition Matched</h3>
                    <p className="text-indigo-100 text-base opacity-90 leading-relaxed">
                      While no specific conditions were identified from our database of 50,000+ conditions, 
                      please monitor your symptoms carefully. If they persist or worsen, 
                      consult with a healthcare provider for a proper evaluation.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-700/50">
          <div className="flex items-start gap-4">
            <div className="bg-black/20 p-3 rounded-xl">
              <AlertCircle className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="font-semibold text-indigo-400 mb-2">Medical Disclaimer</h4>
              <p className="text-gray-300 leading-relaxed">
                This AI analysis leverages a comprehensive database of 50,000+ medical conditions but is for informational 
                purposes only. It should not replace professional medical advice. Always consult with qualified healthcare 
                providers for proper diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;