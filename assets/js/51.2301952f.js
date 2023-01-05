(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{544:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("沒想到第二個禮拜這麼快就來了，而且題目老實說拿到還是沒什麼頭緒。新接龍，感覺有點挑戰，實務上也很少碰到拖曳的功能，既然這麼有趣那就來挑戰一下巴。順編寫一下我的開發思路給各位參考，有不好的地方請多多指教喔。")]),t._v(" "),a("h2",{attrs:{id:"新接龍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新接龍"}},[t._v("#")]),t._v(" 新接龍")]),t._v(" "),a("p",[t._v("題目："),a("a",{attrs:{href:"https://challenge.thef2e.com/news/13?fbclid=IwAR3upYshLfJAPszjwh9kJCmwkc1QjrD5Hq09P-cSMVxFjRzib2rR08zh0AU",target:"_blank",rel:"noopener noreferrer"}},[t._v("新接龍"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"分析規劃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析規劃"}},[t._v("#")]),t._v(" 分析規劃")]),t._v(" "),a("p",[t._v("首先，我們先來看看題目的要求：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%96%B0%E6%8E%A5%E9%BE%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("規則"),a("OutboundLink")],1),t._v("跟以前玩的新接龍一模一樣。")]),t._v(" "),a("li",[t._v("要有上一步的功能。")]),t._v(" "),a("li",[t._v("計時遊玩時間。")])]),t._v(" "),a("h3",{attrs:{id:"思考時間-拖曳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考時間-拖曳"}},[t._v("#")]),t._v(" 思考時間 - 拖曳")]),t._v(" "),a("p",[t._v("新接龍最主要的就是要拖曳牌組，其他功能老實說都是不是最主要的技術。拖曳的規則做出來，其他功能包含上一步、計時都不是太複雜。")]),t._v(" "),a("p",[t._v("先來看看牌在拖曳的時候發生什麼事：\n"),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/rcFGofJk-Ec",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("p",[t._v("到看牌可以拖到哪邊 ?")]),t._v(" "),a("ol",[a("li",[t._v("目標的框上。")]),t._v(" "),a("li",[t._v("拖到牌上，注意可以拖到牌上喔。")]),t._v(" "),a("li",[t._v("可以整組牌拖曳。")])]),t._v(" "),a("p",[t._v("代表說，牌本身也是拖曳的目標，所以牌的資料設計就不能只是單純的花色和數字了，要加上是否有其他牌在自己身上。")]),t._v(" "),a("p",[t._v("所以採用這樣的設計：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"diamond_4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"color"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flower"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"diamond"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fixed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"childElement"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("id 直接給花色和數字的字串，fixed 代表這個牌是否可以拖動。 childElement 就是本身是否有拖動過來的牌。(可以預想到這會是個遞迴)")]),t._v(" "),a("ul",[a("li",[t._v("注意: 每張牌只能存一個物件，也就是一張牌。所以在拖曳規則上要加上若 childElement 的長度大於 0 ，就拖曳失敗。")])]),t._v(" "),a("h3",{attrs:{id:"思考時間-亂數牌組"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考時間-亂數牌組"}},[t._v("#")]),t._v(" 思考時間 - 亂數牌組")]),t._v(" "),a("p",[t._v("之前有看到大神給出了亂數牌組的"),a("a",{attrs:{href:"https://hsiangfeng.github.io/javascript/20190712/1140639545/?fbclid=IwAR3Aq3a5XRJ0PivnlIchSVZypUvYujxBOS8OivyVHUgEWBQ5YRmVI2o_VSk",target:"_blank",rel:"noopener noreferrer"}},[t._v("思路"),a("OutboundLink")],1),t._v("，這邊在補充一下，先準備好 52 張牌的陣列，隨機抽走 7 張 * 4，6張 * 4，組成 4 + 4 共 8組陣列，每次抽走就會剩下，再從剩下的抽走就不會有重複的問題。")]),t._v(" "),a("p",[t._v("這邊寫了個小程式大家可以參考。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cards "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 共 52 張牌")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'card'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" targetArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  two"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  three"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  four"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  five"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  six"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  seven"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  eight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先來抽 7 張的牌組陣列 做 4 遍")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 從目前長度取隨機取得要抽的牌   ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" targetCardIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放入目標陣列   ")]),t._v("\n  targetArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("targetCardIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿掉以抽走的牌")]),t._v("\n  cards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetCardIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先來抽 6 張的牌組陣列 做 4 遍")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 從目前長度取隨機取得要抽的牌   ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" targetCardIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放入目標陣列   ")]),t._v("\n  targetArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("targetCardIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿掉以抽走的牌")]),t._v("\n  cards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetCardIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br")])]),a("ul",[a("li",[t._v("裡面提到拖曳的功能很棒，之前在寫拖曳互動的時候也是參考相關文章。")])]),t._v(" "),a("h2",{attrs:{id:"採用設計圖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#採用設計圖"}},[t._v("#")]),t._v(" 採用設計圖")]),t._v(" "),a("p",[t._v("第二周，看到很多很棒我很喜歡的設計圖，挑來挑去就採用小丑帽的設計，真的蠻喜歡那頂帽子的。("),a("a",{attrs:{href:"https://xd.adobe.com/spec/149c4538-f478-4557-4660-b489de0f59ec-62ad/grid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("設計圖"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("h2",{attrs:{id:"採用的技術或套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#採用的技術或套件"}},[t._v("#")]),t._v(" 採用的技術或套件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("vue-cli3(vue + vuex)")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue drag-and-drop"),a("OutboundLink")],1),t._v(": 下班時間真的不多。所以就直接用這個很多顆星星的拖曳套件囉，基本上都有符合我的需求，也順便練習看文件。")])])]),t._v(" "),a("h2",{attrs:{id:"問題"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#問題"}},[t._v("#")]),t._v(" 問題")]),t._v(" "),a("ol",[a("li",[t._v("要不要做提示：這問題我想了兩天，就花點時間補上吧。畢竟要弄成完整的遊戲成就感也比較大。")]),t._v(" "),a("li",[t._v("RWD：這周的題目好像不太適合弄成行動版的，再看看吧。")])]),t._v(" "),a("h2",{attrs:{id:"作品以及原始碼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作品以及原始碼"}},[t._v("#")]),t._v(" 作品以及原始碼")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://easonchang0115.github.io/TheF2E_Week2_FreeCell/dist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("作品"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EasonChang0115/TheF2E_Week2_FreeCell",target:"_blank",rel:"noopener noreferrer"}},[t._v("原始碼"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);