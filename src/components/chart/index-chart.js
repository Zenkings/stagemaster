// import React, { useState, useEffect } from "react";
// import Chart from "chart.js/auto";

// const ChartComponent = () => {
//   const [selectedDay, setSelectedDay] = useState("Red"); // État pour stocker le jour sélectionné

//   useEffect(() => {
//     const ctx = document.getElementById("myChart");
//     const myChart = new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [
//           {
//             label: "Dataset 1",
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: "rgba(79, 216, 134, 0.5)",
//             borderColor: "#4fd886",
//             borderWidth: 1,
//           },
//           {
//             label: "Dataset 2",
//             data: [4, 8, 2, 10, 15, 7],
//             backgroundColor: "rgba(54, 162, 235, 0.5)",
//             borderColor: "rgba(54, 162, 235, 1)",
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleDayChange = (event) => {
//     setSelectedDay(event.target.value);
//     // Ici, vous pouvez mettre à jour les données du graphique en fonction de la journée sélectionnée
//     // Par exemple, vous pouvez effectuer une requête API pour obtenir les données pour la journée sélectionnée
//   };

//   return (
//     <div>
//       <select value={selectedDay} onChange={handleDayChange}>
//         <option value="Red">Red</option>
//         <option value="Blue">Blue</option>
//         <option value="Yellow">Yellow</option>
//         <option value="Green">Green</option>
//         <option value="Purple">Purple</option>
//         <option value="Orange">Orange</option>
//       </select>
//       <canvas id="myChart"></canvas>
//     </div>
//   );
// };

// export default ChartComponent;
