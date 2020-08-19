function getString(){
    nihongo = new Array(
        '晴れたり 泣いたり あとは時々歌ったり.',
        '君も星だよ.',
        '煌めく世界中に　僕の歌を乗せて.',
        '君が笑うたび　どんな明日が来ようとも怖くなかった.',
        'いつの日も歌おう このこころのまま.',
        '笑颜を见せて.',
        '笑って くちびるに歌を持って.'
    );
    chinese = new Array(
        '时而欢笑 时而哭泣 然后时而唱起我们的歌.',
        '你亦是星辰.',
        '在这闪耀的世界中 乘着我的歌声.',
        '看到你的笑颜 无论明天会发生什么我都不会害怕.',
        '无论什么时候都唱出来吧 这颗心本来的样子.',
        '让我看看你的笑脸.',
        '笑起来 宛如唇上有歌.'
    );
    var num = Math.random();
    num = nihongo.length * num;
    num = Math.floor(num);
    document.getElementById("footJP").innerHTML = "<small>" + nihongo[num] + "</small>" + "</br>" + "<small>" + chinese[num] + "</small>";
}

window.onload = getString;