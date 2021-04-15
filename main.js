/*
var message = "Привет, мир!";
var name = prompt("Как тя зовут, падла")
console.log(message);
console.log("Ну даров," + name + "-падла");
*/
scr = "https://code.jquery.com/jquery-3.6.0.min.js"/* Подключаем jQuery*/

const canvas = document.getElementById("FallingBalls");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "files/images/ground.png";

const basketImg = new Image();
basketImg.src = "files/images/basketImg.png";

const ballImg = new Image();
ballImg.src = "files/images/ballImg1.png";

var objects = []; //Массив игровых объектов

var backgrounds = []; //Массив с фонами

var player = null;

let score = 0; /* Счётчик результата*/

let time = 0; /* Счётчик времени*/

let countBalls = 0; /* Счётчик созданных шаров*/

let box = 50; /* универсаньный размер нашей одной клетки поля*/

let speed = 1; /* Скорость падения шара*/

function Start()
{
    timer = setInterval(Update, 1000 / 60); //Состояние игры будет обновляться 60 раз в секунду — при такой частоте обновление происходящего будет казаться очень плавным
}








let basket =
    {
        xBasket: 3 * box,
        yBasket: 15 * box,
        widthBasket: 3 * box,
        heightBasket: box,

    };



let balls = new Array();

balls[0] =
    {
        xBall: Math.floor(Math.random() * 9 + 0) * box,
        yBall: 0,
        widthBall: box,
        heightBall: box,
    }

document.addEventListener("keydown", direction);

function direction(event) /* нажатие клавиш с клавиатуры*/
{
    switch (event.keyCode)
    {
        case 37:
            if(basket.xBasket  > 0)
            basket.xBasket  -= 30;
            break;

        case 39:
            if(basket.xBasket < 300)
            basket.xBasket += 30;
            break;
    }
}

function collide() /* Соприкосновение*/
{

    if  (((basket.yBasket + basket.heightBasket) >= (balls[countBalls].yBall)) &&
        (basket.yBasket <= (balls[countBalls].yBall + balls[countBalls].heightBall)) &&
        ((basket.xBasket + basket.widthBasket) >= balls[countBalls].xBall) &&
        (basket.xBasket <= (balls[countBalls].xBall + balls[countBalls].widthBall)) &&
        (balls[countBalls].widthBall == box) && (balls[countBalls].heightBall == box))
    {
        balls[countBalls].widthBall = 0;
        balls[countBalls].heightBall = 0;
        score ++;
    }
    else
    {
        /* По идее тут должны делать счётчик пропущенных шаров*/
        /* Если balls[countBalls].yBall) > 800*/
    }
}
function sleep(millis)
{
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}
function init()     /* функция запуска секундомера*/
{
    time = 0;
    setInterval(tick, 1000);
}

function tick()    /* Секундомер*/
{
    time++;
    document.getElementById("timer").
        childNodes[0].nodeValue = time;
}
init();    /* запускаем секундомер*/
function drawGame()    /* Главная функция*/
{
ctx.drawImage(ground, 0, 0);



    balls[0].xBall = 1 * box;
    balls[0].yBall= 15 * box;
    ctx.drawImage(ballImg, balls[0].xBall, balls[0].yBall);

    balls.push({
        xBall: 5 * box,
        yBall:0,
    });



   /* for(let l = 0; l < balls.length; )    /!* Цикл создания шаров*!/
    {

        ctx.drawImage(ballImg, balls[l].xBall, balls[l].yBall);
        balls[l].yBall += (10 * speed);

       /!* collide(basket, balls,l);*!/
        if (balls[l].yBall == 800)    /!* Условие дл создания нового шара*!/
        {
            balls.push
            ({
                xBall: Math.floor(Math.random() * 9 + 0) * box,
                yBall:0,
            });
            /!*collide(basket, balls,countBalls);*!/
        }
        countBalls = l;
        l++;
    }*/
    if ((time < 5) && (time > 1))    /* Изменяем скорость в зависимости от времени*/
    {
        speed = 1;

    }
   /* if ((time < 10) && (time > 5))
    {
        speed = 2;

    }*/

ctx.drawImage(basketImg, basket.xBasket, basket.yBasket);
ctx.fillStyle = "white";
ctx.font = "50px Arial";
ctx.fillText("score", box * 9.3, box);
ctx.fillText(score, box * 10, box * 2);
ctx.fillText("time", box * 9.5 , box * 5);
ctx.fillText(time, box * 10 , box * 6);
ctx.fillText("count", box * 9.3 , box * 8);
ctx.fillText(countBalls, box * 10  , box * 9);
requestAnimationFrame(drawGame); /* Выполняем функцию заново*/
}
let game = setInterval(collide, 100);  /* Выполняем функцию каждые 100 милисекунд*/
ballImg.onload = drawGame;


