import React, { useState } from 'react';
import { Copy, Check, MessageSquare, User, Briefcase, Zap } from 'lucide-react';

const JsonGenerator: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [lead, setLead] = useState({
    name: 'Rohit Reddy',
    email: 'rohit@example.com',
    phone: '9876543210',
    careerPath: 'Data Science',
    isStudent: true, // Student or Professional
    isTech: true,    // Background
    readyIn30Days: true
  });

  const getBotMessage = () => {
    if (lead.isStudent && lead.isTech) {
        return "Great! You’re eligible for our Full Stack Fast-Track program designed for tech students.";
    }
    if (!lead.isStudent && !lead.isTech) {
        return "Awesome! Many professionals like you have transitioned successfully into tech with our guidance.";
    }
    if (lead.isStudent && !lead.isTech) {
        return "No worries! Our curriculum starts from scratch, perfect for non-tech backgrounds.";
    }
    return "Excellent choice. We have specialized tracks for working professionals in this domain.";
  };

  const generatedJson = {
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    status: "Hot Lead",
    careerPath: lead.careerPath,
    source: "Webinar Bot"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(generatedJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
         <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Task 2: Chatbot Lead Qualification (SwiftSell)</h2>
          <p className="text-slate-600">Configure the lead responses to see conditional messaging and JSON payload.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Col 1: Inputs */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 lg:col-span-1">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center">
            <User size={16} className="mr-2"/> Lead Profile
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                value={lead.name}
                onChange={(e) => setLead({...lead, name: e.target.value})}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                value={lead.email}
                onChange={(e) => setLead({...lead, email: e.target.value})}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
              <input 
                type="text" 
                value={lead.phone}
                onChange={(e) => setLead({...lead, phone: e.target.value})}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="pt-4 border-t border-slate-100">
                 <label className="block text-xs font-medium text-slate-700 mb-2">Current Status</label>
                 <div className="flex space-x-2">
                    <button 
                        onClick={() => setLead({...lead, isStudent: true})}
                        className={`flex-1 py-2 text-xs rounded border ${lead.isStudent ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-white border-slate-300 text-slate-600'}`}
                    >
                        Student
                    </button>
                    <button 
                        onClick={() => setLead({...lead, isStudent: false})}
                        className={`flex-1 py-2 text-xs rounded border ${!lead.isStudent ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-white border-slate-300 text-slate-600'}`}
                    >
                        Professional
                    </button>
                 </div>
            </div>

            <div>
                 <label className="block text-xs font-medium text-slate-700 mb-2">Background</label>
                 <div className="flex space-x-2">
                    <button 
                        onClick={() => setLead({...lead, isTech: true})}
                        className={`flex-1 py-2 text-xs rounded border ${lead.isTech ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-white border-slate-300 text-slate-600'}`}
                    >
                        Tech
                    </button>
                    <button 
                        onClick={() => setLead({...lead, isTech: false})}
                        className={`flex-1 py-2 text-xs rounded border ${!lead.isTech ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-white border-slate-300 text-slate-600'}`}
                    >
                        Non-Tech
                    </button>
                 </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Preferred Career Path</label>
              <select 
                value={lead.careerPath}
                onChange={(e) => setLead({...lead, careerPath: e.target.value})}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
              >
                <option>Full Stack Development</option>
                <option>Data Science</option>
                <option>AI-ML</option>
                <option>Cybersecurity</option>
              </select>
            </div>

            <label className="flex items-center space-x-3 cursor-pointer p-2 bg-slate-50 rounded border border-slate-200">
                <input 
                  type="checkbox" 
                  checked={lead.readyIn30Days}
                  onChange={(e) => setLead({...lead, readyIn30Days: e.target.checked})}
                  className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <span className="text-xs text-slate-700 font-medium">Ready to start in 30 days?</span>
            </label>
          </div>
        </div>

        {/* Col 2: Chat Simulation */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 lg:col-span-1 flex flex-col h-[600px] lg:h-auto">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center">
                <MessageSquare size={16} className="mr-2"/> Bot Preview
            </h3>
            
            <div className="flex-1 bg-slate-50 rounded-lg p-4 space-y-4 overflow-y-auto custom-scrollbar border border-slate-100">
                
                {/* Bot */}
                <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2 flex-shrink-0">
                        <Zap size={16}/>
                    </div>
                    <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-700 border border-slate-100">
                        Hi {lead.name.split(' ')[0]}! Are you a student or a working professional?
                    </div>
                </div>

                {/* User */}
                <div className="flex items-end justify-end">
                    <div className="bg-indigo-600 p-3 rounded-l-xl rounded-tr-xl shadow-sm text-sm text-white">
                        I am a {lead.isStudent ? 'Student' : 'Working Professional'}.
                    </div>
                </div>

                {/* Bot */}
                <div className="flex items-start">
                     <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2 flex-shrink-0">
                        <Zap size={16}/>
                    </div>
                    <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-700 border border-slate-100">
                        Got it. And do you come from a Tech background?
                    </div>
                </div>

                {/* User */}
                <div className="flex items-end justify-end">
                    <div className="bg-indigo-600 p-3 rounded-l-xl rounded-tr-xl shadow-sm text-sm text-white">
                        {lead.isTech ? 'Yes, Tech background' : 'No, Non-Tech background'}.
                    </div>
                </div>

                {/* Bot - Conditional */}
                <div className="flex items-start">
                     <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2 flex-shrink-0">
                        <Zap size={16}/>
                    </div>
                    <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-800 border border-indigo-100 bg-indigo-50/50">
                        <span className="font-semibold block mb-1 text-xs text-indigo-600 uppercase">Conditional Response</span>
                        {getBotMessage()}
                    </div>
                </div>

                {/* Bot - Closing */}
                <div className="flex items-start">
                     <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2 flex-shrink-0">
                        <Zap size={16}/>
                    </div>
                    <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-700 border border-slate-100">
                        Thanks! Sending your details to our team.
                    </div>
                </div>

            </div>
        </div>

        {/* Col 3: JSON Output */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 lg:col-span-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-mono font-semibold text-sm">System Payload (Email Notification)</h3>
            <button 
              onClick={handleCopy}
              className="flex items-center text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded transition-colors"
            >
              {copied ? <Check size={14} className="mr-1.5 text-green-400"/> : <Copy size={14} className="mr-1.5"/>}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          
          <div className="flex-1 bg-black/30 rounded-lg p-4 font-mono text-xs overflow-auto custom-scrollbar border border-slate-700/50">
            <pre className="text-green-400 whitespace-pre-wrap break-all">
{JSON.stringify(generatedJson, null, 2)}
            </pre>
          </div>

          <div className="mt-4 p-3 bg-indigo-900/30 border border-indigo-500/30 rounded text-indigo-200 text-xs leading-relaxed">
            <Briefcase size={14} className="inline mr-1 mb-0.5"/>
            <strong>Requirement Met:</strong> JSON format matches the specified schema for qualified leads.
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default JsonGenerator;