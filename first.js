let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msgcontainer");
let newbtn=document.querySelector(".newbtn");
let resetbtn=document.querySelector(".resetbtn");

let turn0=true;
let count=0;

const winpatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

const reset=()=>{
    enableboxes();
    msgcontainer.classList.add("hide");
    turn0=true;
    count=0;
}

const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const disableboxes=()=>{
    for(let box of boxes)
    {
box.disabled=true;
    }

}

const showwinner=(pos1)=>{
    msgcontainer.classList.remove("hide");
    msg.innerText=`Congratulations! Winner is ${pos1}😘`;
    disableboxes();
}

const gamedraw=()=>{
     msgcontainer.classList.remove("hide");
     msg.innerText="The Game is Drawn🤝";
     disableboxes();
}

const checkwinner=()=>{
for(let pattern of winpatterns)
{
let pos1=boxes[pattern[0]].innerText;
 
let pos2=boxes[pattern[1]].innerText;
 
let pos3=boxes[pattern[2]].innerText;


if(pos1!="" && pos2!="" && pos3!="")
{
    if(pos1===pos2 && pos2===pos3)
    {
     showwinner(pos1);
     return true;
    }
}
}
return false;
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked!");
        if(turn0)
        {
            box.innerText="A❤️";
            turn0=false;
        }
        else{
            box.innerText="H💀";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner)
        {
            gamedraw();
        }

    });
});

resetbtn.addEventListener("click",reset);
newbtn.addEventListener("click",reset);