//var
var dayes = new Date();
var months = dayes.getMonth()+1;
var dayer = dayes.getDate()-7;
var high_score = [];
var low_score = [];
var ave_score = [];
var datee =[];
var ctx = document.getElementById("myLineChart");
var score_value = [];
var b = 1;

//function
function tensusyori(){
  while(true){
    var inV = Number(prompt(b+"人目の点数を入力してください"));
    score_value.push(inV);
    b += 1;
    if(b == first){
      break;
    }
  }
}

//過去7日分の日付の生成をしリストに代入
function dayS(){
  for(var i = 0; i <= 7; i++){
    datee.push(months+"月"+(dayer+i)+"日");
  }
}
dayS()
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: datee,
    datasets: [
      {
        label: "最高点",
        data: high_score,
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: "最低点",
        data: low_score,
        borderColor: "rgba(0,0,255,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: "平均点",
        data: ave_score,
        borderColor: "rgba(0,255,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      }
    ],
  },
  options: {
    title: {
      display: true,
      text: "最高点と最低点の比率",
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 1200,
          suggestedMin: 0,
          stepSize: 100,
          callback: function(value, index, values){
            return  value +  "点"
          }
        }
      }]
    },
  }
});


function inhightscore(){
  high_score.push("ihigh_score")
}