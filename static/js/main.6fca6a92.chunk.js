(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bill","image":"../media/bill.gif","clicked":false},{"id":2,"name":"Bobby","image":"./media/bobby.gif","clicked":false},{"id":3,"name":"Boomhauer","image":"./media/boomhauer.gif","clicked":false},{"id":4,"name":"Cotton","image":"./media/cotton.gif","clicked":false},{"id":5,"name":"Dale","image":"./media/dale.gif","clicked":false},{"id":6,"name":"Hank","image":"../media/hank.gif","clicked":false},{"id":7,"name":"Kahn","image":"../media/kahn.gif","clicked":false},{"id":8,"name":"LadyBird","image":"../media/ladybird.gif","clicked":false},{"id":9,"name":"Luanne","image":"../media/luanne.gif","clicked":false},{"id":10,"name":"Nancy","image":"../media/nancy.gif","clicked":false},{"id":11,"name":"Peggy","image":"../media/peggy.gif","clicked":false},{"id":12,"name":"John Redcorn","image":"../media/redcorn.gif","clicked":false}]')},,,,,,,,,,,,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var i=c(0),t=c(1),n=c.n(t),r=c(5),s=c.n(r),l=c(2),o=c(6),d=c(7),m=c(9),h=c(8);c(15);var g=function(e){return Object(i.jsx)("div",{onClick:function(){return e.clickCharacter(e.id)},className:"card col-6-md",children:Object(i.jsx)("div",{className:"img-thumbnail w-25",id:e.id,children:Object(i.jsx)("img",{alt:e.name,src:e.image})})})};c(16);var u=function(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsx)("ul",{className:"navbar-nav nav-fill w-100",children:Object(i.jsxs)("li",{className:"score",children:["Correct: ",e.score," || High Score: ",e.highScore]})})})})};c(17);var f=function(){return Object(i.jsx)("div",{className:"jumbotron",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"display-4",children:"King of the Click"}),Object(i.jsx)("p",{className:"lead",children:"Getting to know the residents of Heimclick county, Texas! Make sure you only talk to them once!"})]})})},j=c(3);c(18);var b=function(e){return Object(i.jsx)("div",{className:"wrapper",children:e.children})},k=function(e){Object(m.a)(c,e);var a=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var i=arguments.length,t=new Array(i),n=0;n<i;n++)t[n]=arguments[n];return(e=a.call.apply(a,[this].concat(t))).state={characters:j,score:0,highScore:0},e.clickCharacter=function(a){console.log(j);if(!0===e.state.characters.find((function(e){return e.id===a})).clicked)return j.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{clicked:!1})})),e.setState({score:0}),void(e.state.score>e.state.highScore&&e.setState({highScore:e.state.score}));var c,i=e.state.characters.map((function(e){return e.id===a?Object(l.a)(Object(l.a)({},e),{},{clicked:!0}):e}));e.setState({characters:(c=i,c.concat().sort((function(){return Math.random()-.5}))),score:e.state.score+1}),console.log(e.state.score)},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this;return console.log("render"),Object(i.jsxs)(b,{children:[Object(i.jsx)(u,{score:this.state.score,highScore:this.state.highScore}),Object(i.jsx)(f,{}),this.state.characters.map((function(a){return Object(i.jsx)(g,{id:a.id,name:a.name,image:a.image,clicked:a.clicked,clickCharacter:e.clickCharacter},a.id)})),Object(i.jsx)("audio",{className:"audio-element",children:Object(i.jsx)("source",{src:"./media/KingOfTheHill.mp3"})})]})}}]),c}(t.Component),O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(a){var c=a.getCLS,i=a.getFID,t=a.getFCP,n=a.getLCP,r=a.getTTFB;c(e),i(e),t(e),n(e),r(e)}))};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.6fca6a92.chunk.js.map