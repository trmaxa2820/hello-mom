const buttonNode = document.querySelector("button");
const giveFlowersNode = document.querySelector('.giveFlowers');
const audioNode = document.querySelector('audio');

buttonNode.addEventListener('click',function() {
    audioNode.play();
    giveFlowersNode.replaceChildren(new Array());
    
    const stopBtnNode = document.createElement('button');
    stopBtnNode.innerHTML = 'Выключить музыку';
    stopBtnNode.addEventListener('click',function(){
        audioNode.pause();
        audioNode.currentTime = 0;
        giveFlowersNode.replaceChildren(new Array());
    });
    

    giveFlowersNode.append(stopBtnNode);
    giveFlowersNode.append(document.createElement('br'));

    const imgNode = document.createElement('img');
    imgNode.src = 'https://mobimg.b-cdn.net/v3/fetch/c4/c4d7365381ebf7f0a5505ff9b2d39fec.jpeg?w=1470&r=0.5625';
    imgNode.alt = 'image loading';
    imgNode.style = 'width: 100%;';

    giveFlowersNode.append(imgNode);
});