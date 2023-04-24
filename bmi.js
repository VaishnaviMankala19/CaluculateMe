function caluculatebmi()
{
    const height=document.getElementById("height").value/100;
    const weight=document.getElementById("weight").value;
    const bmi=weight/(height*height);
    const result=document.getElementById("result");
    result.innerHTML=bmi.toFixed(2);
}

const button=document.getElementById("calculate");
button.addEventListener("click",caluculatebmi);