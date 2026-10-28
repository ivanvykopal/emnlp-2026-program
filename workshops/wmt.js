/* WMT — Eleventh Conference on Machine Translation
 * Source: https://www2.statmt.org/wmt26/ */
addWorkshop({
  name: "WMT",
  full_name: "Eleventh Conference on Machine Translation",
  room: "Room G1-3",
  url: "https://www2.statmt.org/wmt26/",
  day: ["wed", "thu"],
  description: "Two-day MT research conference with 13 shared tasks: general MT, Indic/Arabic-Asian/Chinese–Southeast-Asian/Creole translation, terminology, model compression, subtitles, test suites, metrics, open data, multilingual instruction, and limited-resources LLMs.",
  speakers: [
    { name: "Marta Ruiz Costa-jussà", title: "Towards Omnilinguality in AI: MT as a Starting Point for Language Coverage and Capability Parity" }
  ],
  schedule: [
    { day: "wed", time: "08:45–09:00", type: "session", title: "Opening remarks" },
    { day: "wed", time: "09:00–10:30", type: "talk", title: "Session 1: Shared Task Overview Papers I", details: "5 findings talks with per-paper times: General MT; Automated Translation Quality Evaluation; Multilingual Instruction; Terminology Translation; Model Compression" },
    { day: "wed", time: "10:30–11:00", type: "break", title: "Coffee break" },
    { day: "wed", time: "11:00–12:00", type: "keynote", title: "Invited talk", speaker: "Marta Ruiz Costa-jussà" },
    { day: "wed", time: "12:00–13:00", type: "poster", title: "Session 3: Shared Task Posters I", details: "~90 system-description posters with titles/authors on the site: General Translation (26), Test Suites (8), Metrics (18), Terminology (13), Multilingual Instruction (8), Model Compression (12)" },
    { day: "wed", time: "13:00–14:00", type: "break", title: "Lunch break" },
    { day: "wed", time: "14:00–15:30", type: "talk", title: "Session 4: Research Papers Boaster Talks", details: "All 47 research papers with titles/authors on the site" },
    { day: "wed", time: "16:00–17:30", type: "poster", title: "Session 5: Research Papers Posters", details: "All 47 research papers with titles/authors on the site" },
    { day: "thu", time: "08:45–10:30", type: "talk", title: "Session 6: Shared Task Overview Papers II", details: "7 findings talks with per-paper times: Indic; Arabic-Asian; Chinese–Southeast Asian; Creole; Open Language Data; Video Subtitle Translation; Multitask LLMs with Limited Resources" },
    { day: "thu", time: "10:30–11:00", type: "break", title: "Coffee break" },
    { day: "thu", time: "11:00–12:00", type: "poster", title: "Session 7: Shared Task Posters II", details: "Paper-level lists by task on the site: Indic (22), Arabic-Asian (13), Chinese–Southeast Asian (5), Creole (7), Open Data (10), Subtitle (7), Limited-Resource Slavic LLM (6) system-description posters" },
    { day: "thu", time: "12:00–14:00", type: "break", title: "Lunch break" },
    { day: "thu", time: "14:00–15:30", type: "talk", title: "Session 8: Selected Research-Paper Talks", details: "14:00 Rajaee et al. (Unlocking Reasoning Capability on MT in LLMs); 14:15 Scholz et al. (LLM fine-tuning for translation); 14:30 Hettich et al. (SNAPP); 14:45 Bennett (Synthetic Slang Generation); 15:00 Pan & Seeber (machine vs. human simultaneous interpreting); 15:15 Issam et al. (zero-shot SpeechLLMs)" }
  ],
  notes: "Poster counts condensed from the official program, which now lists all papers with titles/authors. System papers presented as posters (84×119 cm portrait)."
});
