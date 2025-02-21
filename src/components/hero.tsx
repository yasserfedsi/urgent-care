import heroImg from "../assets/hero.webp"; // Use WebP instead of PNG

export default function Hero() {
  return (
    <section className="py-24" id="home">
      <img src={heroImg} alt="Hero Section" loading="lazy" />
    </section>
  );
}
