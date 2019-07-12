!function(t,e){for(var r in e)t[r]=e[r]}(window,function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.CONST={HEX:"HEX",RGB:"RGB",RGBA:"RGBA",HSL:"HSL",HSLA:"HSLA",CMYK:"CMYK"},e.COLORREGS=((n={})[e.CONST.HEX]=/^#(?:([a-f\d])([a-f\d])([a-f\d])([a-f\d])?|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?)$/i,n[e.CONST.RGB]=/^rgb\s*\(\s*(?:(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)|(\d+)\s*,\s*(\d+)\s*,\s*(\d+))\s*\)$/,n[e.CONST.RGBA]=/^rgba\s*\(\s*(?:(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)|(\d+)\s*,\s*(\d+)\s*,\s*(\d+))\s*,\s*(\d\.?\d*)\s*\)$/,n[e.CONST.HSL]=/^hsl\s*\(\s*(-?\d+\.?\d*)\s*,\s*(\d+\.?\d*)%\s*,\s*(\d+\.?\d*)%s*\)$/,n[e.CONST.HSLA]=/^hsla\s*\(\s*(-?\d+\.?\d*)\s*,\s*(\d+\.?\d*)%\s*,\s*(\d+\.?\d*)%\s*,\s*(\d\.?\d*)\s*\)$/,n[e.CONST.CMYK]=/^(?:device-cmyk|cmyk)\s*\(\s*(?:(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)|(\d\.?\d*)\s*,\s*(\d\.?\d*)\s*,\s*(\d\.?\d*)\s*,\s*(\d\.?\d*))\s*\)$/,n),e.PCENT=/^([\d.]+)%$/,e.HEX=/^0x([a-f\d]{1,2})$/i,e.ERRORS={NOT_ACCEPTED_STRING_INPUT:"The provided string color doesn't have a correct format",NOT_ACCEPTED_OBJECT_INPUT:"The provided color object doesn't have the proper keys"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);e.hasProp=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.percent=function(t){return n.PCENT.test(""+t)?+(""+t).replace(n.PCENT,"$1"):Math.min(+t,100)},e.getDEC=function(t){return 1===t.length&&(t+=t),parseInt(t,16)},e.getHEX=function(t){var e=parseInt(""+t).toString(16).toUpperCase();return 1===e.length?"0x0"+e:"0x"+e},e.toHEX=function(t){var e=parseInt(""+t).toString(16).toUpperCase();return 1===e.length&&(e="0"+e),e},e.getBase255Number=function(t,e){return void 0===e&&(e=!1),!e&&n.PCENT.test(t)?Math.min(255*+t.replace(n.PCENT,"$1")/100,255):n.HEX.test(t)?3===t.length?e?parseInt(t+t.slice(-1))/255:parseInt(t+t.slice(-1)):e?parseInt(t)/255:parseInt(t):Math.min(+t,e?1:255)},e.getCMYKNumber=function(t){return Math.min(n.PCENT.test(t)?+t.replace(n.PCENT,"$1")/100:+t,1)},e.getOrderedArrayString=function(t){return t.sort().join().toUpperCase()},e.round=function(t,e){void 0===e&&(e=0);var r=Math.pow(10,e);return Math.round(+t*r)/r},e.minmax=function(t,e,r){return Math.max(e,Math.min(t,r))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.hueToRGB=function(t,e,r){return r<0&&(r+=6),r>=6&&(r-=6),r<1?Math.round(255*((e-t)*r+t)):r<3?Math.round(255*e):r<4?Math.round(255*((e-t)*(4-r)+t)):Math.round(255*t)},e.hslToRGB=function(t,r,n){t/=60,r/=100;var o=(n/=100)<=.5?n*(r+1):n+r-n*r,u=2*n-o;return{r:e.hueToRGB(u,o,t+2),g:e.hueToRGB(u,o,t),b:e.hueToRGB(u,o,t-2)}},e.cmykToRGB=function(t,e,r,n){return n=1-n,{r:Math.round(255*(1-t)*n),g:Math.round(255*(1-e)*n),b:Math.round(255*(1-r)*n)}},e.rgbToCMYK=function(t,e,r){t/=255,e/=255,r/=255;var n=1-Math.max(t,e,r),o=1-n,u=(o-t)/o,i=(o-e)/o,a=(o-r)/o;return{c:Math.round(100*u),m:Math.round(100*i),y:Math.round(100*a),k:Math.round(100*n)}},e.rgbToHSL=function(t,e,r,n){void 0===n&&(n=1),t/=255,e/=255,r/=255,n=Math.min(n,1);var o=Math.max(t,e,r),u=Math.min(t,e,r),i=o-u,a=0,s=0,c=(o+u)/2;if(0===i)a=0,s=0;else{switch(o){case t:a=(e-r)/i%6;break;case e:a=(r-t)/i+2;break;case r:a=(t-e)/i+4}(a=Math.round(60*a))<0&&(a+=360),s=i/(1-Math.abs(2*c-1))}return{h:a,s:Math.round(100*s),l:Math.round(100*c),a:n}}},function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),u=r(2),i=r(1),a=r(4),s=r(5),c=function(t,e){return"string"==typeof t&&e||"object"==typeof t&&!e},d=function(t,e){return void 0===e&&(e=a.getColorModel(t)),"string"==typeof t?a.getRGBObjectFromString[e](t):a.getRGBObjectFromObject[e](t)},h=function(t,e,r,n,o){var u=n(d(t,e));return r?o(u):u},p=function(){function t(t){this.pi2=360,this.rgb=d(t),this.hsl=u.rgbToHSL(this.rgb.r,this.rgb.g,this.rgb.b,this.rgb.a),this.updateCMYK()}return t.prototype.updateRGB=function(){this.rgb=n({},u.hslToRGB(this.hsl.h,this.hsl.s,this.hsl.l),{a:this.hsl.a})},t.prototype.updateRGBFromCMYK=function(){this.rgb=n({},u.cmykToRGB(this.cmyk.c,this.cmyk.m,this.cmyk.y,this.cmyk.k),{a:this.rgb.a})},t.prototype.updateHSL=function(){this.hsl=n({},u.rgbToHSL(this.rgb.r,this.rgb.g,this.rgb.b),{a:this.rgb.a})},t.prototype.updateCMYK=function(){this.cmyk=u.rgbToCMYK(this.rgb.r,this.rgb.g,this.rgb.b)},t.prototype.updateRGBAndCMYK=function(){return this.updateRGB(),this.updateCMYK(),this},t.prototype.updateHSLAndCMYK=function(){return this.updateHSL(),this.updateCMYK(),this},t.prototype.updateRGBAndHSL=function(){return this.updateRGBFromCMYK(),this.updateHSL(),this},t.prototype.setH=function(t){return t>360?t-=Math.floor(t/this.pi2)*this.pi2:t<0&&(t=Math.ceil(t/this.pi2)*this.pi2-t),this.hsl.h=t,this.updateRGBAndCMYK()},t.prototype.setS=function(t){return this.hsl.s=i.minmax(t,0,100),this.updateRGBAndCMYK()},t.prototype.setL=function(t){return this.hsl.l=i.minmax(t,0,100),this.updateRGBAndCMYK()},t.prototype.setR=function(t){return this.rgb.r=i.minmax(t,0,255),this.updateHSLAndCMYK()},t.prototype.setG=function(t){return this.rgb.g=i.minmax(t,0,255),this.updateHSLAndCMYK()},t.prototype.setB=function(t){return this.rgb.b=i.minmax(t,0,255),this.updateHSLAndCMYK()},t.prototype.setA=function(t){return this.hsl.a=this.rgb.a=i.minmax(t,0,1),this},t.prototype.setC=function(t){return this.cmyk.c=i.minmax(t,0,100),this.updateRGBAndHSL()},t.prototype.setM=function(t){return this.cmyk.m=i.minmax(t,0,100),this.updateRGBAndHSL()},t.prototype.setY=function(t){return this.cmyk.y=i.minmax(t,0,100),this.updateRGBAndHSL()},t.prototype.setK=function(t){return this.cmyk.k=i.minmax(t,0,100),this.updateRGBAndHSL()},Object.defineProperty(t.prototype,"H",{get:function(){return i.round(this.hsl.h)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"S",{get:function(){return i.round(this.hsl.s)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"L",{get:function(){return i.round(this.hsl.l)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"R",{get:function(){return i.round(this.rgb.r)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"G",{get:function(){return i.round(this.rgb.g)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"B",{get:function(){return i.round(this.rgb.b)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"A",{get:function(){return i.round(this.hsl.a,2)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"C",{get:function(){return i.round(this.cmyk.c)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"M",{get:function(){return i.round(this.cmyk.m)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"Y",{get:function(){return i.round(this.cmyk.y)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"K",{get:function(){return i.round(this.cmyk.k)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"HEXObject",{get:function(){return a.translateColor.HEX(this.rgb)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"HEXAObject",{get:function(){return a.translateColor.HEXA(this.rgb)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"RGBObject",{get:function(){var t=n({},this.rgb);return a.translateColor.RGB(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"RGBAObject",{get:function(){var t=n({},this.rgb);return a.translateColor.RGBA(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"HSLObject",{get:function(){return{h:i.round(this.hsl.h),s:i.round(this.hsl.s),l:i.round(this.hsl.l)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"HSLAObject",{get:function(){return{h:i.round(this.hsl.h),s:i.round(this.hsl.s),l:i.round(this.hsl.l),a:i.hasProp(this.hsl,"a")?i.round(this.hsl.a,2):1}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"CMYKObject",{get:function(){return{c:i.round(this.cmyk.c),m:i.round(this.cmyk.m),y:i.round(this.cmyk.y),k:i.round(this.cmyk.k)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"HEX",{get:function(){var t=this.rgb,e={r:t.r,g:t.g,b:t.b};return s.CSS.HEX(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"HEXA",{get:function(){var t=this.rgb,e=t.r,r=t.g,n=t.b,o=t.a,u={r:e,g:r,b:n,a:255*(void 0===o?1:o)};return s.CSS.HEX(u)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"RGB",{get:function(){var t=this.rgb,e={r:t.r,g:t.g,b:t.b};return s.CSS.RGB(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"RGBA",{get:function(){var t=this.rgb,e=t.r,r=t.g,n=t.b,o=t.a,u={r:e,g:r,b:n,a:void 0===o?1:o};return s.CSS.RGB(u)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"HSL",{get:function(){var t=this.hsl,e={h:t.h,s:t.s,l:t.l};return s.CSS.HSL(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"HSLA",{get:function(){var t=this.hsl,e=t.h,r=t.s,n=t.l,o=t.a,u={h:e,s:r,l:n,a:void 0===o?1:o};return s.CSS.HSL(u)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"CMYK",{get:function(){return s.CSS.CMYK(this.cmyk)},enumerable:!0,configurable:!0}),t.toHEX=function(t,e){void 0===e&&(e=!0);var r=a.getColorModel(t);return h(t,r,e,a.translateColor.HEX,s.CSS.HEX)},t.toHEXA=function(t,e){void 0===e&&(e=!0);var r=a.getColorModel(t);return h(t,r,e,a.translateColor.HEXA,s.CSS.HEX)},t.toRGB=function(t,e){void 0===e&&(e=!0);var r=a.getColorModel(t);return h(t,r,e,a.translateColor.RGB,s.CSS.RGB)},t.toRGBA=function(t,e){void 0===e&&(e=!0);var r=a.getColorModel(t);return h(t,r,e,a.translateColor.RGBA,s.CSS.RGB)},t.toHSL=function(t,e){void 0===e&&(e=!0);var r=a.getColorModel(t);return r===o.CONST.HSL&&c(t,e)?t:h(t,r,e,a.translateColor.HSL,s.CSS.HSL)},t.toHSLA=function(t,e){void 0===e&&(e=!0);var r=a.getColorModel(t);return r===o.CONST.HSLA&&c(t,e)?t:h(t,r,e,a.translateColor.HSLA,s.CSS.HSL)},t.toCMYK=function(t,e){void 0===e&&(e=!0);var r=a.getColorModel(t);return r===o.CONST.CMYK&&c(t,e)?t:h(t,r,e,a.translateColor.CMYK,s.CSS.CMYK)},t}();e.ColorTranslator=p},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(1),u=r(2);e.getColorModel=function(t){return"string"==typeof t?function(t){var e;if(Object.keys(n.CONST).some(function(r){if(n.COLORREGS[r].test(t))return e=r,!0}),!e)throw new Error(n.ERRORS.NOT_ACCEPTED_STRING_INPUT);return e}(t):function(t){var e,r=o.getOrderedArrayString(Object.keys(t));if(Object.keys(n.CONST).some(function(t){if(o.getOrderedArrayString(t.split(""))===r)return e=t,!0}),!e)throw new Error(n.ERRORS.NOT_ACCEPTED_OBJECT_INPUT);return e}(t)},e.getRGBObjectFromString={HEX:function(t){var e=t.match(n.COLORREGS.HEX),r={r:o.getDEC(e[1]||e[5]),g:o.getDEC(e[2]||e[6]),b:o.getDEC(e[3]||e[7])},u=e[4]||e[8];return void 0!==u&&(r.a=o.getDEC(u)/255),r},RGB:function(t){var e=t.match(n.COLORREGS.RGB),r=o.getBase255Number(e[1]||e[4]),u=o.getBase255Number(e[2]||e[5]),i=o.getBase255Number(e[3]||e[6]);return{r:Math.min(r,255),g:Math.min(u,255),b:Math.min(i,255)}},RGBA:function(t){var e=t.match(n.COLORREGS.RGBA),r=o.getBase255Number(e[1]||e[4]),u=o.getBase255Number(e[2]||e[5]),i=o.getBase255Number(e[3]||e[6]),a=+e[7];return{r:Math.min(r,255),g:Math.min(u,255),b:Math.min(i,255),a:isNaN(a)||a>1?1:o.round(a,2)}},HSL:function(t){var e=t.match(n.COLORREGS.HSL),r=+e[1],i=o.percent(e[2]),a=o.percent(e[3]);return u.hslToRGB(r,i,a)},HSLA:function(t){var e=t.match(n.COLORREGS.HSLA),r=+e[4],i=+e[1],a=o.percent(e[2]),s=o.percent(e[3]),c=u.hslToRGB(i,a,s);return c.a=isNaN(r)||r>1?1:o.round(r,2),c},CMYK:function(t){var e=t.match(n.COLORREGS.CMYK),r=o.getCMYKNumber(e[1]||e[5]),i=o.getCMYKNumber(e[2]||e[6]),a=o.getCMYKNumber(e[3]||e[7]),s=o.getCMYKNumber(e[4]||e[8]);return u.cmykToRGB(r,i,a,s)}},e.getRGBObjectFromObject={RGB:function(t){return{r:o.getBase255Number(""+t.r),g:o.getBase255Number(""+t.g),b:o.getBase255Number(""+t.b)}},RGBA:function(t){var e=this.RGB(t);return e.a=o.hasProp(t,"a")?Math.min(o.getBase255Number(""+t.a,!0),1):1,e},HSL:function(t){var e=o.percent(""+t.s),r=o.percent(""+t.l);return u.hslToRGB(t.h,e,r)},HSLA:function(t){var e=this.HSL(t);return e.a=isNaN(+t.a)||+t.a>1?1:o.round(t.a,2),e},CMYK:function(t){var e=o.getCMYKNumber(""+t.c),r=o.getCMYKNumber(""+t.m),n=o.getCMYKNumber(""+t.y),i=o.getCMYKNumber(""+t.k);return u.cmykToRGB(e,r,n,i)}},e.translateColor={HEX:function(t){return{r:o.getHEX(t.r),g:o.getHEX(t.g),b:o.getHEX(t.b)}},HEXA:function(t){var r=e.translateColor.HEX(t);return r.a=o.hasProp(t,"a")?o.getHEX(255*t.a):"0xFF",r},RGB:function(t){return o.hasProp(t,"a")&&delete t.a,t},RGBA:function(t){return t.a=o.hasProp(t,"a")?o.round(t.a,2):1,t},HSL:function(t){var e=u.rgbToHSL(t.r,t.g,t.b);return delete e.a,e},HSLA:function(t){var r=e.translateColor.HSL(t);return r.a=o.hasProp(t,"a")?o.round(t.a,2):1,r},CMYK:function(t){return u.rgbToCMYK(t.r,t.g,t.b)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);e.CSS={HEX:function(t){return"#"+n.toHEX(t.r)+n.toHEX(t.g)+n.toHEX(t.b)+(t.a&&n.toHEX(t.a)||"")},RGB:function(t){return"rgb"+(n.hasProp(t,"a")?"a":"")+"("+n.round(t.r)+","+n.round(t.g)+","+n.round(t.b)+(n.hasProp(t,"a")&&","+n.round(t.a,2)||"")+")"},HSL:function(t){return"hsl"+(n.hasProp(t,"a")?"a":"")+"("+n.round(t.h)+","+n.round(t.s)+"%,"+n.round(t.l)+"%"+(n.hasProp(t,"a")&&","+n.round(t.a,2)||"")+")"},CMYK:function(t){return"cmyk("+n.round(t.c)+"%,"+n.round(t.m)+"%,"+n.round(t.y)+"%,"+n.round(t.k)+"%)"}}}]));