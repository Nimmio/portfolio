import React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface CaptchaProps {
  onQuestionGenerated: (question: string) => void;
  onAnswerChange: (answer: string) => void;
}
const Captcha = ({ onQuestionGenerated, onAnswerChange }: CaptchaProps) => {
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [expectedAnswer, setExpectedAnswer] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState("");

  // Generate a simple math captcha
  const generateCaptcha = () => {
    const operations = ["+", "-", "*"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let num1: number, num2: number;

    switch (operation) {
      case "+":
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        setExpectedAnswer(num1 + num2);
        break;
      case "-":
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        setExpectedAnswer(num1 - num2);
        break;
      case "*":
        num1 = Math.floor(Math.random() * 5) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        setExpectedAnswer(num1 * num2);
        break;
      default:
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        setExpectedAnswer(num1 + num2);
    }

    const question = `${num1} ${operation} ${num2} = ?`;
    setCaptchaQuestion(question);
    onQuestionGenerated(question);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleAnswerChange = (value: string) => {
    setUserAnswer(value);
    onAnswerChange(value);
  };
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Security Check
      </label>
      <div className="flex items-center gap-4">
        <div className="bg-muted p-3 rounded text-center min-w-[140px] font-mono text-lg">
          {captchaQuestion}
        </div>
        <Input
          type="text"
          placeholder="Answer"
          className="max-w-[120px]"
          value={userAnswer}
          onChange={(e) => handleAnswerChange(e.target.value)}
          aria-label="CAPTCHA answer"
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => {
            generateCaptcha();
            setUserAnswer("");
            onAnswerChange("");
          }}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Captcha;
