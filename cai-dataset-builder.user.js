// ==UserScript==
// @name         cai dataset builder
// @namespace    cai-dataset-builder
// @match        https://beta.character.ai/chat*
// @grant        none
// @version      0.1
// @author       b3less
// @license      +nigger
// @description  construct datasets from character replies
// @icon         https://www.google.com/s2/favicons?sz=64&domain=character.ai
// @run-at      document-start
// ==/UserScript==
'use strict';

let messages_list = [];

function parse(raw_text) {
  let raw_list = raw_text.split("\n");
  raw_list.forEach(current_item => {
    try {
      append(JSON.parse(current_item));
    } catch (error) {}
  });
}

function append(row) {
  row.replies.forEach(reply => {
    let exists = false;

    for (let x = 0; x < messages_list.length; x++) {
      if (reply.text.indexOf(messages_list[x].text) == 0) {
        messages_list[x] = reply;
        exists = true;
        break;
      }
    }

    if (!exists) {
      messages_list.unshift(reply);
    }
  })
}

const {
  fetch: origFetch
  } = window;
  window.fetch = async (...args) => {
  const response = await origFetch(...args);

  const raw_text = await new Response(response.clone().body).text();
  parse(raw_text);

  return response;
};

function downloadData() {
  let data = "";
  messages_list.forEach(message => {
    data += message.text + "\n";
  });

  let blob = new Blob([data], { type: "text/plain" });
  let link = document.createElement("a");
  link.download = "message_history.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
}

let downloadButton = document.createElement("button");
downloadButton.innerText = "Download Replies";
downloadButton.addEventListener("click", downloadData);
document.body.appendChild(downloadButton);
