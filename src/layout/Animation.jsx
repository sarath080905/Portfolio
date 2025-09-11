// import React, { useRef, useEffect } from "react";

// const FireflyBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const c = canvas.getContext("2d");
//     let w = (canvas.width = window.innerWidth);
//     let h = (canvas.height = window.innerHeight);

//     // Firefly class
//     class Firefly {
//       constructor() {
//         this.x = Math.random() * w;
//         this.y = Math.random() * h;
//         this.s = Math.random() * 2; // size
//         this.ang = Math.random() * 2 * Math.PI;
//         this.v = (this.s * this.s) / 4; // velocity depends on size
//       }
//       move() {
//         this.x += this.v * Math.cos(this.ang);
//         this.y += this.v * Math.sin(this.ang);
//         this.ang +=
//           Math.random() * (20 * Math.PI / 180) - (10 * Math.PI / 180);
//       }
//       show() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
//         c.fillStyle = "#FFD700"; // warm yellow glow
//         c.shadowColor = "#ADFF2F"; // neon green shadow";
//         c.shadowBlur = 15;
//         c.fill();
//         c.shadowBlur = 0; // reset shadow
//       }
//     }

//     let fireflies = [];

//     function draw() {
//       if (fireflies.length < 100) {
//         for (let j = 0; j < 5; j++) {
//           fireflies.push(new Firefly());
//         }
//       }

//       for (let i = 0; i < fireflies.length; i++) {
//         fireflies[i].move();
//         fireflies[i].show();

//         if (
//           fireflies[i].x < 0 ||
//           fireflies[i].x > w ||
//           fireflies[i].y < 0 ||
//           fireflies[i].y > h
//         ) {
//           fireflies.splice(i, 1);
//         }
//       }
//     }

//     function loop() {
//       c.clearRect(0, 0, w, h);
//       draw();
//       requestAnimationFrame(loop);
//     }

//     // Resize handler
//     const handleResize = () => {
//       w = canvas.width = window.innerWidth;
//       h = canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);

//     loop();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full -z-10"
//     />
//   );
// };

// export default FireflyBackground;

// // ==========================

// import React from "react";
// import "./Animation.css"; // we'll put CSS here

// const AnimatedBackground = ({ children }) => {
//   return (
//     <div className="animated-bg">
//       {[...Array(12)].map((_, i) => (
//         <div key={i} className="orb"></div>
//       ))}
//       <div className="content">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AnimatedBackground;
