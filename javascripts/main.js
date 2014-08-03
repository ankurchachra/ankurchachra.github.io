function buttonclicked()
{
  var key1var = document.getElementById("key1").value;
  var res = key1var.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z-]/g, '');

var alphabetlist = new Array( 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' );
var alphabetcount = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0' );

var filterkey1var='';
//alert(alphabetlist.length);
//alert(alphabetcount.length);
//alert(res.length);
  if(res.length==0)
  {
    alert("Please enter the key before continuing");
  }
  else
  { 
    for (var i = 0; i < res.length; i++)
            {
                for (var j = 0; j < alphabetlist.length; j++)
                {
                    if (res.charAt(i) == alphabetlist[j])
                    {
                        if (alphabetcount[j] == '1')
                        {

                        }
                        else
                        {
                            alphabetcount[j] = '1';
                            filterkey1var+=res.charAt(i);
                        }

                        break;
                    }
                }
            }
     
  document.getElementById("filterkey1").value=filterkey1var;
  }
}
function button2clicked()
{
  alert("button 2");
}
