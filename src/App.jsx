import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import Lenis from 'lenis';
import { Phone, ArrowUpRight, X } from 'lucide-react';
import './index.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const achievementsData = [
  {
    title: "Healthcare Patent",
    subtitle: "Fitness & Wearable Tech",
    description: "Granted intellectual property rights for a pioneering wearable fitness device engineered to actively monitor and map the user's cognitive state in real-time, bridging the gap between physiological performance and neuro-metric tracking.",
    imgOuter: "/IPR.png",
    imgInner: "/One Band 2.png"
  },
  {
    title: "Automotive Patent",
    subtitle: "Dynamic Wheel Rim Tech",
    description: "Architected and secured a patent for dynamic, shape-adapting wheel rims designed for high-performance automotive platforms. This innovation fundamentally alters tire contact patch variability on the fly, unlocking unprecedented precision and dynamic handling under extreme conditions.",
    imgOuter: "/AIPR.png",
    imgInner: "/SAR.png"
  },
  {
    title: "IP Strategy",
    subtitle: "Defense & Transportation",
    description: "Instrumental in the development and formal filing of multiple high-stakes Patents and Design Registrations across critical industries, including advanced Automotive systems, large-scale Public Transportation infrastructures, and high-security Defense sectors.",
    imgOuter: "/DIPR.png",
    imgInner: "/Bunker.jpg"
  },
  {
    title: "Consumer Patents",
    subtitle: "Beverage Containers",
    description: "Secured widespread IP through multiple filed patents within the highly competitive consumer goods market. Specifically pioneered novel form factors and engineered sealing dynamics in collapsible and sustainable beverage container architectures.",
    imgOuter: "/CIPR.png",
    imgInner: "/CIPR.png"
  },
  {
    title: "Institute Award",
    subtitle: "IIITDM Jabalpur",
    description: "Honored with the prestigious Student Achievement Award from IIITDM Jabalpur, formally recognizing exceptional multi-disciplinary dedication and landmark contributions encompassing both rigorous academic excellence and athletic leadership.",
    imgOuter: "/IRA.png",
    imgInner: "/award.jpg"
  },
  {
    title: "DPIIT Founder",
    subtitle: "Government Recognition",
    description: "Officially certified as a DPIIT (Department for Promotion of Industry and Internal Trade) Recognized Founder, reflecting a proven trajectory of building scalable, highly innovative startup models recognized by the Government of India.",
    imgOuter: "/DPIIT.png",
    imgInner: "/DPIIT 3.jpg"
  },
  {
    title: "Global Green Product Award",
    subtitle: "Stealth Innovation",
    description: "Globally ranked among the top 18 partcipants in Berlin, Germany's Green Product Award and invited to Colosseum Cinema for Prestigious Achievement Recognition.",
    imgOuter: "/GPA.png",
    imgInner: "/Green Product.jpg"
  },
  {
    title: "WALDO",
    subtitle: "AI",
    description: "Designing the next generation of Softwares in Agentic AI.",
    imgOuter: "/Waldo.jpg",
    imgInner: "/Waldo.jpg",
    bAndW: true
  }
];

function App() {
  const containerRef = useRef(null);
  const [selectedAch, setSelectedAch] = useState(null);

  useEffect(() => {
    // Disable lenis temporarily while a modal is explicitly open
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    if (selectedAch) {
      lenis.stop();
    } else {
      lenis.start();
    }

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [selectedAch]);

  // Magnetic Interactions
  useEffect(() => {
    // Magnetic Buttons
    const magnets = document.querySelectorAll('.btn');
    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', (e) => {
        const bound = magnet.getBoundingClientRect();
        const x = e.clientX - bound.left - bound.width / 2;
        const y = e.clientY - bound.top - bound.height / 2;
        gsap.to(magnet, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: "power2.out" });
      });
      magnet.addEventListener('mouseleave', () => {
        gsap.to(magnet, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
      });
    });
  }, []);

  // Handle Mouse Parallax Repulsion
  useEffect(() => {
    const xSetter = gsap.quickTo(".mouse-parallax-layer", "x", { duration: 0.5, ease: "power3.out" });
    const ySetter = gsap.quickTo(".mouse-parallax-layer", "y", { duration: 0.5, ease: "power3.out" });

    const movePortrait = (e) => {
      const xForce = (window.innerWidth / 2 - e.clientX) * 0.02;
      const yForce = (window.innerHeight / 2 - e.clientY) * 0.02;
      xSetter(xForce);
      ySetter(yForce);
    };

    window.addEventListener("mousemove", movePortrait);
    return () => window.removeEventListener("mousemove", movePortrait);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
      }
    });

    tl.to(".hero-bg-overlay", { opacity: 1, duration: 0.4, ease: "none" }, 0);

    // Very fast fades as initially negotiated!
    tl.to(".portrait-inner-bg", { opacity: 0, duration: 0.1, ease: "power2.out" }, 0);
    tl.to(".helmet-anim-wrapper", { autoAlpha: 0, duration: 0.1, ease: "power2.out" }, 0);

    tl.to(".portrait-img", { filter: "grayscale(100%)", duration: 0.4 }, 0);

    tl.to(".portrait-wrapper", {
      width: "25vw",
      height: "45vh",
      borderRadius: "15px",
      duration: 0.4,
      ease: "power2.inOut"
    }, 0);

    tl.to(".marquee-container", { autoAlpha: 1, duration: 0.2 }, 0.3);

    // Reveal Animations
    const revealElements = gsap.utils.toArray('.reveal-up');
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    // Typewriter Animations
    const typewriters = gsap.utils.toArray('.typewriter');
    typewriters.forEach((el) => {
      const textLen = el.innerText.length;
      gsap.from(el, {
        text: "",
        duration: textLen * 0.015,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      });
    });

    // Section Tag Animations
    const tags = gsap.utils.toArray('.tag-reveal');
    tags.forEach((tag) => {
      gsap.fromTo(tag,
        { opacity: 0, x: -50, letterSpacing: "15px" },
        {
          opacity: 1, x: 0, letterSpacing: "2px", duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: tag,
            start: "top 85%",
          }
        }
      );
    });

    // Resume Overlay Reveal
    gsap.to('.resume-overlay', {
      scaleX: 0,
      duration: 0.8,
      ease: "power3.inOut",
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".resume-section",
        start: "top 70%",
      }
    });

    // Parallax columns for Achievements
    const achCards = gsap.utils.toArray('.ach-card-wrapper');
    achCards.forEach((card, idx) => {
      // 2nd and 4th column (idx 1 and 3, or index % 4 === 1 or 3)
      if (idx % 4 === 1 || idx % 4 === 3) {
        gsap.to(card, {
          yPercent: -20, // moves up while scrolling
          ease: "none",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      } else {
        gsap.to(card, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    const projectsScroll = gsap.utils.toArray('.project-card');
    const scrollContainer = document.querySelector('.projects-scroll');
    const projectsWrapper = document.querySelector('.projects-wrapper');
    if (projectsScroll.length > 0 && scrollContainer && projectsWrapper) {
      const getScrollAmount = () => {
        return -(scrollContainer.scrollWidth - window.innerWidth);
      };

      // Set wrapper height mapped to width
      gsap.set(projectsWrapper, { height: () => scrollContainer.scrollWidth + window.innerHeight });

      gsap.to(".projects-scroll", {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: projectsWrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="app-container">
      <div className="noise-overlay"></div>

      <div className="hero-bg"></div>
      <div className="hero-bg-overlay"></div>

      <nav className="navbar">
        <a href="/" className="nav-name">
          <span className="font-jaguar" style={{ fontSize: '70px', lineHeight: 1 }}>ANSH</span>
          <span className="font-jaguar" style={{ fontSize: '40px', marginTop: '-15px' }}>BATHIJA</span>
        </a>
        <div className="nav-buttons">
          <a href="#about" className="btn font-paytone">
            What I can do
          </a>
          <a href="#contact" className="btn btn-icon">
            <Phone size={24} color="#fff" />
          </a>
        </div>
      </nav>

      <div className="scene-wrapper">
        <div className="hero-content">
          <div className="marquee-container">
            <div className="marquee-line font-permanent marquee-1">
              <div className="marquee-inner">
                WHY WAS I WEARING A HELMET?&nbsp;&nbsp;&nbsp;WHY WAS I WEARING A HELMET?&nbsp;&nbsp;&nbsp;WHY WAS I WEARING A HELMET?&nbsp;&nbsp;&nbsp;
              </div>
            </div>
            <div className="marquee-line hollow font-permanent marquee-2">
              <div className="marquee-inner">
                YES I HAVE BEEN A RACE CAR DRIVER.&nbsp;&nbsp;&nbsp;YES I HAVE BEEN A RACE CAR DRIVER.&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>

          <div className="portrait-wrapper">
            <div className="mouse-parallax-layer" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
              <img src="/lucid BG h.jpg" alt="Card Background" className="portrait-inner-bg" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover', zIndex: 1 }} />

              <img src="/Ansh Founder Photo Transparent.png" alt="Ansh Bathija" className="portrait-img" />
              <div className="helmet-anim-wrapper" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 3 }}>
                <img src="/Helmet Ref.png" alt="Helmet Overlay" className="helmet-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section" id="about">
        {/* Resume Area */}
        <section className="resume-section">
          <span className="section-tag font-syncopate tag-reveal">Experience Focus</span>
          <div className="resume-grid">
            <div className="resume-item">
              <div className="resume-overlay"></div>
              <div className="resume-meta font-syncopate">2025-2026 </div>
              <div className="resume-content">
                <h3 className="font-paytone">Industrial Design at IIT Guwahati</h3>
                <p className="typewriter">Designed and built Dip Bahan and the Bunker at IIT Guwahati, translating conceptual design into functional, experiential spaces applying DFM (Design for Manufacturing) standards.</p>
                <div className="tags font-syncopate">
                  <span className="tag">Defense </span>
                  <span className="tag">Automotive </span>
                  <span className="tag">DFM</span>
                </div>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-overlay"></div>
              <div className="resume-meta font-syncopate">2022 – 2024</div>
              <div className="resume-content">
                <h3 className="font-paytone">Lead Designer (FSAE)</h3>
                <p className="typewriter">Spearheaded the complete design architecture for our Formula Student team. Optimized aerodynamic surfaces through rigorous simulation and defined a sophisticated ergonomic footprint tailored to high-speed track environments.</p>
                <div className="tags font-syncopate">
                  <span className="tag">Formula Student</span>
                  <span className="tag">Aerodynamics</span>
                  <span className="tag">Ergonomics</span>
                </div>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-overlay"></div>
              <div className="resume-meta font-syncopate">2023 – 2024</div>
              <div className="resume-content">
                <h3 className="font-paytone">Industrial Design Advisor </h3>
                <p className="typewriter">Advised a local business in Jabalpur, Madhya Pradesh for small real exectution projects for consumer markets, selling one-off goods.</p>
                <div className="tags font-syncopate">
                  <span className="tag">Consumer Goods</span>
                  <span className="tag">Sustainability</span>
                  <span className="tag">Materials</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <div className="projects-wrapper">
          <section className="projects-section" id="projects">
            <span className="section-tag font-syncopate tag-reveal" style={{ marginLeft: '4rem' }}>Selected Work</span>
            <div className="projects-scroll">
              {[
                { title: "FSAE", subtitle: "Formula Student Auto", mainImg: "/FSAE 2.png", revealImg: "/FSAE.jpg", width: "450px", height: "250px", mt: "70px" },
                { title: "Dip Bahan", subtitle: "Urban Mobility EV", mainImg: "/DBEV 2.png", revealImg: "/DBEV.jpg", width: "680px", height: "375px", mt: "200px" },
                { title: "SprintSync", subtitle: "Timing System for Athletes", mainImg: "/SS 2.png", revealImg: "/SS.jpg", width: "500px", height: "350px", mt: "-125px" },
                { title: "AQA", subtitle: "Collapsible Beverage Bottle", mainImg: "/AQA 2.png", revealImg: "/AQA.jpg", width: "400px", height: "500px", mt: "40px" },
                { title: "VOID", subtitle: "Commercial Audio Device", mainImg: "/VOID 2.png", revealImg: "/VOID.jpg", width: "450px", height: "600px", mt: "40px" }
              ].map((p, i) => (
                <div className="project-card" key={i} style={{ width: p.width, height: p.height, marginTop: p.mt }}>
                  <img src={p.revealImg} className="project-img-inner" alt="inner" />
                  <div className="project-overlay">
                    <span className="font-syncopate">{p.subtitle}</span>
                    <h3 className="font-paytone">{p.title}</h3>
                  </div>
                  <div className="shutter shutter-top">
                    <img src={p.mainImg} alt="top" />
                  </div>
                  <div className="shutter shutter-bottom">
                    <img src={p.mainImg} alt="bottom" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>


        {/* New Achievements Section */}
        <section className="achievements-section" id="achievements">
          <span className="section-tag font-syncopate">Trophies & Milestones</span>
          <div className="achievements-grid">
            {achievementsData.map((ach, idx) => (
              <div className="ach-card-wrapper" key={idx}>
                <div className="ach-card reveal-up" onClick={() => setSelectedAch(ach)}>
                  <img src={ach.imgInner} alt="inner" className="ach-inner-img" style={ach.bAndW ? { filter: 'grayscale(100%)' } : {}} />
                  <img src={ach.imgOuter} alt="outer" className="ach-outer-img" style={ach.bAndW ? { filter: 'grayscale(100%)' } : {}} />
                  <div className="ach-title-bar">
                    <span className="font-syncopate">{ach.subtitle}</span>
                    <h4 className="font-paytone">{ach.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Footer */}
        <footer id="contact">
          <div className="footer-marquee">
            <h2 className="font-paytone">LET'S WORK TOGETHER • LET'S WORK TOGETHER • </h2>
          </div>
          <div className="footer-grid reveal-up">
            <div className="footer-info">
              <h3 className="font-paytone">ANSH<br /><span style={{ color: 'var(--color-neon)' }}>BATHIJA</span></h3>
              <p className="typewriter">An Industrial Designer crafting high-performance artifacts for the real world.</p>
            </div>
            <div className="footer-links font-syncopate">
              <h4>Contact</h4>
              <a href="mailto:anshbathija2003@gmail.com">Email</a>
              <a href="tel:+919372535919">+91 93725 35919</a>
              <a href="#location">Mumbai, India</a>
            </div>
            <div className="footer-links font-syncopate">
              <h4>Socials</h4>
              <a href="https://linkedin.com">LinkedIn <ArrowUpRight size={16} /></a>
              <a href="https://instagram.com">Instagram <ArrowUpRight size={16} /></a>
              <a href="https://behance.net">Behance <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </footer>
      </div>


      {/* Achievement Modal Overlay */}
      {selectedAch && (
        <div className="ach-modal-overlay" onClick={() => setSelectedAch(null)}>
          <div className="ach-modal-content" onClick={e => e.stopPropagation()}>
            <div className="ach-modal-bg">
              <img src={selectedAch.imgInner} alt="Modal Background" style={selectedAch.bAndW ? { filter: 'grayscale(100%) brightness(0.5)' } : {}} />
              <div className="ach-modal-tint"></div>
            </div>
            <button className="ach-modal-close" onClick={() => setSelectedAch(null)}>
              <X size={28} />
            </button>
            <div className="ach-modal-text">
              <h3 className="font-paytone">{selectedAch.title}</h3>
              <p>{selectedAch.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
