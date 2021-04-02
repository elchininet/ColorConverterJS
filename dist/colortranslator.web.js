(()=>{"use strict";var r={992:(r,t,e)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.CSS=void 0;var n=e(37),a=e(489);t.CSS=((o={})[n.ColorModel.HEX]=function(r){return"#"+a.toHEX(r.r)+a.toHEX(r.g)+a.toHEX(r.b)+(r.a&&a.toHEX(r.a)||"")},o[n.ColorModel.RGB]=function(r){return"rgb"+(a.hasProp(r,"a")?"a":"")+"("+a.round(r.r)+","+a.round(r.g)+","+a.round(r.b)+(a.hasProp(r,"a")&&","+a.round(r.a,2)||"")+")"},o[n.ColorModel.HSL]=function(r){return"hsl"+(a.hasProp(r,"a")?"a":"")+"("+a.round(r.h)+","+a.round(r.s)+"%,"+a.round(r.l)+"%"+(a.hasProp(r,"a")&&","+a.round(r.a,2)||"")+")"},o[n.ColorModel.CMYK]=function(r){return"cmyk("+a.round(r.c)+"%,"+a.round(r.m)+"%,"+a.round(r.y)+"%,"+a.round(r.k)+"%)"},o)},765:(r,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rybToRGB=t.rgbToRYB=t.rgbToHSL=t.rgbToCMYK=t.cmykToRGB=t.hslToRGB=t.hueToRGB=void 0,t.hueToRGB=function(r,t,e){return e<0&&(e+=6),e>=6&&(e-=6),e<1?Math.round(255*((t-r)*e+r)):e<3?Math.round(255*t):e<4?Math.round(255*((t-r)*(4-e)+r)):Math.round(255*r)},t.hslToRGB=function(r,e,o){r/=60,e/=100;var n=(o/=100)<=.5?o*(e+1):o+e-o*e,a=2*o-n;return{r:t.hueToRGB(a,n,r+2),g:t.hueToRGB(a,n,r),b:t.hueToRGB(a,n,r-2)}},t.cmykToRGB=function(r,t,e,o){return o=1-o,{r:Math.round(255*(1-r)*o),g:Math.round(255*(1-t)*o),b:Math.round(255*(1-e)*o)}},t.rgbToCMYK=function(r,t,e){r/=255,t/=255,e/=255;var o=1-Math.max(r,t,e),n=1-o,a=(n-r)/n,i=(n-t)/n,u=(n-e)/n;return{c:Math.round(100*a),m:Math.round(100*i),y:Math.round(100*u),k:Math.round(100*o)}},t.rgbToHSL=function(r,t,e,o){void 0===o&&(o=1),r/=255,t/=255,e/=255,o=Math.min(o,1);var n=Math.max(r,t,e),a=Math.min(r,t,e),i=n-a,u=0,l=0,s=(n+a)/2;if(0===i)u=0,l=0;else{switch(n){case r:u=(t-e)/i%6;break;case t:u=(e-r)/i+2;break;case e:u=(r-t)/i+4}(u=Math.round(60*u))<0&&(u+=360),l=i/(1-Math.abs(2*s-1))}return{h:u,s:Math.round(100*l),l:Math.round(100*s),a:o}},t.rgbToRYB=function(r,t,e){var o=Math.min(r,t,e),n=Math.min(255-r,255-t,255-e),a=r-o,i=t-o,u=e-o,l=Math.min(a,i),s=a-l,c=(i+l)/2,d=(u+i-l)/2,h=Math.max(s,c,d,1)/Math.max(a,i,u,1);return{r:s/h+n,y:c/h+n,b:d/h+n}},t.rybToRGB=function(r,t,e){var o=Math.min(r,t,e),n=Math.min(255-r,255-t,255-e),a=r-o,i=t-o,u=e-o,l=Math.min(i,u),s=a+i-l,c=i+2*l,d=2*(u-l),h=Math.max(s,c,d,1)/Math.max(a,i,u,1);return{r:s/h+n,g:c/h+n,b:d/h+n}}},845:function(r,t,e){var o,n,a,i,u,l=this&&this.__assign||function(){return(l=Object.assign||function(r){for(var t,e=1,o=arguments.length;e<o;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}).apply(this,arguments)},s=this&&this.__spreadArray||function(r,t){for(var e=0,o=t.length,n=r.length;e<o;e++,n++)r[n]=t[e];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.colorMixer=t.colorHarmony=t.blend=t.translateColor=t.getRGBObject=t.getRGBObjectFromObject=t.getRGBObjectFromString=t.getColorModel=t.square=t.tetradic=t.triadic=t.splitComplementary=t.complementary=t.analogous=t.normalizeAlpha=t.normalizeHue=void 0;var c=e(37),d=e(489),h=e(765),f=e(992);t.normalizeHue=function(r){return(r>360||r<0)&&(r-=360*Math.floor(r/360)),r},t.normalizeAlpha=function(r){return isNaN(+r)||r>1?1:d.round(r,2)};var p=function(r,e){return e.reduce((function(e,o){return s(s([],e),[l(l({},r),{h:t.normalizeHue(r.h+o)})])}),[l({},r)])};t.analogous=function(r){return p(r,[30,-30])},t.complementary=function(r){return p(r,[180])},t.splitComplementary=function(r){return p(r,[150,-150])},t.triadic=function(r){return p(r,[120,-120])},t.tetradic=function(r){return p(r,[60,-120,180])},t.square=function(r){return p(r,[90,-90,180])},t.getColorModel=function(r){return"string"==typeof r?function(r){var t;if(Object.keys(c.ColorModel).some((function(e){if(c.COLORREGS[e].test(r))return t=e,!0})),!t)throw new Error(c.ERRORS.NOT_ACCEPTED_STRING_INPUT);return t}(r):function(r){var t,e=!1,o=d.getOrderedArrayString(Object.keys(r));if(Object.keys(c.ColorModel).filter((function(r){return r!==c.ColorModel.HEX})).some((function(r){if(d.getOrderedArrayString(r.split(""))===o)return t=r,!0})),t&&t===c.ColorModel.RGB||t===c.ColorModel.RGBA){var n=Object.entries(r).map((function(r){return c.HEX.test(""+r[1])})),a=Object.entries(r).map((function(r){return c.PCENT.test(""+r[1])||!c.HEX.test(""+r[1])&&!isNaN(+r[1])&&+r[1]<=255})),i=n.some((function(r,t){return t>0&&r!==n[t-1]})),u=a.some((function(r,t){return t>0&&r!==a[t-1]}));!(e=i||u||!n[0]&&!a[0])&&n[0]&&(t=c.ColorModel.HEX)}if(!t||e)throw new Error(c.ERRORS.NOT_ACCEPTED_OBJECT_INPUT);return t}(r)},t.getRGBObjectFromString=((o={})[c.ColorModel.HEX]=function(r){var t=r.match(c.COLORREGS.HEX),e={r:d.getDEC(t[1]||t[5]),g:d.getDEC(t[2]||t[6]),b:d.getDEC(t[3]||t[7])},o=t[4]||t[8];return void 0!==o&&(e.a=d.getDEC(o)/255),e},o[c.ColorModel.RGB]=function(r){var t=r.match(c.COLORREGS.RGB),e=d.getBase255Number(t[1]||t[4]),o=d.getBase255Number(t[2]||t[5]),n=d.getBase255Number(t[3]||t[6]);return{r:Math.min(e,255),g:Math.min(o,255),b:Math.min(n,255)}},o[c.ColorModel.RGBA]=function(r){var e=r.match(c.COLORREGS.RGBA),o=d.getBase255Number(e[1]||e[4]),n=d.getBase255Number(e[2]||e[5]),a=d.getBase255Number(e[3]||e[6]),i=+e[7];return{r:Math.min(o,255),g:Math.min(n,255),b:Math.min(a,255),a:t.normalizeAlpha(i)}},o[c.ColorModel.HSL]=function(r){var e=r.match(c.COLORREGS.HSL),o=t.normalizeHue(+e[1]),n=d.percent(e[2]),a=d.percent(e[3]);return h.hslToRGB(o,n,a)},o[c.ColorModel.HSLA]=function(r){var e=r.match(c.COLORREGS.HSLA),o=t.normalizeHue(+e[1]),n=d.percent(e[2]),a=d.percent(e[3]),i=+e[4],u=h.hslToRGB(o,n,a);return u.a=t.normalizeAlpha(i),u},o[c.ColorModel.CMYK]=function(r){var t=r.match(c.COLORREGS.CMYK),e=d.getCMYKNumber(t[1]||t[5]),o=d.getCMYKNumber(t[2]||t[6]),n=d.getCMYKNumber(t[3]||t[7]),a=d.getCMYKNumber(t[4]||t[8]);return h.cmykToRGB(e,o,n,a)},o),t.getRGBObjectFromObject=((n={})[c.ColorModel.HEX]=function(r){var t={r:d.getBase255Number(""+r.r),g:d.getBase255Number(""+r.g),b:d.getBase255Number(""+r.b)};return t.a=d.hasProp(r,"a")?Math.min(d.getBase255Number(""+r.a,!0),1):1,t},n[c.ColorModel.RGB]=function(r){var t=this.HEX(r);return delete t.a,t},n[c.ColorModel.RGBA]=function(r){return this.HEX(r)},n[c.ColorModel.HSL]=function(r){var e=d.percent(""+r.s),o=d.percent(""+r.l);return h.hslToRGB(t.normalizeHue(r.h),e,o)},n[c.ColorModel.HSLA]=function(r){var e=this.HSL(r);return e.a=t.normalizeAlpha(r.a),e},n[c.ColorModel.CMYK]=function(r){var t=d.getCMYKNumber(""+r.c),e=d.getCMYKNumber(""+r.m),o=d.getCMYKNumber(""+r.y),n=d.getCMYKNumber(""+r.k);return h.cmykToRGB(t,e,o,n)},n),t.getRGBObject=function(r,e){return void 0===e&&(e=t.getColorModel(r)),"string"==typeof r?t.getRGBObjectFromString[e](r):t.getRGBObjectFromObject[e](r)},t.translateColor=((a={})[c.ColorModel.HEX]=function(r){return{r:d.getHEX(r.r),g:d.getHEX(r.g),b:d.getHEX(r.b)}},a.HEXA=function(r){var e=t.translateColor.HEX(r);return e.a=d.hasProp(r,"a")?d.getHEX(255*r.a):"0xFF",e},a[c.ColorModel.RGB]=function(r){return d.hasProp(r,"a")&&delete r.a,r},a[c.ColorModel.RGBA]=function(r){return r.a=d.hasProp(r,"a")?d.round(r.a,2):1,r},a[c.ColorModel.HSL]=function(r){var t=h.rgbToHSL(r.r,r.g,r.b);return delete t.a,t},a[c.ColorModel.HSLA]=function(r){var e=t.translateColor.HSL(r);return e.a=d.hasProp(r,"a")?d.round(r.a,2):1,e},a[c.ColorModel.CMYK]=function(r){return h.rgbToCMYK(r.r,r.g,r.b)},a),t.blend=function(r,e,o){var n=o-1,a=(e.r-r.r)/n,i=(e.g-r.g)/n,u=(e.b-r.b)/n,l=t.normalizeAlpha(r.a),s=(t.normalizeAlpha(e.a)-l)/n;return Array(o).fill(null).map((function(t,o){return 0===o?r:o===n?e:{r:d.round(r.r+a*o),g:d.round(r.g+i*o),b:d.round(r.b+u*o),a:d.round(l+s*o,2)}}))},t.colorHarmony=((i={buildHarmony:function(r,e){var o=t.getColorModel(r),n=t.getRGBObject(r,o),a=h.rgbToHSL(n.r,n.g,n.b,n.a),i="string"==typeof r&&d.hasProp(n,"a")||"string"!=typeof r&&d.hasProp(r,"a"),u="string"==typeof r;switch(o){case c.ColorModel.HEX:default:return i?this.HEXA(a,e,u):this.HEX(a,e,u);case c.ColorModel.HSL:return this.HSL(a,e,u);case c.ColorModel.HSLA:return this.HSLA(a,e,u);case c.ColorModel.RGB:return this.RGB(a,e,u);case c.ColorModel.RGBA:return this.RGBA(a,e,u)}}})[c.ColorModel.HEX]=function(r,e,o){return e(r).map((function(r){return o?f.CSS.HEX(h.hslToRGB(r.h,r.s,r.l)):t.translateColor.HEX(h.hslToRGB(r.h,r.s,r.l))}))},i.HEXA=function(r,e,o){return e(r).map((function(r){return o?f.CSS.HEX(l(l({},h.hslToRGB(r.h,r.s,r.l)),{a:255*t.normalizeAlpha(r.a)})):t.translateColor.HEXA(l(l({},h.hslToRGB(r.h,r.s,r.l)),{a:t.normalizeAlpha(r.a)}))}))},i[c.ColorModel.RGB]=function(r,e,o){return e(r).map((function(r){return o?f.CSS.RGB(h.hslToRGB(r.h,r.s,r.l)):t.translateColor.RGB(h.hslToRGB(r.h,r.s,r.l))}))},i[c.ColorModel.RGBA]=function(r,e,o){return e(r).map((function(r){return o?f.CSS.RGB(l(l({},h.hslToRGB(r.h,r.s,r.l)),{a:t.normalizeAlpha(r.a)})):t.translateColor.RGBA(l(l({},h.hslToRGB(r.h,r.s,r.l)),{a:t.normalizeAlpha(r.a)}))}))},i[c.ColorModel.HSL]=function(r,e,o){return e(r).map((function(r){return o?f.CSS.HSL({h:r.h,s:r.s,l:r.l}):t.translateColor.HSL(h.hslToRGB(r.h,r.s,r.l))}))},i[c.ColorModel.HSLA]=function(r,e,o){return e(r).map((function(r){return o?f.CSS.HSL(l(l({},r),{a:t.normalizeAlpha(r.a)})):t.translateColor.HSLA(l(l({},h.hslToRGB(r.h,r.s,r.l)),{a:t.normalizeAlpha(r.a)}))}))},i),t.colorMixer=((u={mix:function(r,e){var o,n=r.map((function(r){var e=t.getColorModel(r);return t.getRGBObject(r,e)})),a=e===c.Mix.SUBTRACTIVE?n.map((function(r){var t=h.rgbToRYB(r.r,r.g,r.b);return d.hasProp(r,"a")&&(t.a=r.a),t})):null;function i(r){var t=e===c.Mix.ADDITIVE?{r:0,g:0,b:0,a:0}:{r:0,y:0,b:0,a:0};return r.reduce((function(r,t){var o=d.hasProp(t,"a")?t.a:1,n={r:r.r+t.r*o,b:r.b+t.b*o,a:1-(1-o)*(1-r.a)};return l(l({},n),e===c.Mix.ADDITIVE?{g:r.g+t.g*o}:{y:r.y+t.y*o})}),t)}if(e===c.Mix.ADDITIVE)o=i(n);else{var u=i(a);(o=h.rybToRGB(u.r,u.y,u.b)).a=u.a}return{r:d.minmax(o.r,0,255),g:d.minmax(o.g,0,255),b:d.minmax(o.b,0,255),a:d.minmax(o.a,0,1)}}})[c.ColorModel.HEX]=function(r,e,o){var n=this.mix(r,e);return delete n.a,o?f.CSS.HEX(n):t.translateColor.HEX(n)},u.HEXA=function(r,e,o){var n=this.mix(r,e);return n.a=o?255*t.normalizeAlpha(n.a):t.normalizeAlpha(n.a),o?f.CSS.HEX(n):t.translateColor.HEXA(n)},u[c.ColorModel.RGB]=function(r,e,o){var n=this.mix(r,e);return delete n.a,o?f.CSS.RGB(n):t.translateColor.RGB(n)},u[c.ColorModel.RGBA]=function(r,e,o){var n=this.mix(r,e);return o?f.CSS.RGB(n):t.translateColor.RGBA(n)},u[c.ColorModel.HSL]=function(r,e,o){var n=this.mix(r,e),a=h.rgbToHSL(n.r,n.g,n.b);return delete n.a,delete a.a,o?f.CSS.HSL(a):t.translateColor.HSL(n)},u[c.ColorModel.HSLA]=function(r,e,o){var n=this.mix(r,e),a=h.rgbToHSL(n.r,n.g,n.b,n.a);return o?f.CSS.HSL(a):t.translateColor.HSLA(n)},u)},37:(r,t)=>{var e,o,n,a;Object.defineProperty(t,"__esModule",{value:!0}),t.ERRORS=t.HEX=t.PCENT=t.COLORREGS=t.Mix=t.Harmony=t.ColorModel=void 0,function(r){r.HEX="HEX",r.RGB="RGB",r.RGBA="RGBA",r.HSL="HSL",r.HSLA="HSLA",r.CMYK="CMYK"}(o=t.ColorModel||(t.ColorModel={})),(a=t.Harmony||(t.Harmony={})).ANALOGOUS="ANALOGOUS",a.COMPLEMENTARY="COMPLEMENTARY",a.SPLIT_COMPLEMENTARY="SPLIT_COMPLEMENTARY",a.TRIADIC="TRIADIC",a.TETRADIC="TETRADIC",a.SQUARE="SQUARE",(n=t.Mix||(t.Mix={})).ADDITIVE="ADDITIVE",n.SUBTRACTIVE="SUBTRACTIVE",t.COLORREGS=((e={})[o.HEX]=/^#(?:([a-f\d])([a-f\d])([a-f\d])([a-f\d])?|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?)$/i,e[o.RGB]=/^rgb\s*\(\s*(?:(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)|(\d+)\s*,\s*(\d+)\s*,\s*(\d+))\s*\)$/,e[o.RGBA]=/^rgba\s*\(\s*(?:(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)|(\d+)\s*,\s*(\d+)\s*,\s*(\d+))\s*,\s*(\d\.?\d*)\s*\)$/,e[o.HSL]=/^hsl\s*\(\s*(-?\d+\.?\d*)\s*,\s*(\d+\.?\d*)%\s*,\s*(\d+\.?\d*)%s*\)$/,e[o.HSLA]=/^hsla\s*\(\s*(-?\d+\.?\d*)\s*,\s*(\d+\.?\d*)%\s*,\s*(\d+\.?\d*)%\s*,\s*(\d\.?\d*)\s*\)$/,e[o.CMYK]=/^(?:device-cmyk|cmyk)\s*\(\s*(?:(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)|(\d\.?\d*)\s*,\s*(\d\.?\d*)\s*,\s*(\d\.?\d*)\s*,\s*(\d\.?\d*))\s*\)$/,e),t.PCENT=/^(\d+(?:\.\d+)?|\.\d+)%$/,t.HEX=/^0x([a-f\d]{1,2})$/i,t.ERRORS={NOT_ACCEPTED_STRING_INPUT:"The provided string color doesn't have a correct format",NOT_ACCEPTED_OBJECT_INPUT:"The provided color object doesn't have the proper keys or format"}},489:(r,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.minmax=t.round=t.getOrderedArrayString=t.getCMYKNumber=t.getBase255Number=t.toHEX=t.getHEX=t.getDEC=t.percent=t.hasProp=void 0;var o=e(37);t.hasProp=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},t.percent=function(r){return o.PCENT.test(""+r)?+(""+r).replace(o.PCENT,"$1"):Math.min(+r,100)},t.getDEC=function(r){return 1===r.length&&(r+=r),parseInt(r,16)},t.getHEX=function(r){var t=parseInt(""+r).toString(16).toUpperCase();return 1===t.length?"0x0"+t:"0x"+t},t.toHEX=function(r){var t=parseInt(""+r).toString(16).toUpperCase();return 1===t.length&&(t="0"+t),t},t.getBase255Number=function(r,t){return void 0===t&&(t=!1),!t&&o.PCENT.test(r)?Math.min(255*+r.replace(o.PCENT,"$1")/100,255):o.HEX.test(r)?3===r.length?t?parseInt(r+r.slice(-1))/255:parseInt(r+r.slice(-1)):t?parseInt(r)/255:parseInt(r):Math.min(+r,t?1:255)},t.getCMYKNumber=function(r){return Math.min(o.PCENT.test(r)?+r.replace(o.PCENT,"$1")/100:+r,1)},t.getOrderedArrayString=function(r){return r.sort().join().toUpperCase()},t.round=function(r,t){void 0===t&&(t=0);var e=Math.pow(10,t);return Math.round(+r*e)/e},t.minmax=function(r,t,e){return Math.max(t,Math.min(r,e))}},607:function(r,t,e){var o=this&&this.__assign||function(){return(o=Object.assign||function(r){for(var t,e=1,o=arguments.length;e<o;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Mix=t.Harmony=t.ColorTranslator=void 0;var n=e(37);Object.defineProperty(t,"Harmony",{enumerable:!0,get:function(){return n.Harmony}}),Object.defineProperty(t,"Mix",{enumerable:!0,get:function(){return n.Mix}});var a=e(765),i=e(845),u=e(992),l=e(489),s=function(r,t){return"string"==typeof r&&t||"object"==typeof r&&!t},c=function(r,t,e,o,n){var a=o(i.getRGBObject(r,t));return e?n(a):a},d=function(r,t,e,o,n,a){e<1&&(e=5);var u=i.getRGBObject(r),l=i.getRGBObject(t);return i.blend(u,l,e).map((function(r){var t=n(r);return o?a(t):t}))},h=function(){function r(r){this.rgb=i.getRGBObject(r),this.updateHSL(),this.updateCMYK()}return r.prototype.updateRGB=function(){this.rgb=o(o({},a.hslToRGB(this.hsl.h,this.hsl.s,this.hsl.l)),{a:this.hsl.a})},r.prototype.updateRGBFromCMYK=function(){this.rgb=o(o({},a.cmykToRGB(this.cmyk.c,this.cmyk.m,this.cmyk.y,this.cmyk.k)),{a:this.rgb.a})},r.prototype.updateHSL=function(){this.hsl=a.rgbToHSL(this.rgb.r,this.rgb.g,this.rgb.b,this.rgb.a)},r.prototype.updateCMYK=function(){this.cmyk=a.rgbToCMYK(this.rgb.r,this.rgb.g,this.rgb.b)},r.prototype.updateRGBAndCMYK=function(){return this.updateRGB(),this.updateCMYK(),this},r.prototype.updateHSLAndCMYK=function(){return this.updateHSL(),this.updateCMYK(),this},r.prototype.updateRGBAndHSL=function(){return this.updateRGBFromCMYK(),this.updateHSL(),this},r.prototype.setH=function(r){return this.hsl.h=i.normalizeHue(r),this.updateRGBAndCMYK()},r.prototype.setS=function(r){return this.hsl.s=l.minmax(r,0,100),this.updateRGBAndCMYK()},r.prototype.setL=function(r){return this.hsl.l=l.minmax(r,0,100),this.updateRGBAndCMYK()},r.prototype.setR=function(r){return this.rgb.r=l.minmax(r,0,255),this.updateHSLAndCMYK()},r.prototype.setG=function(r){return this.rgb.g=l.minmax(r,0,255),this.updateHSLAndCMYK()},r.prototype.setB=function(r){return this.rgb.b=l.minmax(r,0,255),this.updateHSLAndCMYK()},r.prototype.setA=function(r){return this.hsl.a=this.rgb.a=l.minmax(r,0,1),this},r.prototype.setC=function(r){return this.cmyk.c=l.minmax(r,0,100),this.updateRGBAndHSL()},r.prototype.setM=function(r){return this.cmyk.m=l.minmax(r,0,100),this.updateRGBAndHSL()},r.prototype.setY=function(r){return this.cmyk.y=l.minmax(r,0,100),this.updateRGBAndHSL()},r.prototype.setK=function(r){return this.cmyk.k=l.minmax(r,0,100),this.updateRGBAndHSL()},Object.defineProperty(r.prototype,"H",{get:function(){return l.round(this.hsl.h)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"S",{get:function(){return l.round(this.hsl.s)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"L",{get:function(){return l.round(this.hsl.l)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"R",{get:function(){return l.round(this.rgb.r)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"G",{get:function(){return l.round(this.rgb.g)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"B",{get:function(){return l.round(this.rgb.b)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"A",{get:function(){return l.round(this.hsl.a,2)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"C",{get:function(){return l.round(this.cmyk.c)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"M",{get:function(){return l.round(this.cmyk.m)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"Y",{get:function(){return l.round(this.cmyk.y)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"K",{get:function(){return l.round(this.cmyk.k)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"HEXObject",{get:function(){return i.translateColor.HEX(this.rgb)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"HEXAObject",{get:function(){return i.translateColor.HEXA(this.rgb)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"RGBObject",{get:function(){return{r:this.R,g:this.G,b:this.B}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"RGBAObject",{get:function(){return o(o({},this.RGBObject),{a:this.A})},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"HSLObject",{get:function(){return{h:this.H,s:this.S,l:this.L}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"HSLAObject",{get:function(){return o(o({},this.HSLObject),{a:this.A})},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"CMYKObject",{get:function(){return{c:this.C,m:this.M,y:this.Y,k:this.K}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"HEX",{get:function(){var r=this.rgb,t={r:r.r,g:r.g,b:r.b};return u.CSS.HEX(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"HEXA",{get:function(){var r=this.rgb,t={r:r.r,g:r.g,b:r.b,a:255*this.A};return u.CSS.HEX(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"RGB",{get:function(){var r=this.rgb,t={r:r.r,g:r.g,b:r.b};return u.CSS.RGB(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"RGBA",{get:function(){var r=this.rgb,t={r:r.r,g:r.g,b:r.b,a:this.A};return u.CSS.RGB(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"HSL",{get:function(){var r=this.hsl,t={h:r.h,s:r.s,l:r.l};return u.CSS.HSL(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"HSLA",{get:function(){return u.CSS.HSL(this.hsl)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"CMYK",{get:function(){return u.CSS.CMYK(this.cmyk)},enumerable:!1,configurable:!0}),r.toHEX=function(r,t){void 0===t&&(t=!0);var e=i.getColorModel(r);return c(r,e,t,i.translateColor.HEX,u.CSS.HEX)},r.toHEXA=function(r,t){void 0===t&&(t=!0);var e=i.getColorModel(r);return c(r,e,t,i.translateColor.HEXA,u.CSS.HEX)},r.toRGB=function(r,t){void 0===t&&(t=!0);var e=i.getColorModel(r);return c(r,e,t,i.translateColor.RGB,u.CSS.RGB)},r.toRGBA=function(r,t){void 0===t&&(t=!0);var e=i.getColorModel(r);return c(r,e,t,i.translateColor.RGBA,u.CSS.RGB)},r.toHSL=function(r,t){void 0===t&&(t=!0);var e=i.getColorModel(r);return e===n.ColorModel.HSL&&s(r,t)?r:c(r,e,t,i.translateColor.HSL,u.CSS.HSL)},r.toHSLA=function(r,t){void 0===t&&(t=!0);var e=i.getColorModel(r);return e===n.ColorModel.HSLA&&s(r,t)?r:c(r,e,t,i.translateColor.HSLA,u.CSS.HSL)},r.toCMYK=function(r,t){void 0===t&&(t=!0);var e=i.getColorModel(r);return e===n.ColorModel.CMYK&&s(r,t)?r:c(r,e,t,i.translateColor.CMYK,u.CSS.CMYK)},r.getBlendHEX=function(r,t,e,o){return void 0===e&&(e=5),void 0===o&&(o=!0),d(r,t,e,o,i.translateColor.HEX,u.CSS.HEX)},r.getBlendHEXA=function(r,t,e,o){return void 0===e&&(e=5),void 0===o&&(o=!0),d(r,t,e,o,i.translateColor.HEXA,u.CSS.HEX)},r.getBlendRGB=function(r,t,e,o){return void 0===e&&(e=5),void 0===o&&(o=!0),d(r,t,e,o,i.translateColor.RGB,u.CSS.RGB)},r.getBlendRGBA=function(r,t,e,o){return void 0===e&&(e=5),void 0===o&&(o=!0),d(r,t,e,o,i.translateColor.RGBA,u.CSS.RGB)},r.getBlendHSL=function(r,t,e,o){return void 0===e&&(e=5),void 0===o&&(o=!0),d(r,t,e,o,i.translateColor.HSL,u.CSS.HSL)},r.getBlendHSLA=function(r,t,e,o){return void 0===e&&(e=5),void 0===o&&(o=!0),d(r,t,e,o,i.translateColor.HSLA,u.CSS.HSL)},r.getMixHEX=function(r,t,e){return void 0===t&&(t=n.Mix.ADDITIVE),void 0===e&&(e=!0),i.colorMixer.HEX(r,t,e)},r.getMixHEXA=function(r,t,e){return void 0===t&&(t=n.Mix.ADDITIVE),void 0===e&&(e=!0),i.colorMixer.HEXA(r,t,e)},r.getMixRGB=function(r,t,e){return void 0===t&&(t=n.Mix.ADDITIVE),void 0===e&&(e=!0),i.colorMixer.RGB(r,t,e)},r.getMixRGBA=function(r,t,e){return void 0===t&&(t=n.Mix.ADDITIVE),void 0===e&&(e=!0),i.colorMixer.RGBA(r,t,e)},r.getMixHSL=function(r,t,e){return void 0===t&&(t=n.Mix.ADDITIVE),void 0===e&&(e=!0),i.colorMixer.HSL(r,t,e)},r.getMixHSLA=function(r,t,e){return void 0===t&&(t=n.Mix.ADDITIVE),void 0===e&&(e=!0),i.colorMixer.HSLA(r,t,e)},r.getHarmony=function(r,t){switch(void 0===t&&(t=n.Harmony.COMPLEMENTARY),t){case n.Harmony.ANALOGOUS:return i.colorHarmony.buildHarmony(r,i.analogous);case n.Harmony.SPLIT_COMPLEMENTARY:return i.colorHarmony.buildHarmony(r,i.splitComplementary);case n.Harmony.TRIADIC:return i.colorHarmony.buildHarmony(r,i.triadic);case n.Harmony.TETRADIC:return i.colorHarmony.buildHarmony(r,i.tetradic);case n.Harmony.SQUARE:return i.colorHarmony.buildHarmony(r,i.square);default:return i.colorHarmony.buildHarmony(r,i.complementary)}},r}();t.ColorTranslator=h}},t={},e=function e(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return r[o].call(a.exports,a,a.exports,e),a.exports}(607),o=window;for(var n in e)o[n]=e[n];e.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();