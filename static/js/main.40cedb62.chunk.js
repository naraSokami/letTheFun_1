(this.webpackJsonptest_4=this.webpackJsonptest_4||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(7),i=s.n(r),a=(s(18),s(12)),l=s(10),o=s(8),h=s(3),j=s(13),d=s(9),u=s(6),b=(s(19),s(0)),O=function(e){return Object(b.jsxs)("div",{className:"Article",children:[Object(b.jsx)("div",{className:"img",children:Object(b.jsx)("img",{src:e.src,alt:"erreur au chargement de l'image"})}),Object(b.jsxs)("div",{className:"rect",children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("p",{className:"desc",children:e.desc}),Object(b.jsxs)("button",{className:"price",id:"_"+e.id,onClick:e.handleClick,children:[e.price," $"]})]})]})};var p=function(e){return Object(b.jsxs)("nav",{children:[Object(b.jsx)("a",{className:"logo",children:"Logo"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"",children:["Shop\xa0\xa0\xa0",Object(b.jsx)("i",{class:"fas fa-store"})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"",children:["Contact\xa0\xa0\xa0",Object(b.jsx)("i",{class:"fas fa-file-signature"})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"",children:["User\xa0\xa0\xa0",Object(b.jsx)("i",{class:"fas fa-user"})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"",children:["Buy\xa0\xa0\xa0",Object(b.jsx)("i",{class:"fas fa-shopping-cart"})]})}),Object(b.jsxs)("li",{className:"cart",children:[e.cart," $"]}),Object(b.jsx)("li",{className:"counter",children:e.counter})]})]})},x=s(11);var f=function(e){var t=Object(c.useState)("nonExpanded"),s=Object(x.a)(t,2),n=s[0],r=s[1];return Object(b.jsxs)("div",{className:"chosenArticles "+n,onClick:function(e){console.log(e),e.isConnected=!1,e.stopPropagation(),r((function(e){return"expanded"===e?"nonExpanded":"expanded"})),console.log(n)},children:[e.chosenArticles.map((function(t){return Object(b.jsxs)("div",{className:"chosenArticle",returnId:t.returnId,price:t.price,children:[Object(b.jsx)("div",{className:"img",children:Object(b.jsx)("img",{src:t.src,alt:""})}),Object(b.jsx)("h4",{children:t.title}),Object(b.jsxs)("p",{children:[t.price," $"]}),Object(b.jsx)("button",{onClick:e.onDelete,children:Object(b.jsx)("i",{class:"fas fa-trash-alt"})})]})})),Object(b.jsx)("i",{class:"fas fa-shopping-bag"})]})},g=[];function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*e+t)}for(var m=function e(t,s){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"description of the super good ultra-4K product from our only and beeeeest e-shop",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v(100),r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"./img/img01.jpg";Object(u.a)(this,e),this.title=t,this.id=s,this.desc=c,this.price=n,this.src=r},A=0;A<8;A++)g.push(new m("article "+(A+1),A));console.log(g);var y=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(u.a)(this,s),(c=t.call(this,e)).state={buy:0,counter:0,chosenArticles:[]},c.buyEvent=c.buyEvent.bind(Object(h.a)(c)),c.handleDelete=c.handleDelete.bind(Object(h.a)(c)),c}return Object(o.a)(s,[{key:"buyEvent",value:function(e){var t,s=e.target,c=function(e){return parseInt(e.replace("_",""))}(s.getAttribute("id"));this.setState({buy:this.state.buy+=(t=s.innerHTML,parseInt(t.replace(" $",""))),counter:this.state.counter+=1,chosenArticles:this.state.chosenArticles=[].concat(Object(l.a)(this.state.chosenArticles),[Object(a.a)({returnId:this.state.counter-1},g[c])])}),console.log(this.state.chosenArticles)}},{key:"handleDelete",value:function(e){e.stopPropagation();var t=e.target.parentElement.parentElement;console.log(t);var s=t.getAttribute("returnId");this.setState({buy:this.state.buy-=t.getAttribute("price"),chosenArticles:this.state.chosenArticles=this.state.chosenArticles.filter((function(e,t){return s!=e.returnId})),counter:this.state.counter-=1}),console.log(this.state.chosenArticles)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{cart:this.state.buy,counter:this.state.counter}),Object(b.jsx)(f,{chosenArticles:this.state.chosenArticles,onDelete:this.handleDelete}),Object(b.jsx)("div",{className:"articles",children:g.map((function(t){return Object(b.jsx)(O,{id:t.id,title:t.title,desc:t.desc,src:t.src,price:t.price,handleClick:e.buyEvent})}))})]})}}]),s}(n.a.Component);i.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.40cedb62.chunk.js.map