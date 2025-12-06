import React from 'react';
import { ArrowDown, CheckCircle, Clock, Mail, MessageCircle, Smartphone, AlertTriangle, Play, HelpCircle } from 'lucide-react';

const LogicFlow: React.FC = () => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Task 1: Omnichannel Lead Nurturing</h2>
          <p className="text-slate-600 mt-2">Workflow Design for Incomplete Signups</p>
        </div>

        <div className="relative flex flex-col items-center">
          
          {/* STEP 1 */}
          <div className="flex flex-col items-center mb-12 relative w-full">
             <div className="absolute left-0 top-8 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block">Step 1: Day 0</div>
             
             <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg w-64 text-center border-2 border-blue-700 z-10">
                <div className="flex items-center justify-center mb-2">
                    <Play size={16} className="mr-2"/>
                    <span className="font-bold">User Signs Up</span>
                </div>
                <div className="text-xs bg-blue-700/50 p-1 rounded">Trigger Event</div>
             </div>
             
             <ArrowDown className="text-slate-300 h-10 w-10 -my-2" />
             
             <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 w-96 z-10">
                <h3 className="text-sm font-bold text-slate-800 text-center mb-3">Send Welcome Message (Simultaneous)</h3>
                <div className="flex justify-around">
                   <div className="flex flex-col items-center">
                      <div className="bg-green-100 p-2 rounded-full mb-1"><MessageCircle size={18} className="text-green-600"/></div>
                      <span className="text-[10px] font-semibold text-slate-600">WhatsApp</span>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="bg-blue-100 p-2 rounded-full mb-1"><Smartphone size={18} className="text-blue-600"/></div>
                      <span className="text-[10px] font-semibold text-slate-600">SMS</span>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="bg-purple-100 p-2 rounded-full mb-1"><Mail size={18} className="text-purple-600"/></div>
                      <span className="text-[10px] font-semibold text-slate-600">Email</span>
                   </div>
                </div>
             </div>
          </div>

          <ArrowDown className="text-slate-300 h-12 w-12 mb-2" />

          {/* STEP 2 */}
          <div className="flex flex-col items-center mb-12 relative w-full">
            <div className="absolute left-0 top-4 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block">Step 2: Day 1</div>
            
            <div className="bg-amber-100 p-4 rounded-xl shadow-md border-2 border-amber-300 w-64 text-center z-10 transform rotate-0">
               <HelpCircle size={20} className="mx-auto text-amber-600 mb-2"/>
               <h3 className="font-bold text-amber-900">Check Profile Status</h3>
               <p className="text-xs text-amber-800 mt-1">Is setup complete?</p>
            </div>

            {/* Branches */}
            <div className="flex w-full justify-center space-x-20 mt-8">
               
               {/* YES Branch */}
               <div className="flex flex-col items-center w-64">
                  <div className="relative">
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-green-400"></div>
                     <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">YES</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200 shadow-sm w-full text-center">
                     <CheckCircle className="text-green-600 mx-auto mb-2 h-8 w-8"/>
                     <p className="text-sm font-bold text-green-800">Send Congratulatory Message</p>
                     <div className="mt-3 text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded inline-block font-mono">End Workflow</div>
                  </div>
               </div>

               {/* NO Branch */}
               <div className="flex flex-col items-center w-80">
                  <div className="relative w-full flex justify-center">
                     <div className="absolute -top-8 h-8 w-0.5 bg-red-400"></div>
                     <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-8 -translate-y-1/2 z-20">NO</div>
                  </div>
                  
                  {/* STEP 3 */}
                  <div className="bg-slate-800 text-slate-100 p-6 rounded-xl shadow-xl border border-slate-700 w-full relative">
                     <div className="absolute -left-32 top-0 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block w-24 text-right">Step 3: Days 1-3</div>
                     
                     <div className="absolute -top-3 left-4 bg-indigo-500 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wide shadow-sm">Reminder Loop</div>
                     
                     <div className="space-y-6 mt-2">
                        <div className="flex items-center justify-between bg-slate-700/50 p-2 rounded border border-slate-600">
                           <span className="text-sm font-semibold">Send WhatsApp Reminder</span>
                           <MessageCircle size={16} className="text-green-400"/>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                           <div className="bg-slate-700 p-3 rounded border border-green-900/30">
                              <p className="text-green-400 text-[10px] font-bold uppercase mb-1">If Delivered</p>
                              <div className="flex items-center text-xs text-slate-300">
                                 <Clock size={12} className="mr-1"/> Wait 24h
                              </div>
                              <div className="mt-1 text-[10px] text-slate-400">&rarr; Recheck Profile</div>
                           </div>
                           <div className="bg-slate-700 p-3 rounded border border-red-900/30">
                              <p className="text-red-400 text-[10px] font-bold uppercase mb-1">If Failed</p>
                              <div className="flex items-center text-xs text-red-200 bg-red-900/40 p-1.5 rounded">
                                 <AlertTriangle size={12} className="mr-1.5"/> SMS Backup
                              </div>
                              <div className="mt-1 text-[10px] text-slate-400 text-center">(Immediate)</div>
                           </div>
                        </div>

                        <div className="text-center border-t border-slate-700 pt-4">
                            <p className="text-xs text-slate-400 italic">Repeat loop for 3 days</p>
                        </div>
                     </div>
                  </div>

                  <ArrowDown className="text-slate-300 h-8 w-8 my-2" />

                  {/* STEP 4 */}
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 shadow-sm w-full text-center relative">
                     <div className="absolute -left-32 top-4 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block w-24 text-right">Step 4: Post-Loop</div>
                     <Mail className="text-purple-600 mx-auto mb-2 h-6 w-6"/>
                     <p className="text-sm font-bold text-purple-900">Final Email Reminder</p>
                     <div className="mt-3 text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded inline-block font-mono">End Workflow</div>
                  </div>

               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LogicFlow;