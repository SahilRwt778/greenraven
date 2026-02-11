import { useEffect, useState, useRef } from "react";

// Local images import karein (apne path ke hisaab se)




const ImageSlider = () => {
  let img1 = "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww";
let img2 = "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww";
let img3 = "https://images.unsplash.com/photo-1698752821919-e9771f0b0bcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww";
let img4 = "https://images.unsplash.com/photo-1630608354129-6a7704150401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww";
let img5 = "https://images.unsplash.com/photo-1698752822107-69f8973936e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww";
const images = [img2, img5, img1, img3, img4];
  // Loop ke liye humein pehli image ki copy last mein chahiye
  const slides = [...images, images[0]];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timeoutRef.current);
  }, [current]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setIsTransitioning(false);
      setCurrent(0);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden rounded-xl bg-black">
      <div
        className={`flex h-full ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="h-full flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
