document.querySelector("#btn").onclick = function(){
    const reversed = document.querySelector('#reversed');
    const input = document.querySelector("#txtfield").value;
    var inputArr = Array.from((String)(input).trim());

    if((String)(input).trim() != ""){
        for(let i=0, f=inputArr.length-1; i<inputArr.length/2; i++, f--){
            a = inputArr[f];
            b = inputArr[i];
            inputArr[i] = a;
            inputArr[f] = b;
        }
        reversed.innerText = (String)(input).charAt(0).toUpperCase() + (String)(input).slice(1) + "\n ↓ \n" 
        + inputArr.join("").charAt(0).toUpperCase() + (String)(inputArr.join("")).slice(1);
    }
}