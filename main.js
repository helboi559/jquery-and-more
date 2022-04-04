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

//create a chart

let labels = ['January',
    'February',
    'March',
    'April',
    'May',
    'June'];

let  data = {
    labels:labels,
    dataSets: [{
        label:"my first dataset",
        backgroundColor: "rgb(255,99,132)",
        borderColor: "rgb(255,99,132)",
        data: [0,10,5,2,20,30,45]
    }]
};  

const config = {
    type:"line",
    data:data,
    options: {}
};

