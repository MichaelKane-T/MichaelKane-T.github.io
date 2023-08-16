const fetchData = async () => {
      try {
        const response = await axios.get('https://wakatime.com/share/@MichaelKane/98c34a98-9ad6-4d68-b520-ef6c57a8318d.json');
        const responseData = response; // Parse the response data as JSON
        const data = responseData.data
        const mappedArray = data.data.map(item => ({
          name: item.name,
          percent: item.percent,
          // ... map other properties as needed
        }));
        setLanguagesData(mappedArray); // Update the state with the parsed data
        
      } catch (error) {
        console.log(error);
      }
    };

    const languageNames = languagesData.map(data => data.name);
    const languageTimes = languagesData.map(data => Math.round(data.total_seconds / 60));

    const dataPie = {
      labels: languageNames,
      datasets: [
        {
          label: "Coding Time by Language",
          data: languageTimes,
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
,
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
