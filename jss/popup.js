
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ơ';
a[3]='n';
a[4]=' ';
a[5]='g';
a[6]='i';
a[7]='ả';
a[8]='n';
a[9]=' ';
a[10]='v';
a[11]='ì';
a[12]=' ';
a[13]='c';
a[14]='ậ';
a[15]='u';
a[16]=' ';
a[17]='đ';
a[18]='ẹ';
a[19]='p';
a[20]=' ';
a[21]='t';
a[22]='r';
a[23]='a';
a[24]='i';
a[25]=' ';
a[26]='t';
a[27]='h';
a[28]='ô';
a[29]='i';
a[30]=' ';
a[31]='P';
a[32]='h';
a[33]='ú';
a[34]=' ';
a[35]='à';
a[36]='!';
a[37]='!';
a[38]='!';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==38)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>AI CŨNG NÓI VẬY MÀ <img src='http://website1gia.com/files/assets/3.png'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ ỪA THÌ TỚ BIẾT THẾ RỒI, CẬU NHỚ ĐỐI XỬ TỐT VỚI TỚ ẤY NHÉ :)) .<img src='http://website1gia.com/files/assets/4.png'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>XIN CÁM ƠN CẬU ĐÃ XEM HẾT CÁI NÀY :)) HEHE  <img src='http://website1gia.com/files/assets/5.png'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				