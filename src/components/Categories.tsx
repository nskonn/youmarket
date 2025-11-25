export function Categories() {
  const categories = [
    { name: "Женщинам", count: "156" },
    { name: "Мужчинам", count: "98" },
    { name: "Аксессуары", count: "42" },
    { name: "Новинки", count: "24" },
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group border border-gray-200 p-6 md:p-8 hover:border-black transition-colors"
            >
              <div className="text-center">
                <h3 className="text-sm md:text-base tracking-wide mb-2 group-hover:opacity-60 transition-opacity">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500">{category.count} товаров</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
