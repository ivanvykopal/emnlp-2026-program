/* NLLP — Natural Legal Language Processing Workshop 2026 (8th edition)
 * Source: https://nllpw.org/workshop */
addWorkshop({
  name: "NLLP",
  full_name: "Natural Legal Language Processing Workshop 2026 (8th edition)",
  url: "https://nllpw.org/workshop",
  day: "wed",
  room: "Room G9-10",
  description: "Methods and applications of NLP for the legal domain: original research on legal data (case law, rules, contracts) and data with legal relevance.",
  speakers: [
    { name: "Mireille Hildebrandt", affiliation: "Vrije Universiteit Brussel / Radboud University", title: "The Abstraction Fallacy in Law" }
  ],
  schedule: [
    { time: "09:00–09:15", type: "session", title: "Workshop opening" },
    { time: "09:15–10:10", type: "keynote", title: "Invited talk", speaker: "Mireille Hildebrandt" },
    { time: "10:10–10:30", type: "talk", title: "Session 1 talks", details: "A Dataset of Motion-Response Text Pairs from US District Court Cases for Legal Judgment Prediction; Evaluating LLMs on Explicit Knowledge of Italian Legal Concepts" },
    { time: "10:30–11:00", type: "break", title: "Coffee break" },
    { time: "11:00–12:30", type: "talk", title: "Session 2 — legal retrieval benchmarks", details: "NELSR (Nepali), LegalPincite, GreekBarRetrieval, Deka Retrieval (Thai), LegalBench.PT, plus faithfulness and rationale-extraction papers; An Empirical Study of Evidence Retrieval for RAG over the Thai Royal Gazette (12:10); The EUR-Lex Retrieval Dataset (12:20)" },
    { time: "12:30–13:30", type: "break", title: "Lunch (provided on-site)" },
    { time: "13:30–14:25", type: "session", title: "Session 3 — talks and rapid-fire presentations", details: "Three 10-min talks, then 25 one-minute rapid-fire papers (14:00–14:25)" },
    { time: "14:25–15:30", type: "poster", title: "Poster session" },
    { time: "16:00–17:25", type: "talk", title: "Session 4 — ChildSafeAds shared task and papers", details: "Shared-task overview and system papers (rapid-fire 16:15–16:19), then Q&A shared task and next steps and regular papers" },
    { time: "17:25–17:30", type: "session", title: "Closing and awards" }
  ],
  notes: "Full timed program on nllpw.org/workshop/program/. Shared task: ChildSafeAds — commercial content in child-facing YouTube videos."
});
