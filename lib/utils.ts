import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sarcasticRoasts = [
  "Wow, did you type that with your elbows? Impressive!",
  "I've seen glaciers move faster than your typing speed.",
  "Are you using Internet Explorer to process your keystrokes?",
  "Your typing is so slow, I thought I was watching a loading screen.",
  "Congrats! You've just set a new record for the world's slowest developer.",
  "I bet you could lose a typing race against a sloth.",
  "Your code might compile faster if you used carrier pigeons instead of typing.",
  "Is your keyboard made of molasses? Just curious.",
  "Your typing speed is so low, it's basically JavaScript on IE6.",
  "I've seen more accurate typing from a cat walking across a keyboard.",
  "Did you fall asleep halfway through typing that? No judgment, just wondering.",
  "At this point, your keyboard's probably begging for a vacation.",
  "Are you coding or trying to reinvent the concept of patience? Because wow.",
  "I wasn't aware we were still doing Morse code—oh wait, that's just your typing.",
  "By the time you finish typing, your code might be obsolete.",
  "Your typing speed would be a great plot for a slow-motion movie.",
  "Do your fingers need a user manual, or are they just rebelling?",
  "If your typing were a sport, it’d be the slow crawl marathon.",
  "You're typing like you're being charged per keystroke.",
  "Watching you type is like watching a documentary on evolution—slow, but eventually something happens.",
];
