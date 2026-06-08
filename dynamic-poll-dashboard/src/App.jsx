import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function App() {
  const [votes, setVotes] = useState({
    React: 0,
    Vue: 0,
    Angular: 0,
  });

  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const vote = (framework) => {
    setVotes((prev) => ({
      ...prev,
      [framework]: prev[framework] + 1,
    }));
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    if (!chartInstanceRef.current) {
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: Object.keys(votes),
          datasets: [
            {
              label: "Votes",
              data: Object.values(votes),
            },
          ],
        },
      });
    } else {
      chartInstanceRef.current.data.datasets[0].data =
        Object.values(votes);

      chartInstanceRef.current.update();
    }

    

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [votes]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Favorite JavaScript Framework</h1>

      <button onClick={() => vote("React")}>
        React ({votes.React})
      </button>

      <button
        onClick={() => vote("Vue")}
        style={{ marginLeft: "10px" }}
      >
        Vue ({votes.Vue})
      </button>

      <button
        onClick={() => vote("Angular")}
        style={{ marginLeft: "10px" }}
      >
        Angular ({votes.Angular})
      </button>

      <div style={{ width: "700px", margin: "30px auto" }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default App;