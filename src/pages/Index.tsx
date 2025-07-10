import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 font-bold text-xl">
              ♔
            </div>
            <h1 className="text-2xl font-bold">Шахматный Тренер</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              О шахматах
            </a>
            <a
              href="#achievements"
              className="hover:text-amber-400 transition-colors"
            >
              Достижения
            </a>
            <a
              href="#pricing"
              className="hover:text-amber-400 transition-colors"
            >
              Стоимость
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Индивидуальные уроки шахмат
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Персональный подход к каждому ученику. Постановка упрощённого
            дебютного репертуара и профессиональный разбор партий для быстрого
            роста вашего уровня игры.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900"
            >
              Записаться на урок
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900"
            >
              Узнать больше
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">♟️</div>
                <h3 className="text-lg font-semibold mb-2">
                  Индивидуальный подход
                </h3>
                <p className="text-sm text-slate-400">
                  Программа под ваш уровень
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">♔</div>
                <h3 className="text-lg font-semibold mb-2">Упрощённый дебют</h3>
                <p className="text-sm text-slate-400">Быстрое освоение основ</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Разбор партий</h3>
                <p className="text-sm text-slate-400">Анализ ваших игр</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Chess Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              О шахматах
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Шахматы — это не просто игра, это искусство стратегического
              мышления, которое развивает логику, память и способность принимать
              решения.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Почему стоит изучать шахматы?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Развитие логического мышления
                    </h4>
                    <p className="text-slate-600">
                      Каждый ход требует анализа и планирования на несколько
                      ходов вперёд
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Улучшение концентрации
                    </h4>
                    <p className="text-slate-600">
                      Шахматы учат фокусироваться на задаче и не отвлекаться
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Тренировка памяти</h4>
                    <p className="text-slate-600">
                      Запоминание дебютов и эндшпилей развивает различные виды
                      памяти
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">
                Моя методика
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-amber-400"
                    size={20}
                  />
                  <span>Персональная программа обучения</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-amber-400"
                    size={20}
                  />
                  <span>Постепенное усложнение материала</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-amber-400"
                    size={20}
                  />
                  <span>Практические упражнения</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-amber-400"
                    size={20}
                  />
                  <span>Регулярный анализ прогресса</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Мои достижения
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Опыт и результаты в шахматном мире
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-500 mb-2">
                  15+
                </div>
                <div className="text-sm text-slate-600">Лет опыта</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-500 mb-2">
                  200+
                </div>
                <div className="text-sm text-slate-600">Учеников</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-500 mb-2">
                  1900
                </div>
                <div className="text-sm text-slate-600">Рейтинг FIDE</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-500 mb-2">
                  98%
                </div>
                <div className="text-sm text-slate-600">Довольных учеников</div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">
              Турнирные достижения
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Trophy" className="text-amber-500" size={24} />
                    <span>Призёр областных турниров</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Неоднократный призёр областных турниров среди взрослых
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Award" className="text-amber-500" size={24} />
                    <span>Тренер года</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Звание "Тренер года" в региональной шахматной федерации
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Стоимость занятий
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Разовое занятие</CardTitle>
                <CardDescription className="text-center">
                  Попробуйте формат обучения
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-4 text-slate-900">
                  1500₽
                </div>
                <div className="text-sm text-slate-600 mb-6">за 60 минут</div>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>• Оценка текущего уровня</li>
                  <li>• Индивидуальная программа</li>
                  <li>• Домашнее задание</li>
                </ul>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Записаться
                </Button>
              </CardContent>
            </Card>
            <Card className="relative border-amber-500 border-2">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-slate-900">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-center">Абонемент 4 урока</CardTitle>
                <CardDescription className="text-center">
                  Оптимальный вариант для изучения
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-4 text-slate-900">
                  5200₽
                </div>
                <div className="text-sm text-slate-600 mb-6">1300₽ за урок</div>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>• Всё из разового занятия</li>
                  <li>• Разбор домашних партий</li>
                  <li>• Тактические задачи</li>
                  <li>• Скидка 200₽ с урока</li>
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">
                  Абонемент 8 уроков
                </CardTitle>
                <CardDescription className="text-center">
                  Для серьёзного улучшения игры
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-4 text-slate-900">
                  9600₽
                </div>
                <div className="text-sm text-slate-600 mb-6">1200₽ за урок</div>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>• Всё из предыдущих пакетов</li>
                  <li>• Подготовка к турнирам</li>
                  <li>• Углублённый анализ</li>
                  <li>• Скидка 300₽ с урока</li>
                </ul>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Связаться со мной</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Готов ответить на ваши вопросы и записать на первое занятие
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-amber-400" size={20} />
                  <span>+7 (xxx) xxx-xx-xx</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-amber-400" size={20} />
                  <span>chess.tutor@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-amber-400" size={20} />
                  <span>г. Москва, ул. Примерная, 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-amber-400" size={20} />
                  <span>Пн-Вс: 10:00 - 22:00</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Форматы занятий</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Icon name="Monitor" className="text-amber-400" size={16} />
                    <span>Онлайн через Zoom/Skype</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" className="text-amber-400" size={16} />
                    <span>Очные занятия в Москве</span>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Записаться на занятие</CardTitle>
                <CardDescription>
                  Оставьте заявку и я свяжусь с вами в течение дня
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    placeholder="+7 (xxx) xxx-xx-xx"
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    placeholder="your@email.com"
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваш уровень игры
                  </label>
                  <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md">
                    <option>Выберите уровень</option>
                    <option>Новичок</option>
                    <option>Любитель</option>
                    <option>Разрядник</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о своих целях в шахматах"
                    className="bg-slate-700 border-slate-600"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
              ♔
            </div>
            <span className="text-lg font-semibold">Шахматный Тренер</span>
          </div>
          <p className="text-slate-400 mb-4">
            Индивидуальные шахматные уроки для игроков всех уровней
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Icon name="Phone" size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
          <Separator className="my-4 bg-slate-800" />
          <p className="text-slate-500 text-sm">
            © 2024 Шахматный Тренер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
