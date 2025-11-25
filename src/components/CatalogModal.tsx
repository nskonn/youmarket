import { ChevronRight, X, LayoutGrid } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { ReactNode } from "react";

interface CatalogModalProps {
  trigger?: ReactNode;
}

export function CatalogModal({ trigger }: CatalogModalProps) {
  const categories = [
    "Цены на электронику",
    "Каталог гаджетов",
    "Каталог мужской обуви",
    "Каталог мужской одежды",
    "Каталог женской обуви",
    "Последние размеры | SALE",
    "Каталог ремней и кошельков",
    "Каталог женских сумок",
    "Каталог мужских сумок",
    "Каталог очков",
    "Каталог коллекционных предметов",
    "Украшения",
    "Головные уборы",
    "Каталог палантинов / платков",
  ];

  return (
    <Sheet>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}
      <SheetContent
        side="left"
        className="w-full sm:max-w-md p-0 flex flex-col md:h-full h-[calc(100vh-3.5rem)]"
      >
        <SheetHeader className="p-4 border-b border-gray-100">
          <SheetTitle className="tracking-wider uppercase">
            Каталог
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="flex flex-col">
            {categories.map((category) => (
              <button
                key={category}
                className="group border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors text-left flex items-center justify-between"
              >
                <span className="text-sm tracking-wide pr-2">
                  {category}
                </span>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
              </button>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}