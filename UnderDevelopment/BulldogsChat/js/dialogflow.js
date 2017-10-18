"use strict";

var client;

function initDialogflow() {
  // client = new ApiAi.ApiAiClient({accessToken: token});
  client = new ApiAi.ApiAiClient({accessToken: '32c96fe7d0d6475190debe4bd49979fe'});
};

function sendText(text) {
  return client.textRequest(text);
}
