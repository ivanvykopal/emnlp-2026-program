/* AKBC — 11th Workshop on Automated Knowledge Base Construction
 * Source: https://www.akbc.ws/2026/ */
addWorkshop({
  name: "AKBC",
  full_name: "11th Workshop on Automated Knowledge Base Construction",
  url: "https://www.akbc.ws/2026/",
  day: "wed",
  room: "Room F8",
  description: "Addresses the missing piece of the generative era — structured knowledge. Knowledge bases serve as ground truth for fact verification, the semantic backbone for constrained decoding, and a resource behind RAG.",
  speakers: [
    { name: "Denny Vrandečić", affiliation: "Wikimedia", title: null },
    { name: "Mausam", affiliation: "IIT Delhi", title: null },
    { name: "Heng Ji", affiliation: "University of Illinois Urbana-Champaign", title: null },
    { name: "Alon Halevy", affiliation: "Google", title: null },
    { name: "Dan Roth", affiliation: "University of Pennsylvania / Oracle", title: null },
    { name: "Amir Globerson", affiliation: "Tel Aviv University / Google", title: null },
    { name: "Parisa Kordjamshidi", affiliation: "Michigan State University", title: null }
  ],
  schedule: [
    { time: "08:30–08:45", type: "session", title: "Opening" },
    { time: "08:45–09:15", type: "keynote", title: "Invited talk 1", speaker: "Denny Vrandečić" },
    { time: "09:15–09:45", type: "keynote", title: "Invited talk 2", speaker: "Mausam" },
    { time: "09:45–10:15", type: "keynote", title: "Invited talk 3", speaker: "Heng Ji" },
    { time: "10:15–10:30", type: "talk", title: "Featured paper 1: Explaining Textual Entailment with Lexical Entailments — de Jong et al." },
    { time: "10:30–11:00", type: "break", title: "Coffee break" },
    { time: "11:00–11:30", type: "keynote", title: "Invited talk 4", speaker: "Amir Globerson" },
    { time: "11:30–12:00", type: "keynote", title: "Invited talk 5", speaker: "Parisa Kordjamshidi" },
    { time: "12:00–12:15", type: "talk", title: "Featured paper 2: Zero-Shot Relation Classification with LLMs — Alemany et al." },
    { time: "12:15–12:30", type: "talk", title: "Featured paper 3: GRACE-Mem — Wang et al." },
    { time: "12:30–13:30", type: "break", title: "Lunch break" },
    { time: "13:45–14:30", type: "session", title: "Shared task session (LM-KBC)" },
    { time: "14:30–16:00", type: "poster", title: "Poster session", details: "27 accepted research papers + 17 shared-task papers presented as posters; coffee 15:30–16:00 overlaps posters." },
    { time: "16:00–16:30", type: "keynote", title: "Invited talk 6", speaker: "Alon Halevy" },
    { time: "16:30–17:00", type: "keynote", title: "Invited talk 7", speaker: "Dan Roth" },
    { time: "17:00–17:15", type: "session", title: "Community discussion" },
    { time: "17:15–17:30", type: "session", title: "Closing" },
    { time: "18:00–open end", type: "other", title: "AKBC reception at Sky bar, Expo Tower Hotel", details: "TBC" }
  ],
  notes: "Provisional schedule — subject to change per the organizers. LM-KBC shared task on closed-book knowledge base construction; sponsors: Bloomberg, SLB."
});
