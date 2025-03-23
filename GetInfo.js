window.addEventListener("load",InitControls);
window.addEventListener("load",addListener);

function InitControls()
{
	document.getElementById("txtusername").textContent = "";
	document.getElementById("txtpassword").textContent = "";
	document.getElementById("txtusername").focus();
}

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",CheckInfo);
}

function CheckInfo()
{
	var username, passwd;
	username = document.getElementById("txtusername").value;
	passwd = document.getElementById("txtpassword").value;
	
	if (username == "" || passwd == "")
	{
		alert("Information is missing!");
		InitControls();
	}
}
