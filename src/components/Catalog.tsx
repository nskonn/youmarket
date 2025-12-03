import { ImageWithFallback } from './figma/ImageWithFallback';
import electronicsImg from '../assets/categories/electronics.jpg';
import clothingImg from '../assets/categories/clothing.jpg';
import shoesImg from '../assets/categories/shoes.jpg';
import bagsImg from '../assets/categories/bags.jpg';
import glassesImg from '../assets/categories/glasses.jpg';
import jewelryImg from '../assets/categories/jewelry.jpg';
import headwearImg from '../assets/categories/headwear.jpg';
import belts_walletsImg from '../assets/categories/belts_wallets.jpg';

interface CatalogProps {
    onCategorySelect?: (categoryName: string) => void;
}

export function Catalog({ onCategorySelect }: CatalogProps) {
    const categories = [
        {
            name: 'Электроника',
            image: electronicsImg,
        },
        {
            name: 'Одежда',
            image: clothingImg,
        },
        {
            name: 'Обувь',
            image: shoesImg,
        },
        {
            name: 'Сумки',
            image: bagsImg,
        },
        {
            name: 'Очки',
            image: glassesImg,
        },
        {
            name: 'Украшения',
            image: jewelryImg,
        },
        {
            name: 'Головные уборы',
            image: headwearImg,
        },
        {
            name: 'Ремни и кошельки',
            image: belts_walletsImg,
        },
    ];

    return (
        <section className="pt-4 md:py-12 bg-gray-50">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="overflow-x-auto scrollbar-hide -mx-4 px-2">
                    <div className="flex gap-2 md:gap-6">
                        {categories.map(category => (
                            <button
                                key={category.name}
                                className="group flex-shrink-0 flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
                                onClick={() => onCategorySelect?.(category.name)}
                            >
                                <div className="w-22 h-18 md:w-24 md:h-24 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                    <ImageWithFallback
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="tex.t-xs tracking-wide text-center max-w-[80px] md:max-w-[96px] truncate">
                                    {category.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
