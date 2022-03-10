window.onscroll = function(){
    var topScroll = document.documentElement.scrollTop;
    var head_er = document.getElementById("head_er");
    var header_T = document.getElementById("header_T");
    var nav_T = document.getElementById("nav_T");
    var sousuo = document.getElementById("sousuo");
    var logo_img = document.getElementById("logo_img");
    var sou = document.getElementById("sou");
    var DL_a1 = document.getElementById("DL_a1");
    var DL_a2 = document.getElementById("DL_a2");
    var DL_a3 = document.getElementById("DL_a3");
    var DL_a4 = document.getElementById("DL_a4");
    if(topScroll >= 580){
        // header_T.style.display = 'flex';
        header_T.style.position = 'fixed';
        header_T.style.top = '0';
        header_T.style.zIndex = '100';
        header_T.style.backgroundColor = 'rgba(255,255,255,.95)';
        header_T.style.boxShadow = '0 0 100px rgba(35,35,43,0.5)';
        logo_img.style.top = '-36px';
        nav_T.style.display = 'block';
        sousuo.style.border = '1px solid #ff5c38';
        sousuo.style.width = '322px';
        sousuo.style.marginLeft = '100px';
        sou.style.top = '-1px';
        sou.style.right = '-1px';
        DL_a1.style.color = '#000';
        DL_a2.style.color = '#000';
        DL_a3.style.color = '#000';
        DL_a4.style.color = '#000';
    }else{
        // header_T.style.display = 'block';
        header_T.style.position = 'relative';
        header_T.style.backgroundColor = 'rgba(255,255,255,.1)';
        logo_img.style.top = '0';
        nav_T.style.display = 'none';
        sousuo.style.border = 'none';
        sousuo.style.width = '382px';
        sousuo.style.marginLeft = '-120px';
        sou.style.top = '0';
        sou.style.right = '0';
        DL_a1.style.color = '#fff';
        DL_a2.style.color = '#fff';
        DL_a3.style.color = '#fff';
        DL_a4.style.color = '#fff';
    }

}


var d_wz = document.getElementById("d_wz");
var a1 = document.getElementById("a1");
var L_list = document.getElementById("L_list");
var img1 = document.getElementById("img1");
var fangda = document.getElementById("fangda");
var LB1 = document.getElementById("LB1");
var LB2 = document.getElementById("LB2");
var L_title = document.getElementById("L_title");
var p1 = document.getElementById("p1");
var caidan1 = document.getElementById("caidan1");
var caidan2 = document.getElementById("caidan2");
var caidan3 = document.getElementById("caidan3");
var caidan4 = document.getElementById("caidan4");
var caidan5 = document.getElementById("caidan5");
var caidan6 = document.getElementById("caidan6");
var caidan7 = document.getElementById("caidan7");
var caidan8 = document.getElementById("caidan8");
var caidan9 = document.getElementById("caidan9");
var CDL = document.getElementById("CDL");
var LB2_left = LB2.getBoundingClientRect().left;
var L_list_wid = L_list.offsetWidth;


d_wz.onmouseover = function(){
    a1.style.display = 'block';
    fangda.style.width = '300' + 'px';
    fangda.style.height = '408' + 'px';
    fangda.style.left = '-20' + 'px';
    fangda.style.top = '-22' + 'px';
    d_wz.style.width = '300' + 'px';
    d_wz.style.height = '408' + 'px';
    fangda.style.zIndex = '1';
}
d_wz.onmouseout = function(){
    a1.style.display = 'none';
    fangda.style.width = '260' + 'px';
    fangda.style.height = '364' + 'px';
    fangda.style.left = 0;
    fangda.style.top = 0;
    d_wz.style.width = '260' + 'px';
    d_wz.style.height = '364' + 'px';
}

setTimeout(function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    caidan1.style.color = "#ff5c38";
    caidan1.style.fontSize = "22px";
    caidan1.style.fontWeight = "700";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
},5000)

L_title.onmouseover = function(){
    LB2.style.display = 'none';
    L_title.style.color = '#ff5c38';
    LB1.style.display = 'block';
    p1.style.color = "#aaa";
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(35,35,43,.98)";
    CDL.style.boxShadow = '-100px 0 100px rgba(35,35,43,0.8)';

}
caidan1.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    caidan1.style.color = "#ff5c38";
    caidan1.style.fontSize = "22px";
    caidan1.style.fontWeight = "700";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
    LB2.style.left = 0 + 'px';
}
caidan2.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    var L_list_wid = L_list.offsetWidth;
    LB2.style.left = -L_list_wid * 1 + 'px';
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
}
caidan3.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    var L_list_wid = L_list.offsetWidth;
    LB2.style.left = -L_list_wid * 2 + 'px';
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
}
caidan4.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    var L_list_wid = L_list.offsetWidth;
    LB2.style.left = -L_list_wid * 3 + 'px';
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
}
caidan5.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    var L_list_wid = L_list.offsetWidth;
    LB2.style.left = -L_list_wid * 4 + 'px';
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
}
caidan6.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    var L_list_wid = L_list.offsetWidth;
    LB2.style.left = -L_list_wid * 5 + 'px';
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
}
caidan7.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    var L_list_wid = L_list.offsetWidth;
    LB2.style.left = -L_list_wid * 6 + 'px';
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
}
caidan8.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    var L_list_wid = L_list.offsetWidth;
    LB2.style.left = -L_list_wid * 7 + 'px';
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
}
caidan9.onmouseover = function(){
    LB1.style.display = 'none';
    L_title.style.color = '#aaa';
    LB2.style.display = 'block';
    p1.style.color = "#fff";
    var L_list_wid = L_list.offsetWidth;
    LB2.style.left = -L_list_wid * 8 + 'px';
    caidan1.style.color = "#aaa";
    caidan1.style.fontSize = "15px";
    caidan1.style.fontWeight = "normal";
    CDL.style.backgroundColor = "rgba(0,0,0,.7)";
    CDL.style.boxShadow = 'none';
}

var img_m1 = document.getElementById("img_m1");
var img_m2 = document.getElementById("img_m2");
var img_m3 = document.getElementById("img_m3");
var img_m4 = document.getElementById("img_m4");
img_m2.onmouseover = function(){
    img_m1.style.top = '-3px';
}
img_m2.onmouseout = function(){
    img_m1.style.top = '0';
}
img_m4.onmouseover = function(){
    img_m3.style.top = '-3px';
}
img_m4.onmouseout = function(){
    img_m3.style.top = '0';
}
var nav_TC = document.getElementById("nav_TC");
var tanchuang = document.getElementById("tanchuang");
nav_TC.onmouseover = function(){
    tanchuang.style.display = 'block';
}
nav_TC.onmouseout = function(){
    tanchuang.style.display = 'none';
}

var RM_img = document.getElementById("RM_img");
var RM_img1 = document.getElementById("RM_img1");
var RM_img2 = document.getElementById("RM_img2");
RM_img.onmouseover = function(){
    RM_img1.style.display = 'none';
    RM_img2.style.display = 'block';
}
RM_img.onmouseout = function(){
    RM_img1.style.display = 'block';
    RM_img2.style.display = 'none';
}

var ZS_div = document.getElementById("ZS_div");
var ZS_span = document.getElementById("ZS_span");
var ZS_img1 = document.getElementById("ZS_img1");
var ZS_img2 = document.getElementById("ZS_img2");
ZS_div.onmouseover = function(){
    ZS_div.style.zIndex = '1';
    ZS_div.style.width = '225px';
    ZS_div.style.height = '286px';
    ZS_div.style.top = '-12px';
    ZS_div.style.left = '-18px';
    ZS_div.style.boxShadow = '0px 10px 20px  rgba(35,35,43,0.5)';
    ZS_img1.style.display = 'none';
    ZS_img2.style.display = 'block';
}
ZS_div.onmouseout = function(){
    ZS_div.style.width = '185px';
    ZS_div.style.height = '105px';
    ZS_div.style.top = '0';
    ZS_div.style.left = '0';
    ZS_div.style.boxShadow = 'none';
    ZS_img1.style.display = 'block';
    ZS_img2.style.display = 'none';
}

var RD_t2 = document.getElementById("RD_t2");
var RD_t3 = document.getElementById("RD_t3");
RD_t2.onmouseover = function(){
    RD_t2.style.background = 'linear-gradient(90deg,#f3a83e 0%,#ff5c38 33%,#ff183e 100%)';
    RD_t2.style.color = '#fff';
    RD_t3.style.background = '#f6f6f6';
    RD_t3.style.color = '#000';
}
RD_t3.onmouseover = function(){
    RD_t3.style.background = 'linear-gradient(90deg,#f3a83e 0%,#ff5c38 33%,#ff183e 100%)';
    RD_t3.style.color = '#fff';
    RD_t2.style.background = '#f6f6f6';
    RD_t2.style.color = '#000';
}

var RD_left = document.getElementById("RD_left");
var RD_l_img1 = document.getElementById("RD_l_img1");
var RD_l_img2 = document.getElementById("RD_l_img2");
RD_left.onmouseover = function(){
    RD_l_img1.style.display = 'none';
    RD_l_img2.style.display = 'block';
}
RD_left.onmouseout = function(){
    RD_l_img2.style.display = 'none';
    RD_l_img1.style.display = 'block';
}

var RD_img = document.getElementById("RD_img");
var RD_img1 = document.getElementById("RD_img1");
var RD_img2 = document.getElementById("RD_img2");
RD_img.onmouseover = function(){
    RD_img1.style.display = 'none';
    RD_img2.style.display = 'block';
}
RD_img.onmouseout = function(){
    RD_img2.style.display = 'none';
    RD_img1.style.display = 'block';
}


var JC_div = document.getElementById("JC_div");
var JC_span = document.getElementById("JC_span");
var JC_img1 = document.getElementById("JC_img1");
var JC_img2 = document.getElementById("JC_img2");
JC_div.onmouseover = function(){
    JC_div.style.zIndex = '1';
    JC_div.style.width = '225px';
    JC_div.style.height = '322px';
    JC_div.style.top = '-12px';
    JC_div.style.left = '-18px';
    JC_div.style.boxShadow = '0px 20px 40px  rgba(35,35,43,0.5)';
    JC_img1.style.display = 'none';
    JC_img2.style.display = 'block';
    JC_span.style.display = 'block';
}
JC_div.onmouseout = function(){
    JC_div.style.width = '185px';
    JC_div.style.height = '259px';
    JC_div.style.top = '0';
    JC_div.style.left = '0';
    JC_div.style.boxShadow = 'none';
    JC_img1.style.display = 'block';
    JC_img2.style.display = 'none';
    JC_span.style.display = 'none';
}
