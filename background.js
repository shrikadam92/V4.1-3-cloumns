// This script runs in the background of your extension and can handle long-running or asynchronous tasks.

// This example listens for the onInstalled event and logs a message to the console.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {action: "paste"});
});
