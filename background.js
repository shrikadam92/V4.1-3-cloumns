// This script runs in the background of your extension and can handle long-running or asynchronous tasks.

// This example listens for the onInstalled event and logs a message to the console.
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ color: '#3aa757' }, function() {
    console.log('The color is green.');
  });
});