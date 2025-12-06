import React, { useState } from 'react';
import { LayoutDashboard, FileJson, Workflow, Zap } from 'lucide-react';
import LogicFlow from './components/LogicFlow';
import JsonGenerator from './components/JsonGenerator';
import MakeSimulation from './components/MakeSimulation';

enum Tab {
  LOGIC = 'LOGIC',
  JSON = 'JSON',
  MAKE = 'MAKE'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.LOGIC);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white mr-3 shadow-md">
                <Zap size={20} fill="currentColor" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">Automation Architect</h1>
                <p className="text-xs text-slate-500">Assignment Solver Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex space-x-1 rounded-xl bg-slate-200/50 p-1 mb-8 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab(Tab.LOGIC)}
            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === Tab.LOGIC
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <Workflow size={16} />
            <span>Task 1: Logic Flow</span>
          </button>
          
          <button
            onClick={() => setActiveTab(Tab.JSON)}
            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === Tab.JSON
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <FileJson size={16} />
            <span>Task 2: SwiftSell</span>
          </button>

          <button
            onClick={() => setActiveTab(Tab.MAKE)}
            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === Tab.MAKE
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <LayoutDashboard size={16} />
            <span>Task 3: Make.com</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === Tab.LOGIC && <LogicFlow />}
          {activeTab === Tab.JSON && <JsonGenerator />}
          {activeTab === Tab.MAKE && <MakeSimulation />}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>Generated for Automation Assignment. Demonstrates React + Tailwind implementation of No-Code concepts.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;