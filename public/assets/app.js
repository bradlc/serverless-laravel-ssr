var e=function(){},t={},n=[],o=[];function r(t,r){var i,l,a,s,p=o;for(s=arguments.length;s-- >2;)n.push(arguments[s]);for(r&&null!=r.children&&(n.length||n.push(r.children),delete r.children);n.length;)if((l=n.pop())&&void 0!==l.pop)for(s=l.length;s--;)n.push(l[s]);else"boolean"==typeof l&&(l=null),(a="function"!=typeof t)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(a=!1)),a&&i?p[p.length-1]+=l:p===o?p=[l]:p.push(l),i=a;var u=new e;return u.nodeName=t,u.children=p,u.attributes=null==r?void 0:r,u.key=null==r?void 0:r.key,u}function i(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,s=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function u(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&a(c)}function c(){for(var e;e=p.pop();)e._dirty&&B(e)}function d(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function f(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)l(n,null),l(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===s.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,m,a):e.removeEventListener(t,m,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var p=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?p?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(p?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function m(e){return this._listeners[e.type](e)}var _=[],y=0,b=!1,g=!1;function C(){for(var e;e=_.shift();)e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){y++||(b=null!=r&&void 0!==r.ownerSVGElement,g=null!=e&&!("__preactattr_"in e));var l=function e(t,n,o,r,i){var l=t,a=b;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(l=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(l,t),x(t,!0))),l.__preactattr_=!0,l;var s,p,u=n.nodeName;if("function"==typeof u)return function(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=f(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(L(r,p,3,n,o),e=r.base):(i&&!a&&(U(i),e=l=null),r=k(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),L(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,x(l,!1))),e}(t,n,o,r);if(b="svg"===u||"foreignObject"!==u&&b,u=String(u),(!t||!d(t,u))&&(s=u,(p=b?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,l=p,t)){for(;t.firstChild;)l.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(l,t),x(t,!0)}var c=l.firstChild,m=l.__preactattr_,_=n.children;if(null==m){m=l.__preactattr_={};for(var y=l.attributes,C=y.length;C--;)m[y[C].name]=y[C].value}return!g&&_&&1===_.length&&"string"==typeof _[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=_[0]&&(c.nodeValue=_[0]):(_&&_.length||null!=c)&&function(t,n,o,r,i){var l,a,s,p,u,c,f,v,m=t.childNodes,_=[],y={},b=0,g=0,C=m.length,w=0,N=n?n.length:0;if(0!==C)for(var S=0;S<C;S++){var k=m[S],P=k.__preactattr_;null!=(L=N&&P?k._component?k._component.__key:P.key:null)?(b++,y[L]=k):(P||(void 0!==k.splitText?!i||k.nodeValue.trim():i))&&(_[w++]=k)}if(0!==N)for(S=0;S<N;S++){var L;if(u=null,null!=(L=(p=n[S]).key))b&&void 0!==y[L]&&(u=y[L],y[L]=void 0,b--);else if(g<w)for(l=g;l<w;l++)if(void 0!==_[l]&&(c=a=_[l],v=i,"string"==typeof(f=p)||"number"==typeof f?void 0!==c.splitText:"string"==typeof f.nodeName?!c._componentConstructor&&d(c,f.nodeName):v||c._componentConstructor===f.nodeName)){u=a,_[l]=void 0,l===w-1&&w--,l===g&&g++;break}u=e(u,p,o,r),s=m[S],u&&u!==t&&u!==s&&(null==s?t.appendChild(u):u===s.nextSibling?h(s):t.insertBefore(u,s))}if(b)for(var S in y)void 0!==y[S]&&x(y[S],!1);for(;g<=w;)void 0!==(u=_[w--])&&x(u,!1)}(l,_,o,r,g||null!=m.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||v(e,o,n[o],n[o]=void 0,b);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||v(e,o,n[o],n[o]=t[o],b)}(l,n.attributes,m),b=a,l}(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--y||(g=!1,i||C()),l}function x(e,t){var n=e._component;n?U(n):(null!=e.__preactattr_&&l(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||h(e),N(e))}function N(e){for(e=e.lastChild;e;){var t=e.previousSibling;x(e,!0),e=t}}var S=[];function k(e,t,n){var o,r=S.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),T.call(o,t,n)):((o=new T(t,n)).constructor=e,o.render=P);r--;)if(S[r].constructor===e)return o.nextBase=S[r].nextBase,S.splice(r,1),o;return o}function P(e,t,n){return this.constructor(e,n)}function L(e,n,o,r,i){e._disable||(e._disable=!0,e.__ref=n.ref,e.__key=n.key,delete n.ref,delete n.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?u(e):B(e,1,i)),l(e.__ref,e))}function B(e,t,n,o){if(!e._disable){var r,l,a,s=e.props,p=e.state,u=e.context,c=e.prevProps||s,d=e.prevState||p,h=e.prevContext||u,v=e.base,m=e.nextBase,b=v||m,g=e._component,N=!1,S=h;if(e.constructor.getDerivedStateFromProps&&(p=i(i({},p),e.constructor.getDerivedStateFromProps(s,p)),e.state=p),v&&(e.props=c,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,p,u)?N=!0:e.componentWillUpdate&&e.componentWillUpdate(s,p,u),e.props=s,e.state=p,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!N){r=e.render(s,p,u),e.getChildContext&&(u=i(i({},u),e.getChildContext())),v&&e.getSnapshotBeforeUpdate&&(S=e.getSnapshotBeforeUpdate(c,d));var P,T,E=r&&r.nodeName;if("function"==typeof E){var M=f(r);(l=g)&&l.constructor===E&&M.key==l.__key?L(l,M,1,u,!1):(P=l,e._component=l=k(E,M,u),l.nextBase=l.nextBase||m,l._parentComponent=e,L(l,M,0,u,!1),B(l,1,n,!0)),T=l.base}else a=b,(P=g)&&(a=e._component=null),(b||1===t)&&(a&&(a._component=null),T=w(a,r,u,n||!v,b&&b.parentNode,!0));if(b&&T!==b&&l!==g){var D=b.parentNode;D&&T!==D&&(D.replaceChild(T,b),P||(b._component=null,x(b,!1)))}if(P&&U(P),e.base=T,T&&!o){for(var W=e,j=e;j=j._parentComponent;)(W=j).base=T;T._component=W,T._componentConstructor=W.constructor}}for(!v||n?_.push(e):N||e.componentDidUpdate&&e.componentDidUpdate(c,d,S);e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);y||o||C()}}function U(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?U(n):t&&(null!=t.__preactattr_&&l(t.__preactattr_.ref,null),e.nextBase=t,h(t),S.push(e),N(t)),l(e.__ref,null)}function T(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}i(T.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=i(i({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),u(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),B(this,2)},render:function(){}});var E={Home:function(e){return r("h1",null,e.title)},About:function(e){var t=e.body;return r("div",null,r("h1",null,e.title),r("p",null,t))},Blog:function(e){var t=e.articles;return r("div",null,r("h1",null,"Blog"),r("ul",null,t.map(function(e){return r("li",null,e.title)})))}},M=function(e){function t(t){e.call(this,t),this.state=t,this.handleClick=this.handleClick.bind(this),this.handlePopState=this.handlePopState.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.handleClick=function(e){var t=this,n=e.target.closest("a");n&&(e.preventDefault(),D(n.href).then(function(e){window.history.pushState({path:n.pathname},"",n.pathname),t.setState(e)}))},t.prototype.handlePopState=function(e){var t=this;e.state.path&&D(e.state.path).then(function(e){t.setState(e)})},t.prototype.componentDidMount=function(){window.history.replaceState({path:window.location.pathname},null,document.URL),window.addEventListener("popstate",this.handlePopState),window.addEventListener("click",this.handleClick)},t.prototype.componentWillUnmount=function(){window.removeEventListener("popstate",this.handlePopState),window.removeEventListener("click",this.handleClick)},t.prototype.render=function(e,t){var n=t.props,o=E[t.component];return r("div",{id:"app"},r("a",{href:"/"},"Home")," ",r("a",{href:"/about"},"About")," ",r("a",{href:"/blog"},"Blog"),r(o,n))},t}(T);function D(e){return window.fetch(e+"?__json",{headers:{"x-requested-with":"XMLHttpRequest"}}).then(function(e){return e.json()})}window.fetch("?__json").then(function(e){return e.json()}).then(function(e){var t,n;t=r(M,e),n=document.body,w(document.body.firstElementChild,t,{},!1,n,!1)});
//# sourceMappingURL=app.js.map
