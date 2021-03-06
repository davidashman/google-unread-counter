

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var data = {options:{},guc:{}};
    if (request.action && request.action === "get-settings"){
        function toMilliseconds(val) {
            var v = +val || 20;
            return v * 1000;
        }
        data.options.settings = {
            "animation": options.getLocalStore("animation","pop"),
            "position": options.getLocalStore("position","bottom"),
            "type": options.getLocalStore("type","circle"),
            "colors" : {
                "inbox":{
                    "unknown" : {
                        bgColor : options.getLocalStore("inbox-unknown-bg-color"),
                        textColor : options.getLocalStore("inbox-unknown-text-color")
                    },
                    "clear" : {
                        bgColor : options.getLocalStore("inbox-clear-bg-color"),
                        textColor : options.getLocalStore("inbox-clear-text-color"),
                        hidden : options.getLocalStore("inbox-clear-hidden", "false")
                    },
                    "unread" : {
                        bgColor : options.getLocalStore("inbox-unread-bg-color"),
                        textColor : options.getLocalStore("inbox-unread-text-color")
                    }
                },
                "gmail":{
                    "unknown" : {
                        bgColor : options.getLocalStore("mail-unknown-bg-color"),
                        textColor : options.getLocalStore("mail-unknown-text-color")
                    },
                    "clear" : {
                        bgColor : options.getLocalStore("mail-clear-bg-color"),
                        textColor : options.getLocalStore("mail-clear-text-color"),
                        hidden : options.getLocalStore("mail-clear-hidden", "false")
                    },
                    "unread" : {
                        bgColor : options.getLocalStore("mail-unread-bg-color"),
                        textColor : options.getLocalStore("mail-unread-text-color")
                    }
                }
            }
        };
        data.options.guc = {
            char : {
                tick: options.getLocalStore("char-tick"),
                infinity: options.getLocalStore("char-infinity"),
                delta: "\u0394",
                unknown: options.getLocalStore("char-unknown")
            },
            selectors : {
                "inbox" : options.getLocalStore("inbox-selector"),
                "mail" : options.getLocalStore("mail-selector")
            },
            settings : {
                timer:{
                    "HTTP": options.getLocalStore("http-timer", 20, toMilliseconds),
                    "DOM": options.getLocalStore("dom-timer", 2, toMilliseconds)
                },
                currentUpdateType:null,
                max: options.getLocalStore("max-count"),
                useDOM:true,
                mailURL:'https://mail.google.com/mail/feed/atom',
                consoleLog: options.getLocalStore("debug", false, "boolean"),
                forceHTTP: options.getLocalStore("forceHTTP", false, "boolean")
            }
        };
        sendResponse(data);
    } else {
        console.log("Unrecognised message received");
    }
});

