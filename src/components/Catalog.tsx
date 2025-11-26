import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CatalogProps {
  onCategorySelect?: (categoryName: string) => void;
}

export function Catalog({ onCategorySelect }: CatalogProps) {
  const categories = [
    {
      name: "Электроника",
      image:
        "https://images.unsplash.com/photo-1717295248380-9b10f252dbcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzYyODQyNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Одежда",
      image:
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYyODg3MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Обувь",
      image:
        "https://images.unsplash.com/photo-1739132268718-53d64165d29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9lcyUyMHNuZWFrZXJzfGVufDF8fHx8MTc2MjgyODU5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Сумки",
      image:
        "https://images.unsplash.com/photo-1630534592550-bc740a0c5704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYmFnJTIwcHVyc2V8ZW58MXx8fHwxNzYyODQ2MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Очки",
      image:
        "https://images.unsplash.com/photo-1638109556691-2e36b5e0f39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzYyODIxOTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Украшения",
      image:
        "https://images.unsplash.com/photo-1636719240003-b05adf828583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwd2F0Y2h8ZW58MXx8fHwxNzYyNzg3MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Головные уборы",
      image:
        "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXQlMjBjYXB8ZW58MXx8fHwxNzYyODk3MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Ремни и кошельки",
      image:
        "https://images.unsplash.com/photo-1637868796504-32f45a96d5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWx0JTIwd2FsbGV0fGVufDF8fHx8MTc2Mjg5NzMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="pt-4 md:py-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-2">
          <div className="flex gap-2 md:gap-6">
            {categories.map((category) => (
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
                <span className="text-xs tracking-wide text-center max-w-[80px] md:max-w-[96px] truncate">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}