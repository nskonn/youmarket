import {useEffect} from "react"
import { useLocation } from 'react-router-dom';

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Catalog } from "./components/Catalog";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";
import { Cart } from "./components/Cart";
import { Profile } from "./components/Profile";
import { ProductDetail } from "./components/ProductDetail";
import { useState } from "react";
import './index.css';


interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
  tags: string[];
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "cart" | "profile" | "product">("home");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const targetId = state?.scrollTo || (location.hash ? location.hash.replace('#', '') : undefined);
    if (targetId) {
      // небольшая задержка, чтобы DOM гарантированно отрендерился
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [location]);

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage("product");
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const addToCart = (item: Omit<CartItem, "id">) => {
    setCartItems((prevItems) => {
      // Проверяем, есть ли уже товар с таким же productId и размером
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.productId === item.productId && cartItem.size === item.size
      );

      if (existingItemIndex >= 0) {
        // Если товар уже есть, увеличиваем количество
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
        return updatedItems;
      } else {
        // Если товара нет, добавляем новый
        return [
          ...prevItems,
          {
            ...item,
            id: Date.now(), // Простой способ генерации уникального ID
          },
        ];
      }
    });
  };

  const updateCartItemQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const isInCart = (productId: number, size?: string) => {
    if (size) {
      return cartItems.some((item) => item.productId === productId && item.size === size);
    }
    return cartItems.some((item) => item.productId === productId);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === "home" ? (
        <>
          <Header 
            onCartClick={() => setCurrentPage("cart")}
            cartItemsCount={getCartItemsCount()}
          />
          <main className="pb-14 md:pb-0">
            <Hero />
            <Catalog onCategorySelect={handleCategorySelect} />
            <FeaturedProducts 
              onProductClick={handleProductClick}
              addToCart={addToCart}
              isInCart={isInCart}
              selectedCategory={selectedCategory}
            />
            <Newsletter />
          </main>
          <Footer />
          <BottomNav 
            onCartClick={() => setCurrentPage("cart")} 
            onProfileClick={() => setCurrentPage("profile")}
            cartItemsCount={getCartItemsCount()}
          />
        </>
      ) : currentPage === "cart" ? (
        <Cart 
          onBack={() => setCurrentPage("home")} 
          onProfileClick={() => setCurrentPage("profile")}
          cartItems={cartItems}
          updateQuantity={updateCartItemQuantity}
          removeItem={removeFromCart}
        />
      ) : currentPage === "product" && selectedProductId ? (
        <ProductDetail
          productId={selectedProductId}
          onBack={() => setCurrentPage("home")}
          onCartClick={() => setCurrentPage("cart")}
          onProfileClick={() => setCurrentPage("profile")}
          addToCart={addToCart}
          isInCart={isInCart}
          cartItemsCount={getCartItemsCount()}
        />
      ) : (
        <Profile 
          onBack={() => setCurrentPage("home")} 
          onCartClick={() => setCurrentPage("cart")}
        />
      )}
    </div>
  );
}