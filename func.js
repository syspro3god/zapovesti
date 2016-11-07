function ispisi_zap(zapovest){
  var art = document.createElement('article');
  art.innerHTML="<span>"+zapovest.ime+"</span>"+zapovest.zap;
   document.body.appendChild(art);
}
var test;
function JSON_CALLBACK(x)
{
    for (j=x.feed.entry.length-3;j>=3;j-=3)
    {
       /*for (i=0;i<10;i++)*/
            ispisi_zap({ime:x.feed.entry[j+1].content.$t,zap:x.feed.entry[j+2].content.$t});
        
    }
	test = x;
}
function numLet()
{
	document.getElementsByTagName("textarea")[0].value=document.getElementsByTagName("textarea")[0].value.substring(0,255);      		document.getElementsByName("brslova")[0].innerHTML = document.getElementsByTagName("textarea")[0].value.length +"/255";
}

 document.body.style.paddingTop = document.getElementsByTagName("header")[0].offsetHeight+10;
 document.getElementById("saljizap").disabled = true;
    function zapovesti()
    {
        if (document.getElementById("zapovestizap").style.maxHeight=="0px")  
            document.getElementById("zapovestizap").style.maxHeight="100%";
        else
            document.getElementById("zapovestizap").style.maxHeight="0px";
    }
    function checkSend()
	{
		if (document.getElementById("nadimak").value.length>0 && document.getElementById("zaptext").value.length>0)
			document.getElementById("saljizap").disabled = false;
		else
			document.getElementById("saljizap").disabled = true;
	}
