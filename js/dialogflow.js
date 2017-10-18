"use strict";

var client;

function initDialogflow() {
  // client = new ApiAi.ApiAiClient({accessToken: token});
  client = new ApiAi.ApiAiClient({accessToken: '8d01be667dde4034a598076cc23d1cb7'});
};

function sendText(text) {
  return client.textRequest(text);
}
