"use strict";

const tokensContainer = document.querySelector(".js-tokens-container");
let tokens = document.querySelectorAll(".tokens");
const results = document.querySelector(".js-results");
const score = document.querySelector("#score");
const oldScore = document.querySelector(".old-score");

const triangleImage = document.querySelector(".js-triangle");
const playAgainBtn = document.querySelector(".js-play-again");
const resetScore = document.querySelector(".js-reset-score");

// Modal variables
const closeModal = document.querySelector(".js-close-modal");
const modal = document.querySelector(".js-modal");
const rulesBtn = document.querySelector(".js-rules-btn");
