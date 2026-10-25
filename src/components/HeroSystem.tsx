import React, { useState } from 'react';
import { Globe, Cpu, Database, Shield, Terminal, Code, Layers } from 'lucide-react';

export function HeroSystem() {
  const [activeNode, setActiveNode] = useState<string | null>('SYSTEMS');

  const nodes = [
    { id: 'WEB', label: 'WEB', icon: Globe, desc: 'React, Vite, TypeScript, Tailwind' },
    { id: 'AI', label: 'AI / ML', icon: Cpu, desc: 'LLMs, Prompt Engineering, Intelligent Prototypes' },
    { id: 'DATA', label: 'DATA', icon: Database, desc: 'Pandas, NumPy, Matplotlib, SQL' },
    { id: 'SECURITY', label: 'SECURITY', icon: Shield, desc: 'Linux, Networking, Wireshark, Burp Suite' },
    { id: 'SYSTEMS', label: 'SYSTEMS', icon: Layers, desc: '8086/8051 Architecture, Low-Level Logic' },
    { id: 'CODE', label: 'CODE', icon: Code, desc: 'C, Python, JavaScript, Algorithms' },
  ];

  const currentNode = nodes.find(n => n.id === activeNode) || nodes[4];

  return (
    <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl glass-panel border border-[#1D3045] shadow-2xl">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#1D3045] pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#35D0BA] animate-pulse" />
          <span className="font-mono text-xs text-[#35D0BA] tracking-widest">[ SYSTEM_TOPOLOGY_V1.0 ]</span>
        </div>
        <span className="font-mono text-[10px] text-[#65768A]">LAB_STATUS: ONLINE</span>
      </div>

      {/* Nodes Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                isActive 
                  ? 'bg-[#35D0BA]/10 border-[#35D0BA] text-[#35D0BA]' 
                  : 'bg-[#07111F]/60 border-[#1D3045] text-[#9BAABD] hover:border-[#263A50] hover:text-[#F4F7FA]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#35D0BA]' : 'text-[#65768A] group-hover:text-[#9BAABD]'}`} />
                <span className="font-mono text-[9px] opacity-60">0{nodes.indexOf(node) + 1}</span>
              </div>
              <span className="font-mono text-xs font-semibold tracking-wider">{node.label}</span>
            </button>
          );
        })}
      </div>

      {/* Detail Inspector Card */}
      <div className="bg-[#07111F]/80 rounded-xl p-4 border border-[#1D3045] transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-[#65768A]">SELECTED_NODE_INSPECTOR</span>
          <span className="font-mono text-[10px] text-[#35D0BA] uppercase">[{currentNode.id}]</span>
        </div>
        <p className="text-sm font-medium text-[#F4F7FA] mb-1">{currentNode.desc}</p>
        <p className="text-xs text-[#9BAABD]">Sri Manakula Vinayagar Engineering College — B.Tech CSE Student Laboratory</p>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#35D0BA]" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#35D0BA]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#35D0BA]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#35D0BA]" />
    </div>
  );
}
