/* Site configuration + list of workshop files.
 *
 * To add a workshop:
 *   1. Copy workshops/_template.js to workshops/<id>.js and fill it in.
 *   2. Add "<id>" to WORKSHOP_FILES below (order does not matter).
 * To update one: edit its file and bump LAST_UPDATED.
 */
window.SITE = {
  LAST_UPDATED: "September 30, 2026",
  TIMEZONE: "Budapest local time",
  // IANA zone of the venue; used to gray out past events and highlight what's on now.
  TZ: "Europe/Budapest",
  // Keys used by `day` in workshop files. Multi-day events use an array, e.g. ["wed", "thu"].
  // `date` = calendar date (YYYY-MM-DD); `short` = day-filter button text. Order here = display order.
  DAYS: {
    sat: { date: "2026-10-24", label: "Sat, Oct 24", short: "Sat 24", long: "Saturday, October 24 — Registration & welcome" },
    sun: { date: "2026-10-25", label: "Sun, Oct 25", short: "Sun 25", long: "Sunday, October 25 — Main conference" },
    mon: { date: "2026-10-26", label: "Mon, Oct 26", short: "Mon 26", long: "Monday, October 26 — Main conference" },
    tue: { date: "2026-10-27", label: "Tue, Oct 27", short: "Tue 27", long: "Tuesday, October 27 — Main conference" },
    wed: { date: "2026-10-28", label: "Wed, Oct 28", short: "Wed 28", long: "Wednesday, October 28 — Workshops & tutorials" },
    thu: { date: "2026-10-29", label: "Thu, Oct 29", short: "Thu 29", long: "Thursday, October 29 — Workshops" }
  }
};

window.WORKSHOP_FILES = [
  // Main conference, Oct 24–27
  "main-conference",
  // Tutorials, Oct 28
  "tutorials",
  // Wednesday, October 28
  "akbc", "climatenlp", "finnlp", "lm-playschool", "luhme", "mathnlp", "mrl",
  "nllp", "nlp4pi", "salma", "w-nut", "winlp",
  // Both days
  "arabicnlp", "wmt",
  // Thursday, October 29
  "babylm", "blackboxnlp", "docinsights", "glm", "impact-speech", "insights",
  "mint", "oracle", "pandora", "realm", "uncertainlp", "wac-13", "woah", "wslp"
];
