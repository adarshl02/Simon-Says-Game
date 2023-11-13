let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;

let name=prompt("Please enter your name : ");

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let startb=document.querySelector(".startb");
startb.addEventListener("click",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    //random choose
    let ranIdx=Math.floor(Math.random()*4);
    let randColor=btns[ranIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    
     gameSeq.push(randColor);
     console.log(gameSeq);
    gameFlash(randbtn);       // through system
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            if(level==10){
                h3.innerHTML=`CONGRATS !! you reached 10 levels. Wait for 10 sec. After 10sec ,game will continue`;
                setTimeout(levelUp,10000);
            }
                 else if(level==13){
                h3.innerHTML=`CONGRATS !! you reached 13 levels. Wait for 20 sec. After 20sec ,game will continue`;
                setTimeout(levelUp,20000);
            }
                   else if(level==14){
                h3.innerHTML=`CONGRATS !! you reached 14 levels. Wait for 30 sec. After 10sec ,game will continue`;
                setTimeout(levelUp,30000);
            }
           else{
            h3.innerHTML=`ALERTS`;
            setTimeout(levelUp,300);
           }
        }
    }else{
        player();
        h2.innerHTML=`Game Over !<br> ${name} . Your score is  <b>${level-1}</b> <br>Press any key to start. `;
        document.querySelector("body").style.backgroundColor="red";   
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";   
        },150);
        reset();
    }
}

function btnpress(){
   // console.log(this);
    let btn=this;
    userFlash(btn);          //through user
    click();
     userColor=btn.getAttribute("id");
     userSeq.push(userColor);

     checkAns(userSeq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
    btn.addEventListener("click",function(){
        // let p=document.querySelector("p");
         let randomColor=getRandomColor();
       //  p.innerText=randomColor;
     
         let div=document.querySelector(".btn-container");
         div.style.backgroundColor=randomColor;
         console.log("color updated");
     })
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

let butt=document.querySelector(".chge");

butt.addEventListener("click",function(){
   // let p=document.querySelector("p");
    let randomColor=getRandomColor();
  //  p.innerText=randomColor;

    let div=document.querySelector("body");
    div.style.backgroundColor=randomColor;
    console.log("color updated");
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`
    return color;
}

function player(){
    let audio=new Audio("wrong.mp3");
    audio.play();
}
function click(){
    let audio=new Audio("click.wav");
    audio.play();
}

