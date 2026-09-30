/* WMT — Eleventh Conference on Machine Translation
 * Source: https://www2.statmt.org/wmt26/ */
addWorkshop({
  name: "WMT",
  full_name: "Eleventh Conference on Machine Translation",
  url: "https://www2.statmt.org/wmt26/",
  day: ["wed", "thu"],
  description: "Two-day MT research conference with 13 shared tasks: general MT, Indic/Arabic-Asian/Chinese–Southeast-Asian/Creole translation, terminology, model compression, subtitles, test suites, metrics, open data, multilingual instruction, and limited-resources LLMs.",
  speakers: [
    { name: "Marta Ruiz Costa-jussà", title: "Towards Omnilinguality in AI: MT as a Starting Point for Language Coverage and Capability Parity" }
  ],
  schedule: [
    { day: "wed", time: "08:45–09:00", type: "session", title: "Opening remarks" },
    { day: "wed", time: "09:00–10:30", type: "talk", title: "Session 1: Shared Task Overview Papers I", details: "Findings talks: General MT; Automated Translation Quality Evaluation; Multilingual Instruction; Terminology Translation; Model Compression" },
    { day: "wed", time: "10:30–11:00", type: "break", title: "Coffee break" },
    { day: "wed", time: "11:00–12:00", type: "keynote", title: "Invited talk", speaker: "Marta Ruiz Costa-jussà" },
    { day: "wed", time: "12:00–13:00", type: "poster", title: "Session 3: Shared Task Posters I", details: "General Translation (26), Test Suites (8), Metrics (17), Terminology (13), Multilingual Instruction (8), Model Compression (12) system-description posters" },
    { day: "wed", time: "13:00–14:00", type: "break", title: "Lunch break" },
    { day: "wed", time: "14:00–15:30", type: "talk", title: "Session 4: Research Papers Boaster Talks", details: "47 research-paper boaster talks" },
    { day: "wed", time: "16:00–17:30", type: "poster", title: "Session 5: Research Papers Posters" },
    { day: "thu", time: "08:45–10:30", type: "talk", title: "Session 6: Shared Task Overview Papers II", details: "Findings talks: Indic; Arabic-Asian; Chinese–Southeast Asian; Creole; Open Language Data; Video Subtitle Translation; Multitask LLMs with Limited Resources" },
    { day: "thu", time: "10:30–11:00", type: "break", title: "Coffee break" },
    { day: "thu", time: "11:00–12:00", type: "poster", title: "Session 7: Shared Task Posters II", details: "Indic (21), Arabic-Asian (13), Chinese–Southeast Asian (5), Creole (7), Open Data (10), Subtitle (8), Limited-Resource Slavic LLM (6) system-description posters" },
    { day: "thu", time: "12:00–14:00", type: "break", title: "Lunch break" },
    { day: "thu", time: "14:00–15:30", type: "talk", title: "Session 8: Selected Research-Paper Talks", details: "Rajaee et al. (reasoning in MT); Scholz et al. (LLM fine-tuning for translation); Hettich et al. (SNAPP); Bennett (synthetic slang); Pan & Seeber (machine vs. human simultaneous interpreting); Issam et al. (zero-shot SpeechLLMs)" }
  ],
  notes: "Poster counts condensed from the official program. System papers presented as posters (84×119 cm portrait)."
});
