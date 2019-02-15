(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"6DQo":function(t,e,n){"use strict";t.exports=function(){}},Wr5T:function(t,e){!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(o){var i=o.element,s=h(i),c=this._rootContainsTarget(i),a=o.entry,u=e&&c&&this._computeTargetAndRootIntersection(i,n),l=o.entry=new r({time:t.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:n,intersectionRect:u});a?e&&c?this._hasCrossedThreshold(a,l)&&this._queuedEntries.push(l):a&&a.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(n,r){if("none"!=t.getComputedStyle(n).display){for(var o=h(n),i=u(n),s=!1;!s;){var a=null,l=1==i.nodeType?t.getComputedStyle(i):{};if("none"==l.display)return;if(i==this.root||i==e?(s=!0,a=r):i!=e.body&&i!=e.documentElement&&"visible"!=l.overflow&&(a=h(i)),a&&!(o=c(a,o)))break;i=u(i)}return o}},o.prototype._getRootRect=function(){var t;if(this.root)t=h(this.root);else{var n=e.documentElement,r=e.body;t={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},o.prototype._rootIsInDom=function(){return!this.root||a(e,this.root)},o.prototype._rootContainsTarget=function(t){return a(this.root||e,t)},o.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},o.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=r}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?o/n:this.isIntersecting?1:0}function o(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function i(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),r=Math.min(t.bottom,e.bottom),o=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-o,c=r-n;return s>=0&&c>=0&&{top:n,bottom:r,left:o,right:i,width:s,height:c}}function h(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var n=e;n;){if(n==t)return!0;n=u(n)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)},fadw:function(t,e,n){"use strict";n.r(e);var r=n("cDcd"),o=n.n(r),i=n("faye");n("17x9"),n("QLaP"),n("6DQo");var s=/^-?\d*\.?\d+(px|%)$/;function c(t){var e=(t?t.trim():"0px").split(/\s+/).map(function(t){if(!s.test(t))throw new Error("rootMargin must be a string literal containing pixels and/or percent values");return t}),n=e[0],r=void 0===n?"0px":n,o=e[1],i=void 0===o?r:o,c=e[2],h=void 0===c?r:c,a=e[3];return r+" "+i+" "+h+" "+(void 0===a?i:a)}function h(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length?t.some(function(n,r){return h(t[r],e[r])}):t!==e}var a=new Map;function u(t,e){var n=a.get(t);if(n)for(var r=n.values(),o=void 0;o=r.next().value;)if(o.target===e.target)return o;return null}function l(t,e){for(var n=0;n<t.length;n++){var r=u(e,t[n]);r&&r.handleChange(t[n])}}function p(t){return function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.root||null,n=c(t.rootMargin),r=Array.isArray(t.threshold)?t.threshold:[null!=t.threshold?t.threshold:0],o=a.keys(),i=void 0;i=o.next().value;)if(e===i.root&&n===i.rootMargin&&!h(r,i.thresholds))return i;return null}(t)||new IntersectionObserver(l,t)}var f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var g=["root","rootMargin","threshold"],v=["disabled"].concat(g),b=Object.prototype,y=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,c=Array(s),h=0;h<s;h++)c[h]=arguments[h];return n=r=d(this,t.call.apply(t,[this].concat(c))),r.handleChange=function(t){r.props.onChange(t,r.unobserve),r.props.onlyOnce&&t.isIntersecting&&r.unobserve()},r.handleNode=function(t){"function"==typeof r.props.children.ref&&r.props.children.ref(t),r.targetChanged=null!=(r.renderedTarget&&t)&&r.renderedTarget!==t,r.targetChanged&&r.unobserve(),r.target=t},r.observe=function(){r.target=function(t){return o.a.isValidElement(t)&&"string"==typeof t.type}(r.target)?r.target:Object(i.findDOMNode)(r.target),r.observer=p(r.options),function(t){a.has(t.observer)||a.set(t.observer,new Set),a.get(t.observer).add(t),t.observer.observe(t.target)}(r)},r.unobserve=function(){null!=r.target&&function(t){if(a.has(t.observer)){var e=a.get(t.observer);e.delete(t)&&(e.size>0?t.observer.unobserve(t.target):(t.observer.disconnect(),a.delete(t.observer)))}}(r)},d(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this.props.disabled||this.observe()},e.prototype.componentDidUpdate=function(t){var e=this,n=v.some(function(n){return h(e.props[n],t[n])});n&&this.unobserve(),(this.targetChanged||n)&&(this.props.disabled||this.observe())},e.prototype.componentWillUnmount=function(){this.unobserve()},e.prototype.render=function(){return this.renderedTarget=this.target,o.a.cloneElement(o.a.Children.only(this.props.children),{ref:this.handleNode})},f(e,[{key:"options",get:function(){var t=this;return g.reduce(function(e,n){if(b.hasOwnProperty.call(t.props,n)){var r="root"===n&&"[object String]"===b.toString.call(t.props[n]);e[n]=r?document.querySelector(t.props[n]):t.props[n]}return e},{})}}]),e}(o.a.Component);y.displayName="IntersectionObserver";var m=y;n.d(e,"default",function(){return m}),n.d(e,"parseRootMargin",function(){return c})}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/vendors~hackerrank_r_intersection_observer-9d31dba16d0e12304f70.js.map