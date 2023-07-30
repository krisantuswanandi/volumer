initBadge();

chrome.tabs.onUpdated.addListener(() => {
  updateBadge();
});

function initBadge() {
  chrome.action.setBadgeBackgroundColor({ color: "#ae5607" });
  chrome.action.setBadgeTextColor({ color: "white" });
  updateBadge();
}

async function updateBadge() {
  const tabs = await chrome.tabs.query({ audible: true });
  const tabsCount = tabs.length;
  chrome.action.setBadgeText({ text: `${tabsCount || ""}` });
}
