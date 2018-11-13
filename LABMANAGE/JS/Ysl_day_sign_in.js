﻿

//签到部分
function everyday_sign_in()
{
    $.ajax({
        url: "/ysl_Sign_In/User_Sign",
        success: function (result) {
            if (result)
            {
                layer.msg("签到成功！");
                $(".YSL_Sign_In")[0].attributes['onclick'].value = null;
                $(".YSL_Sign_In img")[0].attributes['src'].value = '../images/已签到.png';
                setTimeout(function () { location.reload(); }, 2000);
                
            }
            else
            {
                layer.alert("签到失败！请重新尝试");
            }
            
        },
        error: function (result) {
            layer.alert("签到未知错误 请联系kylin-------------------错误代码cw001");
        }
    });
}

//判断用户是否登录

$(function () {
    $.ajax({
        url: "/ysl_Sign_In/Is_Sign",
        async: false,//请求是否异步，默认异步;
        type: "POST",
        dataType: 'json',
        success: function (result) {
            if (result == "错误时间")
            {
                $(".YSL_Sign_In")[0].attributes['onclick'].value = null;
                document.getElementsByClassName('YSL_Sign_In')[0].getElementsByTagName('img')[0].attributes['src'].value = '';
            }
            else if (result == "false") {
                $(".YSL_Sign_In")[0].attributes['onclick'].value = 'everyday_sign_in()';
                $(".YSL_Sign_In img")[0].attributes['src'].value = '../images/每日签到.png';
            }
            else {
                $(".YSL_Sign_In")[0].attributes['onclick'].value = null;
                document.getElementsByClassName('YSL_Sign_In')[0].getElementsByTagName('img')[0].attributes['src'].value = '../images/已签到.png';
            }
        },
        error: function (result) {
            layer.alert("签到未知错误 请联系kylin-------------------错误代码cw002");
        }
    });
});