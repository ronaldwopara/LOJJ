import HeroWaitlistDialog from "@/components/HeroWaitlistDialog";
import SolutionsShowcase from "@/components/solutions/SolutionsShowcase";

export default function LandingMarkup() {
  return (
    <>
      <nav
        id="main-nav"
        className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm transform transition-transform duration-300 ease-out"
      >
        <div className="flex w-full items-center justify-between px-10 py-6 md:px-16">
          <div className="flex items-center gap-6">
            <a href="/" className="lojj-logo font-romantica">
              lojj.io
            </a>
            <div className="lojj-left-pill hidden md:inline-flex">
              <a href="#about" className="lojj-left-link">
                About
              </a>
              <a href="#features" className="lojj-left-link">
                Features
              </a>
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a href="#waitlist">
              <button className="inline-flex cursor-pointer items-center justify-center rounded-full py-2 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:text-white h-10 px-6 text-base border-snow/50 text-snow hover:border-white hover:bg-white/10">
                Join waitlist
              </button>
            </a>
            <a href="mailto:info@lojj.io">
              <button className="inline-flex cursor-pointer items-center justify-center rounded-full py-2 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 bg-snow text-black hover:bg-white h-10 px-6 text-base">
                Contact
              </button>
            </a>
          </div>

          <button
            id="hamburger-btn"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            <span className="bg-snow h-0.5 w-6 transition-all" />
            <span className="bg-snow h-0.5 w-6 transition-all" />
            <span className="bg-snow h-0.5 w-6 transition-all" />
          </button>
        </div>
      </nav>

      <main className="landing-main w-full">
        <HeroWaitlistDialog />

        <section id="about" className="landing-section w-full flex justify-center mt-20 md:mt-28">
          <div className="w-[95%] max-w-7xl">
            <div className="section-heading-stack">
              <span className="section-ghost-h2" aria-hidden>
                THE FLOW
              </span>
              <h2 className="landing-h2">How it works</h2>
            </div>
            <p className="landing-sub">
              LOJJ runs as connected specialist windows. Guest Expert handles routine questions, Ops
              Lead keeps tasks visible, Review Specialist asks for feedback at the right time, and AI
              Manager supports new staff without extra radio traffic.
            </p>
          </div>
        </section>

        <SolutionsShowcase />

        <section className="landing-section w-full flex justify-center mt-20 md:mt-28">
          <div className="w-[95%] max-w-7xl">
            <div className="landing-card win-card mt-8">
              <div className="feature-kicker">The outcome</div>
              <h2 className="landing-h2">The win</h2>
              <h3 className="landing-h3 win-subhead">Uninterrupted breaks</h3>
              <p className="landing-p win-copy">
                LOJJ gives staff guidance. Managers step in only when they are needed. Operations run
                smoother, guests get steadier service, and that shows up in better reviews and more
                revenue.
              </p>
            </div>
          </div>
        </section>

      </main>

        <footer id="waitlist" className="site-footer">
        <div className="footer-top">
                        <div className="footer-cta">
                <h2>Get Early<br />Access</h2>
                
                <form
                  id="footer-signup"
                  className="flex flex-col gap-0 relative"
                  method="post"
                  action="/api/waitlist"
                  noValidate
                >
                    <div className="newsletter-form">
                        <input type="text" name="fullName" className="newsletter-input" placeholder="Full Name" required />
                        <button className="newsletter-btn" type="submit">OK</button>
                        <div className="form-tooltip">Please enter your full name</div>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" name="email" className="newsletter-input" placeholder="Email" required />
                        <div className="form-tooltip">Please enter a valid email</div>
                    </div>
                    <div className="newsletter-form">
                        <input type="text" name="hotel" className="newsletter-input" placeholder="Hotel Name" required />
                        <div className="form-tooltip">Please enter your hotel name</div>
                    </div>
                    <div className="newsletter-form">
                        <input type="text" name="role" className="newsletter-input" placeholder="Role" required />
                        <div className="form-tooltip">Please enter your role</div>
                    </div>
                    <div className="newsletter-form">
                        <input type="text" name="location" className="newsletter-input" placeholder="Location" required />
                        <div className="form-tooltip">Please enter your location</div>
                    </div>
                </form>
            </div>

                        <div className="footer-links">
                <div className="link-column">
                    <div className="link-column-heading">About</div>
                    <a href="#about">Overview</a>
                    <a href="#waitlist">Early access</a>
                    <a href="/faq">FAQ</a>
                </div>
                <div className="link-column">
                    <div className="link-column-heading">Features</div>
                    <a href="#features">Teammates</a>
                    <a href="#waitlist">Waitlist</a>
                </div>
                <div className="link-column">
                    <div className="link-column-heading">Social</div>
                    <a href="https://www.linkedin.com/company/lojj" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
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
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#features" className="hover:opacity-60 transition-opacity">Features</a>
            <a href="#waitlist" className="rotating-border-btn flex items-center justify-center gap-3 px-10 h-[64px] rounded-full transition-all duration-300 button-strong-shadow">
                <span className="text-white font-bold text-base transition-colors">Join waitlist</span>
            </a>
            <div className="mt-4">
                <span className="font-romantica text-4xl opacity-20">LOJJ.IO</span>
            </div>
        </div>
    </div>
    </>
  );
}
