/* Javascript Document */
function validateName()
{
  var name = document.getElementById("fname").value;
  if(name == "" || !isNaN(name))
  {
    document.getElementById("error-display").innerHTML = "bitch";
  }
	else
	{
    document.getElementById("error-display").innerHTML = "Welcome, " + name;
  }
}