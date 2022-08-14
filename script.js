var currentcolor = 'black';

function changecurrenctcolor(color){
    currentcolor = color;
    const current = document.getElementById("current");
    current.setAttribute('style',"background-color:"+color+";");
}

function getcolor(){
    return currentcolor;
}
function Draw(number){

    if(!isNaN(number)){
        const numbo = parseInt(number);
        if (numbo >= 0 && numbo <= 100){
            const container = document.getElementById("container");
            container.innerHTML = "";

            var matrix = Array(numbo).fill(Array(numbo));
            var lines = [];
            for(let i = 0;i<numbo;i++){
                const liner = document.createElement("div");
                liner.classList.add("liner");
                container.appendChild(liner);
                lines[i] = liner;
            }

            // i são as linhas
            // j são os blocos

            for(let i = 0;i<numbo;i++){
                for(let j = 0;j<numbo;j++){
                    matrix[i][j] = document.createElement('div');
                    matrix[i][j].classList.add('flexdraw');
                    matrix[i][j].onmouseover = function(){
                        this.style.cssText += "background-color:"+getcolor()+";";
                    };
                    lines[i].appendChild(matrix[i][j]);
                }
                
            }
        }
    }
}