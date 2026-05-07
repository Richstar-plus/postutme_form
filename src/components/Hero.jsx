import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.avif"
export function Hero() {
  return <div className="hero">
    <img src={image1} alt="hero" className="hero-image" />
  </div>;
}
