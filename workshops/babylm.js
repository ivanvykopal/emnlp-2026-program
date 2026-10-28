/* BabyLM — Workshop on Accelerating Language Modeling Research with Cognitively Plausible Datasets
 * Source: https://babylm.github.io/ */
addWorkshop({
  name: "BabyLM",
  full_name: "Workshop on Accelerating Language Modeling Research with Cognitively Plausible Datasets",
  url: "https://babylm.github.io/",
  day: "thu",
  room: "Room F4-5",
  description: "Small-scale LM training and connections to human language development: data-efficient LMs, developmentally plausible pretraining, small-budget model development. Hosts the 4th BabyLM Challenge (≤100M words).",
  speakers: [
    { name: "Mitja Nikolaus", affiliation: "CNRS, Toulouse", title: "Communicative Feedback: Language Acquisition Within and Through Social Interaction" },
    { name: "Pontus Stenetorp", affiliation: "University College London", title: "UK-LLM, Sofair, and a path towards frontier-level Open Source Artificial Intelligence" }
  ],
  schedule: [
    { time: "09:15–09:30", type: "session", title: "Opening remarks" },
    { time: "09:30–10:30", type: "talk", title: "BabyLM orals, part 1", details: "09:30 BabySteps at BabyLM 2026: Stronger Optimization and Causal Baselines for Data-Constrained Pretraining; 09:45 Qwenfant: Train Big Character-level BabyLMs on Concise Parallel Text; 10:00 Recursive Transformers for BabyLM 2026; 10:15 Miss Universal Grammar: Pretraining BabyLMs with Linguistic and Non-Linguistic Sources" },
    { time: "10:30–11:00", type: "break", title: "Coffee break" },
    { time: "11:00–12:00", type: "keynote", title: "Invited talk 1", speaker: "Mitja Nikolaus" },
    { time: "12:00–12:30", type: "talk", title: "BabyLM orals, part 2", details: "12:00 Relational Attention for Data-Efficient Language Modeling; 12:15 TinyLibrary: Do Age-Graded Curricula Help Small Vision-Language Models?" },
    { time: "12:30–14:00", type: "break", title: "Lunch" },
    { time: "14:00–15:30", type: "poster", title: "Poster session" },
    { time: "15:30–16:00", type: "break", title: "Coffee break" },
    { time: "16:00–17:00", type: "keynote", title: "Invited talk 2", speaker: "Pontus Stenetorp" },
    { time: "17:00–17:25", type: "session", title: "Town hall" },
    { time: "17:25–17:30", type: "session", title: "Awards and closing remarks" }
  ],
  notes: "Workshop schedule updated with invited speakers, talk titles, and oral presentation times. Official site linked from the EMNLP 2026 workshops page in October 2026; hosts the 2026 evaluation pipeline and official leaderboard. 2026 emphasis: multilingual and cross-linguistic data efficiency."
});
