document.querySelector("#btn").onclick = function(){
    const input = document.querySelector("#input");
    const reversed_input = document.querySelector("#reversed_input");
    const text_field = document.querySelector("#txtfield").value;
    var inputArr = Array.from((String)(text_field).trim());

    if((String)(text_field).trim() != ""){
        for(let i=0, f=inputArr.length-1; i<inputArr.length/2; i++, f--){
            a = inputArr[f];
            b = inputArr[i];
            inputArr[i] = a;
            inputArr[f] = b;
        }
        input.innerText = (String)(text_field).charAt(0).toUpperCase() + (String)(text_field).slice(1);
        reversed_input.innerText = inputArr.join("").charAt(0).toUpperCase() + (String)(inputArr.join("")).slice(1);
    }
}