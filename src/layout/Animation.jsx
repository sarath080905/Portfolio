// // import React, { useRef, useEffect } from "react";

// // const FireflyBackground = () => {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const c = canvas.getContext("2d");
// //     let w = (canvas.width = window.innerWidth);
// //     let h = (canvas.height = window.innerHeight);

// //     // Firefly class
// //     class Firefly {
// //       constructor() {
// //         this.x = Math.random() * w;
// //         this.y = Math.random() * h;
// //         this.s = Math.random() * 2; // size
// //         this.ang = Math.random() * 2 * Math.PI;
// //         this.v = (this.s * this.s) / 4; // velocity depends on size
// //       }
// //       move() {
// //         this.x += this.v * Math.cos(this.ang);
// //         this.y += this.v * Math.sin(this.ang);
// //         this.ang +=
// //           Math.random() * (20 * Math.PI / 180) - (10 * Math.PI / 180);
// //       }
// //       show() {
// //         c.beginPath();
// //         c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
// //         c.fillStyle = "#FFD700"; // warm yellow glow
// //         c.shadowColor = "#ADFF2F"; // neon green shadow";
// //         c.shadowBlur = 15;
// //         c.fill();
// //         c.shadowBlur = 0; // reset shadow
// //       }
// //     }

// //     let fireflies = [];

// //     function draw() {
// //       if (fireflies.length < 100) {
// //         for (let j = 0; j < 5; j++) {
// //           fireflies.push(new Firefly());
// //         }
// //       }

// //       for (let i = 0; i < fireflies.length; i++) {
// //         fireflies[i].move();
// //         fireflies[i].show();

// //         if (
// //           fireflies[i].x < 0 ||
// //           fireflies[i].x > w ||
// //           fireflies[i].y < 0 ||
// //           fireflies[i].y > h
// //         ) {
// //           fireflies.splice(i, 1);
// //         }
// //       }
// //     }

// //     function loop() {
// //       c.clearRect(0, 0, w, h);
// //       draw();
// //       requestAnimationFrame(loop);
// //     }

// //     // Resize handler
// //     const handleResize = () => {
// //       w = canvas.width = window.innerWidth;
// //       h = canvas.height = window.innerHeight;
// //     };

// //     window.addEventListener("resize", handleResize);

// //     loop();

// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, []);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="fixed top-0 left-0 w-full h-full -z-10"
// //     />
// //   );
// // };

// // export default FireflyBackground;

// // // ==========================

// // import React from "react";
// // import "./Animation.css"; // we'll put CSS here

// // const AnimatedBackground = ({ children }) => {
// //   return (
// //     <div className="animated-bg">
// //       {[...Array(12)].map((_, i) => (
// //         <div key={i} className="orb"></div>
// //       ))}
// //       <div className="content">
// //         {children}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AnimatedBackground;


// // ---------------------------------------

// import React, { useMemo } from "react";
// import { motion } from "framer-motion";

// const words = [
//   "HTML", "CSS", "Tailwind", "JavaScript", "React", "Python",
//   "SQL", "Git", "GitHub", "Responsive Design", "API Integration",
//   "Axios", "Fetch", "Debugging", "VS Code", "Cursor", "Postman", "Trello"
// ];

// export default function AnimatedBackground({ children }) {
//   // Generate stable random values for each word to prevent re-rendering issues
//   const wordAnimations = useMemo(() => {
//     return words.map((word, i) => {
//       const seed = i * 0.618; // Golden ratio for better distribution
//       return {
//         word,
//         initialX: (Math.sin(seed) * 300) % 300,
//         initialY: (Math.cos(seed) * 200) % 200,
//         moveX: (Math.sin(seed * 2) * 200) % 200,
//         moveY: (Math.cos(seed * 2) * 150) % 150,
//         duration: 8 + (seed % 4),
//         delay: seed % 2,
//         top: 15 + (Math.abs(Math.sin(seed)) * 65),
//         left: 5 + (Math.abs(Math.cos(seed)) * 85),
//         opacity: 0.2 + (Math.abs(Math.sin(seed)) * 0.4),
//       };
//     });
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 overflow-hidden">
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-blue-300/25 to-blue-400/20"
//         animate={{
//           backgroundPosition: ["0% 0%", "100% 100%"],
//         }}
//         transition={{
//           duration: 24,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       />
//       {wordAnimations.map((anim, i) => (
//         <motion.span
//           key={anim.word}
//           className="absolute text-blue-700/40 text-xs md:text-sm font-bold select-none pointer-events-none z-0"
//           style={{
//             top: `${anim.top}%`,
//             left: `${anim.left}%`,
//           }}
//           initial={{
//             x: 0,
//             y: 0,
//             opacity: anim.opacity * 0.8,
//             scale: 0.7,
//           }}
//           animate={{
//             x: [0, anim.moveX * 0.15, -anim.moveX * 0.15, 0],
//             y: [0, anim.moveY * 0.12, -anim.moveY * 0.12, 0],
//             opacity: [anim.opacity * 0.8, anim.opacity, anim.opacity * 0.6, anim.opacity * 0.8],
//             scale: [0.7, 1, 0.85, 0.7],
//             rotate: [0, 10, -10, 0],
//           }}
//           transition={{
//             duration: anim.duration + 2,
//             delay: anim.delay * 0.7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           {anim.word}
//         </motion.span>
//       ))}

//       {[...Array(7)].map((_, i) => (
//         <motion.div
//           key={`orb-${i}`}
//           className="absolute rounded-full blur-3xl opacity-10"
//           style={{
//             width: `${70 + i * 35}px`,
//             height: `${70 + i * 35}px`,
//             background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent)",
//             top: `${18 + i * 13}%`,
//             left: `${7 + i * 22}%`,
//           }}
//           animate={{
//             x: [0, 35, -35, 0],
//             y: [0, 50, -50, 0],
//             scale: [1, 1.1, 0.95, 1],
//           }}
//           transition={{
//             duration: 20 + i * 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.3,
//           }}
//         />
//       ))}

//       {children && (
//         <div className="relative z-10">
//           {children}
//         </div>
//       )} 
//     </div>
//   );
// }

