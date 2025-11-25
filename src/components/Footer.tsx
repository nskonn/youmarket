import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4">О нас</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Магазины
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4">Помощь</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">info@minimal.shop</li>
              <li className="text-sm text-gray-600">+7 (495) 123-45-67</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4">Соцсети</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500 tracking-wide">
            © 2025 Minimal. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
