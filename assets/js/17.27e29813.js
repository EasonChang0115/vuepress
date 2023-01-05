(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{509:function(a,e,t){"use strict";t.r(e);var r=t(6),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("透過操作 Docker 指令，可以創造、執行 image 等。已經介紹過 Docker 發展的歷史了，這次就來好好的說明如何使用吧。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/XGbBvkN.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"docker-基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-基本概念"}},[a._v("#")]),a._v(" Docker 基本概念")]),a._v(" "),t("h3",{attrs:{id:"映像檔-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#映像檔-image"}},[a._v("#")]),a._v(" 映像檔 Image")]),a._v(" "),t("p",[a._v("Docker 映像檔是一個模板，是來產生容器實體。例如：一個映像檔裡可以包含一個完整的網頁服務、一個 MYSOL 資料庫服務、或是一個 Ubuntu 作業系統。\n透過 Image，我們可以快速的產生可以執行應用程式的容器。而 Docker 映像檔可以透過撰寫由命令行構成的 Dockerfile 輕鬆建立，或甚至可以從公開的地方下載已經做好的映像檔來使用。\n舉例來說，如果我今天想要一個 node.js 的執行環境跑我寫好的程式，我可以直接到上 DockerHub 找到相對應的 node.js 映像檔 ，而不需要自己想辦法打包一個執行環境。")]),a._v(" "),t("h3",{attrs:{id:"容器-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器-container"}},[a._v("#")]),a._v(" 容器 Container")]),a._v(" "),t("p",[a._v("容器是用映像檔建立出來的執行實例。它可以被啟動、開始、停止、刪除。每個容器都是相互隔離、保證安全的平台。\n可以把容器看做是一個執行的應用程式加上執行它的簡易版 Linux 環境（包括 root 使用者權限、程式空間、使用者空間和網路空間等）。\n另外要注意的是，Docker 映像檔是唯讀（read-only）的，而容器在啟動的時候會建立一層可以被修改的可寫層作為最上層，讓容器的功能可以再擴充。")]),a._v(" "),t("h3",{attrs:{id:"倉庫-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倉庫-repository"}},[a._v("#")]),a._v(" 倉庫 Repository")]),a._v(" "),t("p",[a._v("倉庫（Repository）是集中存放映像檔檔案的場所，也可以想像成存放蛋糕模具的大本營。倉庫註冊伺服器（Registry）上則存放著多個倉庫。\n最大的公開倉庫註冊伺服器是上面提到過的 Docker Hub，存放了數量龐大的映像檔供使用者下載，我們可以輕鬆在上面找到各式各樣現成實用的映像檔。\n而 Docker 倉庫註冊伺服器的概念就跟 Github 類似，你可以在上面建立多個倉庫，然後透過 push、pull 的方式上傳、存取。")]),a._v(" "),t("h2",{attrs:{id:"docker-基本指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-基本指令"}},[a._v("#")]),a._v(" Docker 基本指令")]),a._v(" "),t("h4",{attrs:{id:"列出當下所有-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出當下所有-images"}},[a._v("#")]),a._v(" 列出當下所有 images")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker images\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"列出當下所有執行的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出當下所有執行的容器"}},[a._v("#")]),a._v(" 列出當下所有執行的容器")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker container ls\n\n// 簡寫\ndocker ps\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h4",{attrs:{id:"列出當下所有容器-無論是否執行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出當下所有容器-無論是否執行"}},[a._v("#")]),a._v(" 列出當下所有容器(無論是否執行)")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker ps -a\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"執行某支-image-檔案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#執行某支-image-檔案"}},[a._v("#")]),a._v(" 執行某支 image 檔案")]),a._v(" "),t("p",[a._v("docker run [options] [image] [command]")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker container run --name <name> <image> ls /\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",[t("li",[a._v("name: container 執行的名稱")]),a._v(" "),t("li",[a._v("image: 想要執行的 image 名稱")]),a._v(" "),t("li",[a._v("ls /: 列出容器內容的所有檔案")])]),a._v(" "),t("ul",[t("li",[a._v("可以簡化成 "),t("code",[a._v("docker run")])]),a._v(" "),t("li",[a._v("如果 container 裡面沒有程序需要一直跑的話，執行完一次就會清空。")])]),a._v(" "),t("h4",{attrs:{id:"it-使用者互動模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#it-使用者互動模式"}},[a._v("#")]),a._v(" -it 使用者互動模式")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -it --name <name> <image> /bin/sh\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",[t("li",[a._v("-i: interactive mode, 讓操作者擁有互動模式")]),a._v(" "),t("li",[a._v("-t: terminal, 讓操作者可以使用終端機操作 intance")]),a._v(" "),t("li",[t("code",[a._v("/bin/sh")]),a._v(": 進入 Linux 的終端機指令。")])]),a._v(" "),t("ul",[t("li",[a._v("當離開之後，因為沒有持續在執行的程序，所以 container 又會清空。")])]),a._v(" "),t("h4",{attrs:{id:"daemon-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#daemon-模式"}},[a._v("#")]),a._v(" Daemon 模式")]),a._v(" "),t("p",[a._v("Docker 除了支援互動模式外，也可以直接在設計好的 docker 中，以 daemon 方式來執行 daemon mode，讓 container 可以持續在背景程序執行。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -d --name <name> <image> tail -f /dev/null\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",[t("li",[a._v("-d: 需要搭配帶入的指令或是 dockerfile 中的 CMD 或是 ENTRYPOINT 來啟動 intsance。")]),a._v(" "),t("li",[t("code",[a._v("tail -f /dev/null")]),a._v("：Linux 指令，持續監看 /dev/null 的資料夾檔案並輸出到 log。")])]),a._v(" "),t("p",[a._v("因為 tail 指令會持續執行間看程序，所以 container 在跑完指令後不會清空，服務會一直存在。")]),a._v(" "),t("h4",{attrs:{id:"進入到正在執行的-container-環境操作指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#進入到正在執行的-container-環境操作指令"}},[a._v("#")]),a._v(" 進入到正在執行的 container 環境操作指令")]),a._v(" "),t("p",[a._v("docker exec [container-id] [command]")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker exec -it <container-id> /bin/sh\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",[t("li",[a._v("exec: 進入到指定的容器執行指令操作")]),a._v(" "),t("li",[a._v("因為 "),t("code",[a._v("/bin/sh")]),a._v(" 是持續要跟 container 進行互動，所以要加上 -it，不然跑完一次指令就要在執行一次 exec。")])]),a._v(" "),t("h4",{attrs:{id:"停止-container-執行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止-container-執行"}},[a._v("#")]),a._v(" 停止 container 執行")]),a._v(" "),t("p",[a._v("docker stop [container-id]")]),a._v(" "),t("h4",{attrs:{id:"刪除-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刪除-container"}},[a._v("#")]),a._v(" 刪除 container")]),a._v(" "),t("p",[a._v("docker rm [container-id]")]),a._v(" "),t("h4",{attrs:{id:"刪除-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刪除-image"}},[a._v("#")]),a._v(" 刪除 image")]),a._v(" "),t("p",[a._v("docker rmi [image-name]")]),a._v(" "),t("h3",{attrs:{id:"簡單執行-nginx-環境練習"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#簡單執行-nginx-環境練習"}},[a._v("#")]),a._v(" 簡單執行 nginx 環境練習")]),a._v(" "),t("h6",{attrs:{id:"抓取-nginx-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抓取-nginx-image"}},[a._v("#")]),a._v(" 抓取 nginx image")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker pull nginx:latest\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h6",{attrs:{id:"開啟容器執行-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#開啟容器執行-image"}},[a._v("#")]),a._v(" 開啟容器執行 image")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -d -p 8081:80 --name tes-name nginx\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",[t("li",[a._v("-p: [external-port]:[internal-port]: 聯繫內部與外部網路的 port number。")]),a._v(" "),t("li",[a._v("-p: [external-port]:[internal-port]/udp: 使用 udp port。")]),a._v(" "),t("li",[a._v("-v: [external-folder-path]:[external-folder-path]: 掛載執行主機的目錄位置給 instance 使用。")])]),a._v(" "),t("p",[a._v("這樣就可以在 localhost:8081 網頁開啟 nginx 歡迎頁面囉。")])])}),[],!1,null,null,null);e.default=s.exports}}]);