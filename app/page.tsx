"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CodeSnippet, codeSnippets, Language } from "@/data/codeSnippets";
import { sarcasticRoasts } from "@/lib/utils";

export default function TypingSpeedApp() {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>("javascript");
  const [selectedSnippet, setSelectedSnippet] = useState<CodeSnippet>(
    codeSnippets.javascript[0]
  );
  const [typedText, setTypedText] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [showRoast, setShowRoast] = useState(false);
  const [roastMessage, setRoastMessage] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const normalizeText = (text: string) => {
    return text.replace(/\s+/g, " ").trim();
  };

  const calculateAccuracy = useCallback((typed: string, target: string) => {
    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === target[i]) correct++;
    }
    return Math.round((correct / typed.length) * 100);
  }, []);

  const calculateWPM = useCallback((text: string, startTime: number) => {
    const timeElapsed = (Date.now() - startTime) / 60000; // in minutes
    const wordsTyped = text.split(" ").length;
    return Math.round(wordsTyped / timeElapsed);
  }, []);

  useEffect(() => {
    console.log("completed");

    if (typedText.length === 1 && startTime === null) {
      setStartTime(Date.now());
    }

    if (typedText.length > 0 && startTime !== null) {
      const targetText = selectedSnippet.code;
      const normalizedTypedText = normalizeText(typedText);
      const normalizedTargetText = normalizeText(
        targetText.slice(0, typedText.length)
      );

      const newAccuracy = calculateAccuracy(
        normalizedTypedText,
        normalizedTargetText
      );
      const newWPM = calculateWPM(typedText, startTime);

      setAccuracy(newAccuracy);
      setWordsPerMinute(newWPM);

      if (normalizedTypedText === normalizeText(targetText)) {
        setIsCompleted(true);
        showSarcasticRoast();
      }
    }
  }, [typedText, startTime, selectedSnippet, calculateAccuracy, calculateWPM]);

  const handleLanguageChange = (value: Language) => {
    setSelectedLanguage(value);
    setSelectedSnippet(codeSnippets[value][0]);
    resetTyping();
  };

  const handleSnippetChange = (index: number) => {
    setSelectedSnippet(codeSnippets[selectedLanguage][index]);
    resetTyping();
  };

  const resetTyping = () => {
    setTypedText("");
    setWordsPerMinute(0);
    setAccuracy(100);
    setStartTime(null);
    setShowRoast(false);
    setIsCompleted(false);
  };

  const showSarcasticRoast = () => {
    const randomRoast =
      sarcasticRoasts[Math.floor(Math.random() * sarcasticRoasts.length)];
    setRoastMessage(randomRoast);
    setShowRoast(true);
  };

  const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setTypedText(newText);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Check Speed</h1>
      <h2 className="text-xl font-bold mb-4">Developer Typing Speed Checker</h2>
      <div className="mb-4 flex space-x-4">
        <Select onValueChange={handleLanguageChange} value={selectedLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(codeSnippets).map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => handleSnippetChange(Number(value))}
          value={codeSnippets[selectedLanguage]
            .indexOf(selectedSnippet)
            .toString()}
        >
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select a code snippet" />
          </SelectTrigger>
          <SelectContent>
            {codeSnippets[selectedLanguage].map((snippet, index) => (
              <SelectItem key={index} value={index.toString()}>
                {snippet.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{selectedSnippet.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{selectedSnippet.code}</code>
            </pre>
            <p className="mt-2">
              Estimated typing time: {formatTime(selectedSnippet.estimatedTime)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Typing Area</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full h-64 p-2 border rounded-md"
              value={typedText}
              onChange={handleTyping}
              placeholder="Start typing here..."
            />
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Words per minute: {wordsPerMinute}</p>
            <p>Accuracy: {accuracy}%</p>
            {isCompleted && (
              <p>
                Your time:{" "}
                {formatTime(
                  Math.round((Date.now() - (startTime || Date.now())) / 1000)
                )}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 space-x-2">
        <Button onClick={resetTyping}>Reset</Button>
        {isCompleted && <Button onClick={showSarcasticRoast}>Get Roast</Button>}
      </div>
      <AlertDialog open={showRoast} onOpenChange={setShowRoast}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Congratulations! You finished typing!
            </AlertDialogTitle>
            <AlertDialogDescription>{roastMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowRoast(false)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
