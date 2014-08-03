function buttonclicked()
{
  var key1var = document.getElementById("key1").value;
  var res = key1var.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z-]/g, '');

var alphabetlist = new Array( 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' );
var alphabetcount = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0' );

var filterkey1='an';
//alert(alphabetlist.length);
//alert(alphabetcount.length);
  
  if(res.length==0)
  {
    alert("Please enter the key before continuing");
  }
  else
  {
     
  document.getElementById("filterkey1").value=filterkey1;
  }
}
function button2clicked()
{
  alert("button 2");
}
