export default function LandingMarkup() {
  return (
    <>
        <nav id="main-nav" className="mt-8 w-[95%] max-w-7xl h-20 flex items-center justify-between px-2 md:px-0 relative z-50">
        
                <div id="left-pill" className="nav-pill flex items-center gap-8 px-6 md:px-8 py-2 rounded-full">
            <div className="flex items-center">
                <span className="font-romantica text-2xl font-semibold text-white tracking-wide">LOJJ.IO</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Features</a>
            </div>
        </div>

                <div id="right-pill" className="nav-pill pill-switch-container rounded-full overflow-hidden">
            
                        <button id="hamburger-btn" className="md:hidden flex items-center justify-center w-12 h-full text-white/80 hover:text-white transition-colors z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>

                        <a href="#" className="hidden md:flex nav-link watch-demo-trigger text-sm whitespace-nowrap">
                Request Demo
            </a>
            
                        <a href="#" className="waitlist-trigger waitlist-trigger-mobile md:nav-link px-5 md:px-0 rounded-full md:rounded-none h-full md:h-auto flex items-center justify-center text-sm font-semibold whitespace-nowrap z-10">
                Contact us
            </a>

                        <div className="active-slider shadow-md"></div>
        </div>
    </nav>

        <div className="relative w-full flex justify-center mt-6">
                <div id="dynamic-hero-box" className="visible w-[95%] max-w-7xl min-h-[500px] md:min-h-[600px] flex flex-col items-start justify-center text-left px-6 py-10 md:px-20 md:py-12 relative overflow-hidden shadow-2xl">
            
                        <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-[1]"></div>

            <div className="relative z-10 max-w-2xl">
                                <h1 className="hero-heading font-bold text-white mb-4 md:mb-6 tracking-tight max-w-2xl grid grid-cols-[auto_auto] justify-start gap-x-[0.25em] gap-y-0">
                    <span>Better</span><span className="italic">reviews.</span>
                    <span>Faster</span><span className="italic">service.</span>
                    <span>Higher</span><span className="italic">revenue.</span>
                </h1>
                <p className="text-white/90 text-base md:text-xl font-bold leading-relaxed max-w-xl">
                    Capture requests, complete tasks, and deliver five-star stays.
                </p>
            </div>

                        <a href="#" data-scroll-signup className="rotating-border-btn absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex items-center justify-center gap-3 px-10 md:px-12 h-[64px] md:h-[68px] rounded-full transition-all duration-300 group button-strong-shadow">
                <span className="text-white font-bold text-base md:text-lg transition-colors">Join the waitlist</span>
            </a>
        </div>
    </div>

        <div className="scroll-indicator">
        <div className="scroll-indicator-arrow"></div>
    </div>

        <div className="visualization-section relative w-full flex justify-center mt-32 md:mt-40">
        <div className="w-[95%] max-w-7xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">How Requests Get Done</h2>
            <div className="relative -z-10 w-full rounded-2xl sm:block visualization-container p-8 md:p-12">
                <div className="w-full relative flex items-center justify-center py-8" style={{zIndex: 1}}>
                                        <div className="w-full max-w-6xl grid grid-cols-2 md:flex md:flex-nowrap items-start justify-between relative gap-8 md:gap-0">
                        
                                                <div className="flex flex-col items-center relative z-10 w-full md:w-auto md:flex-1 group">
                                                        <div className="w-24 h-20 md:w-28 md:h-24 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-30 flex items-center justify-center mb-4 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-2 relative bg-[#223d14]/60" style={{willChange: "transform", transform: "translateZ(0)"}}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className="text-white opacity-90 guest-base">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    <line x1="8" y1="9" x2="16" y2="9" className="anim-msg-line" style={{animationDelay: "0s"}}></line>
                                    <line x1="8" y1="13" x2="12" y2="13" className="anim-msg-line" style={{animationDelay: "0.5s"}}></line>
                                                                        <circle cx="20" cy="3" r="2.5" fill="currentColor" stroke="none" shapeRendering="geometricPrecision" className="anim-bell-dot"/>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute guest-badge-a" style={{top: "-6px", left: "-4px"}}>
                                    <path d="M240,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-48,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute guest-badge-b" style={{top: "-6px", right: "-4px"}}>
                                    <path d="M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144V72A16,16,0,0,1,88,56h32V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V56h32a16,16,0,0,1,16,16v72a16,16,0,0,1-16,16H88A16,16,0,0,1,72,144Zm64-88h32V40H136ZM88,144H216V72H88Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute guest-badge-c" style={{bottom: "-6px", left: "-4px"}}>
                                    <path d="M241.57,171.2,141.33,96l23.46-17.6A8,8,0,0,0,168,72a40,40,0,1,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.69-3.78L123.34,89.49l-.28.21L14.43,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM232,184H24l104-78,104,78Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute guest-badge-d" style={{bottom: "-6px", right: "-4px"}}>
                                    <path d="M224,112H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V216a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,120,8,8,0,0,0,224,112Zm-59.34,88a8,8,0,0,0-4.66,7.27V216H96v-8.71A8,8,0,0,0,91.34,200a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,200ZM81.77,55c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,88,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,88,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C70.37,74.81,73.38,65.43,81.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,128,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,128,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C110.37,74.81,113.38,65.43,121.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,168,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,168,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C150.37,74.81,153.38,65.43,161.77,55Z"></path>
                                </svg>
                            </div>
                                                        <div className="text-white text-2xl font-bold mb-1 opacity-80">1</div>
                                                        <div className="text-white text-sm font-bold text-center opacity-90 tracking-wide">Guest Request</div>
                        </div>

                                                <div className="flex flex-col items-center relative z-10 w-full md:w-auto md:flex-1 group">
                                                        <div className="w-24 h-20 md:w-28 md:h-24 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-30 flex items-center justify-center mb-4 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-2 relative bg-[#223d14]/60" style={{willChange: "transform", transform: "translateZ(0)"}}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-90">
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    <path d="M9 10h6" className="anim-clipboard-item" style={{animationDelay: "0s"}}></path>
                                    <path d="M9 14h6" className="anim-clipboard-item" style={{animationDelay: "0.2s"}}></path>
                                    <path d="M9 18h4" className="anim-clipboard-item" style={{animationDelay: "0.4s"}}></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute task-icon-clock" style={{top: "-6px", right: "-4px"}}>
                                    <path d="M136,72v43.05l36.42-18.21a8,8,0,0,1,7.16,14.31l-48,24A8,8,0,0,1,120,128V72a8,8,0,0,1,16,0Zm-8,144a88,88,0,1,1,88-88,8,8,0,0,0,16,0A104,104,0,1,0,128,232a8,8,0,0,0,0-16Zm103.73,5.94a8,8,0,1,1-15.46,4.11C213.44,215.42,203.46,208,192,208s-21.44,7.42-24.27,18.05A8,8,0,0,1,160,232a8.15,8.15,0,0,1-2.06-.27,8,8,0,0,1-5.67-9.79,40,40,0,0,1,17.11-23.32,32,32,0,1,1,45.23,0A40,40,0,0,1,231.73,221.94ZM176,176a16,16,0,1,0,16-16A16,16,0,0,0,176,176Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute task-icon-broom" style={{bottom: "-6px", left: "-4px"}}>
                                    <path d="M235.5,216.81c-22.56-11-35.5-34.58-35.5-64.8V134.73a15.94,15.94,0,0,0-10.09-14.87L165,110a8,8,0,0,1-4.48-10.34l21.32-53a28,28,0,0,0-16.1-37,28.14,28.14,0,0,0-35.82,16,.61.61,0,0,0,0,.12L108.9,79a8,8,0,0,1-10.37,4.49L73.11,73.14A15.89,15.89,0,0,0,55.74,76.8C34.68,98.45,24,123.75,24,152a111.45,111.45,0,0,0,31.18,77.53A8,8,0,0,0,61,232H232a8,8,0,0,0,3.5-15.19ZM67.14,88l25.41,10.3a24,24,0,0,0,31.23-13.45l21-53c2.56-6.11,9.47-9.27,15.43-7a12,12,0,0,1,6.88,15.92L145.69,93.76a24,24,0,0,0,13.43,31.14L184,134.73V152c0,.33,0,.66,0,1L55.77,101.71A108.84,108.84,0,0,1,67.14,88Zm48,128a87.53,87.53,0,0,1-24.34-42,8,8,0,0,0-15.49,4,105.16,105.16,0,0,0,18.36,38H64.44A95.54,95.54,0,0,1,40,152a85.9,85.9,0,0,1,7.73-36.29l137.8,55.12c3,18,10.56,33.48,21.89,45.16Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute task-icon-tool" style={{top: "-6px", left: "-4px"}}>
                                    <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute task-icon-wrench" style={{bottom: "-6px", right: "-4px"}}>
                                    <path d="M220.28,55l-.17-.17-44.9-42.28a16,16,0,0,0-22.5.08L108.17,56.87l-1.54-1.56A25,25,0,0,0,71.27,90.58l1.46,1.48L52.69,112a16,16,0,0,0,0,22.63l12.68,12.68a16,16,0,0,0,22.59,0l19.93-19.65L120,140h0l0,0L55.31,205.37a25,25,0,1,0,35.34,35.29l88.67-89.35a16,16,0,0,0,0-22.6L143.63,92.66,156.56,80l.1.09L194,115.4a16,16,0,0,0,22.53-.09l3.71-3.71a40,40,0,0,0,0-56.57ZM76.69,136,64,123.33l20-19.88,12.69,12.86Zm2.62,93.37a9,9,0,1,1-12.65-12.71l64.67-65.37a16,16,0,0,0,0-22.57L82.63,79.31A9,9,0,0,1,95.29,66.6L168,140ZM209,100.28,205.25,104a1.21,1.21,0,0,0-.16-.16L167.69,68.5a16.05,16.05,0,0,0-22.39.12L132.37,81.29,119.43,68.23,164,24l.17.16,44.88,42.26a24,24,0,0,1-.08,33.86Z"></path>
                                </svg>
                            </div>
                                                        <div className="text-white text-2xl font-bold mb-1 opacity-80">2</div>
                                                        <div className="text-white text-sm font-bold text-center opacity-90 tracking-wide">Task Assignment</div>
                        </div>

                                                <div className="flex flex-col items-center relative z-10 w-full md:w-auto md:flex-1 group">
                                                        <div className="w-24 h-20 md:w-28 md:h-24 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-30 flex items-center justify-center mb-4 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-2 relative bg-[#223d14]/60" style={{willChange: "transform", transform: "translateZ(0)"}}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-90 team-users-base">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute team-badge-core" style={{top: "-6px", left: "-4px"}}>
                                    <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute team-badge-handoff" style={{top: "-6px", right: "-4px"}}>
                                    <path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute team-badge-community" style={{bottom: "-6px", left: "-4px"}}>
                                    <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute team-badge-sync" style={{bottom: "-6px", right: "-4px"}}>
                                    <path d="M192.5,171.47A88.34,88.34,0,0,0,224,101.93c-1-45.71-37.61-83.4-83.24-85.8A88,88,0,0,0,48,102L25.55,145.18c-.09.18-.18.36-.26.54a16,16,0,0,0,7.55,20.62l.25.11L56,176.94V208a16,16,0,0,0,16,16h48a8,8,0,0,0,0-16H72V171.81a8,8,0,0,0-4.67-7.28L40,152l23.07-44.34A7.9,7.9,0,0,0,64,104a72,72,0,0,1,56-70.21V49.38a24,24,0,1,0,16,0V32c1.3,0,2.6,0,3.9.1A72.26,72.26,0,0,1,203.84,80H184a8,8,0,0,0-6.15,2.88L152.34,113.5a24.06,24.06,0,1,0,12.28,10.25L187.75,96h19.79q.36,3.12.44,6.3a72.26,72.26,0,0,1-28.78,59.3,8,8,0,0,0-3.14,7.39l8,64a8,8,0,0,0,7.93,7,8.39,8.39,0,0,0,1-.06,8,8,0,0,0,6.95-8.93ZM128,80a8,8,0,1,1,8-8A8,8,0,0,1,128,80Zm16,64a8,8,0,1,1,8-8A8,8,0,0,1,144,144Z"></path>
                                </svg>
                            </div>
                                                        <div className="text-white text-2xl font-bold mb-1 opacity-80">3</div>
                                                        <div className="text-white text-sm font-bold text-center opacity-90 tracking-wide">Team Collaboration</div>
                        </div>

                                                <div className="flex flex-col items-center relative z-10 w-full md:w-auto md:flex-1 group">
                                                        <div className="w-24 h-20 md:w-28 md:h-24 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-30 flex items-center justify-center mb-4 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-2 relative bg-[#223d14]/60" style={{willChange: "transform", transform: "translateZ(0)"}}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-90">
                                    <line x1="12" y1="20" x2="12" y2="10" className="anim-bar" style={{animationDelay: "0s"}}></line>
                                    <line x1="18" y1="20" x2="18" y2="4" className="anim-bar" style={{animationDelay: "0.3s"}}></line>
                                    <line x1="6" y1="20" x2="6" y2="16" className="anim-bar" style={{animationDelay: "0.6s"}}></line>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute track-badge-a" style={{top: "-6px", left: "-4px"}}>
                                    <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute track-badge-b" style={{top: "-6px", right: "-4px"}}>
                                    <path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM128,24a8,8,0,0,0-8,8v91.82L41.19,169.73a8,8,0,0,0-2.87,11A104,104,0,1,0,128,24Zm0,192a88.47,88.47,0,0,1-71.49-36.68l75.52-44a8,8,0,0,0,4-6.92V40.36A88,88,0,0,1,128,216Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute track-badge-c" style={{bottom: "-6px", left: "-4px"}}>
                                    <path d="M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute track-badge-d" style={{bottom: "-6px", right: "-4px"}}>
                                    <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V200H224A8,8,0,0,1,232,208ZM132,160a12,12,0,1,0-12-12A12,12,0,0,0,132,160Zm-24-56A12,12,0,1,0,96,92,12,12,0,0,0,108,104ZM76,176a12,12,0,1,0-12-12A12,12,0,0,0,76,176Zm96-48a12,12,0,1,0-12-12A12,12,0,0,0,172,128Zm24-40a12,12,0,1,0-12-12A12,12,0,0,0,196,88Zm-20,76a12,12,0,1,0,12-12A12,12,0,0,0,176,164Z"></path>
                                </svg>
                            </div>
                                                        <div className="text-white text-2xl font-bold mb-1 opacity-80">4</div>
                                                        <div className="text-white text-sm font-bold text-center opacity-90 tracking-wide">Track Progress</div>
                        </div>

                                                <div className="flex flex-col items-center relative z-10 w-full md:w-auto md:flex-1 group">
                                                        <div className="w-24 h-20 md:w-28 md:h-24 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-30 flex items-center justify-center mb-4 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-2 relative bg-[#223d14]/60" style={{willChange: "transform", transform: "translateZ(0)"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-90 anim-check">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="9 11.01 12 14.01 22 4"></polyline>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute complete-badge-a" style={{top: "-6px", left: "-4px"}}>
                                    <path d="M238.73,43.67A8,8,0,0,0,232,40H152a8,8,0,0,0-7.28,4.69L135.94,64H28a8,8,0,0,0-5.92,13.38L57.19,116,22.08,154.62A8,8,0,0,0,28,168h73.09a8,8,0,0,0,7.28-4.69L117.15,144h62.43l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,238.73,43.67ZM95.94,152H46.08l27.84-30.62a8,8,0,0,0,0-10.76L46.08,80h82.59Zm90.91-24H124.42l32.73-72h62.43Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute complete-badge-b" style={{top: "-6px", right: "-4px"}}>
                                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute complete-badge-c" style={{bottom: "-6px", left: "-4px"}}>
                                    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute complete-badge-d" style={{bottom: "-6px", right: "-4px"}}>
                                    <path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"></path>
                                </svg>
                            </div>
                                                        <div className="text-white text-2xl font-bold mb-1 opacity-80">5</div>
                                                        <div className="text-white text-sm font-bold text-center opacity-90 tracking-wide">Task Completion</div>
                        </div>

                                                <div className="flex flex-col items-center relative z-10 w-full md:w-auto md:flex-1 group">
                                                        <div className="w-24 h-20 md:w-28 md:h-24 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-30 flex items-center justify-center mb-4 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-2 relative bg-[#223d14]/60" style={{willChange: "transform", transform: "translateZ(0)"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-90">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" className="anim-clipboard-item" style={{animationDelay: "0s"}}></polygon>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute reviews-badge-a" style={{top: "-6px", left: "-4px"}}>
                                    <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H96a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm125.09-40.22-22.52,18.59,6.86,27.71a8,8,0,0,1-11.82,8.81L184,183.82l-25.61,15.07a8,8,0,0,1-11.82-8.81l6.85-27.71-22.51-18.59a8,8,0,0,1,4.47-14.14l29.84-2.31,11.43-26.5a8,8,0,0,1,14.7,0l11.43,26.5,29.84,2.31a8,8,0,0,1,4.47,14.14Zm-25.47.28-14.89-1.15a8,8,0,0,1-6.73-4.8l-6-13.92-6,13.92a8,8,0,0,1-6.73,4.8l-14.89,1.15,11.11,9.18a8,8,0,0,1,2.68,8.09l-3.5,14.12,13.27-7.81a8,8,0,0,1,8.12,0l13.27,7.81-3.5-14.12a8,8,0,0,1,2.68-8.09Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute reviews-badge-b" style={{top: "-6px", right: "-4px"}}>
                                    <path d="M239.35,70.08a13.41,13.41,0,0,0-11.77-9.28l-36.94-2.92L176.43,24.22a13.51,13.51,0,0,0-24.86,0L137.36,57.88,100.42,60.8a13.39,13.39,0,0,0-7.66,23.58l28.06,23.68-8.56,35.39a13.32,13.32,0,0,0,5.1,13.91,13.51,13.51,0,0,0,15,.69L164,139l31.65,19.06a13.54,13.54,0,0,0,15-.69,13.34,13.34,0,0,0,5.09-13.91l-8.56-35.39,28.06-23.68A13.32,13.32,0,0,0,239.35,70.08ZM193.08,99a8,8,0,0,0-2.61,8l8.28,34.21L168.13,122.8a8,8,0,0,0-8.25,0l-30.62,18.43L137.54,107a8,8,0,0,0-2.62-8L108,76.26l35.52-2.81a8,8,0,0,0,6.74-4.87L164,35.91l13.79,32.67a8,8,0,0,0,6.74,4.87l35.53,2.81Zm-105,24.18L29.66,181.66a8,8,0,0,1-11.32-11.32l58.45-58.45a8,8,0,0,1,11.32,11.32Zm10.81,49.87a8,8,0,0,1,0,11.31L45.66,237.66a8,8,0,0,1-11.32-11.32l53.27-53.26A8,8,0,0,1,98.92,173.08Zm73-1a8,8,0,0,1,0,11.32l-54.28,54.28a8,8,0,0,1-11.32-11.32l54.29-54.28A8,8,0,0,1,171.94,172.06Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute reviews-badge-c" style={{bottom: "-6px", left: "-4px"}}>
                                    <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                                </svg>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white opacity-90 absolute reviews-badge-d" style={{bottom: "-6px", right: "-4px"}}>
                                    <path d="M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32Zm96,168a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V88A24,24,0,0,1,80,64h96a24,24,0,0,1,24,24Zm-40-40a24,24,0,0,1-24,24v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h24a8,8,0,0,0,0-16H120a24,24,0,0,1,0-48V96a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16H120a8,8,0,0,0,0,16h16A24,24,0,0,1,160,160Z"></path>
                                </svg>
                            </div>
                                                        <div className="text-white text-2xl font-bold mb-1 opacity-80">6</div>
                                                        <div className="text-white text-sm font-bold text-center opacity-90 tracking-wide">Better Reviews</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <footer id="signup" className="site-footer">
        <div className="footer-top">
                        <div className="footer-cta">
                <h2>Get Early<br />Access</h2>
                
                <form id="footer-signup" className="flex flex-col gap-0 relative" action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse" method="POST" target="hidden_iframe" noValidate>
                    <div className="newsletter-form">
                        <input type="text" name="entry.FULLNAME_ENTRY_ID" className="newsletter-input" placeholder="Full Name" required />
                        <button className="newsletter-btn" type="submit">OK</button>
                        <div className="form-tooltip">Please enter your full name</div>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" name="entry.EMAIL_ENTRY_ID" className="newsletter-input" placeholder="Email" required />
                        <div className="form-tooltip">Please enter a valid email</div>
                    </div>
                    <div className="newsletter-form">
                        <input type="text" name="entry.HOTEL_ENTRY_ID" className="newsletter-input" placeholder="Hotel Name" required />
                        <div className="form-tooltip">Please enter your hotel name</div>
                    </div>
                    <div className="newsletter-form">
                        <input type="text" name="entry.ROLE_ENTRY_ID" className="newsletter-input" placeholder="Role" required />
                        <div className="form-tooltip">Please enter your role</div>
                    </div>
                    <div className="newsletter-form">
                        <input type="text" name="entry.LOCATION_ENTRY_ID" className="newsletter-input" placeholder="Location" required />
                        <div className="form-tooltip">Please enter your location</div>
                    </div>
                </form>
                <iframe name="hidden_iframe" style={{display: "none"}} />
            </div>

                        <div className="footer-links">
                <div className="link-column">
                    <div className="link-column-heading">About</div>
                    <a href="#">Our Story</a>
                    <a href="#">Careers</a>
                </div>
                <div className="link-column">
                    <div className="link-column-heading">Features</div>
                    <a href="#">Requests</a>
                    <a href="#">Analytics</a>
                </div>
                <div className="link-column">
                    <div className="link-column-heading">Social</div>
                    <a href="#">LinkedIn</a>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="copyright">
                &copy; 2026 LOJJ.IO &mdash; All Rights Reserved
            </div>
        </div>
    </footer>

        <div id="mobile-menu" className="fixed inset-0 z-[100] invisible opacity-0 flex flex-col items-center justify-center p-8">
        <button id="close-menu" className="absolute top-10 right-10 p-2 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="flex flex-col items-center gap-10 text-3xl font-medium tracking-tight text-[rgb(34,61,20)]">
            <a href="#" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Features</a>
            <a href="#" className="rotating-border-btn flex items-center justify-center gap-3 px-10 h-[64px] rounded-full transition-all duration-300 button-strong-shadow">
                <span className="text-white font-bold text-base transition-colors">Request Demo</span>
            </a>
            <div className="mt-4">
                <span className="font-romantica text-4xl opacity-20">LOJJ.IO</span>
            </div>
        </div>
    </div>
    </>
  );
}