const Petal = ({ canvas }) => {
  const reset = () => {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 2 - canvas.height;
    this.w = 25 + Math.random() * 15;
    this.h = 20 + Math.random() * 10;
    this.opacity = this.w / 40;
    this.flip = Math.random();
    this.xSpeed = 0 + Math.random() * 0.1;
    this.ySpeed = 0 + Math.random() * 1;
    this.flipSpeed = Math.random() * 0.03;
  };

  const draw = (petalImg) => {
    const ctx = canvas.getContext("2d");
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(
      petalImg,
      this.x,
      this.y,
      this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
      this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
    );
  };

  const animate = (petalImg) => {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.flip += this.flipSpeed;

    if (this.y > canvas.height || this.x > canvas.width) {
      reset();
    }

    draw(petalImg);
  };

  reset(); // Initialize the petal's properties
};

export default Petal;
