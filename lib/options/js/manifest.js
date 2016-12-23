
var DEBUG = true,
	OPTIONS = {
		FORMS : {
			"options": [
                {"type":"fieldset", "label":"Common Settings", "id":"basicSettings", "defaultSection":"true"},
                {"type":"fieldset", "label":"Inbox Settings", "id":"inboxSettings"},
                {"type":"fieldset", "label":"Mail Settings", "id":"mailSettings"},
                {"type":"title", "label":'Characters used in the icon', parent: "basicSettings", tag: "p"},
                {"name":"char-tick", "label":"Done", "type":"text", parent:'basicSettings', className: "char"},
                {"name":"char-infinity", "label":"Way too many to count!", "type":"text", parent:'basicSettings', className: "char"},
                {"type":"title", "label":'See <a href="http://timtrott.co.uk/html-character-codes/">char map</a> for more options', parent: "basicSettings", tag: "p"},

				{"name":"inbox-selector", "label":"Unread item CSS selector", "type":"text", parent:'inboxSettings'},
				{"type":"title", "label":"Inbox favicon badge colours", parent: "inboxSettings", tag: "h3"},
                {"type":"title", "label":"All done", parent: "inboxSettings", tag: "h4"},
                {"name":"inbox-clear-bg-color", "label":"BG Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"name":"inbox-clear-text-color", "label":"Text Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"type":"title", "label":"Unread", parent: "inboxSettings", tag: "h4"},
                {"name":"inbox-unread-bg-color", "label":" BG Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"name":"inbox-unread-text-color", "label":" Text Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"type":"title", "label":"Unknown", parent: "inboxSettings", tag: "h4"},
                {"name":"inbox-unknown-bg-color", "label":" BG Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},
                {"name":"inbox-unknown-text-color", "label":" Text Colour", "type":"text", "html5":"color", parent:'inboxSettings', parentClassName : "indent-item"},

                {"name":"mail-selector", "label":"Unread item CSS selector", "type":"text", parent:'mailSettings'},
                {"type":"title", "label":"Mail favicon badge colours", parent: "mailSettings", tag: "h3"},
                {"type":"title", "label":"All done", parent: "mailSettings", tag: "h4"},
                {"name":"mail-clear-bg-color", "label":"BG Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"name":"mail-clear-text-color", "label":"Text Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"type":"title", "label":"Unread", parent: "mailSettings", tag: "h4"},
                {"name":"mail-unread-bg-color", "label":" BG Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"name":"mail-unread-text-color", "label":" Text Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"type":"title", "label":"Unknown", parent: "mailSettings", tag: "h4"},
                {"name":"mail-unknown-bg-color", "label":" BG Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
                {"name":"mail-unknown-text-color", "label":" Text Colour", "type":"text", "html5":"color", parent:'mailSettings', parentClassName : "indent-item"},
			],
			"optionsDemo" : [
				{"type":"fieldset", "label":"Settings", "id":"basicSettings", "defaultSection":"true"},
				{"type":"fieldset", "label":"Advanced Settings", "id":"advancedSettings"},
				{"name":"test-text", "label":"Text", "type":"text", parent:'basicSettings'},
				{"name":"test-text-one", "label":"Another text", "type":"text", attr:[{placeholder: "Placeholder text"}], parent:'basicSettings'},
                {"name":"test-textarea", "label":"Textarea", "type":"textarea", parent:'basicSettings'},
                {"name":"test-textarea-read-only", "label":"Textarea - read only", "type":"textarea", parent:'basicSettings', attr:[{"data-display-only" : "true"}]},
				{"name":"test-checkbox", "label":"Boolean", "type":"checkbox", "value": "true", parent:'basicSettings'},
				{"type":"title", "label":"Heading text", parent: "basicSettings"},
				{"type":"title", "label":"Heading sub text", parent: "basicSettings", tag: "h3"},
				{"type":"title", "label":"Text text text...", parent: "basicSettings", tag: "p"},
				{"name":"test-radio", "label":"Options", "type":"radio", parent:'basicSettings' ,options:[{"female":"Female"},{"male":"Male"}]},
				{"name":"test-select", "label":"Select", "type":"select", "value":"none",parent:'basicSettings' ,options:[{"none":"none"},{"carbon_fibre":"carbon fibre"},{"corkboard":"corkboard"},{"dark_mosaic":"dark mosaic"},{"moulin":"moulin"},{"padded":"padded"},{"simple_dashed":"simple dashed"},{"squares":"squares"},{"dark_wood":"wood, dark"},{"wood_1":"wood, dark grey"},{"purty_wood":"wood, purty"},{"retina_wood":"wood, retina"}]},
				{"name":"test-range", "label":"Range", "type":"text", "html5":"range",  parent:'advancedSettings', attr:[{"min":0},{"max":60},{"step":5}],data:[{"suffix":" mins"}]},
				{"name":"test-email", "label":"Email", "type":"text", "html5":"email", parent:'advancedSettings', className : "inverse", attr: [{"title" : "Custom className added to this element"}] },
				{"name":"test-datalist", "label":"Datalist", "type":"text", "html5":"datalist", parent:'advancedSettings' ,options:[{"carbon_fibre":"carbon fibre"},{"corkboard":"corkboard"},{"dark_mosaic":"dark mosaic"},{"moulin":"moulin"},{"padded":"padded"},{"simple_dashed":"simple dashed"},{"squares":"squares"},{"wood":"wood, dark"},{"wood_gray":"wood, dark grey"},{"wood_purty":"wood, purty"},{"wood_retina":"wood, retina"}]},
				{"name":"test-color", "label":"Colour", "type":"text", "html5":"color", parent:'advancedSettings'},
				{"name":"test-date", "label":"Date", "type":"text", "html5":"date", parent:'advancedSettings'},
				{"name":"test-file", "label":"File", "type":"text", "html5":"file", parent:'advancedSettings'},
                {"name":"help-text-advanced", type: "inject-external", querySelector : "div.insert-html-test", parent:'advancedSettings'},
				{"name":"test-number", "label":"Number", "type":"text", "html5":"number",  parent:'advancedSettings', attr:[{"min":0},{"max":24},{"step":1}],data:[{"suffix":" hours"}]},
				{"name":"test-key-value-pair", "id":"test-key-value-pair", "label":"Key value pair", "type" : "key-value", tag:"div", parent:'advancedSettings', data : [{cols:[{"title":"label",initValue:"JIRA"},{"title":"value",initValue:"114421"}]}]},
				{"name":"test-button", "value":"Click me", "type":"button", parent:'advancedSettings', data:[{"display-only":""},{"custom-event":""}]}
			]
		},

		// [name of element] : [default value]
		DEFAULT_VALUES : {
			"jasmine-test-001-key" : "jasmine-test-001-value",
            "inbox-selector" : ".qG",
            "mail-selector" : "a[aria-label^='Inbox'][aria-label$='unread']",
            "inbox-clear-bg-color": "#008800",
            "inbox-clear-text-color": "#ffffff",
            "inbox-unknown-bg-color": "#555555",
            "inbox-unknown-text-color": "#ffffff",
            "inbox-unread-bg-color": "#dd0000",
            "inbox-unread-text-color": "#ffffff",
            "mail-clear-bg-color": "#008800",
            "mail-clear-text-color": "#ffffff",
            "mail-unknown-bg-color": "#555555",
            "mail-unknown-text-color": "#ffffff",
            "mail-unread-bg-color": "#304FB0",
            "mail-unread-text-color": "#ffffff",
            "char-tick" : "\u2713",
            "char-infinity" : "\u221E",
            "char-delta" : "\u0394"
		},

		// [name of element] : [help text]
		HELP : {
			"test-text": 'Default value set in manifest.js',
			"test-range": 'Default value set in manifest.js',
			"test-number": 'Default value set in manifest.js'
		}

};