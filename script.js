const container = document.getElementById("container");

var matrix = Array(16).fill(Array(16));
var lines = [];
for(let i = 0;i<16;i++){
    const liner = document.createElement("div");
    liner.classList.add("liner");
    container.appendChild(liner);
    lines[i] = liner;
}

// i são as linhas
// j são os blocos


for(let i = 0;i<16;i++){
    for(let j = 0;j<16;j++){
        matrix[i][j] = document.createElement('div');
        matrix[i][j].classList.add('flexdraw');
        lines[i].appendChild(matrix[i][j]);
    }
    
}