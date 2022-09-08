const countString = document.getElementById('count-show');
let count = parseInt(countString.innerText);

document.getElementById('btn-increase').addEventListener('click',function(){
    ++count;
    displayToLS(count);
    localStorage.setItem('count',count);
})
document.getElementById('btn-decrease').addEventListener('click',function(){
    --count;
    displayToLS(count);
    localStorage.setItem('count',count);
})
const displayToLS = (count) =>{
    countString.innerText = count;
}
const getValueFromLS = () =>{
    const count = localStorage.getItem('count');
    displayToLS(count);
}
getValueFromLS();