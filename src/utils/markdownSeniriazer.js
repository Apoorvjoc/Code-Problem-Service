const marked = require('marked');
const sanitizeHtmlLiabrary = require('sanitize-html')
const TurndownService = require('turndown');

function sanatizeMarkDownContent(markdownContent){

    //1) convert markdown to HTML
    const convertedHtml = marked.parse(markdownContent)

    console.log("Mark to Html " , convertedHtml);

    //2) sanitize html
    const sanitizedHtml = sanitizeHtmlLiabrary(convertedHtml , {
        //you can mention allowed tags here
        allowedTags: sanitizeHtmlLiabrary.defaults.allowedTags
    })

    console.log("Sanitized html" , sanitizedHtml);

    //3) converting sanitize HTML back to markdown

    const turndownService = new TurndownService();

    const sanitizeMarkdown = turndownService.turndown(sanitizedHtml);

    console.log("MARK DOWN FOR DB : ",sanitizeMarkdown);

    return sanitizeMarkdown
}

module.exports = sanatizeMarkDownContent;

