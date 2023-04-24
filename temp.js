function calculate()
{
    const celcius=document.getElementById("celcius").value;
    const result=((9/5)*celcius)+32;
    const res=document.getElementById("result");
    res.innerHTML=result;
}
const button=document.getElementById("calculate");
button.addEventListener("click",calculate);