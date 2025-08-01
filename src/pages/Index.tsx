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
  const [isFrozen, setIsFrozen] = useState(false);
  const [isBurning, setIsBurning] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [isZombie, setIsZombie] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
  const [hasWings, setHasWings] = useState(false);
  const [isMelting, setIsMelting] = useState(false);
  const [isClone, setIsClone] = useState(false);
  const [isNinja, setIsNinja] = useState(false);
  const [isPirate, setIsPirate] = useState(false);
  const [isSuperhero, setIsSuperhero] = useState(false);
  const [isAlien, setIsAlien] = useState(false);
  const [isVampire, setIsVampire] = useState(false);
  const [particleEffect, setParticleEffect] = useState('');
  const [bgMusic, setBgMusic] = useState('');
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

  const resetAllEffects = () => {
    setIsDancing(false);
    setIsRainbow(false);
    setIsGigantic(false);
    setIsInvisible(false);
    setIsFrozen(false);
    setIsBurning(false);
    setIsFlying(false);
    setIsZombie(false);
    setIsRobot(false);
    setHasWings(false);
    setIsMelting(false);
    setIsClone(false);
    setIsNinja(false);
    setIsPirate(false);
    setIsSuperhero(false);
    setIsAlien(false);
    setIsVampire(false);
    setParticleEffect('');
    setBgMusic('');
  };

  const handleSecretCommand = (command: string) => {
    const lowerCommand = command.toLowerCase().trim();
    
    switch (lowerCommand) {
      case 'лопата':
        setHasShovel(true);
        return '...';
        
      case 'dance':
        resetAllEffects();
        setIsDancing(true);
        setIsRainbow(true);
        setTimeout(() => {
          setIsDancing(false);
          setIsRainbow(false);
        }, 10000);
        return "ТАНЦУЮ КАК НЕНОРМАЛЬНЫЙ! 🕺💃";
        
      case 'bomb':
        resetAllEffects();
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
        resetAllEffects();
        setIsGigantic(true);
        setTimeout(() => setIsGigantic(false), 8000);
        return "Я ОГРОМНЫЙ ТЕПЕРЬ! RAWR! 👹";
        
      case 'ghost':
        resetAllEffects();
        setIsInvisible(true);
        setTimeout(() => setIsInvisible(false), 7000);
        return "Я стал призраком... boooo 👻";
        
      case 'freeze':
        resetAllEffects();
        setIsFrozen(true);
        setTimeout(() => setIsFrozen(false), 6000);
        return "Бррр! Я замерз нахуй! 🧊❄️";
        
      case 'fire':
        resetAllEffects();
        setIsBurning(true);
        setTimeout(() => setIsBurning(false), 7000);
        return "ГОРЮ! ПОЖАР! АА! 🔥🔥🔥";
        
      case 'fly':
        resetAllEffects();
        setIsFlying(true);
        setHasWings(true);
        setTimeout(() => {
          setIsFlying(false);
          setHasWings(false);
        }, 9000);
        return "Я ЛЕТАЮ КАК ПТИЧКА! 🦅✈️";
        
      case 'zombie':
        resetAllEffects();
        setIsZombie(true);
        setTimeout(() => setIsZombie(false), 12000);
        return "Мозгииии... *стон зомби* 🧟‍♂️";
        
      case 'robot':
        resetAllEffects();
        setIsRobot(true);
        setTimeout(() => setIsRobot(false), 8000);
        return "BEEP BOOP! Я робот теперь! 🤖";
        
      case 'melt':
        resetAllEffects();
        setIsMelting(true);
        setTimeout(() => setIsMelting(false), 6000);
        return "Ой бля, я таю... 💧🫠";
        
      case 'clone':
        resetAllEffects();
        setIsClone(true);
        setTimeout(() => setIsClone(false), 10000);
        return "Теперь нас двое! Клонирование! 👥";
        
      case 'ninja':
        resetAllEffects();
        setIsNinja(true);
        setTimeout(() => setIsNinja(false), 8000);
        return "Я ниндзя в тени... 🥷⚡";
        
      case 'pirate':
        resetAllEffects();
        setIsPirate(true);
        setTimeout(() => setIsPirate(false), 10000);
        return "Йо-хо-хо! Я пират! ⚓🏴‍☠️";
        
      case 'superhero':
        resetAllEffects();
        setIsSuperhero(true);
        setTimeout(() => setIsSuperhero(false), 12000);
        return "Я СУПЕРГЕРОЙ! Спасу мир! 🦸‍♂️⚡";
        
      case 'alien':
        resetAllEffects();
        setIsAlien(true);
        setTimeout(() => setIsAlien(false), 9000);
        return "Прилетел с Марса! 👽🛸";
        
      case 'vampire':
        resetAllEffects();
        setIsVampire(true);
        setTimeout(() => setIsVampire(false), 8000);
        return "Бла! Я вампир! *кусает* 🧛‍♂️🩸";
        
      case 'disco':
        resetAllEffects();
        setParticleEffect('disco');
        setIsRainbow(true);
        setTimeout(() => {
          setParticleEffect('');
          setIsRainbow(false);
        }, 15000);
        return "ДИСКОТЕКА! Let's party! 🪩💫";
        
      case 'rain':
        setParticleEffect('rain');
        setTimeout(() => setParticleEffect(''), 8000);
        return "Дождик пошел... ☔🌧️";
        
      case 'snow':
        setParticleEffect('snow');
        setTimeout(() => setParticleEffect(''), 10000);
        return "Снежок! Зима пришла! ❄️⛄";
        
      case 'hearts':
        setParticleEffect('hearts');
        setTimeout(() => setParticleEffect(''), 6000);
        return "Любовь повсюду! 💕💖";
        
      case 'stars':
        setParticleEffect('stars');
        setTimeout(() => setParticleEffect(''), 8000);
        return "Звездопад! ⭐✨";
        
      case 'money':
        setParticleEffect('money');
        setTimeout(() => setParticleEffect(''), 7000);
        return "Деньги с неба! Богатею! 💰💸";
        
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
        
      case 'reset':
        resetAllEffects();
        setHasShovel(false);
        setHasPet(false);
        setIsExploded(false);
        return "Все сброшено! Я снова нормальный 🔄";
        
      case 'party':
        resetAllEffects();
        setIsRainbow(true);
        setParticleEffect('disco');
        setBgMusic('party');
        setTimeout(() => {
          setIsRainbow(false);
          setParticleEffect('');
          setBgMusic('');
        }, 20000);
        return "ВЕЧЕРИНКА! PARTY TIME! 🎉🎊";
        
      case 'earthquake':
        setCharacterPosition({ x: 0, y: 0 });
        const shake = () => {
          for (let i = 0; i < 20; i++) {
            setTimeout(() => {
              setCharacterPosition({
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10
              });
            }, i * 100);
          }
        };
        shake();
        setTimeout(() => setCharacterPosition({ x: 0, y: 0 }), 2000);
        return "ЗЕМЛЕТРЯСЕНИЕ! АААА! 🌍💥";
        
      case 'teleport':
        setCharacterPosition({
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100
        });
        setTimeout(() => setCharacterPosition({ x: 0, y: 0 }), 3000);
        return "ТЕЛЕПОРТАЦИЯ! *пшик* ⚡✨";
        
      case 'drunk':
        const wobble = () => {
          for (let i = 0; i < 30; i++) {
            setTimeout(() => {
              setCharacterPosition({
                x: Math.sin(i * 0.5) * 15,
                y: Math.cos(i * 0.3) * 8
              });
            }, i * 200);
          }
        };
        wobble();
        setTimeout(() => setCharacterPosition({ x: 0, y: 0 }), 6000);
        return "Блядь, я пьяный! *икает* 🍺🤢";
        
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
    
    if (isDancing || isRainbow) {
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
      "Ауч!",
      "Хватит меня лупить!",
      "Я же друг твой!",
      "Больно, сука!"
    ];
    
    const response = hitResponses[Math.floor(Math.random() * hitResponses.length)];
    setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
  };

  const petPet = () => {
    if (!hasPet) return;
    
    const barkSounds = ["Гав!", "Вуф!", "Ав-ав!", "Гав-гав!", "Тяф!", "Лай-лай!"];
    const randomBark = barkSounds[Math.floor(Math.random() * barkSounds.length)];
    setMessages(prev => [...prev, { text: randomBark, sender: 'ai' }]);
  };

  const getCharacterClass = () => {
    let classes = "w-32 h-32 cursor-pointer hover:scale-110 transition-all duration-300";
    
    if (isDancing) classes += " animate-spin";
    if (isFlying) classes += " animate-bounce";
    if (isFrozen) classes += " animate-pulse";
    if (isBurning) classes += " animate-ping";
    if (isZombie) classes += " animate-pulse";
    if (isNinja) classes += " opacity-70";
    if (isMelting) classes += " animate-pulse";
    
    return classes;
  };

  const getCharacterStyle = () => {
    let style: any = {
      imageRendering: 'pixelated',
      transform: `translate(${characterPosition.x}px, ${characterPosition.y}px)`,
    };
    
    if (characterHit) style.filter = 'hue-rotate(90deg)';
    else if (isRainbow) style.filter = 'hue-rotate(180deg) saturate(2)';
    else if (isFrozen) style.filter = 'hue-rotate(200deg) brightness(1.5)';
    else if (isBurning) style.filter = 'hue-rotate(10deg) saturate(2) brightness(1.3)';
    else if (isZombie) style.filter = 'hue-rotate(100deg) saturate(0.5)';
    else if (isRobot) style.filter = 'contrast(1.5) brightness(1.2)';
    else if (isVampire) style.filter = 'hue-rotate(300deg) contrast(1.3)';
    else if (isAlien) style.filter = 'hue-rotate(120deg) saturate(2)';
    
    if (isGigantic) style.transform += ' scale(2)';
    if (isInvisible) style.opacity = 0.3;
    if (isMelting) style.transform += ' scaleY(0.7) skewX(5deg)';
    
    return style;
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
      
      {/* Particle Effects */}
      {particleEffect && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {particleEffect === 'rain' && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 opacity-30">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-4 bg-blue-400 animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          )}
          
          {particleEffect === 'snow' && (
            <div className="absolute inset-0">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white text-xl animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: '3s'
                  }}
                >
                  ❄️
                </div>
              ))}
            </div>
          )}
          
          {particleEffect === 'hearts' && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  💖
                </div>
              ))}
            </div>
          )}
          
          {particleEffect === 'stars' && (
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-xl animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  ⭐
                </div>
              ))}
            </div>
          )}
          
          {particleEffect === 'money' && (
            <div className="absolute inset-0">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-xl animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 1.5}s`
                  }}
                >
                  💰
                </div>
              ))}
            </div>
          )}
          
          {particleEffect === 'disco' && (
            <div className="absolute inset-0">
              {[...Array(35)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-spin"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 1}s`,
                    animationDuration: '0.5s'
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Pixel Character */}
      <div className="relative mb-8 z-20">
        <div 
          className={`relative transition-all duration-300 ${characterHit ? 'animate-bounce' : ''}`}
          style={getCharacterStyle()}
          onClick={hitCharacter}
        >
          {!isExploded ? (
            <img 
              src="/img/bce86ccf-a19c-4b98-8ad4-7eae922abbc0.jpg" 
              alt="Pixel Character" 
              className={getCharacterClass()}
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center text-6xl animate-pulse">
              💥
            </div>
          )}
          
          {/* Character accessories */}
          {hasShovel && !isExploded && (
            <div className="absolute -right-8 top-4 text-2xl animate-bounce">🥄</div>
          )}
          
          {hasWings && !isExploded && (
            <>
              <div className="absolute -left-6 top-2 text-2xl animate-pulse">🪶</div>
              <div className="absolute -right-6 top-2 text-2xl animate-pulse">🪶</div>
            </>
          )}
          
          {isPetting && !isExploded && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl animate-bounce">❤️</div>
          )}
          
          {isSuperhero && !isExploded && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">🦸‍♂️</div>
          )}
          
          {isPirate && !isExploded && (
            <div className="absolute -top-4 right-2 text-xl">🏴‍☠️</div>
          )}
          
          {isVampire && !isExploded && (
            <div className="absolute -top-4 left-2 text-xl">🦇</div>
          )}
          
          {isBurning && !isExploded && (
            <div className="absolute inset-0 text-4xl animate-ping opacity-70">🔥</div>
          )}
          
          {isFrozen && !isExploded && (
            <div className="absolute inset-0 text-4xl animate-pulse opacity-70">❄️</div>
          )}
          
          {isClone && !isExploded && (
            <div className="absolute left-20 top-0 opacity-60">
              <img 
                src="/img/bce86ccf-a19c-4b98-8ad4-7eae922abbc0.jpg" 
                alt="Clone" 
                className="w-24 h-24"
                style={{ imageRendering: 'pixelated' }}
              />
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
      <div className="w-full max-w-2xl bg-black border-4 border-black rounded-none shadow-2xl z-20">
        
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
            placeholder="Напиши команду..."
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
      <div className="mt-4 text-center space-y-2 z-20">
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

      {/* Mega Commands List */}
      <div className="mt-8 text-center text-black font-mono text-xs max-w-4xl z-20">
        <div className="bg-green-400 text-black p-4 border-2 border-black">
          ★ МЕГА СПИСОК КОМАНД ★<br/>
          <div className="grid grid-cols-3 gap-2 text-left mt-2 text-xs">
            <div>
              <strong>Основные:</strong><br/>
              🥄 лопата<br/>
              💃 dance<br/>
              💥 bomb<br/>
              🐕 pet<br/>
              🔄 reset
            </div>
            <div>
              <strong>Эффекты:</strong><br/>
              👹 giant<br/>
              👻 ghost<br/>
              🧊 freeze<br/>
              🔥 fire<br/>
              🦅 fly
            </div>
            <div>
              <strong>Персонажи:</strong><br/>
              🧟‍♂️ zombie<br/>
              🤖 robot<br/>
              🥷 ninja<br/>
              ⚓ pirate<br/>
              🦸‍♂️ superhero
            </div>
            <div>
              <strong>Магия:</strong><br/>
              👽 alien<br/>
              🧛‍♂️ vampire<br/>
              🫠 melt<br/>
              👥 clone<br/>
              ⚡ teleport
            </div>
            <div>
              <strong>Окружение:</strong><br/>
              ☔ rain<br/>
              ❄️ snow<br/>
              💖 hearts<br/>
              ⭐ stars<br/>
              💰 money
            </div>
            <div>
              <strong>Веселье:</strong><br/>
              🪩 disco<br/>
              🎉 party<br/>
              🌍 earthquake<br/>
              🍺 drunk<br/>
              💊 matrix
            </div>
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