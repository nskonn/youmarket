import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';

import product_1_0Img from '../assets/products/product_1_0.jpg';
import product_1_1Img from '../assets/products/product_1_1.jpg';
import product_1_2Img from '../assets/products/product_1_2.jpg';
import product_2_0Img from '../assets/products/product_2_0.jpg';
import product_2_1Img from '../assets/products/product_2_1.jpg';
import product_2_2Img from '../assets/products/product_2_2.jpg';
import product_3_0Img from '../assets/products/product_3_0.jpg';
import product_3_1Img from '../assets/products/product_3_1.jpg';
import product_3_2Img from '../assets/products/product_3_2.jpg';
import product_4_0Img from '../assets/products/product_4_0.jpg';
import product_4_1Img from '../assets/products/product_4_1.jpg';
import product_4_2Img from '../assets/products/product_4_2.jpg';
import product_5_0Img from '../assets/products/product_5_0.jpg';
import product_6_0Img from '../assets/products/product_6_0.jpg';
import product_7_0Img from '../assets/products/product_7_0.jpg';
import product_8_0Img from '../assets/products/product_8_0.jpg';
import product_9_0Img from '../assets/products/product_9_0.jpg';
import product_10_0Img from '../assets/products/product_10_0.jpg';
import product_11_0Img from '../assets/products/product_11_0.jpg';
import product_12_0Img from '../assets/products/product_12_0.jpg';
import product_13_0Img from '../assets/products/product_13_0.jpg';
import product_14_0Img from '../assets/products/product_14_0.jpg';
import product_15_0Img from '../assets/products/product_15_0.jpg';
import product_16_0Img from '../assets/products/product_16_0.jpg';
import product_17_0Img from '../assets/products/product_17_0.jpg';
import product_18_0Img from '../assets/products/product_18_0.jpg';
import product_19_0Img from '../assets/products/product_19_0.jpg';
import product_20_0Img from '../assets/products/product_20_0.jpg';
import product_21_0Img from '../assets/products/product_21_0.jpg';
import product_22_0Img from '../assets/products/product_22_0.jpg';
import product_23_0Img from '../assets/products/product_23_0.jpg';
import product_24_0Img from '../assets/products/product_24_0.jpg';
import product_25_0Img from '../assets/products/product_25_0.jpg';
import product_26_0Img from '../assets/products/product_26_0.jpg';
import product_27_0Img from '../assets/products/product_27_0.jpg';
import product_28_0Img from '../assets/products/product_28_0.jpg';
import product_29_0Img from '../assets/products/product_29_0.jpg';

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
    selectedCategory?: string | null;
}

export function FeaturedProducts({
    onProductClick,
    addToCart,
    isInCart,
    selectedCategory,
}: FeaturedProductsProps) {
    const products = [
        {
            id: 1,
            name: 'Базовая рубашка',
            price: '4 990 ₽',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            tags: ['premium'],
            category: 'Одежда',
            images: [product_1_0Img, product_1_1Img, product_1_2Img],
        },
        {
            id: 2,
            name: 'Льняное платье',
            price: '8 990 ₽',
            sizes: ['S', 'M', 'L'],
            tags: ['sale'],
            category: 'Одежда',
            images: [product_2_0Img, product_2_1Img, product_2_2Img],
        },
        {
            id: 3,
            name: 'Классические брюки',
            price: '6 490 ₽',
            sizes: ['XS', 'S', 'M', 'L'],
            tags: [],
            category: 'Одежда',
            images: [product_3_0Img, product_3_1Img, product_3_2Img],
        },
        {
            id: 4,
            name: 'Шерстяной свитер',
            price: '7 990 ₽',
            sizes: ['S', 'M', 'L', 'XL'],
            tags: ['premium'],
            category: 'Одежда',
            images: [product_4_0Img, product_4_1Img, product_4_2Img],
        },
        {
            id: 5,
            name: 'Бежевая куртка',
            price: '12 990 ₽',
            sizes: ['S', 'M', 'L', 'XL'],
            tags: ['premium'],
            category: 'Одежда',
            images: [product_5_0Img],
        },
        {
            id: 6,
            name: 'Черная водолазка',
            price: '3 990 ₽',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            tags: [],
            category: 'Одежда',
            images: [product_6_0Img],
        },
        {
            id: 7,
            name: 'Белые кроссовки',
            price: '9 990 ₽',
            sizes: ['36', '37', '38', '39', '40', '41'],
            tags: [],
            category: 'Обувь',
            images: [product_7_0Img],
        },
        {
            id: 8,
            name: 'Джинсы синие',
            price: '5 990 ₽',
            sizes: ['28', '29', '30', '31', '32'],
            tags: ['sale'],
            category: 'Одежда',
            images: [product_8_0Img],
        },
        {
            id: 9,
            name: 'Кожаные ботинки',
            price: '14 990 ₽',
            sizes: ['39', '40', '41', '42', '43'],
            tags: ['premium'],
            category: 'Обувь',
            images: [product_9_0Img],
        },
        {
            id: 10,
            name: 'Шерстяное пальто',
            price: '19 990 ₽',
            sizes: ['S', 'M', 'L'],
            tags: ['premium'],
            category: 'Одежда',
            images: [product_10_0Img],
        },
        {
            id: 11,
            name: 'Шелковая блузка',
            price: '6 990 ₽',
            sizes: ['XS', 'S', 'M', 'L'],
            tags: [],
            category: 'Одежда',
            images: [product_11_0Img],
        },
        {
            id: 12,
            name: 'Вязаный кардиган',
            price: '8 490 ₽',
            sizes: ['S', 'M', 'L', 'XL'],
            tags: [],
            category: 'Одежда',
            images: [product_12_0Img],
        },
        {
            id: 13,
            name: 'Кожаная сумка',
            price: '11 990 ₽',
            sizes: ['Единый'],
            tags: ['premium'],
            category: 'Сумки',
            images: [product_13_0Img],
        },
        {
            id: 14,
            name: 'Соломенная шляпа',
            price: '2 990 ₽',
            sizes: ['S', 'M', 'L'],
            tags: ['sale'],
            category: 'Головные уборы',
            images: [product_14_0Img],
        },
        {
            id: 15,
            name: 'Базовая футболка',
            price: '1 990 ₽',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            tags: [],
            category: 'Одежда',
            images: [product_15_0Img],
        },
        {
            id: 16,
            name: 'Черная юбка миди',
            price: '5 490 ₽',
            sizes: ['XS', 'S', 'M', 'L'],
            tags: [],
            category: 'Одежда',
            images: [product_16_0Img],
        },
        {
            id: 17,
            name: 'Синий блейзер',
            price: '13 990 ₽',
            sizes: ['S', 'M', 'L', 'XL'],
            tags: ['premium'],
            category: 'Одежда',
            images: [product_17_0Img],
        },
        {
            id: 18,
            name: 'Кашемировый шарф',
            price: '7 490 ₽',
            sizes: ['Единый'],
            tags: ['premium'],
            category: 'Украшения',
            images: [product_18_0Img],
        },
        {
            id: 19,
            name: 'Ботильоны кожаные',
            price: '12 490 ₽',
            sizes: ['36', '37', '38', '39', '40'],
            tags: [],
            category: 'Обувь',
            images: [product_19_0Img],
        },
        {
            id: 20,
            name: 'Льняные шорты',
            price: '3 490 ₽',
            sizes: ['S', 'M', 'L'],
            tags: ['sale'],
            category: 'Одежда',
            images: [product_20_0Img],
        },
        {
            id: 21,
            name: 'Полосатая рубашка',
            price: '4 490 ₽',
            sizes: ['S', 'M', 'L', 'XL'],
            tags: [],
            category: 'Одежда',
            images: [product_21_0Img],
        },
        {
            id: 22,
            name: 'Солнцезащитные очки',
            price: '4 990 ₽',
            sizes: ['Единый'],
            tags: [],
            category: 'Очки',
            images: [product_22_0Img],
        },
        {
            id: 23,
            name: 'Кросс-боди сумка',
            price: '6 990 ₽',
            sizes: ['Единый'],
            tags: [],
            category: 'Сумки',
            images: [product_23_0Img],
        },
        {
            id: 24,
            name: 'Вязаное платье',
            price: '7 990 ₽',
            sizes: ['S', 'M', 'L'],
            tags: ['sale'],
            category: 'Одежда',
            images: [product_24_0Img],
        },
        {
            id: 25,
            name: 'Беспроводные наушники',
            price: '8 990 ₽',
            sizes: ['Единый'],
            tags: ['premium'],
            category: 'Электроника',
            images: [product_25_0Img],
        },
        {
            id: 26,
            name: 'Смарт-часы',
            price: '15 990 ₽',
            sizes: ['Единый'],
            tags: ['premium'],
            category: 'Электроника',
            images: [product_26_0Img],
        },
        {
            id: 27,
            name: 'Портативное зарядное устройство',
            price: '3 990 ₽',
            sizes: ['Единый'],
            tags: [],
            category: 'Электроника',
            images: [product_27_0Img],
        },
        {
            id: 28,
            name: 'Bluetooth колонка',
            price: '6 490 ₽',
            sizes: ['Единый'],
            tags: [],
            category: 'Электроника',
            images: [product_28_0Img],
        },
        {
            id: 29,
            name: 'Фитнес-браслет',
            price: '4 990 ₽',
            sizes: ['Единый'],
            tags: [],
            category: 'Электроника',
            images: [product_29_0Img],
        },
    ];
    // Фильтруем товары по выбранной категории
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    // Определяем заголовок секции
    const sectionTitle = selectedCategory || 'Популярные товары';

    const renderTag = (tag: string) => {
        switch (tag) {
            case 'sale':
                return (
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2.5 py-0.5 rounded-full text-[9px] tracking-wider uppercase shadow-md">
                        Sale
                    </div>
                );
            case 'premium':
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
        if (tags.includes('sale')) {
            return 'bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent';
        }
        if (tags.includes('premium')) {
            return 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent';
        }
        return 'text-gray-600';
    };

    return (
        <section className="py-4 md:py-20 px-2 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div>
                    <h3 className="text-lg md:text-3xl tracking-wide md:tracking-wider uppercase mb-4 md:mb-8">
                        {sectionTitle}
                    </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {filteredProducts.map(product => (
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
    const [selectedSize, setSelectedSize] = useState<string>('');

    // Проверяем, добавлен ли товар с каким-либо размером в корзину
    const productInCart = isInCart ? product.sizes.some(size => isInCart(product.id, size)) : false;

    // Проверяем, есть ли только один размер
    const hasSingleSize = product.sizes.length === 1;

    const handleAddToCart = () => {
        if (!selectedSize) return;

        const priceString = product.price.replace(/\s/g, '').replace('₽', '');
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
        setSelectedSize('');
    };

    // Функция для мгновенного добавления товара с одним размером
    const handleAddToCartDirectly = () => {
        if (!hasSingleSize || productInCart) return;

        const priceString = product.price.replace(/\s/g, '').replace('₽', '');
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
                currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1,
            );
        } else if (dragOffset < -swipeThreshold) {
            // Свайп влево - следующее изображение
            setCurrentImageIndex((currentImageIndex + 1) % product.images.length);
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
                        transitionDuration: isDragging ? '0ms' : '300ms',
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
                                    index === currentImageIndex ? 'bg-white/90' : 'bg-white/40'
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
                <p className={`text-xs md:text-sm mb-3 font-bold ${getPriceClass(product.tags)}`}>
                    {product.price}
                </p>

                {/* Скрываем секцию с размерами, если размер только один */}
                {!hasSingleSize && (
                    <div className="flex gap-1 mb-3 overflow-x-auto scrollbar-hide">
                        {product.sizes.map(size => (
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
                            ? 'border-gray-300 text-gray-400 bg-gray-50 cursor-default'
                            : 'border-black text-black hover:bg-black hover:text-white'
                    }`}
                    onClick={() =>
                        !productInCart &&
                        (hasSingleSize ? handleAddToCartDirectly() : setIsDialogOpen(true))
                    }
                    disabled={productInCart}
                >
                    {productInCart ? 'В корзине' : 'В корзину'}
                </Button>
            </div>

            {/* Диалог выбора размера */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Выберите размер</DialogTitle>
                        <DialogDescription>
                            {product.name} — {product.price}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-5 gap-2 py-4">
                        {product.sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 py-2 border rounded transition-colors ${
                                    selectedSize === size
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-200 hover:border-gray-400'
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
                                setSelectedSize('');
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
