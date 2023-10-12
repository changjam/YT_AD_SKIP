window.onload = function() {
    setInterval(()=>{
        if(isWatching()){
            if(!document.querySelector('#tips')){
                let tips = document.createElement('div');
                tips.id = 'tips';
                tips.style = 'color: white;line-height: 22px;text-align: center; font-weight: 700;';
                tips.innerHTML = `AD-SKIP <br> 啟動中`;
                document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls").appendChild(tips);
            }
            
            let skip_btn = document.querySelector('.ytp-ad-skip-button-slot button');
            if(skip_btn){
                skip_btn.click();
                console.log("skip ad");
            }else
                console.log("not found");
        }
    },1000)
}

function isWatching(){
    return document.URL.includes("youtube.com/watch")
}