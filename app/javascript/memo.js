function post (){
  //リクエストを送信する処理
  // console.log("イベント発火");
  const submit = document.getElementById("submit");
  // submit.addEventListener("click", () => {
    // console.log("イベント発火");
  submit.addEventListener("click", (e) => {

      e.preventDefault();  
      // addEventListener第二引数の関数の引数に指定しているeについて説明します。
      // eはイベントオブジェクトといい、イベント発生時の情報を持ったオブジェクトです。
      // 今回だと、「投稿ボタンをクリックした」という情報を持ったオブジェクトということになります。
      // なお、()のeはどんな文字列を指定してもOKです。慣例的にeventの頭文字eが多く用いられます。
      // 今回、preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化しています。
      // 「投稿ボタンをクリックした」という現象を無効化するのは、クリックした直後にブラウザからリクエストが送信されることを防ぎたいからです。
    const form = document.getElementById("form"); //getElementByIdメソッドを用いて、フォームの要素を取得します。
    const formData = new FormData(form); //FormDataオブジェクトを使って、フォームの値を取得します。
    const XHR = new XMLHttpRequest(); //非同期通信を行うためにXMLHttpRequestオブジェクト
    XHR.open("POST", "/posts", true);//openメソッドを用いるときは、XHR.open("POST", "/posts", true);のように表記します。
                              //    第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをtrueかfalseで記述します。
    XHR.responseType = "json";
                                //responseTypeプロパティを使用して、受け取るレスポンスのデータフォーマット（＝どのような形式のデータにするか）を指定するプロパティ
                                //レスポンスのデータを「JSON形式」で返して欲しいため、データフォーマットを「JSON」に指定
                                //JSONとは、JavaScriptをもとにして構成されたデータフォーマット
    XHR.send(formData); //send()メソッドとは、リクエストを送信するメソッド
  });
  //「投稿ボタンがクリックされたこと」を認識するために、submit.addEventListener
 };
 
 window.addEventListener('load', post);