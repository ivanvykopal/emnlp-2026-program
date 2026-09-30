/* EMNLP 2026 main conference (Oct 24–27)
 * Sources: https://2026.emnlp.org/program/ (overview) and https://2026.emnlp.org/program/keynotes/
 * Detailed session program: Google Sheet linked from the overview page. */
addWorkshop({
  name: "EMNLP Main",
  main: true,
  full_name: "EMNLP 2026 Main Conference",
  url: "https://2026.emnlp.org/program/",
  day: ["sat", "sun", "mon", "tue"],
  description: "Main conference: plenary keynotes, oral/poster sessions (Main, Findings, CL, TACL, Demos, SRW, Industry), panel, business meeting, best paper awards. Posters, Findings sessions and exhibitors in Hall H.",
  speakers: [
    { name: "Pascale Fung", affiliation: "AMI Labs / HKUST", title: "Towards AI that understands the Real World" },
    { name: "Graham Neubig", affiliation: "Carnegie Mellon University / OpenHands", title: "On the Value of Open Research in Language Modeling - An Adversarial Dialog" },
    { name: "Anna Korhonen", affiliation: "University of Cambridge", title: "AI for the Many: Starting from the World, Not the Model" },
    { name: "Mohit Bansal", affiliation: "UNC Chapel Hill", title: "Agentic Challenges (Trustworthy Collaboration, World Discovery, and Long-Horizon Memory) and Industry-Academia Collaborations" },
    { name: "Verena Rieser", affiliation: "Google DeepMind", title: "What are we aligning to? Positive Alignment for Value-based Agents" }
  ],
  schedule: [
    { day: "sat", time: "14:00–19:30", type: "other", title: "Registration" },
    { day: "sat", time: "18:00–20:00", type: "other", title: "Welcome Reception" },

    { day: "sun", time: "07:30–16:30", type: "other", title: "Registration" },
    { day: "sun", time: "09:00–09:30", type: "session", title: "Session 1 — Opening Session" },
    { day: "sun", time: "09:30–10:30", type: "keynote", title: "Keynote 1", speaker: "Pascale Fung" },
    { day: "sun", time: "10:30–11:00", type: "break", title: "Break" },
    { day: "sun", time: "11:00–12:30", type: "poster", title: "Session 2 — Orals/Posters A", details: "Main, CL, TACL, Demos" },
    { day: "sun", time: "12:30–14:00", type: "break", title: "Lunch break", details: "Lunch provided" },
    { day: "sun", time: "12:30–14:00", type: "session", title: "Virtual Presentation Session 1", details: "via Underline" },
    { day: "sun", time: "14:00–14:30", type: "talk", title: "Preliminary Report on the AI Reviewing Experiment" },
    { day: "sun", time: "14:30–15:30", type: "panel", title: "Session 3 Panel: New Missions in NLP" },
    { day: "sun", time: "15:30–16:00", type: "break", title: "Break" },
    { day: "sun", time: "16:00–17:30", type: "poster", title: "Session 4 — Orals/Posters B", details: "Main, CL, TACL, Demos" },
    { day: "sun", time: "16:30–17:30", type: "keynote", title: "Industry Keynote 1", speaker: "Mohit Bansal", details: "Time from the keynotes page; not listed in the overview table" },
    { day: "sun", time: "18:00–19:30", type: "session", title: "Virtual Presentation Session 2", details: "via Underline" },

    { day: "mon", time: "07:00–08:30", type: "session", title: "Virtual Presentation Session 3", details: "via Underline" },
    { day: "mon", time: "08:00–16:30", type: "other", title: "Registration" },
    { day: "mon", time: "09:00–10:30", type: "poster", title: "Session 5 — Orals/Posters C", details: "Main, CL, TACL, SRW, Demos" },
    { day: "mon", time: "09:00–10:30", type: "keynote", title: "Industry Keynote 2", speaker: "Verena Rieser", details: "Time from the keynotes page; not listed in the overview table" },
    { day: "mon", time: "10:30–11:00", type: "break", title: "Coffee break" },
    { day: "mon", time: "11:00–12:30", type: "poster", title: "Session 6 — Orals/Posters D", details: "Main, CL, TACL, IND, Demos" },
    { day: "mon", time: "12:30–14:00", type: "break", title: "Lunch break", details: "Lunch provided" },
    { day: "mon", time: "12:30–14:00", type: "session", title: "Virtual Presentation Session 4", details: "via Underline" },
    { day: "mon", time: "14:00–15:00", type: "session", title: "Session 7 — Business Meeting", details: "All attendees welcome" },
    { day: "mon", time: "15:15–16:15", type: "keynote", title: "Keynote 2", speaker: "Graham Neubig" },
    { day: "mon", time: "16:15–16:45", type: "break", title: "Coffee break" },
    { day: "mon", time: "16:45–18:15", type: "poster", title: "Session 9 — Orals/Posters E", details: "Main, CL, TACL, Demos" },
    { day: "mon", time: "19:00–22:00", type: "other", title: "Social Event", details: "Dinner provided" },

    { day: "tue", time: "08:00–17:00", type: "other", title: "Registration" },
    { day: "tue", time: "09:00–10:30", type: "poster", title: "Session 10 — Orals/Posters F", details: "Main, CL, TACL, Demos" },
    { day: "tue", time: "10:30–11:00", type: "break", title: "Coffee break" },
    { day: "tue", time: "11:00–12:30", type: "poster", title: "Session 11 — Orals/Posters G", details: "Main, CL, TACL, Demos" },
    { day: "tue", time: "12:30–14:00", type: "break", title: "Lunch break (Findings Posters)", details: "Lunch provided" },
    { day: "tue", time: "12:30–14:00", type: "session", title: "Virtual Presentation Session 5", details: "via Underline" },
    { day: "tue", time: "14:00–15:00", type: "keynote", title: "Keynote 3", speaker: "Anna Korhonen", details: "Keynotes page says 14:30–15:30" },
    { day: "tue", time: "15:00–15:30", type: "break", title: "Coffee break" },
    { day: "tue", time: "15:30–16:30", type: "session", title: "Session 13 — Best Paper Award" },
    { day: "tue", time: "16:30–17:00", type: "session", title: "Session 13 — Closing Session" }
  ],
  notes: "Times from the official overview table. Paper-level program: see the Google Sheet linked on the program page. Lunch is provided on all days; breakfast is not."
});
