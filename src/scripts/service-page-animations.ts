/* Shared animations for the service pages (business, linkedin, office, acting).
   Every service page loads this ONE file with:
     <script>import '../scripts/service-page-animations';</script>
   Keeping a single copy is what stops the hero fade from running twice
   when you click from one service page to another. */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('astro:page-load', () => {
const pagePath = document.querySelector<HTMLElement>('[data-page-path]')?.dataset.pagePath;
if (window.location.pathname.replace(/\/$/, '') !== pagePath) return;
let mm = gsap.matchMedia();

  mm.add("(min-width: 48em)", () => {
  // Animate pillar cards on scroll
  gsap.utils.toArray('.pillar-card').forEach((card: any, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 60,
      rotateX: -15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 50%",
        scrub: 1
      }
    });
  });

  // Animate system content rows
  gsap.utils.toArray('.system-content').forEach((content: any) => {
    gsap.to(content, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: content,
        start: "top 90%",
        end: "top 40%",
        scrub: 1
      }
    });
  });

  // Parallax effect on system images
  gsap.utils.toArray('.system-image').forEach((image: any) => {
    gsap.to(image, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Blueprint callouts animation
  gsap.from('.callout', {
    opacity: 0,
    x: -30,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '.blueprint-box',
      start: "top 70%"
    }
  });

  // Hero text animation
  gsap.from('.hero-text > *', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  });

  // Blueprint box 3D rotation on scroll
  gsap.to('.blueprint-box', {
    rotateY: 5,
    rotateX: 2,
    ease: "none",
    scrollTrigger: {
      trigger: '.hero',
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  return () => {
    //optional cleanup code here
    };
  });
});
