"use client";

import { useMemo, useState } from "react";

export default function BlogShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const twitterUrl = useMemo(() => {
    const text = `${title} — ${url}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  }, [title, url]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      } catch {
        setCopied(false);
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 hover:border-accent/30 transition-colors"
      >
        Share on X
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 hover:border-accent/30 transition-colors"
      >
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}

