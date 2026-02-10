"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
  variant?: "default" | "compact" | "large";
}

export function CountdownTimer({ 
  targetDate, 
  className = "",
  variant = "default" 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return null;
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Gün", labelEn: "Days" },
    { value: timeLeft.hours, label: "Saat", labelEn: "Hours" },
    { value: timeLeft.minutes, label: "Dəq", labelEn: "Min" },
    { value: timeLeft.seconds, label: "San", labelEn: "Sec" },
  ];

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-1 text-sm ${className}`}>
        {timeUnits.map((unit, index) => (
          <span key={index} className="font-mono">
            {String(unit.value).padStart(2, '0')}
            {index < timeUnits.length - 1 && <span className="text-muted-foreground mx-0.5">:</span>}
          </span>
        ))}
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div className={`grid grid-cols-4 gap-4 ${className}`}>
        {timeUnits.map((unit, index) => (
          <div 
            key={index}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-megaplus-orange to-megaplus-yellow rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-megaplus-orange mb-2">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-4 gap-2 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div 
          key={index}
          className="bg-background/50 backdrop-blur-sm rounded-xl p-3 text-center border border-border/50"
        >
          <div className="text-2xl font-bold text-megaplus-orange">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
