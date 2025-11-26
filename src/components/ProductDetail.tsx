import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { BottomNav } from "./BottomNav";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface Product {
  id: number;
  name: string;
  price: string;
  sizes: string[];
  tags: string[];
  images: string[];
  description?: string;
  material?: string;
  care?: string[];
}

interface CartItem {
  productId: number;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
  tags: string[];
}

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
  onCartClick: () => void;
  onProfileClick: () => void;
  addToCart: (item: CartItem) => void;
  isInCart: (productId: number, size?: string) => boolean;
  cartItemsCount: number;
}

export function ProductDetail({ productId, onBack, onCartClick, onProfileClick, addToCart, isInCart, cartItemsCount }: ProductDetailProps) {
  // В реальном приложении это будет загружаться из API
  const products: Product[] = [
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
      description: "Классическая базовая рубашка из премиального хлопка. Идеально подходит для создания минималистичного гардероба. Универсальная модель для любого сезона.",
      material: "100% премиальный хлопок",
      care: ["Машинная стирка при 30°C", "Не отбеливать", "Гладить при средней температуре", "Можно в химчистку"],
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
      description: "Легкое летнее платье из натурального льна. Свободный крой обеспечивает максимальный комфорт в жаркую погоду. Элегантный минималистичный дизайн.",
      material: "100% лён",
      care: ["Деликатная стирка при 30°C", "Не отбеливать", "Гладить с паром", "Можно в химчистку"],
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
      description: "Классические брюки прямого кроя для создания элегантного образа. Идеальное сочетание комфорта и стиля для повседневной носки и офиса.",
      material: "65% полиэстер, 35% вискоза",
      care: ["Машинная стирка при 30°C", "Не отбеливать", "Гладить при низкой температуре", "Можно в химчистку"],
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
      description: "Теплый свитер из мериносовой шерсти премиум-класса. Мягкий и уютный, идеален для прохладной погоды. Классический дизайн никогда не выходит из моды.",
      material: "100% мериносовая шерсть",
      care: ["Только ручная стирка", "Не отбеливать", "Не гладить", "Сушить горизонтально"],
    },
  ];

  const product = products.find((p) => p.id === productId);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogSize, setDialogSize] = useState<string>("");

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Товар не найден</p>
          <Button onClick={onBack}>Вернуться назад</Button>
        </div>
      </div>
    );
  }

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
      setCurrentImageIndex(
        currentImageIndex === 0
          ? product.images.length - 1
          : currentImageIndex - 1,
      );
    } else if (dragOffset < -swipeThreshold) {
      setCurrentImageIndex(
        (currentImageIndex + 1) % product.images.length,
      );
    }

    setDragOffset(0);
    setTouchStart(0);
  };

  const renderTag = (tag: string) => {
    switch (tag) {
      case "sale":
        return (
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-[10px] tracking-wider uppercase shadow-md">
            Sale
          </div>
        );
      case "premium":
        return (
          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white px-3 py-1 rounded-full text-[10px] tracking-wider uppercase shadow-md">
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
    return "text-gray-900";
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      // Открываем модальное окно для выбора размера
      setIsDialogOpen(true);
      return;
    }
    const priceString = product.price.replace(/\s/g, '').replace('₽', '');
    const item: CartItem = {
      productId: product.id,
      name: product.name,
      price: parseInt(priceString, 10),
      size: selectedSize,
      quantity: quantity,
      image: product.images[0],
      tags: product.tags,
    };
    addToCart(item);
    alert(`Добавлено в корзину: ${product.name}, размер ${selectedSize}, количество: ${quantity}`);
  };

  const handleDialogAddToCart = () => {
    if (!dialogSize) return;
    
    // Устанавливаем выбранный размер в основное состояние
    setSelectedSize(dialogSize);
    
    const priceString = product.price.replace(/\s/g, '').replace('₽', '');
    const item: CartItem = {
      productId: product.id,
      name: product.name,
      price: parseInt(priceString, 10),
      size: dialogSize,
      quantity: quantity,
      image: product.images[0],
      tags: product.tags,
    };
    addToCart(item);
    setIsDialogOpen(false);
    setDialogSize("");
  };

  return (
    <div className="min-h-screen bg-white pb-14">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-sm tracking-wide">Детали товара</h1>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Container with max-width */}
      <div className="max-w-lg mx-auto">
        {/* Image Gallery */}
        <div 
          className="relative aspect-[3/4] bg-gray-100 overflow-hidden"
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

          {/* Image Indicators */}
          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white/90 w-6"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <div key={index}>{renderTag(tag)}</div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="px-4 py-6 pb-32 md:pb-6">
          <h2 className="text-xl tracking-wide mb-2">{product.name}</h2>
          <p className={`text-2xl mb-4 ${getPriceClass(product.tags)}`}>
            {product.price}
          </p>

          {product.description && (
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm tracking-wide">Размер</h3>
              <button className="text-xs text-gray-500 underline">Таблица размеров</button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2.5 text-sm border transition-colors ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm tracking-wide mb-3">Количество</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                disabled={quantity === 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Material & Care */}
          {(product.material || product.care) && (
            <div className="border-t border-gray-200 pt-6 space-y-6">
              {product.material && (
                <div>
                  <h3 className="text-sm tracking-wide mb-2">Состав</h3>
                  <p className="text-sm text-gray-600">{product.material}</p>
                </div>
              )}
              
              {product.care && (
                <div>
                  <h3 className="text-sm tracking-wide mb-2">Уход</h3>
                  <ul className="space-y-1">
                    {product.care.map((instruction, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-14 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40">
          <div className="max-w-lg mx-auto">
            {selectedSize && isInCart(product.id, selectedSize) ? (
              <Button
                disabled
                className="w-full h-12 bg-gray-200 text-gray-600 cursor-default"
              >
                <Check className="w-5 h-5 mr-2" />
                В корзине
              </Button>
            ) : (
              <Button
                onClick={handleAddToCart}
                className="w-full h-12 bg-black text-white hover:bg-gray-900 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Добавить в корзину
              </Button>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav onCartClick={onCartClick} onProfileClick={onProfileClick} cartItemsCount={cartItemsCount} />

        {/* Dialog for size selection */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle>Выберите размер</DialogTitle>
              <DialogDescription>Пожалуйста, выберите размер товара, который вы хотите добавить в корзину.</DialogDescription>
            </DialogHeader>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setDialogSize(size)}
                  className={`px-4 py-2.5 text-sm border transition-colors ${
                    dialogSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="mt-6">
              <Button
                onClick={handleDialogAddToCart}
                className="w-full h-12 bg-black text-white hover:bg-gray-900 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Добавить в корзину
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}