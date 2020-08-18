
//1.增加div
function addChild(top,snowShape) {
    var div = document.createElement("div");
    div.innerHTML = snowShape;
    div.className = "flake";
    div.style.position = 'absolute';
    div.style.color = 'white';
    div.style.opacity = 0.9;
    div.style.left = parseInt(Math.random() * window.innerWidth) + 'px';
    div.style.top = top + 'px';
    div.style.fontSize = parseInt(Math.random() * 50) + 'px';
    document.body.appendChild(div);
};
//2.雪花自动降落
function autoWipe(snowSpeed,snowShape) {
    var flake = document.getElementsByClassName('flake');
    var timer = setInterval(function () {
        for (var i = 0; i < flake.length; i++) {
            var opacity = flake[i].style.opacity;
            var offsetTop = Number((flake[i].style.top).replace('px',''));
            if (offsetTop < window.innerHeight) {
                offsetTop = offsetTop + snowSpeed;
                opacity = opacity - 0.003;
                flake[i].style.top = offsetTop + 'px';
                flake[i].style.opacity = opacity;
            } else {
                document.body.removeChild(flake[i]);
                addChild(0,snowShape);
            }
        }
    }, 100);
};
//3.形成最后效果
function final(bigSnowParam,snowShape) {
    for (var i = 0; i < bigSnowParam.snowNum; i++) {
        addChild(parseInt(Math.random() * window.innerHeight),snowShape);
    }
    autoWipe(bigSnowParam.snowSpeed,snowShape);
};
//4.参数选择，snowNum 为每批降雪数量，snowSpeed为每批降雪速度，单位为秒
//大雪参考值
var bigSnowParam = {
       snowNum:242,
       snowSpeed:6
};
//中雪参考值
var midSnowParam = {
    snowNum:242,
    snowSpeed:3
};
//小雪参考值
var littleSnowParam = {
    snowNum:242,
    snowSpeed:1
};
//自定义雪参考值
var selfSnowParam = {
    snowNum:300,//值为number
    snowSpeed:3//值为number
};
//雪花形状参考
var snowShapeObj = {
    1:'?',
    2:'?',
    3:'?',
    4:'?',
    5:'?',
    6:'?',
    7:'?',
    8:'?',
    9:'?',
    10:'?',
    11:'?',
    12:'●'
};
//5.调用
final(bigSnowParam,snowShapeObj[12]);