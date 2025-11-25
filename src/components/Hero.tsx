import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useRef, useEffect, useState } from "react";

export function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1542219550-2da790bf52e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2Mjg4ODY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Новая коллекция",
      subtitle: "Откройте для себя минималистичный стиль",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601234979142-1fb9d0431bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGJhbm5lcnxlbnwxfHx8fDE3NjI4OTgxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Стиль и качество",
      subtitle: "Эксклюзивные дизайны для вас",
    },
    {
      image:
        "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzYyODYxMDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Аксессуары",
      subtitle: "Дополните свой образ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1632773004171-02bc1c4a726a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbG90aGluZ3xlbnwxfHx8fDE3NjI4NjM4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Современный дизайн",
      subtitle: "Трендовые новинки",
    },
  ];

  // Создаем закольцованный массив слайдов
  const infiniteSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  // Устанавливаем начальную позицию
  useEffect(() => {
    if (scrollContainerRef.current) {
      const slideWidth =
        scrollContainerRef.current.scrollWidth /
        infiniteSlides.length;
      scrollContainerRef.current.scrollLeft = slideWidth;
    }
  }, []);

  // Обработка бесконечной прокрутки
  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrolling) return;

    const container = scrollContainerRef.current;
    const slideWidth =
      container.scrollWidth / infiniteSlides.length;
    const scrollLeft = container.scrollLeft;
    const maxScroll =
      container.scrollWidth - container.clientWidth;

    // Если прокрутили к первому слайду (дубликату последнего)
    if (scrollLeft < slideWidth * 0.5) {
      setIsScrolling(true);
      container.scrollLeft = slideWidth * slides.length;
      setTimeout(() => setIsScrolling(false), 50);
    }
    // Если прокрутили к последнему слайду (дубликату первого)
    else if (scrollLeft > maxScroll - slideWidth * 0.5) {
      setIsScrolling(true);
      container.scrollLeft = slideWidth;
      setTimeout(() => setIsScrolling(false), 50);
    }
  };

  return (
    <section className="pt-[74px] md:pt-[112px] bg-gray-50">
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-2 pt-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-[24px] md:px-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {infiniteSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center relative h-[100px] md:h-[85vh] overflow-hidden rounded-lg md:rounded-none"
            style={{
              width: "calc(100vw - 48px)",
              maxWidth: "100%",
            }}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center text-white px-6">
              <div className="text-center">
                <h2 className="tracking-wider uppercase md:text-6xl md:mb-4">
                  {slide.title}
                </h2>
                <p className="text-xs md:text-base tracking-wide md:mb-8 max-w-md opacity-90 hidden md:block">
                  {slide.subtitle}
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-white/90 border-0 px-8 hidden md:inline-flex"
                >
                  Смотреть
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}