import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'ai'}>>([]);
  const [input, setInput] = useState('');
  const [hasShovel, setHasShovel] = useState(false);
  const [characterHit, setCharacterHit] = useState(false);
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const responses = [
      "Хуя ты хочешь, дружок?",
      "Не, ну ты реально думаешь что я буду на это отвечать?",
      "Бля, опять эти глупые вопросы...",
      "Слушай, мне лень, спроси что-то попроще",
      "Я пиксельный, но не дурак же!",
      "Тебе не кажется что ты много болтаешь?",
      "Окей окей, давай следующий вопрос",
      "Мемасики хочешь? Я весь из мемов состою",
      "Нет, серьезно, какого хрена ты от меня хочешь?",
      "Я же не ChatGPT, братан, я местный пиксельный чувак"
    ];
    
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('привет') || lowerMessage.includes('hello')) {
      return "Привет привет, чего надо?";
    }
    if (lowerMessage.includes('как дела')) {
      return "Да нормально все, пикселями дышу";
    }
    if (lowerMessage.includes('мем')) {
      return "Ха! Я сам живой мем, чувак!";
    }
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    if (input.toLowerCase().trim() === 'лопата') {
      setMessages(prev => [...prev, 
        { text: input, sender: 'user' },
        { text: '...', sender: 'ai' }
      ]);
      setHasShovel(true);
      setInput('');
      return;
    }

    const userMessage = { text: input, sender: 'user' as const };
    const aiResponse = { text: getAIResponse(input), sender: 'ai' as const };
    
    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const hitCharacter = () => {
    if (!hasShovel) return;
    
    setCharacterHit(true);
    setCharacterPosition({
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20
    });
    
    setTimeout(() => {
      setCharacterHit(false);
      setCharacterPosition({ x: 0, y: 0 });
    }, 500);

    const hitResponses = [
      "Ай бля!",
      "Нахера бьешь?!",
      "Больно же!",
      "Прекрати!",
      "Какого хрена?",
      "Ауч!"
    ];
    
    const response = hitResponses[Math.floor(Math.random() * hitResponses.length)];
    setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4" 
         style={{ 
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Crect width='2' height='2'/%3E%3C/g%3E%3C/svg%3E")`,
           fontFamily: '"Courier New", monospace'
         }}>
      
      {/* Pixel Character */}
      <div className="relative mb-8">
        <div 
          className={`relative transition-all duration-300 ${characterHit ? 'animate-bounce' : ''}`}
          style={{
            transform: `translate(${characterPosition.x}px, ${characterPosition.y}px)`,
            filter: characterHit ? 'hue-rotate(90deg)' : 'none'
          }}
          onClick={hitCharacter}
        >
          <img 
            src="/img/0ef96eae-c734-4d77-9b49-006e0dcb4c2f.jpg" 
            alt="Pixel Character" 
            className="w-32 h-32 cursor-pointer hover:scale-110 transition-transform"
            style={{ 
              imageRendering: 'pixelated',
              imageRendering: '-moz-crisp-edges',
              imageRendering: '-webkit-crisp-edges',
              imageRendering: 'crisp-edges'
            }}
          />
          {hasShovel && (
            <div className="absolute -right-8 top-4 text-2xl animate-bounce">
              🥄
            </div>
          )}
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-black text-center" 
          style={{ fontFamily: '"Courier New", monospace', textShadow: '2px 2px 0px #00FF00' }}>
        PIXEL MEME AI
      </h1>

      {/* Chat Container */}
      <div className="w-full max-w-2xl bg-black border-4 border-black rounded-none shadow-2xl">
        
        {/* Chat Messages */}
        <div className="h-64 overflow-y-auto p-4 bg-black text-green-400 font-mono text-sm">
          {messages.length === 0 && (
            <div className="text-center text-green-400 opacity-70">
              &gt; Напиши что-нибудь этому пиксельному чуваку...
            </div>
          )}
          
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded ${
                message.sender === 'user' 
                  ? 'bg-green-600 text-black' 
                  : 'bg-gray-800 text-green-400 border border-green-400'
              }`}>
                {message.sender === 'user' ? '> ' : '★ '}{message.text}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gray-900 border-t-2 border-green-400 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Напиши что-нибудь..."
            className="flex-1 bg-black text-green-400 border-green-400 focus:border-green-300 font-mono placeholder-green-600"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-green-600 hover:bg-green-700 text-black font-bold border-2 border-black font-mono px-6"
          >
            SEND
          </Button>
        </div>
      </div>

      {/* Secret Command Hint */}
      {hasShovel && (
        <div className="mt-4 text-center text-black font-mono text-sm animate-pulse">
          🥄 У тебя есть лопата! Кликни по человечку чтобы его стукнуть!
        </div>
      )}

      {/* Retro Instructions */}
      <div className="mt-8 text-center text-black font-mono text-xs max-w-md">
        <div className="bg-green-400 text-black p-2 border-2 border-black">
          ★ ИНСТРУКЦИЯ ★<br/>
          Общайся с пиксельным ИИ чуваком<br/>
          Он местный и немного матерится<br/>
          Попробуй секретную команду...
        </div>
      </div>


    </div>
  );
};

export default Index;