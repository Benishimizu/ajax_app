const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};




















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
    // XHR.open("POST", "/post", true);  //「posts」→「post」にするtestのため
    
                              XHR.responseType = "json";
                                //responseTypeプロパティを使用して、受け取るレスポンスのデータフォーマット（＝どのような形式のデータにするか）を指定するプロパティ
                                //レスポンスのデータを「JSON形式」で返して欲しいため、データフォーマットを「JSON」に指定
                                //JSONとは、JavaScriptをもとにして構成されたデータフォーマット
    XHR.send(formData); //send()メソッドとは、リクエストを送信するメソッド
  // });
  //「投稿ボタンがクリックされたこと」を認識するために、submit.addEventListener

  XHR.onload = () => {
    //onloadプロパティとは、リクエストの送信が成功したときに呼び出されるプロパティ
    // console.log(XHR.response);
    //サーバーからのレスポンスに関する情報が格納されたプロパティ
    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
      return null;
    };
            // // XHR.statusには、HTTPステータスコードが格納されます。
            // また、XHR.statusTextには、ステータスコードに応じたメッセージが格納されます。この格納されているメッセージについては、この後のカリキュラムで確認します。

            // return null;によってJavaScriptの処理から抜け出すことができます。
            // エラーが出た場合に、76行目以降に記述されている処理を行わないようにすることが目的です。

    const list = document.getElementById("list");

    const formText = document.getElementById("content");
      // リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
      // console.log(formText.value);  
    list.insertAdjacentHTML("afterend", buildHTML(XHR));
      //
              // const item = XHR.response.post;
              // const html = `
              //   <div class="post">
              //     <div class="post-date">
              //       投稿日時：${item.created_at}
              //     </div>
              //     <div class="post-content">
              //       ${item.content}
              //     </div>
              //   </div>`;
              //   list.insertAdjacentHTML("afterend", html);
      formText.value = "";
      // formTextのvalue属性に空の文字列を指定することで、フォームの中身をリセット
  };
});
};

 window.addEventListener('load', post);