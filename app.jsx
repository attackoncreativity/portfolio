import { motion } from 'framer-motion';
import { Code, Cpu, CpuIcon, Database, ExternalLink, Github, Layers, Shield, Terminal } from 'lucide-react';

// Animation variants for clean, staggered fade-ins
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. HERO SECTION */}
      <header className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 mb-6 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 rounded-full text-xs font-mono tracking-widest uppercase"
        >
          Available for Projects & Smart Contract Audits
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500"
        >
          Building the Decentralized Web
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed"
        >
          Full-Stack Developer specialized in robust backend architectures and secure, gas-optimized Smart Contracts. 
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex gap-4"
        >
          <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-medium rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20">
            View Projects
          </a>
          <a href="#skills" className="px-6 py-3 border border-slate-800 hover:border-slate-700 bg-slate-900/50 rounded-lg transition-all text-slate-300">
            Explore Stack
          </a>
        </motion.div>
      </header>

      {/* 2. CORE EXPERTISE / SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
          <p className="text-slate-400 mt-2">Bridging traditional architecture with web3 innovation.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Blockchain Dev Card */}
          <motion.div variants={fadeIn} className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Blockchain & Web3</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">Designing trustless systems, writing secure smart contracts, and interfacing with decentralized networks.</p>
            <ul className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><Terminal size={14} className="text-cyan-400" /> Solidity / Vyper</li>
              <li className="flex items-center gap-2"><Cpu size={14} className="text-cyan-400" /> Hardhat / Foundry</li>
              <li className="flex items-center gap-2"><Layers size={14} className="text-cyan-400" /> Ethers.js / Viem</li>
              <li className="flex items-center gap-2"><Shield size={14} className="text-cyan-400" /> DeFi & ERC Standards</li>
            </ul>
          </motion.div>

          {/* Full Stack Dev Card */}
          <motion.div variants={fadeIn} className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
              <Code size={24} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Full-Stack Architecture</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">Developing highly scalable, reactive interfaces backed by robust cloud infrastructures and optimized databases.</p>
            <ul className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2"><Code size={14} className="text-purple-400" /> React / Next.js</li>
              <li className="flex items-center gap-2"><CpuIcon size={14} className="text-purple-400" /> Node.js / Python</li>
              <li className="flex items-center gap-2"><Database size={14} className="text-purple-400" /> PostgreSQL / Redis</li>
              <li className="flex items-center gap-2"><Layers size={14} className="text-purple-400" /> REST / GraphQL APIs</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-slate-400 mt-2">A snapshot of production apps and verified deployments.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group bg-slate-900/20 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col">
            {/* Visual Placeholder for Project Screenshot */}
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="text-xs font-mono text-slate-500 group-hover:scale-105 transition-transform duration-300">
                [ Interactive Dashboard UI ]
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Automated Yield Optimizer</h3>
                <div className="flex gap-3 text-slate-400">
                  <a href="#" className="hover:text-white"><Github size={18} /></a>
                  <a href="#" className="hover:text-white"><ExternalLink size={18} /></a>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 flex-grow">
                A non-custodial DeFi protocol dashboard that rebalances assets across liquidity pools dynamically. Built with React and Foundry.
              </p>
              <div className="flex gap-2 flex-wrap text-[11px] font-mono text-slate-400">
                <span className="px-2 py-1 bg-slate-800 rounded">React</span>
                <span className="px-2 py-1 bg-slate-800 rounded">Solidity</span>
                <span className="px-2 py-1 bg-slate-800 rounded">Ethers.js</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-slate-900/20 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col">
            {/* Visual Placeholder for Project Screenshot */}
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="text-xs font-mono text-slate-500 group-hover:scale-105 transition-transform duration-300">
                [ High-Throughput Analytics UI ]
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Real-Time Data Pipeline</h3>
                <div className="flex gap-3 text-slate-400">
                  <a href="#" className="hover:text-white"><Github size={18} /></a>
                  <a href="#" className="hover:text-white"><ExternalLink size={18} /></a>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 flex-grow">
                Full-stack analytics indexing engine processing cross-chain event logs and streaming live metrics via WebSockets to a React frontend.
              </p>
              <div className="flex gap-2 flex-wrap text-[11px] font-mono text-slate-400">
                <span className="px-2 py-1 bg-slate-800 rounded">Python</span>
                <span className="px-2 py-1 bg-slate-800 rounded">React</span>
                <span className="px-2 py-1 bg-slate-800 rounded">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER / CALL TO ACTION */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
        <div>© 2026 • Engineered for security and scale.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-300 transition-colors">GitHub</a>
          <a href="#" className="hover:text-slate-300 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Smart Contract Key</a>
        </div>
      </footer>
    </div>
  );
}