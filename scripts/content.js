
// sleep 10 s
console.error('content.js: 開始執行');
console.log('content.js: 等待 5 秒');

let totalSecond = 0;


function getTitle(){
  console.error('DOMContentLoaded: 網頁已完成載入');
  // select all class = ytd-playlist-panel-video-renderer
  const articles = document.querySelectorAll("ytd-playlist-panel-video-renderer");
  for (let i = 0; i < articles.length; i++) {
    // select the class = badge-shape-wiz__text from the article
    const title = articles[i].querySelector("#video-title").textContent.trim();
    console.log(i+1, title);
    const timeText = articles[i].querySelector(".badge-shape-wiz__text").textContent.trim();
    console.log('影片時間是', timeText);
    // 播放完這個影片還需要多少時間
    time = timeText.split(':');

    let videoSecond = 0;
    for (let i = 0; i < time.length; i++) {
      videoSecond *= 60;
      videoSecond += parseInt(time[i]);
    }
    totalSecond += videoSecond;
    let hour = Math.floor(totalSecond / 3600);
    let minute = Math.floor((totalSecond % 3600) / 60);
    let second = totalSecond % 60;
    if(hour < 10) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;
    if(second < 10) second = '0' + second

    console.warn(i+1, ': 總共還需要', hour, '小時', minute, '分鐘', second, '秒');
    console.log("------")
    // 添加文字在 title 旁邊
    const newElement = document.createElement("span");
    newElement.textContent = `play in ${hour}:${minute}:${second}`;
    newElement.style.color = 'grey';
    // 設定 Font size 是 title 的 20%
    newElement.style.fontSize = '90%';
    articles[i].querySelector("#video-title").appendChild(newElement);

  }


}

setTimeout(getTitle, 5000);

