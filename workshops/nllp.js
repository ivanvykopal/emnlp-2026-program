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
    { time: "11:00–12:30", type: "talk", title: "Session 2 — legal retrieval benchmarks", details: "NELSR (Nepali), LegalPincite, GreekBarRetrieval, Deka Retrieval (Thai), LegalBench.PT, plus faithfulness and rationale-extraction papers" },
    { time: "12:30–13:30", type: "break", title: "Lunch (provided on-site)" },
    { time: "13:30–15:30", type: "session", title: "Session 3 — talks and rapid-fire presentations", details: "Three 10-min talks, then ~20 one-minute rapid-fire papers" },
    { time: "15:30–16:00", type: "break", title: "Coffee break" },
    { time: "16:00–17:25", type: "talk", title: "Session 4 — ChildSafeAds shared task and papers", details: "Shared-task overview and system papers, then regular papers" },
    { time: "17:25–17:30", type: "session", title: "Closing and awards" }
  ],
  notes: "Full timed program on nllpw.org/workshop/program/. Shared task: ChildSafeAds — commercial content in child-facing YouTube videos."
});
