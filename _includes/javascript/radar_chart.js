var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
    labels: ["Tobacco Free", "Age Friendly", "Road Safety", "Salt Reduction", "Primary Care"],
    datasets: [{
      backgroundColor: "rgba(51, 151, 255, 0.4)",
      borderColor: "rgba(39, 78, 166, 1)",
    }, {
      backgroundColor: "rgba(255,153,0,0.4)",
      borderColor: "rgba(255,153,0,1)",
    }]
  },options: {
    legend: {
	  position: 'top',
	},
	title: {
	  display: true,
	  text: 'Chart.js Radar Chart'
	},
	scale: {
	  ticks: {
	    beginAtZero: true,
        max: 10
	  }
	}
  }
});


function set_beijing(idx) {
    myChart.config.data.datasets[idx].data = [10,2,3,4,7,10];
    myChart.config.data.datasets[idx].label = "Beijing";
    window.myChart.update();
}
function set_hangzhou(idx) {
    myChart.config.data.datasets[idx].data = [3,7,9,6,5,3];
    myChart.config.data.datasets[idx].label = "Hangzhou";
    window.myChart.update();
}
function set_chengdu(idx) {
    myChart.config.data.datasets[idx].data = [2,8,7,3,6,2];
    myChart.config.data.datasets[idx].label = "Chengdu";
    window.myChart.update();
}
function set_shanghai(idx) {
    myChart.config.data.datasets[idx].data = [8,7,6,7,8,8];
    myChart.config.data.datasets[idx].label = "Shanghai";
    window.myChart.update();
}
