import React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { m } from "@/paraglide/messages";

interface CaptchaProps {
  onQuestionGenerated: (question: string) => void;
  onAnswerChange: (answer: string) => void;
}
const Captcha = ({ onQuestionGenerated, onAnswerChange }: CaptchaProps) => {
  const [captchaQuestion, setCaptchaQuestion] = useState("");
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
        break;
      case "-":
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        break;
      case "*":
        num1 = Math.floor(Math.random() * 5) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        break;
      default:
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
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
        {m.ago_inclusive_antelope_flow()}
      </label>
      <div className="flex items-center gap-4 mt-4">
        <div className="bg-muted p-3 rounded text-center min-w-[140px] font-mono text-lg">
          {captchaQuestion}
        </div>
        <Input
          type="text"
          placeholder={m.nice_even_pigeon_sew()}
          className="max-w-[120px]"
          value={userAnswer}
          onChange={(e) => handleAnswerChange(e.target.value)}
          aria-label={m.wide_close_opossum_greet()}
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
