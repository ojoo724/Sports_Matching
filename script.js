/* 대진표 생성  */
function onMakeMatch(event){
    // 01. 현재 체크된 회원 가져오기
    let mtcMbr = new Array();
    const mbrList = document.getElementsByClassName('mbr');
    
    for(let i = 0; i < mbrList.length; i++){
        if(mbrList[i].checked == true){
            mtcMbr.push(mbrList[i].value)
        }
    }

    if(mtcMbr.length < 4){
        alert("4명 이상 선택해 주세요;")
        return
    }

    // 02. 랜덤으로 배열 섞기
    shuffle(mtcMbr);
    let gameCnt = document.getElementById('gameCnt').value;
    gameCnt = findFour(gameCnt*mtcMbr.length);

    // 03. 인당 게임수 만큼  배열생성
    const gameList = [];
    let index = 0;
    for(let i = 0; i < gameCnt; i++){
        if(index >= mtcMbr.length){
            index = 0;
        }
        gameList.push(mtcMbr[index])
        index++;
    }

    // 04. 랜덤으로 대진 생성
    shuffle(gameList);
    console.log(gameList)
    const listCnt = gameList.length;
    for(let i = 0; i < listCnt/4; i++){
        let game = [];
        if(game.length < 4){
            for(let j = 0; j < 4; j++){
                let chk = true;
                while(chk){
                    if (!game.includes(gameList[0])) {
                        game.push(gameList[0]);
                        console.log(gameList[0])
                        gameList.shift();
                        chk = false;
                    }else{
                        shuffle(gameList);
                    }
                }
            }
        }
        console.log((i+1)+"번째 게임: "+game[0]+","+game[1]+" VS "+game[2]+","+game[3])
    }
    console.log("-----------");

}

/* 배열 섞기 */
function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}

/* 회원 추가 */

/* 회원 삭제 */

/* 선택한 회원수보다 크거나 같은 4의 배수 찾기 */
function findFour(number) {
    // 주어진 숫자보다 크거나 같은 4의 배수 찾기
    let multipleOfFour = Math.ceil(number / 4) * 4;
    return multipleOfFour;
  }