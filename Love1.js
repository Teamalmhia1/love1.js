
$(`<center><div style="position: static;width: 100%;" onclick="setTimeout(function(){fixSize();},800);">


<head>
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css" media="screen,projection" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

</head>

<body>

    <div class="container">
        <!-- Modal Trigger -->
        <a class="modal-trigger waves-effect waves-light btn" href="#modal1">للعبه الحب اضغط هنا </a>

        <!-- Modal Structure -->
        <div id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>لعبه الحب برعاية تيم</h4>
                <p>
  <script LANGUAGE="JavaScript">



/*

By Wee Family  psweesam@singnet.com.sg

Featured on eqla3 soft (http://elahmad.com)

For this and over 400+ free scripts, visit http://elahmad.com

* Visit our site at http://www.elahmad.com/ for more code

*/



function calc() {

first = document.loveform.name1.value.toUpperCase();

firstlength = document.loveform.name1.value.length;

second = document.loveform.name2.value.toUpperCase();

secondlength = document.loveform.name2.value.length;

var LoveCount=0;



for (Count=0; Count < firstlength; Count++) {







letter1=first.substring(Count,Count+1);



if (letter1=='L') LoveCount+=2; 

if (letter1=='O') LoveCount+=2; 

if (letter1=='V') LoveCount+=2;

if (letter1=='E') LoveCount+=2; 

if (letter1=='Y') LoveCount+=3; 

if (letter1=='O') LoveCount+=1; 

if (letter1=='U') LoveCount+=3;

}





for (Count=0; Count < secondlength; Count++) {

letter2=second.substring(Count,Count+1);

if (letter2=='L') LoveCount+=2;

if (letter2=='O') LoveCount+=2; 

if (letter2=='V') LoveCount+=2; 

if (letter2=='E') LoveCount+=2;

if (letter2=='Y') LoveCount+=3;

if (letter2=='O') LoveCount+=1;

if (letter2=='U') LoveCount+=3;

}



amount=0;



if (LoveCount> 0) amount=  5-((firstlength+secondlength)/2)

if (LoveCount> 2) amount= 10-((firstlength+secondlength)/2)

if (LoveCount> 4) amount= 20-((firstlength+secondlength)/2)

if (LoveCount> 6) amount= 30-((firstlength+secondlength)/2)

if (LoveCount> 8) amount= 40-((firstlength+secondlength)/2)



if (LoveCount>10) amount= 50-((firstlength+secondlength)/2)



if (LoveCount>12) amount= 60-((firstlength+secondlength)/2)

if (LoveCount>14) amount= 70-((firstlength+secondlength)/2)

if (LoveCount>16) amount= 80-((firstlength+secondlength)/2)

if (LoveCount>18) amount= 90-((firstlength+secondlength)/2)

if (LoveCount>20) amount=100-((firstlength+secondlength)/2)

if (LoveCount>22) amount=110-((firstlength+secondlength)/2)

if (firstlength==0 || secondlength==0) amount= "Err";

if (amount < 0) amount= 0;

if (amount >99) amount=99;



document.loveform.output.value=amount+"%";







}




</script>

 



<DIV align="center">

<p><b><span lang="ar-sa"> اختبار الحب</span></b></p><font color="red" face="Tahoma" size="2">

اختبار الحب بين شخصين ... اكتب اسم الشخص الاول ثم اسم الشخص الثاني واضفط على احسب

<span lang="ar-sa">... تكتب الأسماء بالحروف الإنجليزية فقط</span>.</font>



<FORM name="loveform">



  <P><INPUT value="إسمك" name="name1" type="text" size="20">  + 

  <INPUT



  value="اسم حبيبك" name="name2" type="text" size="20">  = <INPUT value name="output" type="text" size="6"> <BR>



  <BR>



  <INPUT value="احســب" name="calculate" type="button" value="calculate"



  onclick="calc()"> </P>







</FORM></DIV>

  

  

  

  </p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">موافق</a>
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">خاص بشات الملكه</a>

            </div>
        </div>
    </div>

    <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
    <script type="text/javascript" src="materialize/js/materialize.min.js"></script>

    <script>
        $(document).ready(function() {
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal();
        });
    </script>

</body>  
 </div> </div></div><center>`).insertBefore('#d2');

    $("#design-a").click(function(){$("#spanan").slideToggle(function(){});});
