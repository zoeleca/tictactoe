import React, { useEffect } from "react";

const PetalAnimation = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas); // Append canvas to the body

    const ctx = canvas.getContext("2d");

    const TOTAL = 100;
    let petalArray = [];

    const petalImg = new Image();
    petalImg.src = "./src/assets/petal.png";
    petalImg.addEventListener("load", () => {
      generatePetals();
      animate();
    });

    function generatePetals() {
      petalArray = [];
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      console.log('test')
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach((petal) => petal.animate());
      requestAnimationFrame(animate);
    }
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generatePetals();
    };

    window.addEventListener("resize", handleResize);

    // Petal class
    class Petal {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.w = 25 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();

        this.xSpeed = 0 + Math.random() * 0.1;
        this.ySpeed = 0 + Math.random() * 1;
        this.flipSpeed = Math.random() * 0.03;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          petalImg,
          this.x,
          this.y,
          this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
          this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
        );
      }

      animate() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.flip += this.flipSpeed;

        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }

        this.draw();
      }
    }

    // CSS
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1"; //

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(canvas); // Remove canvas from the body
    };
  }, []); // Empty dependency array means it runs once on mount

  return null; // or return any JSX if needed
};

export default PetalAnimation;
