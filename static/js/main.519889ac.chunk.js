(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{307:function(e,t,n){e.exports=n(707)},312:function(e,t,n){},314:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},315:function(e,t,n){},341:function(e,t){},343:function(e,t){},383:function(e,t){},407:function(e,t){},440:function(e,t){},441:function(e,t){},620:function(e,t){},621:function(e,t){},707:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n.n(a),s=n(306),o=n.n(s),c=(n(312),n(33)),i=n(0),u=n.n(i),l=n(6),p=n(7),d=n(14),f=n(12),h=n(15),m=n(23),v=(n(314),n(315),n(66)),k=n(705).default;var b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={tasks:[]},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleNewTask",value:function(e){if(""!==e){var t=this.state.tasks.concat(e);this.setState({tasks:t})}else alert("Empty task not allowed!")}},{key:"handleDeleteTask",value:function(e){var t=this.state.tasks.slice();t.splice(t.indexOf(e),1),this.setState({tasks:t})}},{key:"loadFromSolid",value:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(E());case 2:e=t.sent,this.setState({tasks:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"saveToSolid",value:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(E());case 2:e=t.sent,S(this.state.tasks,e);case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App-content"},r.a.createElement(w,{addNewTask:function(t){return e.handleNewTask(t)}}),r.a.createElement(x,{tasks:this.state.tasks,deleteTask:function(t){return e.handleDeleteTask(t)}}),r.a.createElement(y,{loadFromSolid:function(){return e.loadFromSolid()},saveToSolid:function(){return e.saveToSolid()}}))}}]),t}(r.a.Component),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.props.addNewTask(this.state.value),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"task",value:this.state.value,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"+"}))}}]),t}(r.a.Component);function x(e){return e.tasks.map((function(t){return r.a.createElement("li",{key:t},t,r.a.createElement("button",{onClick:function(){return e.deleteTask(t)}},"-"))}))}var y=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.loadFromSolid()}},"Load from Solid"),r.a.createElement("button",{onClick:function(){return e.props.saveToSolid()}},"Save to Solid"))}}]),t}(r.a.Component);function E(){var e,t,n,a,r,s,o,c,i,l,p;return u.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,u.a.awrap(O());case 2:e=d.sent,t=e.webId.replace("profile/card#me","todo/todo.ttl#todo"),n=k[t],a=[],r=!0,s=!1,d.prev=8,c=Object(m.a)(n.schema_itemListElement);case 10:return d.next=12,u.a.awrap(c.next());case 12:return i=d.sent,r=i.done,d.next=16,u.a.awrap(i.value);case 16:if(l=d.sent,r){d.next=23;break}p=l,a.push(p.toString());case 20:r=!0,d.next=10;break;case 23:d.next=29;break;case 25:d.prev=25,d.t0=d.catch(8),s=!0,o=d.t0;case 29:if(d.prev=29,d.prev=30,r||null==c.return){d.next=34;break}return d.next=34,u.a.awrap(c.return());case 34:if(d.prev=34,!s){d.next=37;break}throw o;case 37:return d.finish(34);case 38:return d.finish(29);case 39:return d.abrupt("return",Array.from(a.values()));case 40:case"end":return d.stop()}}),null,null,[[8,25,29,39],[30,,34,38]])}function S(e,t){var n,a,r;return u.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u.a.awrap(O());case 2:n=s.sent,a=n.webId.replace("profile/card#me","todo/todo.ttl#todo"),r=k[a],t.forEach((function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(r["schema:itemListElement"].delete(e.toString()));case 2:case"end":return t.stop()}}))})),e.forEach((function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(r["schema:itemListElement"].add(e.toString()));case 2:case"end":return t.stop()}}))}));case 7:case"end":return s.stop()}}))}function O(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(v.currentSession());case 2:if(e=t.sent,"https://solid.community/common/popup.html",e){t.next=8;break}return t.next=7,u.a.awrap(v.popupLogin({popupUri:"https://solid.community/common/popup.html"}));case 7:e=t.sent;case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}}))}var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"ToDo List")),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[307,1,2]]]);
//# sourceMappingURL=main.519889ac.chunk.js.map