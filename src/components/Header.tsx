import { Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { CatalogModal } from "./CatalogModal";

interface HeaderProps {
  onCartClick: () => void;
  onProfileClick: () => void;
  cartItemsCount?: number;
}

export function Header({
  onCartClick,
  onProfileClick,
  cartItemsCount = 0,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-8">
        {/* Левая часть: Каталог + Логотип */}
        <h1 className="text-xl tracking-wider">
          <span className="bg-gradient-to-r text-blue-500 bg-clip-text">You</span>
          <span className="text-gray-900">Market</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <CatalogModal
              trigger={
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  Каталог
                </Button>
              }
            />
          </div>
        </div>

        {/* Центр: Поиск */}
        <div className="hidden md:flex flex-1 max-w-xl mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск товаров..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>

        {/* Правая часть: Поиск (мобильная), Личный кабинет, Корзина */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 hover:bg-gray-100"
            onClick={onProfileClick}
          >
            Личный кабинет
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            className="relative hidden md:block"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {cartItemsCount > 99 ? "99+" : cartItemsCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}