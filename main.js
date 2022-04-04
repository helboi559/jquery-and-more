//create a element
let div = $(`<div>Hello World</div>`);
//select a dom
let body =$('body')
//add element to DOM
body.append(div)

//add event listener
div.on("click", ()=> {
    alert('Hello World')
})

//DEFINE chart elements
const months = [
'January',
'February',
'March',
'April',
'May',
'June',
];

const info = {
labels: months,
datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
}]
};

const configuration = {
type: 'line',
data: info,
options: {}
};

//RENDER/CREATE Chart
const myChart = new Chart(
document.getElementById('myChart'),
configuration
);

//CHALLENGE 2 --CREATING A BAR CHART

const labels = [
"2012",
'2013',
'2014',
'2015',
'2016',
'2017',
"2018"
];
const data = {
  labels: labels,
  datasets: [{
    label: 'How Much Money is left in my bank account',
    data: [4859, 1206, 91366, 41537, 79145, 68422, 22344],
    backgroundColor: [
      'rgba(235, 12, 49, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(121, 47, 156, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(235, 12, 49)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};


const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y'
  }
};

const barChart = new Chart (document.getElementById("barChart"),config);
