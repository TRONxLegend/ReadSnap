chrome.runtime.onInstalled.addListener(() =>{
    chrome.storage.sync.get(["Key"],(res)=>{
        if(!res.Key){
            chrome.tabs.create({url:"options.html"});
        }
    });
});