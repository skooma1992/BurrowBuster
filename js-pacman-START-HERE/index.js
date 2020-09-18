import { LEVEL, OBJECT_TYPE } from "./setup";

// Dom

const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

// Game const

const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;

//setup

let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {}

function checkCollision(pacman, ghost) {}

function gameLoop(pacman, ghosts) {}

function startGame() {}
