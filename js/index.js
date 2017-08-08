/**
 * Created by Administrator on 2017/7/31.
 */
$(function () {
//    鼠标移入颜色变化
//    1.发生的目标元素 a
//    2.事件   mouseover,mouseout
//    3.改变连接颜色
    $('.top a').mouseover(function () {$(this).css('color', '#fff')}).mouseout(function () {$(this).css('color', '#a4b094')})
    //购物车
    $('.shopCar').mouseover(function () {
        $(this).css({color: '#ff6700', background: 'white'})
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).css({color: 'rgb(164,176,148)', background: '#424242'})
        $('.goods').stop(true, false).slideUp();
    })
    var flag = true;
//    表单的输入框效果
    $('.sea1').mouseover(function () {
        if (flag) {
            $('.sea1 input').css('border', '1px solid #000');
            $('.sea2 ').css('border', '1px solid #000').css('borderLeft', 'none');
        }
    }).mouseout(function () {
        if (flag) {
            $('.sea1 input').css('border', '1px solid #ccc');
            $('.sea2').css('border', '1px solid #ccc')
        }
    });
    //热门搜索的移入效果
    $('.hot a').mouseover(function () {
        $(this).css({'color': '#fff', 'background': 'orangered',})
    }).mouseout(function () {
        $(this).css({'color': '#757575', 'background': '#eee'})
    })
//    按钮移入后的效果
    $('.sea2').mouseover(function () {
        $('.sea1 input').css({'border': '1px solid #000', 'border-right': 'none'})
        $(this).css({'background': 'orangered', 'color': '#fff'})
    }).mouseout(function () {
        $('.sea1 input').css('border', '1px solid #ccc')
        $(this).css({'background': '#fff', 'color': '#000', 'border': '1px solid #ccc', 'border-left': 'none'})
    })
    $('.sea1 input').focus(function () {
        $(this).css('border-color', 'orange');
        $('.sea2').css('border-color', 'orange');
        $('.keywordsList').slideDown().css('border-color', 'orangered');
    }).blur(function () {
        $(this).css('border-color', '#ccc');
        $('.sea2').css('border-color', '#ccc');
        $('.keywordsList').slideUp().css('border-color', '#ccc')
    })
//导航效果开始
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#ff6700')
        if ($(this).index() < 7) {
            $('.select').removeClass('hide')
            $('.select').slideDown().finish()
            $('.select').find('ul').addClass('hide')
            $('.select').find('ul').eq($(this).index()).removeClass('hide')
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000')
        $('.select').slideUp()
    })
    $('.nav').mouseout(function () {
        $('.select').slideUp()
    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish()
    }).mouseout(function () {
        $('.select').slideUp()
    })
//    轮播图
    var num = 0
    var timer
    timer = setInterval(autoplay, 3000)
    $('.round li').mouseover(function () {
        num = $(this).index()
        displayImg()
    })
    $('.banner').mouseover(function () {clearInterval(timer)}).mouseout(function () {timer = setInterval(autoplay, 3000)})
    $('.direcL').click(function () {
        num = num - 1
        if (num < 0) {
            num = 4
        }
        displayImg()
    })
    $('.direcR').click(function () {
        clearInterval(timer)
        num = num + 1
        if (num > 4) {
            num = 0
        }
        displayImg()
    })
    function displayImg() {
        $('.round li').eq(num).css('background', 'orange').siblings().css({'background': '#000', 'opacity': '0.5'})
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide')
    }
    function autoplay() {
        num++
        if (num > 4) {
            num = 0
        }
        displayImg()
    }
//隐藏的导航
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700')
        $('.navHide').removeClass('hide')
        $('.ulHide').addClass('hide')
        $('.ulHide').eq($(this).index()).removeClass('hide')
    }).mouseout(function () {
        $(this).css('background', 'transparent')
    })
    //鼠标移除二级导航范围 消失
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide')
    })
    //用户移入三级导航 显示
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide')
        $('.navL li').eq($(this).index()).css('background', '#ff6700')
    }).mouseout(function () {
        $('.navHide').addClass('hide')
        $('.navL li').eq($(this).index()).css('background', 'transparent')
    })
//    轮播区域下方
    $('.miniLink li').mouseover(function () {
        $(this).find('a').css('color', 'white')
    }).mouseout(function () {
        $(this).find('a').css('color', '#cfcdcb')
    })
//    小米明星产品
    var clickL = true
    $('.prev').click(function () {
        if (clickL == true) {
            $('.scroll').css({'left': '-1226px'})
            $('.starPro').css('overflow', 'hidden')
            $('.prev').css({'color': ' rgb(223, 223, 224)', 'cursor': 'default'})
            $('.next').css('color', 'black')
            $('.next').mouseover(function () {
                $(this).css('color', ' rgb(255, 103, 0)')
            }).mouseout(function () {
                $(this).css('color', 'white')
            })
        }
        clickL = false
    })
    $('.next').click(function () {
        if (clickL == false) {
            $('.scroll').css({'left': ''})
            $('.starPro').css('overflow', 'hidden')
            $('.next').css({'color': ' rgb(223, 223, 224)', 'cursor': 'default'})
            $('.prev').css('color', 'black')
            $('.prev').mouseover(function () {
                $(this).css('color', ' rgb(255, 103, 0)')
            }).mouseout(function () {
                $(this).css('color', ' rgb(223,223,224)')
            })
        }
        clickL = true
    })
    timer = setInterval(function () {
        if (num > 0) {
            num = 0
        }
        showImg()
        num++
    }, 5000)
    function showImg() {
        if (flag) {
            $('.scroll').css({'left': '-1226px'})
            $('.starPro').css('overflow', 'hidden')
            flag = false
        }
        else {
            $('.scroll').css({'left': '0'})
            flag = true
        }
    }
    //智能硬件
    $('.product1 li').mouseover(function () {
        $('.product1 li').css({'margin-Top': '5px', 'box-shadow': 'rgb(170,170,170)0px 0px 10px'})
    }).mouseout(function () {
        $('.product1 li').css({'margin-Top': '6px', 'box-shadow': 'none'})
    })
    $('.productR li').mouseover(function () {
        $(this).css({'margin-Top': '12px', 'box-shadow': 'rgb(170,170,170)0px 0px 10px', 'margin-bottom': '2px'})
    }).mouseout(function () {
        $('.productR li').css({'margin-Top': '14px', 'box-shadow': 'none', 'margin-bottom': '0'})
    })
    $('.toAll').mouseover(function () {
        $(this).find('a').css('color', '#FF6700');
        $(this).find('i').css('color', '#FF6700');
    }).mouseout(function () {
        $(this).find('a').css('color', '#424242');
        $(this).find('i').css('color', '#B0B0B0');
    })
//搭配
    Tab1($('.list41>li'), $('.productR2 .ProLi'))
    $('.productL>li').mouseover(function () {
        $($(this).index() == 0)?($(this).css({'margin-Top': '12px', 'box-shadow': 'rgb(170,170,170)0px 0px 10px'}),$(this).next().css('marginTop', '16px')) : $(this).css({marginTop: '12px', boxShadow: '0 0 28px #aaa'})
    }).mouseout(function () {
        $($(this).index() == 0)?( $('.productL>li').css({'margin-Top': '14px', 'box-shadow': 'none'}),$(this).next().css('marginTop', '14px')) : $(this).css({marginTop: '14px', boxShadow: 'none'})
    })
    $('.ProLi>li').mouseover(function () {
        $(this).find('.slideDiv').stop(true, false).slideDown('fast');
        if ($(this).index() != 7) {$(this).css({marginTop: '12px', 'box-shadow': '0px 0px 28px #aaa'});}
    }).mouseout(function () {
        $(this).find('.slideDiv').stop(true, false).slideUp('fast');
        if ($(this).index() != 7) {$(this).css({marginTop: '14px', 'box-shadow': 'none'});}
    })
    //配件
    Tab1($('.list42>li'), $('.productR3 .ProLi'))
    //周边
    Tab1($('.list5>li'), $('.productR4 .ProLi'))
    //为你推荐
    //上一页
    $('.prev2').mouseover(function(){
       $($('.scroll2').css('left')!='0px')?$(this).css({color:'#ff6700',cursor:'pointer'}):$(this).css('color','#dfdfe0')
    }).click(function(){
        if($('.scroll2').css('left')!='0px'){
            $('.scroll2').css('left',parseInt($('.scroll2').css('left'))+1226+'px');
            if($('.scroll2').css('left')!='-3678px'){$('.next2').css('color','#b0b4bc');}
            if($('.scroll2').css('left')=='0px'){$(this).css({color:'#dfdfe0',cursor:'default'});}
        }else{$(this).css('color','#dfdfe0');}
    }).mouseout(function(){
        $($('.scroll2').css('left')!='0px')?$(this).css('color','#b0b4bc'): $(this).css('color','gray')
    })
    //下一页
    $('.next2').mouseover(function(){
        if($('.scroll2').css('left')!='-3678px'){$(this).css({color:'#ff6700',cursor:'pointer'});}
    }).click(function(){
        if($('.scroll2').css('left')!='-3678px'){
            $('.scroll2').css('left',parseInt($('.scroll2').css('left'))-1226+'px');
            if($('.scroll2').css('left')!='0px'){$('.prev2').css('color','#b0b4bc');}
            if($('.scroll2').css('left')=='-3678px'){$(this).css({color:'#dfdfe0',cursor:'default'});}
        }else{$(this).css('color','#dfdfe0');}
    }).mouseout(function(){$($('.scroll2').css('left')!='-3678px')?$(this).css('color','#b0b4bc'): $(this).css('color','gray')})
//    热评产品
    $('.hotList li').mouseover(function () {$(this).css({'marginTop': '2px', 'margin-bottom': '0px'});
    }).mouseout(function () {$(this).css('marginTop', '0px');})
//    内容
    $('.contList>li').mouseover(function () {$(this).find('.p2').css('display', 'block')}).mouseout(function () {$(this).find('.p2').css('display', 'none')})
    var j = 0
    //第一部分
    clickLeft1($('.r2'), $('.contBox'), $('.round2>p'))
    clickRight1($('.l2'), $('.contBox'), $('.round2>p'))
    dot($('.round2>p'), $('.contBox'))
//    第二部分
    clickLeft1($('.r2-2'), $('.contBox-2'), $('.round2-2>p'))
    clickRight1($('.l2-2'), $('.contBox-2'), $('.round2-2>p'))
    dot($('.round2-2>p'), $('.contBox-2'))
    //    第三部分
    clickLeft1($('.r2-3'), $('.contBox-3'), $('.round2-3>p'))
    clickRight1($('.l2-3'), $('.contBox-3'), $('.round2-3>p'))
    dot($('.round2-3>p'), $('.contBox-3'))
    //    第四部分
    clickLeft1($('.r2-4'), $('.contBox-4'), $('.round2-4>p'))
    clickRight1($('.l2-4'), $('.contBox-4'), $('.round2-4>p'))
    dot($('.round2-4>p'), $('.contBox-4'))

    $('.goTo').mouseover(function () {$(this).css({background: '#ffac13', color: '#fff'})
    }).mouseout(function () {
        $(this).css({background: '#fff', color: '#ffac13'})
    })
    //切换
    function Tab1(obj1, obj2) {
        $(obj1).mouseover(function () {
            $(this).css({'border-bottom': '2px solid rgb(255,103,0)'})
            $(obj2).eq($(this).index()).removeClass('hide').siblings().addClass('hide')
        }).mouseout(function () {
            $(obj1).css('border-bottom', '')
            $(obj2).eq($(this).index()).siblings().addClass('hide')
        })
    }
    //内容
    function clickLeft1(obj1, obj2, obj3) {
        obj3.eq(j).css({border: '2px solid #ff6700', background: '#fff'})
        obj1.click(function () {
            j++
            var left = j * 310
            if (j < 4) {
                obj2.css('left', '-' + left + 'px')
                obj3.eq(j).css({border: '2px solid #ff6700', background: '#fff'}).siblings().css({border: 'none', background: '#b0b0b0'})
            } else {
                j = 3
            }
        })
    }
    function clickRight1(obj1, obj2, obj3) {
        obj3.eq(j).css({border: '2px solid #ff6700', background: '#fff'})
        obj1.click(function () {
            j--
            var right = j * 310
            if (j >= 0) {
                obj2.css('left', '-' + right + 'px')
                obj3.eq(j).css({border: '2px solid #ff6700', background: '#fff'}).siblings().css({border: 'none', background: '#b0b0b0'})
            } else {
                j = 0
            }
        })
    }
    function dot(obj1, obj2) {
        $(obj1).click(function () {
            $(this).css({border: '1px solid red', background: '#fff'}).siblings().css({
                border: 'none',
                background: '#b0b0b0'
            })
            $(obj2).css('left', '')
            var left2 = ($(this).index() * 310)
            $(obj2).css('left', '-' + left2 + 'px')
        })
    }
//    视频
    $('.videoList li').mouseover(function () {$(this).css({'margin-top': '12px', 'margin-bottom': '2px'})
    }).mouseout(function () {
        $(this).css({'margin-top': '14px', 'margin-bottom': '0px'})
    })
    $('.videoList li>img').mouseover(function () {
        $(this).next('.icon-bofang').css('color', '#ff6700')
    }).mouseout(function () {
        $(this).next('.icon-bofang').css('color', 'white')
    })
    $('.icon-bofang').mouseover(function () {
        $(this).css('color', '#ff6700')
    })
})


