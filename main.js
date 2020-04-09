const element = document.getElementById('textArea');
element.innerHTML = '未連線';
const sendText = document.getElementById('sendText');
const sendBtn = document.getElementById('sendBtn');

//使用 WebSocket 的網址向 Server 開啟連結

let ws = new WebSocket('ws://testline6.herokuapp.com/:5000')
//testline6.herokuapp.com
ws.onopen = () => {
    console.log('open connection')
}

//關閉後執行的動作，指定一個 function 會在連結中斷後執行
ws.onclose = () => {
    console.log('close connection')
}

ws.onmessage = event => {
    element.innerHTML = event.data;
}

sendBtn.onclick = ()=>{
    if(sendText.value.length<1) {
        return;
    }
    ws.send('\n'+sendText.value);
}
