var profile=webpackJsonp_name_([2],{354:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(i,a){try{var o=e[i](a),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(30),c=n.n(s),l=n(365),u=n(34),p=n(45),f=n(50),d=n(54),m=(n(70),n(413)),h=n.n(m),v=n(373),g=(n.n(v),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),y=function(t){function e(){return i(this,e),a(this,t.apply(this,arguments))}return o(e,t),e.prototype.onLoad=function(){function t(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function t(){var n,r,i,a,o,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.location.pathname.split("/").filter(function(t){return""!==t}),r=new l.a,t.next=4,u.a.get({show_steamrep:p.a.show_steamrep,show_permalink:p.a.show_permalink,show_related_accounts:p.a.show_related_accounts,related_accounts:p.a.related_accounts});case 4:if(i=t.sent,!i.show_steamrep||2!==n.length){t.next=14;break}return a=f.a.getSteamID(),t.next=9,f.a.getPlayerBans(a);case 9:return o=t.sent,t.next=12,r.searchBanInfo(""+window.location);case 12:s=t.sent,e.addBanInfo(g({},o[a],s));case 14:i.show_permalink&&e.addProfilePermalink(),e.addOtherProfileLinks(i.show_related_accounts,i.related_accounts);case 16:case"end":return t.stop()}},t,this)}));return t}(),e.getContainer=function(){var t=c()(".profile_rightcol");return t.find(".profile_in_game").length&&(t=t.find(".profile_in_game")),t},e.addProfilePermalink=function(){var t=e.getContainer();t&&(t.append('\n        <div class="permalink">\n          <h3 class="title">Permanent link</h3>\n          <div class="input-group">\n            <input id="profilelink" value="'+f.a.getProfileLink()+'" readonly>\n            <div class="input-group-append">\n              <button class="btn">\n                  <img src="'+chrome.extension.getURL("assets/icons/clippy.svg")+'" alt="Copy to clipboard">\n              </button>\n            </div>\n          </div>\n        </div>\n      '),t.find(".permalink .btn").click(function(){t.find("#profilelink").select(),document.execCommand("copy")}))},e.addOtherProfileLinks=function(t,e){var n=c()(".profile_item_links"),r=f.a.getSteamID(),i=h.a.sort(function(t,e){return t.id<e.id?-1:t.id>e.id?1:0});t||(i=i.filter(function(t){return e[t.id]}));var a=i.map(function(t){return'\n      <div class="sih_profile_link profile_count_link ellipsis">\n        <a class="sih_icons sih_'+t.id+'_icon" href="'+t.link.replace("{{STEAM_ID}}",r)+'" target="_blank">\n          <span class="count_link_label">'+t.title+"</span>\n        </a>\n      </div>\n    "});n.append(a.join(""))},e.addBanInfo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.CommunityBanned,i=void 0!==r&&r,a=t.EconomyBan,o=void 0!==a&&a,s=t.VACBanned,l=void 0!==s&&s,u=t.repStatus,p=void 0===u?null:u,d=e.getContainer();if(d){var m=c()('\n        <div class="ban-info">\n          <div style="text-transform: capitalize;">'+i18next.t("controls:profile.communityban")+": <strong>"+(n.i(f.c)(i)?"Banned":i18next.t("controls:profile.none"))+'</strong></div>\n          <div style="text-transform: capitalize;">'+i18next.t("controls:profile.tradeban")+": <strong>"+(n.i(f.c)(o)?o:i18next.t("controls:profile.none"))+'</strong></div>\n          <div style="text-transform: capitalize;">'+i18next.t("controls:profile.vacban")+": <strong>"+(n.i(f.c)(l)?"Banned":i18next.t("controls:profile.none"))+"</strong></div>\n        </div>\n      ");if(null!==p){var h=p.badges.map(function(t){return"<b>"+t.status+"</b> - "+t.link+" ("+t.days+")<br>"});m.append('\n          <div class="rep-status">\n            <a href="'+p.profileUrl+'">'+p.shield.outerHTML+"</a>\n            <div>\n              "+(h.length?h.join(""):"No special reputation.")+"\n            </div>\n          </div>")}d.append(m)}},e}(d.a);e.default=new y},365:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(i,a){try{var o=e[i](a),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=n(50),o=n(30),s=n.n(o),c=function(){function t(){i(this,t),this.mainUrl="https://steamrep.com"}return t.getCurrentTimestamp=function(){return parseInt(new Date/1e3,10)},t.prototype.getUtilUrl=function(){return this.mainUrl+"/util.php"},t.prototype.getSearchUrl=function(){return this.mainUrl+"/search"},t.prototype.getProfileUrl=function(t){return this.mainUrl+"/profiles/"+t},t.prototype.getSteamBanInfo=function(){function e(t){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.sendRequest({method:"GET",url:this.getUtilUrl(),data:{op:"getSteamBanInfo",id:n,tm:t.getCurrentTimestamp()}});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return e}(),t.prototype.getSteamProfileInfo=function(){function e(t){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.sendRequest({method:"GET",url:this.getUtilUrl(),data:{op:"getSteamProfileInfo",id:n,tm:t.getCurrentTimestamp()}});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return e}(),t.prototype.searchBanInfo=function(){function t(t){return e.apply(this,arguments)}var e=r(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={repStatus:null},t.prev=1,t.next=4,a.a.sendRequest({method:"GET",url:this.getSearchUrl(),data:{q:e.replace("https:","http:")}});case 4:r=t.sent,n.repStatus=this.getReputationStatus(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1);case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}},t,this,[[1,8]])}));return t}(),t.getPageBody=function(t){var e=[t.indexOf("<body>"),t.indexOf("</body>")],n=t.substr(e[0]+6,e[1]-e[0]-6);return s()(n)},t.prototype.getReputationStatus=function(e){var n=[],r=t.getPageBody(e),i=r.find("#repshield > img").first()[0];r.find(".repbadgebox").each(function(t,e){"none"!==e.children[0].style.display&&n.push({status:e.querySelector(".badgetext").textContent,link:e.querySelector(".badgecomm").innerHTML,days:e.querySelector(".badgedays").textContent})});var a=r.find("#findid").val();return i.src=i.src.replace(window.location.origin,this.mainUrl),{shield:i,badges:n,profileUrl:this.getProfileUrl(a)}},t}();e.a=c},373:function(t,e){},413:function(t,e){t.exports=[{id:"achievementstats",link:"//achievementstats.com/index.php?action=profile&playerId={{STEAM_ID}}",title:"AchievementStats",color:"#9ffc3a"},{id:"astats",link:"//astats.astats.nl/astats/User_Info.php?steamID64={{STEAM_ID}}",title:"AStats.nl",color:"#fc5d5d"},{id:"backpacktf",link:"//backpack.tf/profiles/{{STEAM_ID}}",title:"Backpack.tf",color:"#c63f62"},{id:"csgobackpack",link:"//csgobackpack.net/?nick={{STEAM_ID}}",title:"CSGOBackpack",color:"#f6a740"},{id:"steamdb",link:"//steamdb.info/calculator/?player={{STEAM_ID}}",title:"SteamDB",color:"#00cbe6"},{id:"steamrep",link:"//steamrep.com/profiles/{{STEAM_ID}}",title:"SteamRep",color:"#16a085"},{id:"steamtrades",link:"//www.steamtrades.com/user/{{STEAM_ID}}",title:"SteamTrades",color:"#f16421"},{id:"completionist",link:"//completionist.me/steam/profile/{{STEAM_ID}}",title:"Completionist.me",color:"#f6931c"},{id:"steamladder",link:"//steamladder.com/profile/{{STEAM_ID}}",title:"Steam Ladder",color:"#f9cf6b"}]},425:function(t,e,n){n(14),t.exports=n(354)}},[425]);