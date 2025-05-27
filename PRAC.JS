let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let userscorenum=document.querySelector(".userscore");
let compscorenum=document.querySelector(".compscore");
let lmsg=document.querySelector(".lmsg");
let msgcontainer=document.querySelector(".msgcontainer");
let button=document.querySelector("button")

let userscore=0;
let compscore=0;
let gameover=false;

const animateScore = (element) => {
    element.classList.add("bump");
    setTimeout(() => {
        element.classList.remove("bump");
    }, 200);
};

const finalresultu=(userscore)=>{
   msgcontainer.classList.remove("hide");
   msg.innerText="Congratulations! Adrita you have beaten Hemadry as always 😍";
  confetti();
};

const finalresultc=(compscore)=>{
   msgcontainer.classList.remove("hide");
   msg.innerText="Miracle!!! Hemadry won!!😘";
   confetti();
};

const disablechoices=()=>{
gameover=true;
};

const enablechoices=()=>{
    gameover=false;
};

const newgame=()=>{
   msgcontainer.classList.add("hide");
   userscore=0;
   compscore=0;
   userscorenum.innerText=0;
   compscorenum.innerText=0;
   lmsg.innerText="Tap the circles to start play";
   enablechoices();
};

const gencompchoice=()=>{
const options=["rock","paper","scissors"];
const randidx=Math.floor(Math.random()*3);
return options[randidx];
}

const gamedraw=()=>{
    lmsg.innerText="Draw🤝";
}

const showwinner=(userwin,userchoice,compchoice)=>{
   
    if(userwin)
    {
        userscore++;
        userscorenum.innerText=userscore;
        lmsg.innerText=`Adrita's ${userchoice} smashed Hemadry's ${compchoice}`;
       animateScore(userscorenum);
        if(userscore===5)
    {
        disablechoices();
        finalresultu(userscore);
    }
    }
    else{
        compscore++;
        compscorenum.innerText=compscore;
        lmsg.innerText=`Hemadry's ${compchoice} crushes Adrita's ${userchoice}`;
        animateScore(compscorenum);
        if(compscore===5)
    {
         disablechoices();
        finalresultc(compchoice);
    }
    }
};

const playgame=(userchoice)=>{
   let compchoice=gencompchoice();
   if(userchoice===compchoice)
   {
    gamedraw();
   }
   else {
    let userwin=true;
    if(userchoice==="rock"){
     userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper")
    {
        userwin=compchoice==="scissors"?false:true;
    }
    else {
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     if(gameover)
     {
        return;
     }
     let userchoice=choice.getAttribute("id");
     playgame(userchoice);
    });
});

button.addEventListener("click",newgame);