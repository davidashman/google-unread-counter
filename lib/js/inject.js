//@ sourceURL=inject.js
chrome.extension.sendMessage({}, function(response) {
    var settings = {},
        readyStateCheckInterval = setInterval(function() {
            if (document.readyState === "complete") {
            	clearInterval(readyStateCheckInterval);
                var link = document.querySelector("head link[rel*='icon']"),
                    fallback,
                    isInbox = location.hostname.indexOf("inbox") !== -1;
                guc.convertImgToBase64URL(link.getAttribute("href"),function(base64){
                    // callback when image has loaded
                    link.setAttribute("href", base64 || ( isInbox ? icons.inbox : icons.mail ) );
                    favicon = new Favico({
                       animation: 'pop',
                    }),
                    guc.getUnreadCount();
                });
            }
        }, 10);
});
var favicon,
    guc = {
        convertImgToBase64URL: function(url, callback){
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function(){
                var canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'), dataURL;
                canvas.height = this.height;
                canvas.width = this.width;
                ctx.drawImage(this, 0, 0);
                dataURL = canvas.toDataURL();
                callback(dataURL);
                canvas = null;
            };
            img.onerror = function(){
                callback(null);
            }
            img.src = url;
        },
        char: {
            tick: "\u2713",
            infinity: "\u221E",
            delta: "\u0394"
        },
        previousValue:null,
        timer:null,
        settings:{timer:10000,max:999},
        getUnreadCount: function(){
            var request = new XMLHttpRequest(),
                fullcount,
                url = 'https://mail.google.com/mail/feed/atom';

            request.open('GET', url, true);

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    try {
                        fullcount = request.responseXML.querySelector("fullcount").firstChild.nodeValue;
                        guc.updateBadge( fullcount );
                    } catch(e){
                        guc.updateBadge( e );
                    }
                } else {
                    guc.updateBadge( new Error("Bad status("+request.status+") from "+ url) );
                }
            };

            request.onerror = function() {
                guc.updateBadge( new Error('Error getting Gmail atom feed') );
            };

            request.send();
        },
        checkCount: function(){
            clearTimeout(guc.timer);
            guc.getUnreadCount();
        },
        setFallbackIcon: function(link){
            var href = location.hostname.indexOf("inbox") !== -1 ? "" : "data:image/x-icon;base64,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";
            link.setAttribute("href", href);
        },
        updateBadge: function(value){
            guc.timer = setTimeout(guc.checkCount,guc.settings.timer);
            if (value === guc.previousValue){
                return;// don't bother nothing changed
            }
            var count = parseInt(value);
            if ( isNaN(count) ){
                console.log("updating value to ", value)
                if (typeof value === "object"){// it's probably an Error object
                    console.log("Error from Google Unread Counter extension", value);
                    value = "?";
                }
                favicon.badge(value, {bgColor:"#555"});
            } else if (count === 0){
                favicon.badge(guc.char.tick, {bgColor:"#080"});
            } else if (count > guc.settings.max) {
                favicon.badge(guc.char.infinity, {bgColor:"#d00"});
            } else {
                favicon.badge(value, {bgColor:"#d00"});
            }
            guc.previousValue = value;
        }

}