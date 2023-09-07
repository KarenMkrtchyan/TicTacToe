const gameBoard = (()=>{
    "use strict";
    let board = [];
    
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
    const reset = document.querySelector("#reset");
    reset.addEventListener("click", ()=>resetBoard());
    const resetBoard = ()=>
    {
        for(let i =1; i<=3; i++){
            for(let j=1; j<=3; j++){
                getSquare(i,j).textContent ="";
            }
        }        
    };
   
    return {
        getSquare,
        resetBoard,
    };
})();


const game = (()=>{
    let currentPlayer= "x";
    (()=>{
        for(let i =1; i<=3; i++){
         for(let j=1; j<=3; j++){
             gameBoard.getSquare(i,j).addEventListener("click",   ()=>placeToken(i,j))
         }
        }
     })();
    const placeToken = (x, y) => {       
        if(gameBoard.getSquare(x,y).textContent === "")
         {
            console.log(currentPlayer);
            gameBoard.getSquare(x,y).textContent = currentPlayer;
            currentPlayer = currentPlayer ==="x" ? "o" : "x";
            console.log(isOver());
         } 
    }
    const displayWinner = (winner) =>{
        const winnerWindow = document.querySelector("#won");
        const winnerHeader = document.querySelector("#winner");
        const close = document.querySelector("#playAgain");
        if(winner !="draw"){
            winnerHeader.textContent = `The Winner is ${winner}`;
        }
        else{
        winnerHeader.textContent = `Draw`;
        }

        winnerWindow.showModal();
        close.addEventListener('click', ()=>{
            gameBoard.resetBoard();
            winnerWindow.close();
        });
    };

    const isOver = () => {
        //anyone won       
        for(let i =1; i<=3; i++){              
            if(gameBoard.getSquare(1,i).textContent !="" && gameBoard.getSquare(1,i).textContent===gameBoard.getSquare(2,i).textContent && gameBoard.getSquare(2,i).textContent===gameBoard.getSquare(3,i).textContent){
                displayWinner(gameBoard.getSquare(1,i).textContent)
                return true;
            }
            else if(gameBoard.getSquare(i,1).textContent !="" && gameBoard.getSquare(i,1).textContent===gameBoard.getSquare(i,2).textContent && gameBoard.getSquare(i,2).textContent===gameBoard.getSquare(i,3).textContent){
                displayWinner(gameBoard.getSquare(1,i).textContent)
                return true;
            }          
        }
        if(gameBoard.getSquare(1,1).textContent !="" && gameBoard.getSquare(1,1).textContent===gameBoard.getSquare(2,2).textContent && gameBoard.getSquare(2,2).textContent===gameBoard.getSquare(3,3).textContent){
            displayWinner(gameBoard.getSquare(2,2).textContent)
            return true;
        }
        else if(gameBoard.getSquare(2,2).textContent !="" && gameBoard.getSquare(1,3).textContent===gameBoard.getSquare(2,2).textContent && gameBoard.getSquare(2,2).textContent===gameBoard.getSquare(3,1).textContent){
            displayWinner(gameBoard.getSquare(2,2).textContent)
            return true;
        }
        //draw
        for(let i =1; i<=3; i++){
            for(let j=1; j<=3; j++){
                if(gameBoard.getSquare(i,j).textContent === ""){
                    return false;
                }
            }
            
        }
        displayWinner("draw")
        return true;
    }
})();


