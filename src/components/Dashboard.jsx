import { Bar, Pie } from "react-chartjs-2";
import Speedometer from "react-d3-speedometer";
import "chart.js/auto"; // Import to auto-register chart components

const Dashboard = () => {
  const travelData = {
    distance: 1200, // in km
    mode: "Train",
    co2Emissions: 50, // in kg
    co2EmissionsSaved: 100, // in kg
    modes: [
      { type: "Car", value: 30 },
      { type: "Train", value: 50 },
      { type: "Plane", value: 20 },
    ],
  };

  const barData = {
    labels: ["Distance", "CO2 Emissions", "CO2 Emissions Saved"],
    datasets: [
      {
        label: "Travel Metrics",
        data: [
          travelData.distance,
          travelData.co2Emissions,
          travelData.co2EmissionsSaved,
        ],
        backgroundColor: ["#f87979", "#36a2eb", "#4bc0c0"],
      },
    ],
  };

  const pieData = {
    labels: travelData.modes.map((mode) => mode.type),
    datasets: [
      {
        data: travelData.modes.map((mode) => mode.value),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Travel Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Travel Distance</h3>
          <p className="text-gray-600">{travelData.distance} km</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Mode of Transportation</h3>
          <p className="text-gray-600">{travelData.mode}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">CO2 Emissions</h3>
          <p className="text-gray-600">{travelData.co2Emissions} kg</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">CO2 Emissions Saved</h3>
          <p className="text-gray-600">{travelData.co2EmissionsSaved} kg</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-2">Travel Metrics</h3>
          <div className="h-48">
            <Bar data={barData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-2">
            Modes of Transportation
          </h3>
          <div className="h-48">
            <Pie data={pieData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-2">
            CO2 Emissions Speedometer
          </h3>
          <Speedometer
            maxValue={200}
            value={travelData.co2Emissions}
            needleColor="red"
            startColor="green"
            endColor="red"
            segments={10}
            width={250}
            height={160}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
