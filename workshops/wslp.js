/* WSLP — 2nd Workshop on Sign Language Processing
 * Source: https://exploration-lab.github.io/WSLP-2026/ */
addWorkshop({
  name: "WSLP",
  full_name: "2nd Workshop on Sign Language Processing",
  url: "https://exploration-lab.github.io/WSLP-2026/",
  room: "Room G11",
  day: "thu",
  description: "All areas of sign language processing — recognition, translation, generation — with emphasis on underrepresented languages and communities.",
  speakers: [
    { name: "Hamzah Luqman", affiliation: "King Fahd University of Petroleum & Minerals", title: "Sign Language Recognition in the Wild: Insights from Smartphone-Captured Datasets" },
    { name: "Mayumi Bono", affiliation: "National Institute of Informatics (NII), Japan", title: "What Should Sign Language AI Recognize? Communication Beyond Shared Sign Languages" },
    { name: "Maram Salman Aljuaid", affiliation: "King Faisal University, Saudi Arabia", title: "Beyond the Gloss: Linguistic Challenges in Sign Language Data Collection and Annotation" },
    { name: "Karen Livescu", affiliation: "TTI-Chicago", title: "A few steps toward understanding sign language in the real world" }
  ],
  schedule: [
    { time: "08:50–09:10", type: "session", title: "Opening and welcome" },
    { time: "09:10–09:45", type: "keynote", title: "Invited talk 1", speaker: "Hamzah Luqman", details: "30 min talk + 5 min Q&A" },
    { time: "09:45–10:45", type: "keynote", title: "Invited talk 2", speaker: "Mayumi Bono", details: "45 min talk + 15 min Q&A" },
    { time: "10:45–11:00", type: "break", title: "Coffee break" },
    { time: "11:00–12:00", type: "talk", title: "Paper presentations", details: "10 min talk + 2 min Q&A each: ISLiM: A Compact End-to-End Sign Language Translation Framework; What Actually Transfers? Diagnosing Output-Projection Initialization in Low-Resource Sign Language Translation; Coverage Is Not Enough: A Controlled Study of Annotation Selection for Low-Resource Sign Language; LSC-CARE: An Annotated Dataset for Medical Catalan Sign Language; Recognizing Uruguayan Sign Language Glosses in Continuous Discourse: A Curated Dataset and First Baselines" },
    { time: "12:00–13:00", type: "poster", title: "Poster presentations", details: "20 posters" },
    { time: "13:00–14:00", type: "break", title: "Lunch break" },
    { time: "14:00–15:00", type: "keynote", title: "Invited talk 3", speaker: "Maram Salman Aljuaid", details: "45 min talk + 15 min Q&A" },
    { time: "15:00–15:48", type: "talk", title: "Paper presentations", details: "10 min talk + 2 min Q&A each: Using Sign Phonology to Improve Few-Shot Cross-Lingual Transfer Learning for Sign Language Recognition; Cross-Lingual Transfer of Self-Supervised Representations for Sign Language Translation: A Case Study for Turkish Sign Language; SpaMo-BdSL: Gloss-Free Bangla Sign Language Translation Using Spatial Configurations and Motion Dynamics with LLMs; Testing Video MLLM Sensitivity to Hand-Localized Visual Detail in Chinese Sign Recognition: A Matched Visual Intervention Study" },
    { time: "15:48–16:00", type: "break", title: "Coffee break" },
    { time: "16:00–17:00", type: "keynote", title: "Invited talk 4 (online)", speaker: "Karen Livescu", details: "45 min talk + 15 min Q&A" },
    { time: "17:00–17:10", type: "session", title: "Closing remarks" }
  ],
  notes: "Program and invited speakers published on the workshop site; Karen Livescu's talk is online. 16 workshop main papers + 6 shared-task papers accepted; the accepted-papers list still marks each presentation mode as TBA, but the program assigns 9 oral slots and a 20-poster session. The site links an ACL Anthology proceedings volume. Hybrid. Hosts a sign-language-translation shared task."
});
