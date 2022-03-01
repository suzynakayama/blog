// // import { Remarkable } from "remarkable";
// import { Remarkable } from "remarkable";
// // import linkify from "remarkable/linkify";
// import hljs from "highlightjs";
// import "highlightjs/styles/github.css";

// let md = new Remarkable("full", {
// 	html: true, // Enable HTML tags in source
// 	xhtmlOut: true, // Use '/' to close single tags (<br />)
// 	breaks: true, // Convert '\n' in paragraphs into <br>
// 	langPrefix: "language-", // CSS language prefix for fenced blocks
// 	linkify: true,
// 	linkTarget: "blank", // set target to open link in

// 	// Enable some language-neutral replacements + quotes beautification
// 	typographer: false,

// 	// Double + single quotes replacement pairs, when typographer enabled,
// 	// and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
// 	quotes: "“”‘’",

// 	// Highlighter function. Should return escaped HTML,
// 	// or '' if input not changed
// 	highlight: function (str, lang) {
// 		if (lang && hljs.getLanguage(lang)) {
// 			try {
// 				return hljs.highlight(lang, str).value;
// 			} catch (__) {}
// 		}

// 		try {
// 			return hljs.highlightAuto(str).value;
// 		} catch (__) {}

// 		return ""; // use external default escaping
// 	},
// });

// // md.use(linkify);

// export default md;
