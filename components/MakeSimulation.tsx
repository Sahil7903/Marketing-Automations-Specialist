import React, { useState } from 'react';
import { SheetRow, WebhookLog } from '../types';
import { ArrowRight, FileSpreadsheet, Mail, Globe, Database, Check } from 'lucide-react';

const MakeSimulation: React.FC = () => {
  const [formName, setFormName] = useState('raju');
  const [formEmail, setFormEmail] = useState('web@nxtwave.tech');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rows, setRows] = useState<SheetRow[]>([]);
  const [webhookLogs, setWebhookLogs] = useState<WebhookLog[]>([]);
  const [lastEmail, setLastEmail] = useState<{to: string, subject: string, body: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate Network Latency
    await new Promise(r => setTimeout(r, 800));

    // 1. Webhook Received
    const newLog: WebhookLog = {
        id: Date.now(),
        status: 200,
        message: "OK",
        timestamp: new Date().toLocaleTimeString()
    };
    setWebhookLogs(prev => [newLog, ...prev]);

    // 2. Add Row to Sheet (Action 1)
    const newRow: SheetRow = {
        id: rows.length + 1,
        colA: formName, // Mapping Logic Visualized
        colB: formEmail, // Mapping Logic Visualized
        timestamp: new Date().toLocaleTimeString()
    };
    setRows(prev => [...prev, newRow]);

    // 3. Send Email (Action 2)
    setLastEmail({
        to: formEmail,
        subject: "Welcome to NxtWave!",
        body: `Hi ${formName}, thanks for your submission. We have received your details.`
    });

    setIsSubmitting(false);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Task 3: Make.com Integration Blueprint</h2>
            <p className="text-slate-600">Simulating the flow: Webflow Form &rarr; Google Sheets &rarr; Gmail.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Step 1: Webflow Source */}
            <div className="lg:col-span-3 space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 h-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                    <div className="flex items-center mb-4 text-blue-600 font-bold">
                        <Globe className="mr-2" size={20}/> Webflow Form
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Name</label>
                            <input 
                                type="text" 
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                                className="w-full p-2 text-sm border rounded bg-slate-50"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                            <input 
                                type="email" 
                                value={formEmail}
                                onChange={(e) => setFormEmail(e.target.value)}
                                className="w-full p-2 text-sm border rounded bg-slate-50"
                            />
                        </div>
                        <button 
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white py-2 rounded text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Form'}
                        </button>
                    </form>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                        <h4 className="text-xs font-bold text-slate-400 mb-2">WEBHOOK RESPONSES</h4>
                        <div className="space-y-2 h-32 overflow-y-auto custom-scrollbar">
                            {webhookLogs.length === 0 && <p className="text-xs text-slate-300 italic">No submissions yet.</p>}
                            {webhookLogs.map(log => (
                                <div key={log.id} className="flex justify-between items-center text-xs bg-green-50 text-green-700 p-2 rounded">
                                    <span>{log.status} {log.message}</span>
                                    <span className="opacity-70">{log.timestamp}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2">
                           *Tip: Ensure Webflow webhook is set to "POST" to get a 200 OK.
                        </p>
                    </div>
                </div>
            </div>

            {/* Visual Connector */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center space-y-20">
                <ArrowRight className="text-slate-300 animate-pulse" size={32} />
            </div>

            {/* Step 2: Make.com Logic & Mapping */}
            <div className="lg:col-span-4 space-y-4">
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-purple-200 h-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
                    <div className="flex items-center mb-4 text-purple-600 font-bold">
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs mr-2">M</div>
                        Make (Integromat) Logic
                    </div>

                    <div className="space-y-4">
                        <div className="bg-slate-50 p-3 rounded border border-slate-200">
                            <h5 className="font-bold text-slate-700 text-xs mb-2">ACTION 1: GOOGLE SHEETS</h5>
                            <div className="flex items-center text-xs text-slate-600 space-x-2">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono">1. Name</span>
                                <ArrowRight size={12}/>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-mono">Column A</span>
                            </div>
                            <div className="flex items-center text-xs text-slate-600 space-x-2 mt-2">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono">2. Email</span>
                                <ArrowRight size={12}/>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-mono">Column B</span>
                            </div>
                        </div>

                         <div className="bg-slate-50 p-3 rounded border border-slate-200">
                            <h5 className="font-bold text-slate-700 text-xs mb-2">ACTION 2: GMAIL</h5>
                             <div className="text-xs space-y-1">
                                <p><span className="font-semibold">Subject:</span> "Welcome to NxtWave!"</p>
                                <p><span className="font-semibold">Body:</span> "Hi <span className="bg-blue-100 text-blue-800 px-1 rounded">{`{{Name}}`}</span>, thanks for your submission..."</p>
                             </div>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Visual Connector */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center space-y-20">
                <ArrowRight className="text-slate-300 animate-pulse" size={32} />
            </div>

            {/* Step 3: Outputs */}
            <div className="lg:col-span-3 space-y-4">
                
                {/* Google Sheet Simulator */}
                <div className="bg-white rounded-xl shadow-sm border border-green-200 overflow-hidden">
                    <div className="bg-green-50 p-3 border-b border-green-100 flex items-center text-green-700 font-bold text-sm">
                        <FileSpreadsheet size={16} className="mr-2"/> Google Sheets Preview
                    </div>
                    <div className="p-0 overflow-x-auto">
                        <table className="w-full text-xs text-left">
                            <thead className="bg-slate-50 text-slate-500 font-semibold border-b">
                                <tr>
                                    <th className="p-2 border-r">A (Name)</th>
                                    <th className="p-2">B (Email)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.length === 0 && (
                                    <tr>
                                        <td colSpan={2} className="p-4 text-center text-slate-400 italic">Sheet is empty</td>
                                    </tr>
                                )}
                                {rows.map((row) => (
                                    <tr key={row.id} className="border-b last:border-0 hover:bg-slate-50">
                                        <td className="p-2 border-r truncate max-w-[80px]">{row.colA}</td>
                                        <td className="p-2 truncate max-w-[100px]">{row.colB}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Gmail Simulator */}
                <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden">
                    <div className="bg-red-50 p-3 border-b border-red-100 flex items-center text-red-700 font-bold text-sm">
                        <Mail size={16} className="mr-2"/> Gmail Simulator
                    </div>
                    <div className="p-4">
                        {!lastEmail ? (
                            <p className="text-xs text-slate-400 italic text-center">No emails sent yet.</p>
                        ) : (
                            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="text-xs text-slate-500 border-b pb-1">
                                    <span className="font-bold">To:</span> {lastEmail.to}
                                </div>
                                <div className="text-xs font-bold text-slate-800">
                                    {lastEmail.subject}
                                </div>
                                <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded">
                                    {lastEmail.body}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default MakeSimulation;