(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+VcZ":function(t,e,n){"use strict";var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),i=function(t,e,n){for(var s=!0;s;){var i=t,o=e,r=n;s=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,o);if(void 0!==a){if("value"in a)return a.value;var u=a.get;if(void 0===u)return;return u.call(r)}var c=Object.getPrototypeOf(i);if(null===c)return;t=c,e=o,n=r,s=!0,a=c=void 0}};function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a,u,c,h,l,p=n("cDcd"),f=o(p),d=o(n("17x9")),v=n("YYUi"),y=o(n("I2i6")),m=o(n("YZDV")),b=0,g="transform",T=!0,x=0,w=-1,_=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,n),this.handleResize=this.handleResize.bind(this),this.handleScroll=this.handleScroll.bind(this),this.handleScrollStart=this.handleScrollStart.bind(this),this.delta=0,this.stickyTop=0,this.stickyBottom=0,this.frozen=!1,this.skipNextScrollEvent=!1,this.scrollTop=-1,this.bottomBoundaryTarget,this.topTarget,this.subscribers,this.state={top:0,bottom:0,width:0,height:0,x:0,y:0,topBoundary:0,bottomBoundary:1/0,status:b,pos:0,activated:!1}}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,p.Component),s(e,[{key:"getTargetHeight",value:function(t){return t&&t.offsetHeight||0}},{key:"getTopPosition",value:function(t){return"string"==typeof(t=t||this.props.top||this.props.topTarget||0)&&(this.topTarget||(this.topTarget=a.querySelector(t)),t=this.getTargetHeight(this.topTarget)),t}},{key:"getTargetBottom",value:function(t){if(!t)return-1;var e=t.getBoundingClientRect();return this.scrollTop+e.bottom}},{key:"getBottomBoundary",value:function(t){var e=t||this.props.bottomBoundary;return"object"==typeof e&&(e=e.value||e.target||0),"string"==typeof e&&(this.bottomBoundaryTarget||(this.bottomBoundaryTarget=a.querySelector(e)),e=this.getTargetBottom(this.bottomBoundaryTarget)),e&&e>0?e:1/0}},{key:"reset",value:function(){this.setState({status:b,pos:0})}},{key:"release",value:function(t){this.setState({status:1,pos:t-this.state.y})}},{key:"fix",value:function(t){this.setState({status:2,pos:t})}},{key:"updateInitialDimension",value:function(t){t=t||{};var e=this.refs,n=e.outer,s=e.inner,i=n.getBoundingClientRect(),o=s.getBoundingClientRect(),r=i.width||i.right-i.left,a=o.height||o.bottom-o.top,u=i.top+this.scrollTop;this.setState({top:this.getTopPosition(t.top),bottom:Math.min(this.state.top+a,w),width:r,height:a,x:i.left,y:u,bottomBoundary:this.getBottomBoundary(t.bottomBoundary),topBoundary:u})}},{key:"handleResize",value:function(t,e){this.props.shouldFreeze()||(w=e.resize.height,this.updateInitialDimension(),this.update())}},{key:"handleScrollStart",value:function(t,e){this.frozen=this.props.shouldFreeze(),this.frozen||(this.scrollTop===e.scroll.top?this.skipNextScrollEvent=!0:(this.scrollTop=e.scroll.top,this.updateInitialDimension()))}},{key:"handleScroll",value:function(t,e){this.skipNextScrollEvent?this.skipNextScrollEvent=!1:(x=e.scroll.delta,this.scrollTop=e.scroll.top,this.update())}},{key:"update",value:function(){if(!this.props.enabled||this.state.bottomBoundary-this.state.topBoundary<=this.state.height||0===this.state.width&&0===this.state.height)this.state.status!==b&&this.reset();else{var t=x,e=this.scrollTop+this.state.top,n=this.scrollTop+this.state.bottom;if(e<=this.state.topBoundary)this.reset();else if(n>=this.state.bottomBoundary)this.stickyBottom=this.state.bottomBoundary,this.stickyTop=this.stickyBottom-this.state.height,this.release(this.stickyTop);else if(this.state.height>w-this.state.top)switch(this.state.status){case b:this.release(this.state.y),this.stickyTop=this.state.y,this.stickyBottom=this.stickyTop+this.state.height;case 1:this.stickyBottom=this.stickyTop+this.state.height,t>0&&n>this.stickyBottom?this.fix(this.state.bottom-this.state.height):t<0&&e<this.stickyTop&&this.fix(this.state.top);break;case 2:var s=!0,i=this.state.pos,o=this.state.height;if(t>0&&i===this.state.top)this.stickyTop=e-t,this.stickyBottom=this.stickyTop+o;else if(t<0&&i===this.state.bottom-o)this.stickyBottom=n-t,this.stickyTop=this.stickyBottom-o;else if(i!==this.state.bottom-o&&i!==this.state.top){var r=i+o-this.state.bottom;this.stickyBottom=n-t+r,this.stickyTop=this.stickyBottom-o}else s=!1;s&&this.release(this.stickyTop)}else this.fix(this.state.top);this.delta=t}}},{key:"componentWillReceiveProps",value:function(t){this.updateInitialDimension(t),this.update()}},{key:"componentDidUpdate",value:function(t,e){var n=this;e.status!==this.state.status&&this.props.onStateChange&&this.props.onStateChange({status:this.state.status}),t.enabled!==this.props.enabled&&(this.props.enabled?this.setState({activated:!0},function(){n.updateInitialDimension(),n.update()}):this.setState({activated:!1},function(){n.reset()}))}},{key:"componentWillUnmount",value:function(){for(var t=(this.subscribers||[]).length-1;t>=0;t--)this.subscribers[t].unsubscribe()}},{key:"componentDidMount",value:function(){l||(l=window,a=document,c=a.documentElement,u=a.body,w=l.innerHeight||c.clientHeight,(h=window.Modernizr)&&(T=h.csstransforms3d,g=h.prefixed("transform"))),this.scrollTop=u.scrollTop+c.scrollTop,this.props.enabled&&(this.setState({activated:!0}),this.updateInitialDimension(),this.update()),this.subscribers=[(0,v.subscribe)("scrollStart",this.handleScrollStart.bind(this),{useRAF:!0}),(0,v.subscribe)("scroll",this.handleScroll.bind(this),{useRAF:!0,enableScrollInfo:!0}),(0,v.subscribe)("resize",this.handleResize.bind(this),{enableResizeInfo:!0})]}},{key:"translate",value:function(t,e){T&&this.props.enableTransforms&&this.state.activated?t[g]="translate3d(0,"+e+"px,0)":t.top=e+"px"}},{key:"shouldComponentUpdate",value:function(t,e){return!this.props.shouldFreeze()&&(0,m.default)(this,t,e)}},{key:"render",value:function(){var t,e={position:2===this.state.status?"fixed":"relative",top:2===this.state.status?"0px":"",zIndex:this.props.innerZ},n={};this.translate(e,this.state.pos),this.state.status!==b&&(e.width=this.state.width+"px",n.height=this.state.height+"px");var s=(0,y.default)("sticky-outer-wrapper",this.props.className,(r(t={},this.props.activeClass,2===this.state.status),r(t,this.props.releasedClass,1===this.state.status),t));return f.default.createElement("div",{ref:"outer",className:s,style:n},f.default.createElement("div",{ref:"inner",className:"sticky-inner-wrapper",style:e},this.props.children))}}]),e}();_.displayName="Sticky",_.defaultProps={shouldFreeze:function(){return!1},enabled:!0,top:0,bottomBoundary:0,enableTransforms:!0,activeClass:"active",releasedClass:"released",onStateChange:null},_.propTypes={enabled:d.default.bool,top:d.default.oneOfType([d.default.string,d.default.number]),bottomBoundary:d.default.oneOfType([d.default.object,d.default.string,d.default.number]),enableTransforms:d.default.bool,activeClass:d.default.string,releasedClass:d.default.string,onStateChange:d.default.func,shouldFreeze:d.default.func,innerZ:d.default.oneOfType([d.default.string,d.default.number])},_.STATUS_ORIGINAL=b,_.STATUS_RELEASED=1,_.STATUS_FIXED=2,t.exports=_},"6yjd":function(t,e,n){"use strict";var s=!1;if("undefined"!=typeof navigator){var i=navigator.userAgent.match(/MSIE (\d+\.\d+)/);i&&(s=parseFloat(i[1],10)<9)}t.exports=s},DzJC:function(t,e,n){var s=n("sEfC"),i=n("GoyQ"),o="Expected a function";t.exports=function(t,e,n){var r=!0,a=!0;if("function"!=typeof t)throw new TypeError(o);return i(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),s(t,e,{leading:r,maxWait:e,trailing:a})}},"F+G6":function(t,e,n){"use strict";var s=n("3OWR"),i=n("vh/V"),o={capture:!1,passive:!1};t.exports=function(t,e,n,r){var a="addEventListener",u="removeEventListener",c=!!i.supportPassiveEvent&&s({},o,r);return!t.addEventListener&&t.attachEvent&&(a="attachEvent",u="detachEvent",e="on"+e),t[a](e,n,c),{remove:function(){t[u](e,n)}}}},I2i6:function(t,e,n){var s;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var o=typeof s;if("string"===o||"number"===o)t.push(s);else if(Array.isArray(s)&&s.length){var r=i.apply(null,s);r&&t.push(r)}else if("object"===o)for(var a in s)n.call(s,a)&&s[a]&&t.push(a)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(s=function(){return i}.apply(e,[]))||(t.exports=s)}()},MHEC:function(t,e,n){"use strict";var s=n("xEkU"),i=Date.now||function(){return(new Date).getTime()};t.exports=function(t,e){var n,o,r=0,a=0;e=e||15;var u=function u(){var c=i();e-(c-r)<=0?(r=c,a=0,t.apply(n,o)):a=s(u)};return function(){n=this,o=arguments,a||(a=s(u))}}},"SuY+":function(t,e,n){"use strict";var s,i,o,r=n("uM7l"),a=n("DzJC"),u=n("nZGv"),c=n("vh/V"),h=c.connections,l=c.EE,p=n("6yjd"),f=n("F+G6"),d=c.listeners,v=n("MHEC"),y=c.removers,m=(c.subscriptions,n("rLGw").EVENT_END_DELAY),b=0;function g(t){return t.id||"target-id-"+b++}function T(t,e,n,s){return l.on(t,e,n),h[s=s||t]=(h[s]||0)+1,{_type:t,_cb:e,_ctx:n,unsubscribe:function(){if(this._type){l.removeListener(t,e,n),h[s]--,0===h[s]&&(d[s].remove(),d[s]=void 0),this._type=void 0,this._cb=void 0,this._ctx=void 0;for(var i=y.length-1;i>=0;i--){if(y[i]===this){y.splice(i,1);break}}}}}}function x(t,e,n,s){return function(i,o,c){var h=c.context,b=c.target,x=b&&g(b),w=x?":"+x:"",_=e+"Start:"+i+w,k=e+"End:"+i+w,E=e+":"+i+w,S=T(n+":"+i+w,o,h,E);if(y.push(S),d[E])return S;var z,B={start:new u({mainType:e,subType:"start"}),main:new u({mainType:e}),end:new u({mainType:e,subType:"end"})};function C(t){B.end.update(t),l.emit(k,t,B.end),z=null}function I(t){z||(B.start.update(t),l.emit(_,t,B.start)),clearTimeout(z),B.main.update(t),l.emit(E,t,B.main),p?(t=r(t),z=setTimeout(function(){C(t)},i+m)):z=setTimeout(C.bind(null,t),i+m)}return"raf"===i?(i=16,I=v(I)):i>0&&(I=a(I,i)),d[E]=f(b||t,e,I,s),S}}function w(t,e){return function(n,s,i){var o=i.context,r=i.target,a=r&&g(r),c=e+":0"+(a?":"+a:""),h=T(c,s,o);if(y.push(h),d[c])return h;var p=new u({mainType:e});return d[c]=f(r||t,e,function(t){p.update(t),l.emit(c,t,p)}),h}}"undefined"!=typeof window&&(o=(s=(i=window).document||document).body),t.exports={scrollStart:x(i,"scroll","scrollStart"),scrollEnd:x(i,"scroll","scrollEnd"),scroll:x(i,"scroll","scroll"),resizeStart:x(i,"resize","resizeStart"),resizeEnd:x(i,"resize","resizeEnd"),resize:x(i,"resize","resize"),visibilitychange:w(s,"visibilitychange"),touchmoveStart:x(o,"touchmove","touchmoveStart"),touchmoveEnd:x(o,"touchmove","touchmoveEnd"),touchmove:x(o,"touchmove","touchmove"),touchstart:w(o,"touchstart"),touchend:w(o,"touchend")}},YYUi:function(t,e,n){"use strict";function s(){0}"undefined"!=typeof window?t.exports={listen:n("F+G6"),subscribe:n("gxqG"),unsubscribe:n("nJCt")}:t.exports={listen:s,subscribe:s,unsubscribe:s}},YZDV:function(t,e,n){"use strict";var s=n("rzV7");t.exports=function(t,e,n){return!s(t.props,e)||!s(t.state,n)}},Z85D:function(t,e,n){"use strict";var s=!1;if("undefined"!=typeof window)try{var i=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,i)}catch(t){}t.exports=s},bQgK:function(t,e,n){(function(e){(function(){var n,s,i,o,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:void 0!==e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-r)/1e6},s=e.hrtime,o=(n=function(){var t;return 1e9*(t=s())[0]+t[1]})(),a=1e9*e.uptime(),r=o-a):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},gxqG:function(t,e,n){"use strict";var s=n("vh/V"),i=n("6yjd"),o=n("SuY+"),r=n("rLGw").DEFAULT_THROTTLE_RATE;t.exports=function(t,e,n){var a=(n=n||{}).useRAF||!1,u=parseInt(n.throttleRate,10),c=n.eventOptions;return isNaN(u)&&(u=r),a&&(u="raf"),i&&(u=0),s.enableScrollInfo=s.enableScrollInfo||n.enableScrollInfo||!1,s.enableResizeInfo=s.enableResizeInfo||n.enableResizeInfo||!1,s.enableTouchInfo=s.enableTouchInfo||n.enableTouchInfo||!1,o[t](u,e,n,c)}},nJCt:function(t,e,n){"use strict";var s=n("vh/V").removers;t.exports=function(t,e,n){for(var i,o=s.length-1;o>=0;o--)(i=s[o])._cb===e&&i._type.indexOf(t)>=0&&(i.unsubscribe(),s.splice(o,1))}},nZGv:function(t,e,n){"use strict";var s=n("vh/V"),i={width:0,height:0},o={delta:0,top:0},r={axisIntention:"",startX:0,startY:0,deltaX:0,deltaY:0};function a(t){var e=((t=t||{}).mainType||"").toLowerCase(),n=(t.subType||"").toLowerCase();this.mainType=e,this.subType=n,this.type=e+n.charAt(0).toUpperCase()+n.slice(1)||"",this.scroll=o,this.resize=i,this.touch=r}a.prototype={getXY:function(t){var e={x:0,y:0},n=document.body,s=document.documentElement;return t.pageX||t.pageY?(e.x=t.pageX,e.y=t.pageY):(e.x=t.clientX+n.scrollLeft+s.scrollLeft,e.y=t.clientY+n.scrollTop+s.scrollTop),e},update:function(t){var e,n,i,o=this.mainType,r=this.subType,a=document.documentElement;if(s.enableScrollInfo&&("scroll"===o||"touchmove"===o)){var u=a.scrollTop+document.body.scrollTop;u!==this.scroll.top&&(this.scroll.delta=u-this.scroll.top,this.scroll.top=u)}(s.enableResizeInfo&&"resize"===o&&(this.resize.width=window.innerWidth||a.clientWidth,this.resize.height=window.innerHeight||a.clientHeight),s.enableTouchInfo&&t.touches&&("touchstart"===o||"touchmove"===o||"touchend"===o))&&("touchstart"===o||"start"===r?(e=this.getXY(t.touches[0]),this.touch.axisIntention="",this.touch.startX=e.x,this.touch.startY=e.y,this.touch.deltaX=0,this.touch.deltaY=0):"touchmove"===o&&(e=this.getXY(t.touches[0]),this.touch.deltaX=e.x-this.touch.startX,this.touch.deltaY=e.y-this.touch.startY,""===this.touch.axisIntention&&(n=Math.abs(this.touch.deltaX),i=Math.abs(this.touch.deltaY),n>5&&n>=i?this.touch.axisIntention="x":i>5&&i>n&&(this.touch.axisIntention="y"))))}},t.exports=a},rLGw:function(t,e,n){"use strict";t.exports={EVENT_END_DELAY:100,DEFAULT_THROTTLE_RATE:50}},t8Fj:function(t,e,n){t.exports=n("+VcZ")},uF6l:function(t,e,n){"use strict";var s=Object.prototype.hasOwnProperty,i="~";function o(){}function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function a(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(i=!1)),a.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)s.call(t,e)&&n.push(i?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},a.prototype.listeners=function(t,e){var n=i?i+t:t,s=this._events[n];if(e)return!!s;if(!s)return[];if(s.fn)return[s.fn];for(var o=0,r=s.length,a=new Array(r);o<r;o++)a[o]=s[o].fn;return a},a.prototype.emit=function(t,e,n,s,o,r){var a=i?i+t:t;if(!this._events[a])return!1;var u,c,h=this._events[a],l=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),l){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,n),!0;case 4:return h.fn.call(h.context,e,n,s),!0;case 5:return h.fn.call(h.context,e,n,s,o),!0;case 6:return h.fn.call(h.context,e,n,s,o,r),!0}for(c=1,u=new Array(l-1);c<l;c++)u[c-1]=arguments[c];h.fn.apply(h.context,u)}else{var p,f=h.length;for(c=0;c<f;c++)switch(h[c].once&&this.removeListener(t,h[c].fn,void 0,!0),l){case 1:h[c].fn.call(h[c].context);break;case 2:h[c].fn.call(h[c].context,e);break;case 3:h[c].fn.call(h[c].context,e,n);break;case 4:h[c].fn.call(h[c].context,e,n,s);break;default:if(!u)for(p=1,u=new Array(l-1);p<l;p++)u[p-1]=arguments[p];h[c].fn.apply(h[c].context,u)}}return!0},a.prototype.on=function(t,e,n){var s=new r(e,n||this),o=i?i+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],s]:this._events[o].push(s):(this._events[o]=s,this._eventsCount++),this},a.prototype.once=function(t,e,n){var s=new r(e,n||this,!0),o=i?i+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],s]:this._events[o].push(s):(this._events[o]=s,this._eventsCount++),this},a.prototype.removeListener=function(t,e,n,s){var r=i?i+t:t;if(!this._events[r])return this;if(!e)return 0==--this._eventsCount?this._events=new o:delete this._events[r],this;var a=this._events[r];if(a.fn)a.fn!==e||s&&!a.once||n&&a.context!==n||(0==--this._eventsCount?this._events=new o:delete this._events[r]);else{for(var u=0,c=[],h=a.length;u<h;u++)(a[u].fn!==e||s&&!a[u].once||n&&a[u].context!==n)&&c.push(a[u]);c.length?this._events[r]=1===c.length?c[0]:c:0==--this._eventsCount?this._events=new o:delete this._events[r]}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=i?i+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new o:delete this._events[e])):(this._events=new o,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prototype.setMaxListeners=function(){return this},a.prefixed=i,a.EventEmitter=a,t.exports=a},uM7l:function(t,e,n){var s=n("OBhP"),i=4;t.exports=function(t){return s(t,i)}},"vh/V":function(t,e,n){"use strict";var s=n("uF6l"),i=n("Z85D");t.exports={connections:{},EE:new s,enableResizeInfo:!1,enableScrollInfo:!1,listeners:{},removers:[],supportPassiveEvent:i}},xEkU:function(t,e,n){(function(e){for(var s=n("bQgK"),i="undefined"==typeof window?e:window,o=["moz","webkit"],r="AnimationFrame",a=i["request"+r],u=i["cancel"+r]||i["cancelRequest"+r],c=0;!a&&c<o.length;c++)a=i[o[c]+"Request"+r],u=i[o[c]+"Cancel"+r]||i[o[c]+"CancelRequest"+r];if(!a||!u){var h=0,l=0,p=[];a=function(t){if(0===p.length){var e=s(),n=Math.max(0,1e3/60-(e-h));h=n+e,setTimeout(function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(h)}catch(t){setTimeout(function(){throw t},0)}},Math.round(n))}return p.push({handle:++l,callback:t,cancelled:!1}),l},u=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(i,t)},t.exports.cancel=function(){u.apply(i,arguments)},t.exports.polyfill=function(t){t||(t=i),t.requestAnimationFrame=a,t.cancelAnimationFrame=u}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/vendors~hackerrank_r_challenge_list~hackerrank_r_challenge_list_v2~hackerrank_r_interview~hackerrank~14aa502a-f9e5bcabc62f8ce06462.js.map