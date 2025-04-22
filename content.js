// works on web pages Dom //

function getArticle(){
    const article = document.querrySelector("article");
    if(article) return article.innerText;

    const paragraphs = Arrays.from(document.querySelectorAll("p"));
    return paragraphs.map((p)=> p.innertext).join("/n");

}

chrome.runtime.onMessage.addListener((req, _sender, sendResponse) => {
    if(req.type == "GET_ARTICLE_TEXT"){
        const text = getArticleText();
        sendResponse({text});
    }
});