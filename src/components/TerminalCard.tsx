import React, { useState } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export function TerminalCard() {
  const [command, setCommand] = useState('whoami');
  const [output, setOutput] = useState([
    'Computer Science & Engineering student',
    'Developer & Problem solver',
    'Sri Manakula Vinayagar Engineering College',
    'Always learning and building'
  ]);

  const handleCommand = (cmd: string) => {
    setCommand(cmd);
    if (cmd === 'whoami') {
      setOutput([
        'Computer Science & Engineering student',
        'Developer & Problem solver',
        'Sri Manakula Vinayagar Engineering College',
        'Always learning and building'
      ]);
    } else if (cmd === 'focus') {
      setOutput([
        '> web development',
        '> cybersecurity',
        '> AI / machine learning',
        '> computer systems'
      ]);
    } else if (cmd === 'skills') {
      setOutput([
        'Languages: Python, C, JavaScript, TypeScript, SQL',
        'Web: React, HTML, CSS, Tailwind',
        'Security & Tools: Linux, Git, GitHub'
      ]);
    } else if (cmd === 'contact') {
      setOutput([
        'Email: adhithyaram2006@gmail.com',
        'GitHub: github.com/adhithyaram2006-dev',
        'LinkedIn: linkedin.com/in/adhithyaram-jayaraman-06434b353'
      ]);
    } else {
      setOutput([`Command not recognized: ${cmd}`, 'Try running: whoami, focus, skills, or contact']);
    }
  };

  return (
    <section className="py-20 bg-[#0D0D0D]/60 border-y border-[#262626]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="rounded-2xl bg-[#050505] border border-[#262626] overflow-hidden shadow-2xl">
          
          {/* Terminal Title Bar */}
          <div className="px-6 py-4 bg-[#0D0D0D] border-b border-[#262626] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#E7B75D]" />
              <div className="w-3 h-3 rounded-full bg-[#FF3333]" />
              <div className="w-3 h-3 rounded-full bg-[#FF5C5C]" />
              <span className="font-mono text-xs text-[#A3A3A3] ml-4">adhithyaram@portfolio:~ (bash)</span>
            </div>
            <TerminalIcon className="w-4 h-4 text-[#FF3333]" />
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm space-y-4">
            <div className="flex items-center space-x-2 text-[#FF3333]">
              <span>adhithyaram@portfolio:~$</span>
              <span className="text-[#F5F5F5]">{command}</span>
            </div>

            <div className="text-[#A3A3A3] space-y-1 pl-4 border-l-2 border-[#FF3333]/30">
              {output.map((line, idx) => (
                <p key={idx} className="text-sm">{line}</p>
              ))}
            </div>

            {/* Quick Command Buttons */}
            <div className="pt-6 border-t border-[#262626] flex flex-wrap gap-2 items-center">
              <span className="text-xs text-[#737373] mr-2">QUICK_COMMANDS:</span>
              {['whoami', 'focus', 'skills', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                    command === cmd 
                      ? 'bg-[#FF3333] text-[#050505] font-semibold' 
                      : 'bg-[#0D0D0D] text-[#A3A3A3] hover:text-[#FF3333] border border-[#262626]'
                  }`}
                >
                  ${cmd}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
