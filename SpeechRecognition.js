var speechRecog = new webkitSpeechRecognition();

/**
 * 指定されたワードを認識すると、コールバックが呼ばれる。
 * @param {string} 検出したいワード
 * @param {function} コールバック
 */
function startDetection(word, callback) {
	speechRecog.continuous = true;
    speechRecog.interimResults = false;
	speechRecog.lang = "ja-JP";
    speechRecog.onresult = function (event) {
    	for (var i = event.resultIndex; i < event.results.length; ++i) {
    		if (event.results[i].isFinal) {
	        	var heardWord =  event.results[i][0].transcript;
                if(heardWord == word) {
                    callback();
                } else {
                    console.log("対象ではない発話:" +　heardWord);
                }
        	}
		}
	}
    speechRecog.start();
}
    
/**
 * 検出を停止する。
 */
function stopDetection() {
    speechRecog.stop();
}