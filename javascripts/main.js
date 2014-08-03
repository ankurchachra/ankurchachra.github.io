function buttonclicked()
{
  var key1var = document.getElementById("key1").value;
  var res = key1var.toLowerCase();
  if(res.length==0)
  {
    alert("Please enter the key before continuing");
  }
  else
  {
  alert(res);
  }
}
function button2clicked()
{
  alert("button 2");
}
