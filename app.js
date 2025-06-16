let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turn0 = true;
    boxEnable();
    msgContainer.classList.add("hide");
    

};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    if (turn0===true){
        box.innerText = "O";
        turn0 = false;
    }else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true; 
    checkWinner();

})
});

const boxDisabled =()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const boxEnable =()=>{
    for(  let box of boxes ){
     box.disabled = false;
     box.innerText = "";

    }
};
const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisabled();
}

const checkWinner=()=>{
    for(let patterns of winPatterns) {
        let pos1value = boxes[patterns[0]].innerText;
        let pos2value = boxes[patterns[1]].innerText;
        let pos3value = boxes[patterns[2]].innerText;
        if(pos1value !== "" && pos2value !== "" && pos3value !== ""){
           if(pos1value === pos2value && pos2value === pos3value){
             console.log("winner",pos1value);
            showWinner(pos1value);
           
           }
        
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);