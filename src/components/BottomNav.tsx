import { Home, ShoppingBag, User, LayoutGrid } from 'lucide-react';
import { CatalogModal } from './CatalogModal';
import { useState } from 'react';

interface BottomNavProps {
    onCartClick: () => void;
    activeTab?: string;
    onHomeClick?: () => void;
    onProfileClick?: () => void;
    cartItemsCount?: number;
}

export function BottomNav({
    onCartClick,
    activeTab: initialActiveTab,
    onHomeClick,
    onProfileClick,
    cartItemsCount = 0,
}: BottomNavProps) {
    const [activeTab, setActiveTab] = useState(initialActiveTab || 'home');

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[60] md:hidden">
            <div className="grid grid-cols-4 h-16">
                <button
                    onClick={() => {
                        setActiveTab('home');
                        if (onHomeClick) onHomeClick();
                    }}
                    className={`flex items-center justify-center transition-colors ${
                        activeTab === 'home' ? 'text-black' : 'text-gray-400'
                    }`}
                >
                    <Home className="h-5 w-5" />
                </button>

                <CatalogModal
                    trigger={
                        <button
                            onClick={() => setActiveTab('catalog')}
                            className={`flex items-center justify-center transition-colors w-full h-full ${
                                activeTab === 'catalog' ? 'text-black' : 'text-gray-400'
                            }`}
                        >
                            <LayoutGrid className="h-5 w-5" />
                        </button>
                    }
                />

                <button
                    onClick={() => {
                        setActiveTab('cart');
                        onCartClick();
                    }}
                    className={`flex items-center justify-center transition-colors relative ${
                        activeTab === 'cart' ? 'text-black' : 'text-gray-400'
                    }`}
                >
                    <div className="relative">
                        <ShoppingBag className="h-5 w-5" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-[10px] -right-[10px] bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                                {cartItemsCount > 99 ? '99+' : cartItemsCount}
                            </span>
                        )}
                    </div>
                </button>

                <button
                    onClick={() => {
                        setActiveTab('profile');
                        if (onProfileClick) onProfileClick();
                    }}
                    className={`flex items-center justify-center transition-colors ${
                        activeTab === 'profile' ? 'text-black' : 'text-gray-400'
                    }`}
                >
                    <User className="h-5 w-5" />
                </button>
            </div>
        </nav>
    );
}
