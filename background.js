chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      chrome.tabs.create({ url: "https://playdesi.net/front-page/" });
    },
  });
});
