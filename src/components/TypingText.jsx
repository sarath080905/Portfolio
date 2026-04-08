import { useEffect, useMemo, useState } from "react";

export default function TypingText({
  words = [],
  speed = 45,
  pause = 900,
}) {
  const safeWords = useMemo(() => (words.length ? words : ["I build modern web applications."]), [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = safeWords[wordIndex] ?? "";
    const t = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        const next = currentWord.slice(0, text.length + 1);
        setText(next);

        if (next === currentWord) {
          // After completing the word, wait a bit then start deleting
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        // Deleting backward
        const next = currentWord.slice(0, Math.max(0, text.length - 1));
        setText(next);

        if (next.length === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % safeWords.length);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(t);
  }, [deleting, pause, safeWords, speed, text, wordIndex]);

  return (
    <span className="inline-flex items-baseline gap-2" aria-label="Typing animation">
      <span>{text}</span>
      <span
        className="w-[2px] h-5 bg-indigo-600/80 dark:bg-indigo-300/80 rounded-full animate-pulse"
        aria-hidden="true"
      />
    </span>
  );
}

