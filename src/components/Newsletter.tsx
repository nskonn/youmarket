import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-md text-center">
        <h2 className="text-xl md:text-2xl tracking-wider uppercase mb-4">
          Будьте в курсе
        </h2>
        <p className="text-sm text-gray-600 tracking-wide mb-8">
          Подпишитесь на рассылку и получайте первыми информацию о новинках и специальных предложениях
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Ваш email"
            className="flex-1 border-gray-300"
          />
          <Button className="bg-black text-white hover:bg-black/90 px-8">
            Подписаться
          </Button>
        </div>
      </div>
    </section>
  );
}
