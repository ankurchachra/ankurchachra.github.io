function buttonclicked()
{
  var key1var = document.getElementById("key1").value;
  var res = key1var.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z-]/g, '');
  var key1Array = new Array();
for (var i=0; i < res.length; i++){
     key1Array.push(res[i]);
}
  
  if(res.length==0)
  {
    alert("Please enter the key before continuing");
  }
  else
  {
  document.getElementById("filterkey1").value=res;
  }
}
function button2clicked()
{
  alert("button 2");
}
