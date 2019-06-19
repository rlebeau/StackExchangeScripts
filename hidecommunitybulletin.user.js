// ==UserScript==
// @name          Hide Community Bulletin
// @description   Hide the Community Bulletin box from StackExchange pages
// @author        Remy Lebeau
// @namespace     https://github.com/rlebeau/
// @version       1.0
// @include       http*://stackoverflow.com/*
// @include       http*://*.stackoverflow.com/*
// @include       http*://dev.stackoverflow.com/*
// @include       http*://askubuntu.com/*
// @include       http*://superuser.com/*
// @include       http*://serverfault.com/*
// @include       http*://mathoverflow.net/*
// @include       http*://*.stackexchange.com/*
// @exclude       http*://chat.*.com/*
// ==/UserScript==

// this serves only to avoid embarassing mistakes caused by inadvertently loading this script onto a page that isn't a Stack Exchange page
var isSEsite = false;
for (var s of document.querySelectorAll("script")) isSEsite = isSEsite||/StackExchange\.ready\(/.test(s.textContent);

// don't bother running this if this isn't a scripted SE page
if (!isSEsite)
{
   return;
}

function with_jquery(f)
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "if (window.jQuery) (" + f.toString() + ")(window.jQuery)" + "\n\n//# sourceURL=" + encodeURI(GM_info.script.namespace.replace(/\/?$/, "/")) + encodeURIComponent(GM_info.script.name); // make this easier to debug
  document.body.appendChild(script);
}


with_jquery(function()
{
   $(".s-sidebarwidget__yellow").hide();
});
