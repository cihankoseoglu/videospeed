/**
 * Uses declarativeContent to check whether the page is Netflix or YouTube
 */
chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            css: ["*"]
        }),
    ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
  })
})

