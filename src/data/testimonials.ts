// src/data/testimonials.ts

// Import testimonial images
import michaelKealeyImg from '../assets/images/testimonials/Michael Kealey - (200px) - Richard Waine - Lancaster - PA_0048.jpg';
import wendyBookerImg from '../assets/images/testimonials/Wendy Booker - (200px) - Richard Waine - Lancaster - PA_0104.jpg';
import scottKantnerImg from '../assets/images/testimonials/Scott Kantner - (200px) - Richard Waine - Lancaster - PA_0205_1.jpg';
import ellenTaylorImg from '../assets/images/testimonials/Ellen Taylor - (200px) - Richard Waine - Lancaster - PA_0093.jpg';
import JacquelineJohansen from '../assets/images/testimonials/Jacqueline Johansen - (200px).jpg'
import JulieEvans from '../assets/images/testimonials/Julie Evans - (200px).jpg'
import WilliamAdote from '../assets/images/testimonials/William Adote - (200px).jpg'
import BrianNguyen from '../assets/images/testimonials/Brian Nguyen - (200px).jpg'
import DillonBomba from '../assets/images/testimonials/Dillon Bomba - (200px).jpg'
import KeithWoody from '../assets/images/testimonials/Keith Woody - (200px).jpg'
import AndrewJacobs from '../assets/images/testimonials/Andrew Jacobs - (200px).jpg'
import EricCooley from '../assets/images/testimonials/Eric Cooley - (200px).jpg'
import DanShores from '../assets/images/testimonials/Dan Shores - (200px).jpg'
import KellyGooch from '../assets/images/testimonials/Kelly Gooch - (200px).jpg'
import NolanFoster from '../assets/images/testimonials/Nolan Foster - (200px).jpg'
import BrandonLesagonicz from '../assets/images/testimonials/Brandon lesagonicz - (200px).jpg'
import CateCaplan from '../assets/images/testimonials/Cate Caplan - (200px).jpg'
import MackenzieLucas from '../assets/images/testimonials/ProAssurance - 0111 - (200px).jpg'
import DanielHagelberg from '../assets/images/testimonials/Daniel Hagelberg - (200px).jpg'



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
  },
  {
    name: "Jacqueline Johansen",
    company: "DeepJudge", 
    review: "Richard is an expert in human expression. He makes you feel at ease, then draws out the version of you that’s authentic and compelling. The resulting headshots work because they feel right. Effortless, but entirely intentional. I have never liked a picture of me so much!",
    rating: 5,
    imageUrl: JacquelineJohansen.src,
    image: JacquelineJohansen,
    imageAlt: "Business Headshot of Jacqueline Johansen by Richard Waine Photography"
  },
   {
    name: "Julie Evans",
    company: "Claritas HR", 
    review: "Rich provided way more than I expected, but somehow just what I needed. He helped me see clearly who I intend to be as a business professional and even more as a person. Impressed is an understatement.",
    rating: 5,
    imageUrl: JulieEvans.src,
    image: JulieEvans,
    imageAlt: "Corporate Headshot of Julie Evans by Richard Waine Photography"
  },
  {
    name: "William Adote",
    company: "RBC Wealth Management", 
    review: "Incredible shoot with Rich. His attention to detail is superb and had a great time connecting with him as well. A 100% recommended service to anyone looking for a seasoned, detailed professional.",
    rating: 5,
    imageUrl: WilliamAdote.src,
    image: WilliamAdote,
    imageAlt: "Corporate Headshot of William Adote by Richard Waine Photography"
  },
  {
    name: "Brian Nguyen",
    company: "School District of Lancaster", 
    review: "Richard is an absolute pleasure to work with - to be able to bring out your inner beauty is a skill and a talent that is much appreciated. Richard was able to see something in me that I never knew existed. He’s amazing to work with, makes you feel super comfortable and the session was absolutely transformational.",
    rating: 5,
    imageUrl: BrianNguyen.src,
    image: BrianNguyen,
    imageAlt: "Business Headshot of Brian Nguyen by Richard Waine Photography"
  },
  {
    name: "Dillon Bomba",
    company: "", 
    review: "Rich made my first headshot experience so much fun. It was like seeing an old friend you’ve never met before. His direction is simple and effective. He can pull the most expressive faces from you with just a few words.",
    rating: 5,
    imageUrl: DillonBomba.src,
    image: DillonBomba,
    imageAlt: "Acting Headshot of Dillon Bomba by Richard Waine Photography"
  },
  {
    name: "Keith Woody",
    company: "Fulton Bank", 
    review: "I had no idea, how amazing this experience would be. The quality of what is being provided and experienced way surpassed my expectations. As a Sourcing and Procurement executive of over 25 years, I highly recommend Richard for your corporate head shot needs.",
    rating: 5,
    imageUrl: KeithWoody.src,
    image: KeithWoody,
    imageAlt: "Corporate Headshot of Keith Woody by Richard Waine Photography"
  },
  {
    name: "Andrew Jacobs",
    company: "Turkey Hill", 
    review: "Richard is a true professional and I greatly enjoyed my experience working with him. He provided a clear instructions and made the entire experience fun and enjoyable. If you need headshots I highly recommend Richard Waine",
    rating: 5,
    imageUrl: AndrewJacobs.src,
    image: AndrewJacobs,
    imageAlt: "LinkedIn Headshot of Andy Jacobs by Richard Waine Photography"
  },
  {
    name: "Eric Cooley",
    company: "Havtech", 
    review: "We had Richard come in to perform headshots for the business. He took the time with each person to make sure he got the right shot. Literally, the best picture I have ever seen of me. I sent it to my mom and she said 'oh wow, that's you?' So good my own mom didn't recognize me. Thanks for everything Richard!",
    rating: 5,
    imageUrl: EricCooley.src,
    image: EricCooley,
    imageAlt: "Office Headshot of Eric Cooley by Richard Waine Photography"
  },
  {
    name: "Dan Shores",
    company: "Chase Travel Group", 
    review: "My experience working with Richard was absolutely outstanding. It is evident how passionate he is about his craft and my headshots could not have turned out better. I had an absolute blast during the photo shoot session to boot. Outstanding experience. Thank you, Richard!",
    rating: 5,
    imageUrl: DanShores.src,
    image: DanShores,
    imageAlt: "Business Headshot of Dan Shores by Richard Waine Photography"
  },
  {
    name: "Kelly Gooch",
    company: "Ultimus Fund Solutions", 
    review: "Richard was intentional in understanding my needs and asking questions to understand what type of look was needed. He was organized, helpful, and inquisitive, making the experience enjoyable. The end product was a direct result of his experience and coaching.",
    rating: 5,
    imageUrl: KellyGooch.src,
    image: KellyGooch,
    imageAlt: "Corporate Headshot of Kelly Gooch by Richard Waine Photography"
  },
  {
    name: "Nolan Foster",
    company: "Bursera Capital", 
    review: "When someone says 'a master of their craft' they typically refer to individuals like Steve Jobs, Leonardo, and Socrates. They were all masters, but I bet they couldn't take photos as good as Richard Waine can.",
    rating: 5,
    imageUrl: NolanFoster.src,
    image: NolanFoster,
    imageAlt: "Corporate Headshot of Nolan Foster by Richard Waine Photography"
  },
  {
    name: "Brandon Lesagonicz",
    company: "", 
    review: "Rich is without a doubt one of the most knowledgeable photographers I have ever worked with. Rocking out and fun! Whether it’s a corporate occasion or just to update a model’s portfolio anyone should absolutely work with him!",
    rating: 5,
    imageUrl: BrandonLesagonicz.src,
    image: BrandonLesagonicz,
    imageAlt: "Model Headshot of Brandon Lesagonicz by Richard Waine Photography"
  },
  {
    name: "Cate Caplan",
    company: "", 
    review: "Richard takes the art of headshot photography to the next level. He actively engages his clients in the process far beyond the smile, and manages to create a fun, unparalleled experience. The final shots are of exceptional quality.",
    rating: 5,
    imageUrl: CateCaplan.src,
    image: CateCaplan,
    imageAlt: "Acting Headshot of Cate Caplan by Richard Waine Photography"
  },
  {
    name: "Mackenzie Lucas",
    company: "ProAssurance", 
    review: "We used Richard Waine for company headshots and we loved him! He worked with our schedule, and was warned that the people who were getting their photos taken disliked the previous photographer and that did not phase him! He was great at communicating and all of the people who worked with him that day loved him. Absolutely will use again.",
    rating: 5,
    imageUrl: MackenzieLucas.src,
    image: MackenzieLucas,
    imageAlt: "Office Headshot of Mackenzie Lucas by Richard Waine Photography"
  },
{
    name: "Daniel Hagelberg",
    company: "Kaufman Dolowich", 
    review: "My firm hired Richard for my headshot and he was excellent. He brought his equipment to our office, and set everything up to get a top quality studio shot. His instructions were easy to follow and the pictures look amazing. He will work with you to get what you want but he also knows what will make the best shot. Would definitely use him again.",
    rating: 5,
    imageUrl: DanielHagelberg.src,
    image: DanielHagelberg,
    imageAlt: "Office Headshot of Daniel Hagelberg by Richard Waine Photography"
  },





  // Add more testimonials here as needed
];