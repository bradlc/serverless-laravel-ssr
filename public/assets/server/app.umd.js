!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.serverlessLaravelSsr=t()}(this,function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},n={};function o(t){var o="";for(var r in t){var i=t[r];null!=i&&(o&&(o+=" "),o+=n[r]||(n[r]=r.replace(/([A-Z])/g,"-$1").toLowerCase()),o+=": ",o+=i,"number"==typeof i&&!1===e.test(r)&&(o+="px"),o+=";")}return o||void 0}function r(e,t){for(var n in t)e[n]=t[n];return e}var i={shallow:!0},l=[],a=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;function s(e,n,i,p,c){if(null==e||"boolean"==typeof e)return"";var u,f=e.nodeName,d=e.attributes,h=!1;if(n=n||{},i=i||{},"object"!=typeof e&&!f)return t(e);if("function"==typeof f){if(h=!0,!i.shallow||!p&&!1!==i.renderRootComponent){var v,m=function(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}(e);if(f.prototype&&"function"==typeof f.prototype.render){var _=new f(m,n);_._disable=_.__x=!0,_.props=m,_.context=n,f.getDerivedStateFromProps?_.state=r(r({},_.state),f.getDerivedStateFromProps(_.props,_.state)):_.componentWillMount&&_.componentWillMount(),v=_.render(_.props,_.state,_.context),_.getChildContext&&(n=r(r({},n),_.getChildContext()))}else v=f(m,n);return s(v,n,i,!1!==i.shallowHighOrder)}f=(u=f).displayName||u!==Function&&u.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!t){for(var n=-1,o=l.length;o--;)if(l[o]===e){n=o;break}n<0&&(n=l.push(e)-1),t="UnnamedComponent"+n}return t}(u)}var y,g="";if(d){var b=Object.keys(d);i&&!0===i.sortAttributes&&b.sort();for(var C=0;C<b.length;C++){var w=b[C],x=d[w];if("children"!==w&&!w.match(/[\s\n\\\/='"\0<>]/)&&(i&&i.allAttributes||"key"!==w&&"ref"!==w)){if("className"===w){if(d.class)continue;w="class"}else c&&w.match(/^xlink:?./)&&(w=w.toLowerCase().replace(/^xlink:?/,"xlink:"));"style"===w&&x&&"object"==typeof x&&(x=o(x));var k=i.attributeHook&&i.attributeHook(w,x,n,i,h);if(k||""===k)g+=k;else if("dangerouslySetInnerHTML"===w)y=x&&x.__html;else if((x||0===x||""===x)&&"function"!=typeof x){if(!(!0!==x&&""!==x||(x=w,i&&i.xml))){g+=" "+w;continue}g+=" "+w+'="'+t(x)+'"'}}}}if(g="<"+f+g+">",String(f).match(/[\s\n\\\/='"\0<>]/))throw g;var S=String(f).match(a);S&&(g=g.replace(/>$/," />"));var N=[];if(y)g+=y;else if(e.children)for(var L=0;L<e.children.length;L++){var P=e.children[L];if(null!=P&&!1!==P){var B=s(P,n,i,!0,"svg"===f||"foreignObject"!==f&&c);B&&N.push(B)}}if(N.length)g+=N.join("");else if(i&&i.xml)return g.substring(0,g.length-1)+" />";return S||(g+="</"+f+">"),g}s.render=s,s.shallowRender=function(e,t){return s(e,t,i)};var p=function(){},c={},u=[],f=[];function d(e,t){var n,o,r,i,l=f;for(i=arguments.length;i-- >2;)u.push(arguments[i]);for(t&&null!=t.children&&(u.length||u.push(t.children),delete t.children);u.length;)if((o=u.pop())&&void 0!==o.pop)for(i=o.length;i--;)u.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(r=!1)),r&&n?l[l.length-1]+=o:l===f?l=[o]:l.push(o),n=r;var a=new p;return a.nodeName=e,a.children=l,a.attributes=null==t?void 0:t,a.key=null==t?void 0:t.key,a}function h(e,t){for(var n in t)e[n]=t[n];return e}function v(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var m="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,_=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,y=[];function g(e){!e._dirty&&(e._dirty=!0)&&1==y.push(e)&&m(b)}function b(){for(var e;e=y.pop();)e._dirty&&W(e)}function C(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function w(e){var t=h({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function x(e){var t=e.parentNode;t&&t.removeChild(e)}function k(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)v(n,null),v(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===_.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,S,l):e.removeEventListener(t,S,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function S(e){return this._listeners[e.type](e)}var N=[],L=0,P=!1,B=!1;function U(e,t){var n=e._component;n?A(n):(null!=e.__preactattr_&&v(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||x(e),j(e))}function j(e){for(e=e.lastChild;e;){var t=e.previousSibling;U(e,!0),e=t}}var M=[];function H(e,t,n){var o,r=M.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),E.call(o,t,n)):((o=new E(t,n)).constructor=e,o.render=T);r--;)if(M[r].constructor===e)return o.nextBase=M[r].nextBase,M.splice(r,1),o;return o}function T(e,t,n){return this.constructor(e,n)}function D(e,t,n,o,r){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===c.syncComponentUpdates&&e.base?g(e):W(e,1,r)),v(e.__ref,e))}function W(e,t,n,o){if(!e._disable){var r,i,l,a=e.props,s=e.state,p=e.context,c=e.prevProps||a,u=e.prevState||s,f=e.prevContext||p,d=e.base,v=e.nextBase,m=d||v,_=e._component,y=!1,g=f;if(e.constructor.getDerivedStateFromProps&&(s=h(h({},s),e.constructor.getDerivedStateFromProps(a,s)),e.state=s),d&&(e.props=c,e.state=u,e.context=f,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,s,p)?y=!0:e.componentWillUpdate&&e.componentWillUpdate(a,s,p),e.props=a,e.state=s,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!y){r=e.render(a,s,p),e.getChildContext&&(p=h(h({},p),e.getChildContext())),d&&e.getSnapshotBeforeUpdate&&(g=e.getSnapshotBeforeUpdate(c,u));var b,S,j=r&&r.nodeName;if("function"==typeof j){var M=w(r);(i=_)&&i.constructor===j&&M.key==i.__key?D(i,M,1,p,!1):(b=i,e._component=i=H(j,M,p),i.nextBase=i.nextBase||v,i._parentComponent=e,D(i,M,0,p,!1),W(i,1,n,!0)),S=i.base}else l=m,(b=_)&&(l=e._component=null),(m||1===t)&&(l&&(l._component=null),S=function(e,t,n,o,i,a){L++||(P=null!=i&&void 0!==i.ownerSVGElement,B=null!=l&&!("__preactattr_"in l));var s=function e(t,n,o,r,i){var l=t,a=P;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(l=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(l,t),U(t,!0))),l.__preactattr_=!0,l;var s,p,c=n.nodeName;if("function"==typeof c)return function(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=w(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(D(r,p,3,n,o),e=r.base):(i&&!a&&(A(i),e=l=null),r=H(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),D(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,U(l,!1))),e}(t,n,o,r);if(P="svg"===c||"foreignObject"!==c&&P,c=String(c),(!t||!C(t,c))&&(s=c,(p=P?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,l=p,t)){for(;t.firstChild;)l.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(l,t),U(t,!0)}var u=l.firstChild,f=l.__preactattr_,d=n.children;if(null==f){f=l.__preactattr_={};for(var h=l.attributes,v=h.length;v--;)f[h[v].name]=h[v].value}return!B&&d&&1===d.length&&"string"==typeof d[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=d[0]&&(u.nodeValue=d[0]):(d&&d.length||null!=u)&&function(t,n,o,r,i){var l,a,s,p,c,u,f,d,h=t.childNodes,v=[],m={},_=0,y=0,g=h.length,b=0,w=n?n.length:0;if(0!==g)for(var k=0;k<g;k++){var S=h[k],N=S.__preactattr_;null!=(L=w&&N?S._component?S._component.__key:N.key:null)?(_++,m[L]=S):(N||(void 0!==S.splitText?!i||S.nodeValue.trim():i))&&(v[b++]=S)}if(0!==w)for(k=0;k<w;k++){var L;if(c=null,null!=(L=(p=n[k]).key))_&&void 0!==m[L]&&(c=m[L],m[L]=void 0,_--);else if(y<b)for(l=y;l<b;l++)if(void 0!==v[l]&&(u=a=v[l],d=i,"string"==typeof(f=p)||"number"==typeof f?void 0!==u.splitText:"string"==typeof f.nodeName?!u._componentConstructor&&C(u,f.nodeName):d||u._componentConstructor===f.nodeName)){c=a,v[l]=void 0,l===b-1&&b--,l===y&&y++;break}c=e(c,p,o,r),s=h[k],c&&c!==t&&c!==s&&(null==s?t.appendChild(c):c===s.nextSibling?x(s):t.insertBefore(c,s))}if(_)for(var k in m)void 0!==m[k]&&U(m[k],!1);for(;y<=b;)void 0!==(c=v[b--])&&U(c,!1)}(l,d,o,r,B||null!=f.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||k(e,o,n[o],n[o]=void 0,P);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||k(e,o,n[o],n[o]=t[o],P)}(l,n.attributes,f),P=a,l}(l,r,n,o,!0);return i&&s.parentNode!==i&&i.appendChild(s),--L||(B=!1),s}(0,0,p,n||!d,m&&m.parentNode));if(m&&S!==m&&i!==_){var T=m.parentNode;T&&S!==T&&(T.replaceChild(S,m),b||(m._component=null,U(m,!1)))}if(b&&A(b),e.base=S,S&&!o){for(var E=e,F=e;F=F._parentComponent;)(E=F).base=S;S._component=E,S._componentConstructor=E.constructor}}for(!d||n?N.push(e):y||e.componentDidUpdate&&e.componentDidUpdate(c,u,g);e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);L||o||function(){for(var e;e=N.shift();)e.componentDidMount&&e.componentDidMount()}()}}function A(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?A(n):t&&(null!=t.__preactattr_&&v(t.__preactattr_.ref,null),e.nextBase=t,x(t),M.push(e),j(t)),v(e.__ref,null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}h(E.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=h(h({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),g(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),W(this,2)},render:function(){}});var F={Home:function(e){return d("h1",null,e.title)},About:function(e){var t=e.body;return d("div",null,d("h1",null,e.title),d("p",null,t))},Blog:function(e){var t=e.articles;return d("div",null,d("h1",null,"Blog"),d("ul",null,t.map(function(e){return d("li",null,e.title)})))}},R=function(e){function t(t){e.call(this,t),this.state=t,this.handleClick=this.handleClick.bind(this),this.handlePopState=this.handlePopState.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.handleClick=function(e){var t=this,n=e.target.closest("a");n&&(e.preventDefault(),V(n.href).then(function(e){window.history.pushState({path:n.pathname},"",n.pathname),t.setState(e)}))},t.prototype.handlePopState=function(e){var t=this;e.state.path&&V(e.state.path).then(function(e){t.setState(e)})},t.prototype.componentDidMount=function(){window.history.replaceState({path:window.location.pathname},null,document.URL),window.addEventListener("popstate",this.handlePopState),window.addEventListener("click",this.handleClick)},t.prototype.componentWillUnmount=function(){window.removeEventListener("popstate",this.handlePopState),window.removeEventListener("click",this.handleClick)},t.prototype.render=function(e,t){var n=t.props,o=F[t.component];return d("div",{id:"app"},d("a",{href:"/"},"Home")," ",d("a",{href:"/about"},"About")," ",d("a",{href:"/blog"},"Blog"),d(o,n))},t}(E);function V(e){return window.fetch(e+"?__json",{headers:{"x-requested-with":"XMLHttpRequest"}}).then(function(e){return e.json()})}return function(e){return'\n  <!doctype html>\n  <html lang="en">\n    <head>\n      <meta charset="utf-8">\n      <title>Hello world</title>\n      <link rel="preload" as="fetch" href="?__json">\n    </head>\n    <body>\n      {{app}}\n      <script src="assets/app.umd.js"><\/script>\n    </body>\n  </html>\n'.replace("{{app}}",s(d(R,e)))}});
//# sourceMappingURL=app.umd.js.map
