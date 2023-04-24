function calculate()
{
    const celcius=parseFloat(document.getElementById("celcius").value);
    const result=((9/5)*celcius)+32;
    const result2=celcius+273.15;
    const res=document.getElementById("result");
    res.innerHTML= "Farenheit: "+result;
    const r=document.getElementById("result2");
    r.innerHTML="Kelvin: "+result2;
}
const button=document.getElementById("calculate");
button.addEventListener("click",calculate);
