import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const basicFAQ = [
  {
    question: "Нужно ли создавать собственного Telegram-бота?",
    answer: "Нет, вы используете нашего бота. Просто регистрируетесь в нём и получаете токен для интеграции.",
  },
  {
    question: "Подойдёт ли сервис, если сайт сделан нейросетью?",
    answer: "Да, мы предоставляем готовые промпты для интеграции с сайтами, созданными с помощью ИИ.",
  },
  {
    question: "Нужно ли разбираться в коде?",
    answer: "Нет, для базовой интеграции достаточно скопировать и вставить готовый скрипт. Для более сложных случаев есть подробная документация.",
  },
  {
    question: "Что произойдёт, если закончится лимит заявок?",
    answer: "Заявки будут ожидать в очереди и автоматически отправятся после обновления лимита в новом периоде.",
  },
];

const usageFAQ = [
  {
    question: "Можно ли использовать на нескольких сайтах?",
    answer: "Да, вы можете создать отдельные токены для каждого сайта в рамках одного аккаунта.",
  },
  {
    question: "Есть ли защита от спама и повторных отправок?",
    answer: "Да, система автоматически фильтрует дубликаты заявок в течение определённого периода времени.",
  },
  {
    question: "Что считается одной заявкой?",
    answer: "Одна заявка — это одно успешно отправленное сообщение с вашего сайта в Telegram.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
          Вопросы и ответы
        </h2>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white shadow-md rounded-xl p-1">
            <TabsTrigger value="basic" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
              Основные
            </TabsTrigger>
            <TabsTrigger value="usage" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
              Использование
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="animate-fade-in">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {basicFAQ.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`basic-${index}`}
                  className="bg-white rounded-xl shadow-md border-none px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="usage" className="animate-fade-in">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {usageFAQ.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`usage-${index}`}
                  className="bg-white rounded-xl shadow-md border-none px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FAQ;
