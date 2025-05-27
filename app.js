let choices=document.querySelectorAll(".choice");
let userscore=0;
let compscore=0;
let msg=document.querySelector(".msg");
let userscoretext=document.querySelector(".userScore");
let compscoretext=document.querySelector(".compScore");
let last=document.querySelector(".last");
let footer=document.querySelector(".footer");
let winner=document.querySelector(".finalwinner");
let winners=document.querySelector(".winners");

const finalwinneruser=(userscore)=>{
    winners.classList.remove("hide");
   winner.innerText="Congrats Adritah! You have beaten Hemadry as always!😍";
   
}

const finalwinnercomp=(compscore)=>{
    winners.classList.remove("hide");
    winner.innerText="Sorry! Hemadry have won by miracle!🙂";
}
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
 
const gamedraw=()=>{
    last.innerText="Game is draw🤝";
    footer.style.backgroundColor="White";
}

const showwinner=(userwin,userchoice,compchoice)=>{
if(userwin)
{
    userscore++;
    if(userscore===5)
    {
        finalwinneruser(userscore);
    }
    else{
    last.innerText=`Adrita's ${userchoice} beats Hemadry's ${compchoice}😘`;
    userscoretext.innerText=userscore;
    footer.style.backgroundColor="Green";
    }
    
}
else{
    compscore++;
    if(compscore===5)
    {
        finalwinnercomp(compscore);
    }
    else{
    last.innerText=`Hemadry's ${compchoice} beats Adrita's ${userchoice}😚`;
    compscoretext.innerText=compscore;
    footer.style.backgroundColor="Red";
    }
   
}
};


const playgame=(userchoice)=>{
    let compchoice=gencompchoice();
    if(userchoice===compchoice)
    {
        gamedraw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
         userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    });
});







