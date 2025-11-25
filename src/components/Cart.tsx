import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { BottomNav } from "./BottomNav";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
  tags: string[];
}

interface CartProps {
  onBack: () => void;
  onProfileClick: () => void;
  cartItems: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
}

export function Cart({ onBack, onProfileClick, cartItems, updateQuantity, removeItem }: CartProps) {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
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

  return (
    <>
      <div className="min-h-screen bg-gray-50 pb-32 md:pb-8">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <h1 className="text-xl tracking-wider uppercase">Корзина</h1>

            <div className="w-10" />
          </div>
        </header>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 max-w-2xl">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-xl mb-2">Корзина пуста</h2>
            <p className="text-gray-500 mb-6">
              Добавьте товары, чтобы начать покупки
            </p>
            <Button
              onClick={onBack}
              className="bg-black text-white hover:bg-gray-800"
            >
              Продолжить покупки
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded border border-gray-100 p-4 flex gap-4"
                >
                  {/* Image */}
                  <div className="w-24 h-32 flex-shrink-0 rounded overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="tracking-wide mb-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">
                      Размер: {item.size}
                    </p>
                    <p className={`text-sm mb-auto ${getPriceClass(item.tags)}`}>
                      {item.price.toLocaleString("ru-RU")} ₽
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-gray-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button
                            className="ml-auto p-2 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Удалить товар?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Вы действительно хотите удалить "{item.name}" из корзины?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => removeItem(item.id)}
                              className="bg-red-500 hover:bg-red-600"
                            >
                              Удалить
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded border border-gray-100 p-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">Товары ({cartItems.length})</span>
                <span>{getTotalPrice().toLocaleString("ru-RU")} ₽</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">Доставка</span>
                <span className="text-sm text-gray-500">Бесплатно</span>
              </div>
              <div className="border-t border-gray-100 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span>Итого</span>
                  <span className="text-xl">
                    {getTotalPrice().toLocaleString("ru-RU")} ₽
                  </span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Button className="w-full bg-black text-white hover:bg-gray-800 h-12">
              Оформить заказ
            </Button>
          </>
        )}
      </div>
      </div>

      <BottomNav onCartClick={() => {}} activeTab="cart" onHomeClick={onBack} onProfileClick={onProfileClick} />
    </>
  );
}