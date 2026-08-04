toco:

live: <https://toco-game.vercel.app/>
github: <https://github.com/Spod101/batilpatong>

stack:
Vite SPA with vanilla JS DOM rendering
js-tiktoken for token counting (with word-count fallback)
IndexedDB for leaderboard and saved game persistence
localStorage for anonymous session identity
PWA — service worker + manifest included
No external AI API calls — the witness is fully rule-based

desc:
A detective puzzle PWA where you interrogate an AI witness whose memory is deliberately limited by a visible token budget. The core skill being taught is AI context management — decide what the witness remembers, summarize to save space, and solve the case before running out of interrogation tokens.

Concept
The witness holds a memory token budget. Facts dragged into memory consume tokens. When the budget overflows, the oldest fact is forgotten. You must:

Strategically load only the most relevant facts into the witness's memory.
Use Summarize to merge two facts into one compressed entry, saving tokens.
Submit questions — the witness answers only from what is currently in memory.
Accuse the correct suspect before running out of interrogation tokens.
Cases
Difficulty Case Suspects Clues Memory Interrogation
Easy The Missing Heirloom 3 6 180t 120t
Medium The Blue Diamond Necklace 5 9 170t 90t
Hard The Vanishing Maestro 7 11 150t 70t
A Training mode walks through the core mechanics via a step-by-step interactive tutorial before the real cases.
