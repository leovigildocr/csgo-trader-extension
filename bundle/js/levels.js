var levels=webpackJsonp_name_([4],{353:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(30),l=n.n(s),u=n(54),c=n(34),p=n(45),f=n(50),d=(n(70),n(372)),v=(n.n(d),function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.onLoad=function(){function e(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!l()(".badge_details_set_favorite").length){e.next=5;break}return e.next=3,c.a.get({show_levelup:p.a.show_levelup});case 3:n=e.sent,setTimeout(function(){n.show_levelup&&t.addPanel()},300);case 5:case"end":return e.stop()}},e,this)}));return e}(),t.addPanel=function(){var e=this,n=parseInt(l()(".profile_xp_block .friendPlayerLevel").text(),10),a=parseInt(l()(".profile_xp_block .profile_xp_block_xp").text().replace(",","").match(/(\d+)/i)[1],10),o=l()('\n      <div class="level_up_block">\n        <div class="level_up_levels">\n          <label for="next_level">\n            '+i18next.t("controls:badges.your_level")+':\n            <input type="number" id="next_level" min="'+(n+1)+'">\n          </label>\n        </div>\n        <div class="level_up_results">\n          <div class="count">'+i18next.t("controls:badges.need_cardsets")+': <span class="value"></span></div>\n          <div class="error"></div>\n        </div>\n        <div class="level_up_controls">\n          <button class="btn btn_primary update">'+i18next.t("controls:badges.levelup")+'</button>\n        </div>\n        <div class="beta"></div>\n      </div>\n    ');o.insertAfter(".maincontent .profile_xp_block"),o.find("#next_level").change(function(e){var n=e.currentTarget.value,r=t.getXP(n),i=r-a,s=Math.ceil(i/100);o.find(".level_up_results .count .value").text(s)}),o.find("#next_level").val(n+1).trigger("change"),o.find("#next_level").keypress(function(e){return e.preventDefault()}),o.find(".level_up_controls .update").click(r(regeneratorRuntime.mark(function t(){var n,r,a,i,s,l,u,c,p,d,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getActiveUserSteamID();case 3:return n=e.sent,e.next=6,f.a.apiRequest({method:"GET",url:f.b+"/steam/GetPlayerBadges",data:{steamid:n}});case 6:if(r=e.sent,!r.success){e.next=23;break}return a=r.data.badges,i=void 0===a?[]:a,s=i.filter(function(e){return e.appid&&5===e.level}).map(function(e){return e.appid}).join(","),l=o.find(".level_up_results .count .value").text(),e.next=13,f.a.apiRequest({method:"GET",url:f.b+"/steam/badges",data:{count:l,exclude:s}});case 13:if(u=e.sent,!u.success){e.next=20;break}for(c=u.data,p=c.reduce(function(e,t){return e.concat(t.items.map(function(e){return encodeURIComponent(e)}))},[]),d=0;d<Math.ceil(p.length/100);d+=1)v=p.slice(100*d,100*(d+1)),window.open("https://steamcommunity.com/market/multibuy?appid=753&contextid=6&items[]="+v.join("&items[]="),"_blank");e.next=21;break;case 20:throw Error("NO DATA");case 21:e.next=24;break;case 23:throw Error("Error");case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),o.find(".level_up_results .error").text("Sorry! Something went wrong :-(");case 29:case"end":return e.stop()}},t,e,[[0,26]])})))},t}(u.a));v.getXP=function(e){for(var t=Math.ceil(parseInt(e,10)/10),n=100*t*(e-10*(t-1)),r=1;r<t;r+=1)n+=1e3*r;return n},t.default=new v},372:function(e,t){},424:function(e,t,n){n(14),e.exports=n(353)}},[424]);