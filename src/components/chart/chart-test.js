// import React, { useEffect, useRef, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
// } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";
// import faker from "faker";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ChartTest = ({ theme }) => {
//   /* Module Chart*/
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Mois actuel
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Année actuelle
//   const [currentDay, setCurrentDay] = useState(new Date().getDate()); // Jour actuel

//   // Fonction de mise à jour du mois sélectionné
//   const handleMonthChange = (event) => {
//     setSelectedMonth(parseInt(event.target.value));
//   };

//   // Fonction de mise à jour de l'année sélectionnée
//   const handleYearChange = (event) => {
//     setSelectedYear(parseInt(event.target.value));
//   };

//   const optionsBar = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Bar Chart",
//       },
//     },
//   };
//   const labels = [
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Août",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ];

//   const dataBar = {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: "rgb(126, 226, 166)",
//       },
//       {
//         label: "Dataset 2",
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//       },
//     ],
//   };

//   return (
//     <div>
//       <div
//         className={
//           !theme
//             ? " bg-white rounded-2 shadow-sm"
//             : "bg-dark rounded-2 shadow-sm text-white p-4"
//         }>
//         <div className="d-flex justify-content-between">
//           <h4>
//             {" "}
//             <i className="bi bi-bar-chart"></i> Chart{" "}
//           </h4>
//           <div>
//             <select  className="mx-2" value={selectedMonth} onChange={handleMonthChange}>
//               <option value={1}>Janvier</option>
//               <option value={2}>Février</option>
//               <option value={3}>Mars</option>
//               <option value={4}>Avril</option>
//               <option value={5}>Mai</option>
//               <option value={6}>Juin</option>
//               <option value={7}>Juillet</option>
//               <option value={8}>Août</option>
//               <option value={9}>Septembre</option>
//               <option value={10}>Octobre</option>
//               <option value={11}>Novembre</option>
//               <option value={12}>Décembre</option>
//             </select>
//             <select value={selectedYear} onChange={handleYearChange}>
//               <option value={new Date().getFullYear() - 1}>
//                 {new Date().getFullYear() - 1}
//               </option>
//               <option value={new Date().getFullYear()}>
//                 {new Date().getFullYear()}
//               </option>
//               <option value={new Date().getFullYear() + 1}>
//                 {new Date().getFullYear() + 1}
//               </option>
//               {/* Ajoutez les années supplémentaires au besoin */}
//             </select>
//           </div>
//         </div>

//         <hr></hr>

//         <Bar options={optionsBar} data={dataBar} />
//       </div>
//     </div>
//   );
// };
// export default ChartTest;
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import faker from "faker";

const ChartTest = ({ theme }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const dataBar = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgb(126, 226, 166)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const getYearsOptions = () => {
    const options = [];
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  const getMonthsOptions = () => {
    const options = [];
    for (let month = 1; month <= 12; month++) {
      options.push(
        <option key={month} value={month}>
          {labels[month - 1]}
        </option>
      );
    }
    return options;
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <h4>
            {" "}
            <i className="bi bi-bar-chart"></i> Chart
          </h4>
          <div>
            <select
              className="mx-2"
              value={selectedMonth}
              onChange={handleMonthChange}>
              {getMonthsOptions()}
            </select>
            <select value={selectedYear} onChange={handleYearChange}>
              {getYearsOptions()}
            </select>
          </div>
        </div>

        <hr />

        <Bar options={optionsBar} data={dataBar} />
      </div>
    </div>
  );
};

export default ChartTest;
