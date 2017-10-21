/**
 * -----------------------------------------------
 *
 * BulldogsChat - an A.I. Chatbot for Fresno State
 * ==  A Smart Virtual Stduent Assistant ==
 * https://github.com/JANQLIANGTSAI/BulldogsChat.git
 *
 * -----------------------------------------------
 *
 * More Information:
 *   https://www.facebook.com/BulldogsChat/
 * App Frontend:
 *   - node.js (https://nodejs.org)
 *   - Progressive Web App (https://en.wikipedia.org/wiki/Progressive_web_app)
 * A.I.
 *   Google - DialogFlow aka. API.ai (https://dialogflow.com)
 *   work in progress:
 *     - RASA (https://rasa.ai/)
 *     - AWS Lex (https://aws.amazon.com/lex)
 * -----------------------------------------------
 *
 * This source code is licensed under the BSD-style license.
 * Copyright 2007- by Max Tsai (mt8168@gmail.com)
 *
 */
"use strict";

var client;

function initDialogflow() {
  client = new ApiAi.ApiAiClient({accessToken: '8d01be667dde4034a598076cc23d1cb7'});
};

function sendText(text) {
  return client.textRequest(text);
}
