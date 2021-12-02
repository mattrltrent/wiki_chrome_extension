chrome.contextMenus.create({
    "title": "Wiki Term",
    "contexts": ["selection"],
    "onclick": calcWiki(),
});

function calcWiki() {
    return function (info, tab) {
        let words = info.selectionText;
        let theLink = "https://en.wikipedia.org/wiki/" + words;
        chrome.tabs.create({ index: tab.index + 1, url: theLink, selected: true });
    }
}