import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useState } from "react";
import { Check } from "lucide-react";

interface CartItem {
  productId: number;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
  tags: string[];
}

interface FeaturedProductsProps {
  onProductClick?: (productId: number) => void;
  addToCart?: (item: CartItem) => void;
  isInCart?: (productId: number, size?: string) => boolean;
}

export function FeaturedProducts({ onProductClick, addToCart, isInCart }: FeaturedProductsProps) {
  const products = [
    {
      id: 1,
      name: "Базовая рубашка",
      price: "4 990 ₽",
      sizes: ["XS", "S", "M", "L", "XL"],
      tags: ["premium"],
      images: [
        "https://images.unsplash.com/photo-1644954497793-9b0280236ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjI4OTU2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1556630184-066f7ac4e15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNoaXJ0JTIwbWluaW1hbHxlbnwxfHx8fDE3NjI4MTQxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1542219550-b1b13a6a29eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hpcnQlMjBkZXRhaWx8ZW58MXx8fHwxNzYyOTAxOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 2,
      name: "Льняное платье",
      price: "8 990 ₽",
      sizes: ["S", "M", "L"],
      tags: ["sale"],
      images: [
        "https://images.unsplash.com/photo-1621341103818-01dada8c6ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGJlaWdlfGVufDF8fHx8MTc2Mjg5NTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1636924003227-1895fc75857e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGRyZXNzJTIwYmVpZ2V8ZW58MXx8fHwxNzYyODkyODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1568163059147-8d321a0c5f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBkcmVzcyUyMG1pbmltYWx8ZW58MXx8fHwxNzYyOTAxOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 3,
      name: "Классические брюки",
      price: "6 490 ₽",
      sizes: ["XS", "S", "M", "L"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1653875842174-429c1b467548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsfGVufDF8fHx8MTc2Mjg1OTQ5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1704775989365-eebfd4659a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdHJvdXNlcnMlMjBmYXNoaW9ufGVufDF8fHx8MTc2MjkwMTkyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1612653705360-34f2a2e17098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW50cyUyMGRldGFpbCUyMG1pbmltYWx8ZW58MXx8fHwxNzYyOTAxOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 4,
      name: "Шерстяной свитер",
      price: "7 990 ₽",
      sizes: ["S", "M", "L", "XL"],
      tags: ["premium"],
      images: [
        "https://images.unsplash.com/photo-1731039917703-ece6578ed15e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzYyODk1MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1711097258176-c1a4bb511aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29sJTIwc3dlYXRlciUyMGtuaXR8ZW58MXx8fHwxNzYyOTAxOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1731404617461-e0eeeeefcf7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VhdGVyJTIwdGV4dHVyZSUyMGNsb3NlfGVufDF8fHx8MTc2MjkwMTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
  ];

  const renderTag = (tag: string) => {
    switch (tag) {
      case "sale":
        return (
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2.5 py-0.5 rounded-full text-[9px] tracking-wider uppercase shadow-md">
            Sale
          </div>
        );
      case "premium":
        return (
          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white px-2.5 py-0.5 rounded-full text-[9px] tracking-wider uppercase shadow-md">
            Premium
          </div>
        );
      default:
        return null;
    }
  };

  const getPriceClass = (tags: string[]) => {
    if (tags.includes("sale")) {
      return "bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent";
    }
    if (tags.includes("premium")) {
      return "bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent";
    }
    return "text-gray-600";
  };

  return (
    <section className="py-4 md:py-20 px-2 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderTag={renderTag}
              getPriceClass={getPriceClass}
              onProductClick={onProductClick}
              addToCart={addToCart}
              isInCart={isInCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  renderTag,
  getPriceClass,
  onProductClick,
  addToCart,
  isInCart,
}: {
  product: {
    id: number;
    name: string;
    price: string;
    sizes: string[];
    tags: string[];
    images: string[];
  };
  renderTag: (tag: string) => React.ReactNode;
  getPriceClass: (tags: string[]) => string;
  onProductClick?: (productId: number) => void;
  addToCart?: (item: CartItem) => void;
  isInCart?: (productId: number, size?: string) => boolean;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    const swipeThreshold = 50;

    if (dragOffset > swipeThreshold) {
      // Свайп вправо - предыдущее изображение
      setCurrentImageIndex(
        currentImageIndex === 0
          ? product.images.length - 1
          : currentImageIndex - 1,
      );
    } else if (dragOffset < -swipeThreshold) {
      // Свайп влево - следующее изображение
      setCurrentImageIndex(
        (currentImageIndex + 1) % product.images.length,
      );
    }

    setDragOffset(0);
    setTouchStart(0);
  };

  return (
    <div className="bg-white rounded overflow-hidden border border-gray-100 flex flex-col">
      <div
        className="aspect-[3/4] overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentImageIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
            transitionDuration: isDragging ? '0ms' : '300ms'
          }}
        >
          {product.images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <ImageWithFallback
                src={image}
                alt={`${product.name} - фото ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Индикаторы (точки) */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white/90"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Теги */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
            {product.tags.map((tag, index) => (
              <div key={index}>{renderTag(tag)}</div>
            ))}
          </div>
        )}
      </div>

      <div className="p-3 md:p-4 flex flex-col flex-1">
        <h3 
          className="text-sm md:text-base tracking-wide mb-2 text-black cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => onProductClick?.(product.id)}
        >
          {product.name}
        </h3>
        <p
          className={`text-xs md:text-sm mb-3 font-bold ${getPriceClass(product.tags)}`}
        >
          {product.price}
        </p>

        <div className="flex gap-1 mb-3 overflow-x-auto scrollbar-hide">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="text-[10px] md:text-xs px-2 py-1 border border-gray-200 text-gray-600 whitespace-nowrap flex-shrink-0"
            >
              {size}
            </span>
          ))}
        </div>

        <Button
          variant="outline"
          className="w-full mt-auto h-8 md:h-9 text-xs border-black text-black hover:bg-black hover:text-white transition-colors"
          onClick={() => onProductClick?.(product.id)}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
}