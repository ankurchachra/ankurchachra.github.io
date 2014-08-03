function buttonclicked()
{
  var key1var = document.getElementById("key1").value;
  var res = key1var.toLowerCase();
  var res2 = res.replace(/\s+/g, '');
  if(res2.length==0)
  {
    alert("Please enter the key before continuing");
  }
  else
  {
  alert(res2);
  }
}
function button2clicked()
{
  alert("button 2");
}
