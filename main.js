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
const labels = [
'January',
'February',
'March',
'April',
'May',
'June',
];

const data = {
labels: labels,
datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
}]
};

const config = {
type: 'line',
data: data,
options: {}
};

//RENDER/CREATE Chart
const myChart = new Chart(
document.getElementById('myChart'),
config
);