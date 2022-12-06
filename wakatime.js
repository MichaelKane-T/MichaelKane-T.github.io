async function fetchMyStats() {
  const response = await fetch(
    "https://nextjs-red-six-46.vercel.app/api/wakatime/michaelkane",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    console.error("Fetch failed");
    return;
  }
  const stats = await response.json();
  console.log("Data: ", stats.data);
  // {decimal: '533.68', digital: '533:41', hours: 533, minutes: 41, name: 'PHP', …}
  console.log("Languages:", stats.data.languages);
  // HTML, CSS, JavaScript
  const languages = stats.data.languages;
  const htmlHours = getLanguageHours(languages, "HTML");
  const cssHours = getLanguageHours(languages, "CSS");
  const javaScriptHours = getLanguageHours(languages, "JavaScript");
  window.document.querySelector("#htmlHours").innerText = htmlHours;
  window.document.querySelector("#cssHours").innerText = cssHours;
  window.document.querySelector("#javaScriptHours").innerText = javaScriptHours;
}

function getLanguageHours(languages, languageName) {
  const result = languages.filter((lan) => lan.name === languageName);
  const html = result[0];
  return html.hours;
}

fetchMyStats();
