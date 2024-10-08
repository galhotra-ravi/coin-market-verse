import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const CryptoChart = ({ coinId, name }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.prices.map((price) => ({
          x: new Date(parseFloat(price[0].toFixed(2))).getTime(),
          y: price[1],
        }));
        setChartData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [coinId]);

  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: true,
      },
      
    menu: {
        icon: {

            color: '#000000' // Change this to the desired text color
        }
      
    },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MMM dd HH:mm',
        style: {color: "#ffffff"}
      }
    },
    yaxis: {
      tooltip: {
        enabled: true,
      }, labels: {
        style : {color: '#ffffff'},
        formatter: function (value) {
          if (value >= 1000) {
            return '$' + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else if (value >= 1) {
            return '$' + value.toFixed(2);
          } else {
            return '$' + value.toPrecision(2);
          }
        }
      }
    },
    tooltip: {
      theme: 'dark',
              x: {
                 format: 'MMM dd, yyyy HH:mm'
              },
              y: {
                formatter: function(value) {
                  return '$' + value.toFixed(2);
                }
              }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#5a38fd'],
    grid: {
        borderColor: '#373d3f'
      }
  };

  const series = [
    {
      name: name,
      data: chartData,
    },
  ];

  return (
    <div style={{ width: '100%', height: 400 }}>
      {loading ? (
        <div class="flex flex-row gap-2 mt-[-250px]">
        <div class="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.7s]"></div>
        <div class="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.7s]"></div>
      </div> 
      ) : (
        <Chart options={options} series={series} type="line" height={400} />
      )}
    </div>
  );
};

export default CryptoChart;