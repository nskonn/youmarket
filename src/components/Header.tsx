import { Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { CatalogModal } from "./CatalogModal";

interface HeaderProps {
  onCartClick: () => void;
  cartItemsCount?: number;
}

export function Header({ onCartClick, cartItemsCount = 0 }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <CatalogModal />

        <h1 className="text-xl tracking-wider uppercase">
          YOUMARKET
        </h1>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            className="relative"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {cartItemsCount > 99 ? '99+' : cartItemsCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      <nav className="hidden md:flex items-center justify-center gap-8 pb-4 px-4">
        <CatalogModal />
        <a
          href="#"
          className="text-sm tracking-wide hover:opacity-60 transition-opacity"
        >
          Женщинам
        </a>
        <a
          href="#"
          className="text-sm tracking-wide hover:opacity-60 transition-opacity"
        >
          Мужчинам
        </a>
        <a
          href="#"
          className="text-sm tracking-wide hover:opacity-60 transition-opacity"
        >
          Новинки
        </a>
        <a
          href="#"
          className="text-sm tracking-wide hover:opacity-60 transition-opacity"
        >
          Распродажа
        </a>
      </nav>
    </header>
  );
}