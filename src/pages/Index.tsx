import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'ai'}>>([]);
  const [input, setInput] = useState('');
  const [hasShovel, setHasShovel] = useState(false);
  const [characterHit, setCharacterHit] = useState(false);
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });
  const [isDancing, setIsDancing] = useState(false);
  const [isRainbow, setIsRainbow] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [hasPet, setHasPet] = useState(false);
  const [isPetting, setIsPetting] = useState(false);
  const [isGigantic, setIsGigantic] = useState(false);
  const [isInvisible, setIsInvisible] = useState(false);
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

  const handleSecretCommand = (command: string) => {
    const lowerCommand = command.toLowerCase().trim();
    
    switch (lowerCommand) {
      case 'лопата':
        setHasShovel(true);
        return '...';
        
      case 'dance':
        setIsDancing(true);
        setIsRainbow(true);
        setTimeout(() => {
          setIsDancing(false);
          setIsRainbow(false);
        }, 10000);
        return "ТАНЦУЮ КАК НЕНОРМАЛЬНЫЙ! 🕺💃";
        
      case 'bomb':
        setIsExploded(true);
        setTimeout(() => setIsExploded(false), 20000);
        return "ВЗРЫВ! 💥💥💥 *исчезает*";
        
      case 'pet':
        setHasPet(true);
        setIsPetting(true);
        setTimeout(() => setIsPetting(false), 5000);
        setTimeout(() => setHasPet(false), 15000);
        return "О, собачка! *гладит* 🐕";
        
      case 'giant':
        setIsGigantic(true);
        setTimeout(() => setIsGigantic(false), 8000);
        return "Я ОГРОМНЫЙ ТЕПЕРЬ! RAWR! 👹";
        
      case 'ghost':
        setIsInvisible(true);
        setTimeout(() => setIsInvisible(false), 7000);
        return "Я стал призраком... boooo 👻";
        
      case 'matrix':
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#00ff00';
        setTimeout(() => {
          document.body.style.backgroundColor = '';
          document.body.style.color = '';
        }, 10000);
        return "Добро пожаловать в матрицу... 💊";
        
      case 'glitch':
        return "Э̷Р̴Р̷О̸Р̵ ̶С̸И̴С̷Т̶Е̸М̵Ы̷.̴.̷.̵ ̸🤖";
        
      default:
        return null;
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const secretResponse = handleSecretCommand(input);
    if (secretResponse) {
      setMessages(prev => [...prev, 
        { text: input, sender: 'user' },
        { text: secretResponse, sender: 'ai' }
      ]);
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
    if (!hasShovel || isExploded) return;
    
    // Прекращаем танец если бьют лопатой
    if (isDancing) {
      setIsDancing(false);
      setIsRainbow(false);
    }
    
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

  const petPet = () => {
    if (!hasPet) return;
    
    const barkSounds = ["Гав!", "Вуф!", "Ав-ав!", "Гав-гав!"];
    const randomBark = barkSounds[Math.floor(Math.random() * barkSounds.length)];
    setMessages(prev => [...prev, { text: randomBark, sender: 'ai' }]);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-1000 ${
        isRainbow ? 'animate-pulse' : 'bg-white'
      }`} 
         style={{ 
           background: isRainbow ? 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)' : undefined,
           backgroundSize: isRainbow ? '400% 400%' : undefined,
           animation: isRainbow ? 'rainbow 2s ease-in-out infinite' : undefined,
           backgroundImage: !isRainbow ? `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Crect width='2' height='2'/%3E%3C/g%3E%3C/svg%3E")` : undefined,
           fontFamily: '"Courier New", monospace'
         }}>
      
      {/* Pixel Character */}
      <div className="relative mb-8">
        <div 
          className={`relative transition-all duration-300 ${
            characterHit ? 'animate-bounce' : ''
          } ${isDancing ? 'animate-spin' : ''} ${
            isGigantic ? 'scale-200' : ''
          } ${isInvisible ? 'opacity-30' : ''}`}
          style={{
            transform: `translate(${characterPosition.x}px, ${characterPosition.y}px) ${isGigantic ? 'scale(2)' : ''}`,
            filter: characterHit ? 'hue-rotate(90deg)' : (isRainbow ? 'hue-rotate(180deg) saturate(2)' : 'none'),
            animation: isDancing ? 'spin 0.5s linear infinite, bounce 0.3s ease-in-out infinite alternate' : undefined
          }}
          onClick={hitCharacter}
        >
          {!isExploded ? (
            <img 
              src="/img/0ef96eae-c734-4d77-9b49-006e0dcb4c2f.jpg" 
              alt="Pixel Character" 
              className="w-32 h-32 cursor-pointer hover:scale-110 transition-transform"
              style={{ 
                imageRendering: 'pixelated'
              }}
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center text-6xl animate-pulse">
              💥
            </div>
          )}
          
          {hasShovel && !isExploded && (
            <div className="absolute -right-8 top-4 text-2xl animate-bounce">
              🥄
            </div>
          )}
          
          {isPetting && !isExploded && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl animate-bounce">
              ❤️
            </div>
          )}
        </div>
        
        {/* Pet */}
        {hasPet && (
          <div 
            className="absolute -right-16 bottom-0 text-3xl animate-bounce cursor-pointer"
            onClick={petPet}
          >
            🐕
          </div>
        )}
      </div>

      {/* Title */}
      <h1 className={`text-4xl font-bold mb-8 text-center transition-all duration-1000 ${
          isRainbow ? 'text-white animate-pulse' : 'text-black'
        }`} 
          style={{ 
            fontFamily: '"Courier New", monospace', 
            textShadow: isRainbow ? '2px 2px 0px #000000' : '2px 2px 0px #00FF00',
            transform: isGigantic ? 'scale(1.5)' : 'scale(1)'
          }}>
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

      {/* Status Messages */}
      <div className="mt-4 text-center space-y-2">
        {hasShovel && !isExploded && (
          <div className="text-black font-mono text-sm animate-pulse">
            🥄 У тебя есть лопата! Кликни по человечку!
          </div>
        )}
        
        {hasPet && (
          <div className="text-black font-mono text-sm animate-pulse">
            🐕 Кликни по собачке чтобы она гавкнула!
          </div>
        )}
        
        {isExploded && (
          <div className="text-red-600 font-mono text-sm animate-pulse">
            💥 Персонаж взорвался! Вернется через 20 секунд...
          </div>
        )}
      </div>

      {/* Secret Commands List */}
      <div className="mt-8 text-center text-black font-mono text-xs max-w-md">
        <div className="bg-green-400 text-black p-4 border-2 border-black">
          ★ СЕКРЕТНЫЕ КОМАНДЫ ★<br/>
          <div className="text-left mt-2 space-y-1">
            <div>🥄 <strong>лопата</strong> - получить лопату</div>
            <div>💃 <strong>dance</strong> - танцы + радуга</div>
            <div>💥 <strong>bomb</strong> - взрыв (20 сек)</div>
            <div>🐕 <strong>pet</strong> - питомец</div>
            <div>👹 <strong>giant</strong> - гигантский режим</div>
            <div>👻 <strong>ghost</strong> - режим призрака</div>
            <div>💊 <strong>matrix</strong> - войти в матрицу</div>
            <div>🤖 <strong>glitch</strong> - глитч системы</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Index;