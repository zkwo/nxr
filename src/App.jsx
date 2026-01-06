import React from 'react';

const NexoraHub = () => {
  const loadstringText = 'loadstring(game:HttpGet("https://raw.gitl...';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(loadstringText);
    alert('Link copied!');
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-white font-sans flex flex-col items-center p-6 selection:bg-purple-500/30">
      
      {/* Header Section */}
      <header className="mt-10 mb-8 text-center">
        <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
          <span className="text-purple-400 text-2xl">✦</span>
        </div>
        <h1 className="text-4xl font-black tracking-widest bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          NEXORA HUB
        </h1>
        <p className="text-gray-400 mt-2 text-sm font-light uppercase tracking-tighter">
          Experience the next level of power
        </p>
      </header>

      {/* Script Box */}
      <div className="w-full max-w-md bg-[#0F1117] border border-white/10 rounded-xl p-3 flex items-center gap-3 mb-8">
        <input 
          readOnly 
          value={loadstringText}
          className="bg-transparent flex-1 text-xs text-gray-400 outline-none truncate"
        />
        <button 
          onClick={copyToClipboard}
          className="bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors border border-white/5"
        >
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      {/* Access Cards */}
      <div className="w-full max-w-md space-y-6">
        
        {/* Free Access */}
        <div className="bg-[#11131E]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <div className="text-purple-400 mb-4 flex justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Free Access</h2>
            <p className="text-gray-500 text-sm mb-6">Begin your journey with basic features</p>
            <button className="bg-[#2A2D3E] hover:bg-[#353950] text-white px-8 py-2.5 rounded-xl font-semibold transition-all w-full sm:w-auto">
              Get Free Key
            </button>
          </div>
        </div>

        {/* Premium Access */}
        <div className="bg-[#11131E]/80 backdrop-blur-md border border-pink-500/20 rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-pink-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-pink-500/20">
            Best Value
          </div>
          <div className="relative z-10">
            <div className="text-pink-400 mb-4 flex justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Premium Access</h2>
            <p className="text-gray-500 text-sm mb-6">Unlock full potential with premium features</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white px-8 py-2.5 rounded-xl font-semibold transition-all w-full sm:w-auto shadow-lg shadow-purple-500/20">
              Get Premium Key
            </button>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="w-full max-w-md mt-10 space-y-4">
        <FeatureItem 
          icon={<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
          title="Secure System"
          desc="Advanced protection and monitoring features"
        />
        <FeatureItem 
          icon={<path d="M13 10V3L4 14h7v7l9-11h-7z" />}
          title="High Performance"
          desc="Optimized for maximum speed and efficiency"
        />
        <FeatureItem 
          icon={<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />}
          title="Premium Features"
          desc="Access to exclusive tools and capabilities"
        />
      </div>

      {/* Footer Access */}
      <div className="w-full max-w-md mt-10 mb-20 bg-[#11131E] border border-white/5 rounded-3xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Already have a key?</h3>
        <p className="text-gray-500 text-sm mb-6">Access the full script hub with your existing key</p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-2.5 rounded-xl font-semibold w-full">
          Access Script Hub
        </button>
      </div>

    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 p-4 bg-[#0F1117] rounded-2xl border border-white/5">
    <div className="text-purple-400 shrink-0 bg-purple-500/10 p-2 rounded-lg">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <div>
      <h4 className="font-bold text-sm">{title}</h4>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  </div>
);

export default NexoraHub;
