
document.getElementById("parseBtn").onclick = function(){
    
    let value = document.getElementById("string").value;
    value='['+value+']';
   
    let divTable = document.getElementById(`table`);

    let obj = JSON.parse(value);
   

    for (let i = 0; i < obj.length; i++){
        let divRowHeader = document.createElement(`div`);
        divRowHeader.setAttribute(`class`, `rowHeader`);
        divTable.appendChild(divRowHeader);

        for (key in obj[i]){

            let elDiv = document.createElement(`div`);
            elDiv.setAttribute(`class`, `element`);
            elDiv.innerHTML = obj[i][key];
            divRowHeader.appendChild(elDiv);
        }
    }
};






