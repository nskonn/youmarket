import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowLeft, User, MapPin, Phone, Mail, Package, ChevronRight, CreditCard, Heart, Settings } from "lucide-react";
import { useState } from "react";
import { BottomNav } from "./BottomNav";
import { Badge } from "./ui/badge";

interface Order {
  id: string;
  date: string;
  status: "delivered" | "processing" | "shipped";
  items: number;
  total: number;
  image: string;
}

interface ProfileProps {
  onBack: () => void;
  onCartClick: () => void;
}

export function Profile({ onBack, onCartClick }: ProfileProps) {
  const [orders] = useState<Order[]>([
    {
      id: "#ORD-2024-001",
      date: "15 ноября 2024",
      status: "delivered",
      items: 2,
      total: 13980,
      image: "https://images.unsplash.com/photo-1644954497793-9b0280236ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjI4OTU2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "#ORD-2024-002",
      date: "10 ноября 2024",
      status: "shipped",
      items: 1,
      total: 8990,
      image: "https://images.unsplash.com/photo-1621341103818-01dada8c6ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGJlaWdlfGVufDF8fHx8MTc2Mjg5NTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "#ORD-2024-003",
      date: "5 ноября 2024",
      status: "processing",
      items: 3,
      total: 24970,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYyODk1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ]);

  const [userInfo] = useState({
    firstName: "Анна",
    lastName: "Петрова",
    email: "anna.petrova@example.com",
    phone: "+7 (999) 123-45-67",
    address: "г. Москва, ул. Тверская, д. 15, кв. 42",
    bonusPoints: 1250,
  });

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Доставлен</Badge>;
      case "shipped":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">В пути</Badge>;
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Обработка</Badge>;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pb-24 md:pb-8">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <h1 className="text-xl tracking-wider uppercase">Профиль</h1>

            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 pt-20 max-w-2xl">
          {/* User Card */}
          <div className="bg-white rounded-lg border border-gray-100 p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <User className="h-8 w-8 text-gray-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-1">
                  {userInfo.firstName} {userInfo.lastName}
                </h2>
                <p className="text-sm text-gray-500">Клиент с октября 2024</p>
              </div>
            </div>

            {/* Bonus Points */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 border border-amber-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Бонусные баллы</p>
                  <p className="text-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    {userInfo.bonusPoints}
                  </p>
                </div>
                <CreditCard className="h-8 w-8 text-amber-500" />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg border border-gray-100 p-6 mb-6">
            <h3 className="mb-4 tracking-wide">Контактная информация</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm">{userInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">Телефон</p>
                  <p className="text-sm">{userInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">Адрес доставки</p>
                  <p className="text-sm">{userInfo.address}</p>
                </div>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-4 border-gray-200 hover:bg-gray-50"
            >
              Редактировать данные
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="bg-white rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition-colors">
              <Heart className="h-6 w-6 text-gray-700 mb-2 mx-auto" />
              <p className="text-sm text-center">Избранное</p>
            </button>
            <button className="bg-white rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition-colors">
              <Package className="h-6 w-6 text-gray-700 mb-2 mx-auto" />
              <p className="text-sm text-center">Отследить</p>
            </button>
          </div>

          {/* Orders */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="tracking-wide">Мои заказы</h3>
              <span className="text-sm text-gray-500">{orders.length} заказов</span>
            </div>

            <div className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={order.image}
                        alt={`Заказ ${order.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm mb-1">{order.id}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="text-xs text-gray-500">
                          {order.items} {order.items === 1 ? 'товар' : 'товара'}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">
                            {order.total.toLocaleString("ru-RU")} ₽
                          </span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-lg border border-gray-100 p-6 mb-6">
            <h3 className="mb-4 tracking-wide">Дополнительно</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded transition-colors">
                <span className="text-sm">Способы оплаты</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded transition-colors">
                <span className="text-sm">История покупок</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded transition-colors">
                <span className="text-sm">Уведомления</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded transition-colors">
                <span className="text-sm">Помощь и поддержка</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <Button 
            variant="outline" 
            className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 mb-6"
          >
            Выйти из аккаунта
          </Button>
        </div>
      </div>

      <BottomNav onCartClick={onCartClick} activeTab="profile" onHomeClick={onBack} onProfileClick={() => {}} />
    </>
  );
}
