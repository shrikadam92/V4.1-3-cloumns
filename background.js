// This script runs in the background of your extension and can handle long-running or asynchronous tasks.

// This example listens for the onInstalled event and logs a message to the console.
chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({url: "popup.html"});
  // Inject the sidebar into every webpage
    chrome.tabs.executeScript(null, {file: 'popup.js'});
    console.log('called popup.js');
});
