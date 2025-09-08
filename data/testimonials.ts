// src/data/testimonials.ts

// Import testimonial images
import michaelKealeyImg from '../assets/images/testimonials/Michael Kealey - (200px) - Richard Waine - Lancaster - PA_0048.jpg';
import wendyBookerImg from '../assets/images/testimonials/Wendy Booker - (200px) - Richard Waine - Lancaster - PA_0104.jpg';
import scottKantnerImg from '../assets/images/testimonials/Scott Kantner - (200px) - Richard Waine - Lancaster - PA_0205_1.jpg';
import ellenTaylorImg from '../assets/images/testimonials/Ellen Taylor - (200px) - Richard Waine - Lancaster - PA_0093.jpg';

export interface Testimonial {
  name: string;
  company: string;
  review: string;
  rating: number; // Assuming rating is a number from 1-5
  imageUrl: string;
  image: any; // Add image object for Astro Image component
  imageAlt: string; // Add imageAlt for accessibility
}

export const ALL_TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael Kealey",
    company: "Motor Scout Music",
    review: "Working with Richard was a pleasure. His direction and eye helped to get the best out of me and feel confident during my session. I highly recommend Richard for your headshot needs.",
    rating: 5,
    imageUrl: michaelKealeyImg.src,
    image: michaelKealeyImg,
    imageAlt: "Business Headshot of Michael Kealey by Richard Waine Photography"
  },
  {
    name: "Wendy Booker",
    company: "Armstrong Flooring, Inc.",
    review: "Rich captured exactly the look and feel I wanted in my headshots. He demands the best from himself and his subjects, and it shows. Thank you for taking my re-branding efforts to the next level!",
    rating: 5,
    imageUrl: wendyBookerImg.src,
    image: wendyBookerImg,
    imageAlt: "Professional Headshot of Wendy Booker by Richard Waine Photography"
  },
  {
    name: "Scott Kantner", 
    company: "Larson Design Group",
    review: "Richard is the person you want to do your headshots. Stop searching, don't hesitate, just stop reading this and make the appointment. You won't find anyone better, nor a more enjoyable experience.",
    rating: 5,
    imageUrl: scottKantnerImg.src,
    image: scottKantnerImg,
    imageAlt: "Corporate Headshot of Scott Kantner by Richard Waine Photography"
  },
  {
    name: "Ellen Taylor",
    company: "The Center For Health Design", 
    review: "Relaxed. Results. Repeat. Richard's approach is perfect to get the best 'you' for your headshot. Your trepidations will gradually disappear as he walks you through the session. I will be back!",
    rating: 5,
    imageUrl: ellenTaylorImg.src,
    image: ellenTaylorImg,
    imageAlt: "Business Portrait of Ellen Taylor by Richard Waine Photography"
  }
  // Add more testimonials here as needed
];