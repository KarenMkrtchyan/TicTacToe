const gameBoard = (()=>{
    "use strict"
    let board = [];
    let currentPlayer= "x";
    const squares = { 
        tl : document.querySelector('#e1'),
        tm : document.querySelector('#e2'),
        tr : document.querySelector('#e3'),
        ml : document.querySelector('#e4'),
        mm : document.querySelector('#e5'),
        mr : document.querySelector('#e6'),
        bl : document.querySelector('#e7'),
        bm : document.querySelector('#e8'),
        br : document.querySelector('#e9'),
    };
    
    const getSquare = (x, y) =>{
        let name = '';
        if(x===1) name+="t";
        else if (x===2) name+="m"
        else if (x===3)  name+="b"
        else {
            console.log("X pox out of bound")
            return ""
        }
        if(y===1) name+="l"
        else if(y===2) name+="m"
        else if(y===3) name+="r"
        else {
            console.log("Y pox out of bound")
            return ""
        }
        return squares[name];
    };
    const placeToken = (x, y) => {
       
        if(getSquare(x,y).textContent == "")
         {
            console.log(currentPlayer);
            getSquare(x,y).textContent = currentPlayer;
            currentPlayer = currentPlayer==="x" ? "o" : "x";
         } 
    }
    const resetBoard = (()=>
    {
        const reset = document.querySelector("#reset");
        reset.addEventListener('click', ()=>{
         for(let i =1; i<=3; i++){
             for(let j=1; j<=3; j++){
                 getSquare(i,j).textContent ="";
             }
            }
        })
    })();
    (()=>{
       for(let i =1; i<=3; i++){
        for(let j=1; j<=3; j++){
            getSquare(i,j).addEventListener("click",   ()=>placeToken(i,j))
        }
       }
    })();

    return {
        squares,
        getSquare,
    };
})();
