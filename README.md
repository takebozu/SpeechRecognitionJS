# SpeechRecognitionJS
Speech recognition using the interface of the Web Speech API

## これは何
社内から「音声で画面のボタンを押下させたい。ただし、JavaScriptのみで。」という依頼をいただいたので、ささっと作ってみました。
デモ用なのでそんなにキレイに作っていません。

あと、1つの発話に対して、1つのcallbackを起動するのみです。複数の発話に対応していませんが、改造は難しくないと思います。

なお、2018/6/5現在、SpeechRecognitionは、Google Chromeでしか実装されていないようです。（Chrome on Macで動作確認済み）

## 使い方
1. SpeechRecognition.jsを静的リソース(Static Resource)に「SpeechRecognition」という名前で登録します。
1. SpeechRecognitionExample.vfpをVisualforceページとして登録します。
1. 当該Visualforceページを開いて、「撮影」と発話してみてください。コンソールログに「シャッターを切りました」と表示されます。

## 補足
VisualforceというのはSalesforce上で動作するマークアップ言語です。Salesforce周りの仕事をしているので、そこで動かせるサンプルとして作っています。