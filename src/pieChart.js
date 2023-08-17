const fetchData = async () => {
  try {
    const response = await axios.get('https://wakatime.com/share/@MichaelKane/98c34a98-9ad6-4d68-b520-ef6c57a8318d.json');
    const responseData = response.data; // Parse the response data as JSON
    const mappedArray = responseData.data.map(item => ({
      name: item.name,
      percent: item.percent,
      // ... map other properties as needed
    }));
    setLanguagesData(mappedArray); // Update the state with the parsed data
    const languageNames = mappedArray.map(data => data.name);
    const languageTimes = mappedArray.map(data => data.percent));

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

    // Create chart configuration object
    const configPie = {
      type: "pie",
      data: dataPie,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Coding Pie Chart'
          },}}

    // Create chart using Chart.js
    const chartPie = new Chart(document.getElementById("chartPie"), configPie);
  } catch (error) {
    console.log(error);
  }
};

// Call the fetchData function
fetchData();
