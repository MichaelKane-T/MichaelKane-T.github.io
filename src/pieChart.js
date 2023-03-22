(async function () {
  try {
    // Make API request to Wakatime to retrieve last 7 days' coding time data
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

    const data = await response.json();

    const languagesData = data.data.languages;

    const dataPie = {
      labels: languagesData.map((language) => language.name),
      datasets: [
        {
          label: "Coding Time by Language",
          data: languagesData.map((language) =>
            Math.round(language.total_seconds / 60)
          ),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF8A80",
          ],
          hoverOffset: 4,
        },
      ],
    };

    // Create chart configuration object
    const configPie = {
      type: "pie",
      data: dataPie,
      options: {},
    };

    // Create chart using Chart.js
    const chartPie = new Chart(document.getElementById("chartPie"), configPie);
  } catch (error) {
    console.log(error);
  }
})();