import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useState } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

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

export function FeaturedProducts({
  onProductClick,
  addToCart,
  isInCart,
}: FeaturedProductsProps) {
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
    {
      id: 5,
      name: "Бежевая куртка",
      price: "12 990 ₽",
      sizes: ["S", "M", "L", "XL"],
      tags: ["premium"],
      images: [
        "https://images.unsplash.com/photo-1665815844395-06f64f44b5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwamFja2V0JTIwYmVpZ2V8ZW58MXx8fHwxNzY0MTUxNzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 6,
      name: "Черная водолазка",
      price: "3 990 ₽",
      sizes: ["XS", "S", "M", "L", "XL"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1591470481729-2bcc11e3acb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHR1cnRsZW5lY2slMjBzd2VhdGVyfGVufDF8fHx8MTc2NDE1MTc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 7,
      name: "Белые кроссовки",
      price: "9 990 ₽",
      sizes: ["36", "37", "38", "39", "40", "41"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1573875133340-0b589f59a8c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzJTIwbWluaW1hbHxlbnwxfHx8fDE3NjQwOTM5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 8,
      name: "Джинсы синие",
      price: "5 990 ₽",
      sizes: ["28", "29", "30", "31", "32"],
      tags: ["sale"],
      images: [
        "https://images.unsplash.com/photo-1639602182178-2dc689354103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zJTIwYmx1ZXxlbnwxfHx8fDE3NjQxMDIzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 9,
      name: "Кожаные ботинки",
      price: "14 990 ₽",
      sizes: ["39", "40", "41", "42", "43"],
      tags: ["premium"],
      images: [
        "https://images.unsplash.com/photo-1638158980051-f7e67291efed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBicm93bnxlbnwxfHx8fDE3NjQwNzIyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 10,
      name: "Шерстяное пальто",
      price: "19 990 ₽",
      sizes: ["S", "M", "L"],
      tags: ["premium"],
      images: [
        "https://images.unsplash.com/photo-1761766319959-70f832bee4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29sJTIwY29hdCUyMGdyYXl8ZW58MXx8fHwxNzY0MTUxNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 11,
      name: "Шелковая блузка",
      price: "6 990 ₽",
      sizes: ["XS", "S", "M", "L"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1694243382362-14da84ba6a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwYmxvdXNlJTIwd2hpdGV8ZW58MXx8fHwxNzY0MTUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 12,
      name: "Вязаный кардиган",
      price: "8 490 ₽",
      sizes: ["S", "M", "L", "XL"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1737056207688-acc991990309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0JTIwY2FyZGlnYW4lMjBiZWlnZXxlbnwxfHx8fDE3NjQxNTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 13,
      name: "Кожаная сумка",
      price: "11 990 ₽",
      sizes: ["Единый"],
      tags: ["premium"],
      images: [
        "https://images.unsplash.com/photo-1760624294514-ca40aafe3d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnJTIwYmxhY2t8ZW58MXx8fHwxNzY0MTUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 14,
      name: "Соломенная шляпа",
      price: "2 990 ₽",
      sizes: ["S", "M", "L"],
      tags: ["sale"],
      images: [
        "https://images.unsplash.com/photo-1657615702887-2c3071edcee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBoYXQlMjBzdHJhd3xlbnwxfHx8fDE3NjQxNTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 15,
      name: "Базовая футболка",
      price: "1 990 ₽",
      sizes: ["XS", "S", "M", "L", "XL"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjB0c2hpcnQlMjBiYXNpY3xlbnwxfHx8fDE3NjQxNTE3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 16,
      name: "Черная юбка миди",
      price: "5 490 ₽",
      sizes: ["XS", "S", "M", "L"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1591079823942-a86a154ccb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRpJTIwc2tpcnQlMjBibGFja3xlbnwxfHx8fDE3NjQxNTE3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 17,
      name: "Синий блейзер",
      price: "13 990 ₽",
      sizes: ["S", "M", "L", "XL"],
      tags: ["premium"],
      images: [
        "https://images.unsplash.com/photo-1740710748146-a15d840d6f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGF6ZXIlMjBuYXZ5JTIwYmx1ZXxlbnwxfHx8fDE3NjQxNTE4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 18,
      name: "Кашемировый шарф",
      price: "7 490 ₽",
      sizes: ["Единый"],
      tags: ["premium"],
      images: [
        "https://images.unsplash.com/photo-1571669829615-616b9e255d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHNjYXJmJTIwZ3JheXxlbnwxfHx8fDE3NjQxNTE4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 19,
      name: "Ботильоны кожаные",
      price: "12 490 ₽",
      sizes: ["36", "37", "38", "39", "40"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1762339107598-c3bf3036559f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtsZSUyMGJvb3RzJTIwbGVhdGhlcnxlbnwxfHx8fDE3NjQxNTE4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 20,
      name: "Льняные шорты",
      price: "3 490 ₽",
      sizes: ["S", "M", "L"],
      tags: ["sale"],
      images: [
        "https://images.unsplash.com/photo-1710179380559-d6bad3299327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNob3J0cyUyMGJlaWdlfGVufDF8fHx8MTc2NDEzODE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 21,
      name: "Полосатая рубашка",
      price: "4 490 ₽",
      sizes: ["S", "M", "L", "XL"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1760287363713-a864ca9b1b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJpcGVkJTIwc2hpcnQlMjBjb3R0b258ZW58MXx8fHwxNzY0MTUxODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 22,
      name: "Солнцезащитные очки",
      price: "4 990 ₽",
      sizes: ["Единый"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1654198297877-36841e3a8e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwY2xhc3NpYyUyMGJsYWNrfGVufDF8fHx8MTc2NDE1MTgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 23,
      name: "Кросс-боди сумка",
      price: "6 990 ₽",
      sizes: ["Единый"],
      tags: [],
      images: [
        "https://images.unsplash.com/photo-1709899629440-64da054379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2JvZHklMjBiYWclMjBsZWF0aGVyfGVufDF8fHx8MTc2NDA5Mjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 24,
      name: "Вязаное платье",
      price: "7 990 ₽",
      sizes: ["S", "M", "L"],
      tags: ["sale"],
      images: [
        "https://images.unsplash.com/photo-1670080589800-6416c8ce8a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0JTIwZHJlc3MlMjBtaW5pbWFsfGVufDF8fHx8MTc2NDE1MTgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
        <div>
          <h3 className="text-lg md:text-3xl tracking-wide md:tracking-wider uppercase mb-4 md:mb-8">
            Популярные товары
          </h3>
        </div>
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  // Проверяем, добавлен ли товар с каким-либо размером в корзину
  const productInCart = isInCart
    ? product.sizes.some((size) => isInCart(product.id, size))
    : false;

  // Проверяем, есть ли только один размер
  const hasSingleSize = product.sizes.length === 1;

  const handleAddToCart = () => {
    if (!selectedSize) return;

    const priceString = product.price
      .replace(/\s/g, "")
      .replace("₽", "");
    const item: CartItem = {
      productId: product.id,
      name: product.name,
      price: parseInt(priceString, 10),
      size: selectedSize,
      quantity: 1,
      image: product.images[0],
      tags: product.tags,
    };

    addToCart?.(item);
    setIsDialogOpen(false);
    setSelectedSize("");
  };

  // Функция для мгновенного добавления товара с одним размером
  const handleAddToCartDirectly = () => {
    if (!hasSingleSize || productInCart) return;

    const priceString = product.price
      .replace(/\s/g, "")
      .replace("₽", "");
    const item: CartItem = {
      productId: product.id,
      name: product.name,
      price: parseInt(priceString, 10),
      size: product.sizes[0],
      quantity: 1,
      image: product.images[0],
      tags: product.tags,
    };

    addToCart?.(item);
  };

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
            transitionDuration: isDragging ? "0ms" : "300ms",
          }}
        >
          {product.images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
            >
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

        {/* Скрываем секцию с размерами, если размер только один */}
        {!hasSingleSize && (
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
        )}

        <Button
          variant="outline"
          className={`w-full mt-auto h-8 md:h-9 text-xs transition-colors ${
            productInCart
              ? "border-gray-300 text-gray-400 bg-gray-50 cursor-default"
              : "border-black text-black hover:bg-black hover:text-white"
          }`}
          onClick={() =>
            !productInCart &&
            (hasSingleSize
              ? handleAddToCartDirectly()
              : setIsDialogOpen(true))
          }
          disabled={productInCart}
        >
          {productInCart ? "В корзине" : "В корзину"}
        </Button>
      </div>

      {/* Диалог выбора размера */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      >
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Выберите размер</DialogTitle>
            <DialogDescription>
              {product.name} — {product.price}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-5 gap-2 py-4">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-2 border rounded transition-colors ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                setIsDialogOpen(false);
                setSelectedSize("");
              }}
            >
              Отмена
            </Button>
            <Button
              className="flex-1 bg-black text-white hover:bg-gray-800"
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
              Добавить в корзину
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}