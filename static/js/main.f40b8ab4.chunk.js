(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),i=a(4),c=a(7),o=a(0),l=a.n(o),u=a(5),m=a.n(u),d=(a(14),{winter:{text:"Burr it is chilly",iconName:"snowflake"},summer:{text:"Lets hit the beach",iconName:"sun"}}),h=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[n],s=r.text,i=r.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon-left massive ".concat(i," icon")}),l.a.createElement("h1",null,s),l.a.createElement("i",{className:"icon-right massive ".concat(i," icon")}))},v=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui big text loader"},e.message))};v.defaultProps={message:"Loading..."};var g=v,f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={lat:null,errorMessage:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({lat:t.coords.latitude})},function(t){return e.setState({errorMessage:t.message})})}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?l.a.createElement("div",null,"Error: ",this.state.errorMessage):!this.state.errorMessage&&this.state.lat?l.a.createElement(h,{lat:this.state.lat}):l.a.createElement(g,{message:"Please accept location requests"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"border red"},this.renderContent())}}]),t}(l.a.Component);m.a.render(l.a.createElement(f,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.f40b8ab4.chunk.js.map