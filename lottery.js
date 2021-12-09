const sysLab = document.querySelector('label.system'),
    lab = document.querySelector('label.lottery'),
    userBtn = document.querySelector('.userBtn'),
    sysBtn = document.querySelector('.sysBtn'),
    cleanBtn = document.querySelector('.cleanBtn');

let randomNum; // 랜덤 번호를 생성
let lotto = []; // 유저의 번호 6개
let sys=[]; // 시스템의 번호 6개

function userNum() {
    lab.innerHTML+='<br>';
    for (let i = 0; i < 6; i++) {
        randomNum = Math.ceil(Math.random() * 45);

        if (lotto.includes(randomNum)) {
            i = i - 1;
        } else {
            lotto[i] = randomNum;
        }

    }
    lotto.sort((a, b) => a - b);

    // let n=0;
    // function printNum(){
    //     setTimeout(function(){
    //         if (n == 5) {
    //             lab.innerText += lotto[n]
    //         } else if(n<5) {
    //             lab.innerText += lotto[n] + ", ";
    //             printNum();
    //         }else if(n==6){
    //             compare();
    //         }
    //         n++;
    //     },100)
    // }

    for(let i=0;i<6;i++){
        if (i == 5) {
            lab.innerText += lotto[i]
            compare();
        } else if(i<5) {
            lab.innerText += lotto[i] + ", ";
    }
}
}

function sysNum(){
    sysLab.innerHTML="당첨번호 : ";
    for (let i = 0; i < 6; i++) {
        randomNum = Math.ceil(Math.random() * 45);

        if (sys.includes(randomNum)) {
            i = i - 1;
        } else {
            sys[i] = randomNum;
        }

    }
    sys.sort((a, b) => a - b);


    for(let i=0;i<6;i++){
        if (i == 5) {
            sysLab.innerText += sys[i]
        } else {
            sysLab.innerText += sys[i] + ", ";
        }
    }
}

function compare(){
    let correct = 0;
    for(let i=0;i<6;i++){   
            if(sys.includes(lotto[i])){
                correct++;
            }
    }
    if(correct==0){
        lab.innerText += ` [꽝!]`
    }else if(correct==1){
        lab.innerText += ` [겨우${correct}개 맞았습니다.]`
    }else if(correct==2){
        lab.innerText += ` [아까워요~ ${correct}개 맞았습니다.]`
    }else if(correct==3){
        lab.innerText += ` [오~${correct}개 맞았습니다!]`
    }else if(correct==4){
        lab.innerText += ` [대단하네요! ${correct}개 맞았습니다!]`
    }else if(correct==5){
        lab.innerText += ` [어떻게 하셨나요? ${correct}개 맞았습니다!]`
    }else if(correct==6){
        lab.innerText += ` [축하합니다! 로또를 샀으면 당첨이었을텐데ㅜㅜ ${correct}개 맞았습니다!]`
    }
    
}

function cleanAll(){
    lab.innerText="";
}

userBtn.addEventListener('click',userNum);
sysBtn.addEventListener('click',sysNum);
cleanBtn.addEventListener('click',cleanAll);
sysNum();