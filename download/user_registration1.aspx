<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 12.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta http-equiv="Content-Language" content="en-us">
<title>User Registration</title>
<script language="JavaScript">
<!--
function FP_swapImg() {//v1.0
 var doc=document,args=arguments,elm,n; doc.$imgSwaps=new Array(); for(n=2; n<args.length;
 n+=2) { elm=FP_getObjectByID(args[n]); if(elm) { doc.$imgSwaps[doc.$imgSwaps.length]=elm;
 elm.$src=elm.src; elm.src=args[n+1]; } }
}

function FP_preloadImgs() {//v1.0
 var d=document,a=arguments; if(!d.FP_imgs) d.FP_imgs=new Array();
 for(var i=0; i<a.length; i++) { d.FP_imgs[i]=new Image; d.FP_imgs[i].src=a[i]; }
}

function FP_getObjectByID(id,o) {//v1.0
 var c,el,els,f,m,n; if(!o)o=document; if(o.getElementById) el=o.getElementById(id);
 else if(o.layers) c=o.layers; else if(o.all) el=o.all[id]; if(el) return el;
 if(o.id==id || o.name==id) return o; if(o.childNodes) c=o.childNodes; if(c)
 for(n=0; n<c.length; n++) { el=FP_getObjectByID(id,c[n]); if(el) return el; }
 f=o.forms; if(f) for(n=0; n<f.length; n++) { els=f[n].elements;
 for(m=0; m<els.length; m++){ el=FP_getObjectByID(id,els[n]); if(el) return el; } }
 return null;
}
// -->
</script>
<meta content="none, default" name="Microsoft Theme">
<style type="text/css">
.auto-style1 {
	margin-top: 0px;
}
</style>
</head>

<body onload="FP_preloadImgs(/*url*/'buttonF.jpg',/*url*/'buttonE.jpg',/*url*/'button7.jpg',/*url*/'button6.jpg',/*url*/'buttonB.jpg',/*url*/'buttonA.jpg')">

<form id="form1" runat="server">

<h1><a href="index.htm">
<img border="0" id="img4" src="buttonD.jpg" height="20" width="100" alt="Home" onmouseover="FP_swapImg(1,0,/*id*/'img4',/*url*/'buttonE.jpg')" onmouseout="FP_swapImg(0,0,/*id*/'img4',/*url*/'buttonD.jpg')" onmousedown="FP_swapImg(1,0,/*id*/'img4',/*url*/'buttonF.jpg')" onmouseup="FP_swapImg(0,0,/*id*/'img4',/*url*/'buttonE.jpg')"  </a><a href="index-old.htm"><img border="0" id="img1" src="button5.jpg" height="20" width="100" alt="Search"   onmouseover="FP_swapImg(1,0,/*id*/'img1',/*url*/'button6.jpg')" onmouseout="FP_swapImg(0,0,/*id*/'img1',/*url*/'button5.jpg')" onmousedown="FP_swapImg(1,0,/*id*/'img1',/*url*/'button7.jpg')" onmouseup="FP_swapImg(0,0,/*id*/'img1',/*url*/'button6.jpg')"></a><a href="http://www.google.com"><img border="0" id="img3" src="button9.jpg" height="20" width="100" alt="Actual search" onmouseover="FP_swapImg(1,0,/*id*/'img3',/*url*/'buttonA.jpg')" onmouseout="FP_swapImg(0,0,/*id*/'img3',/*url*/'button9.jpg')" onmousedown="FP_swapImg(1,0,/*id*/'img3',/*url*/'buttonB.jpg')" onmouseup="FP_swapImg(0,0,/*id*/'img3',/*url*/'buttonA.jpg')"  ></a></h1>
<h1>User Registration</h1>
<p>&nbsp;</p>
<hr>
	<h2>
	Form Submission</h2><table style="width: 100%">
		<tr>
			<td>
			<asp:CreateUserWizard id="CreateUserWizard2" runat="server" CssClass="auto-style1">
		<WizardSteps>
			<asp:CreateUserWizardStep runat="server" />
			<asp:CompleteWizardStep runat="server">
				<ContentTemplate>
					<table style="font-size: 100%;">
						<tr>
							<td align="center" colspan="2">Complete</td>
						</tr>
						<tr>
							<td>Your account has been successfully created.</td>
						</tr>
						<tr>
							<td align="right" colspan="2">
							<asp:Button ID="ContinueButton0" runat="server" CausesValidation="False" CommandName="Continue" Text="Continue" ValidationGroup="CreateUserWizard1" />
							</td>
						</tr>
					</table>
				</ContentTemplate>
			</asp:CompleteWizardStep>
		</WizardSteps>
			</asp:CreateUserWizard>
			<asp:SiteMapPath id="SiteMapPath1" runat="server">
			</asp:SiteMapPath>
			<asp:LoginName id="LoginName1" runat="server" />
			<asp:LoginStatus id="LoginStatus1" runat="server" />
			</td>
			<td>
			&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
		</tr>
	</table>
<hr>
<h5>Author information goes here.<br>
Copyright © 2001 [OrganizationName]. All rights reserved.<br>
Revised: <!--webbot bot="TimeStamp" s-type="EDITED" s-format="%m/%d/%y" startspan -->01/15/24<!--webbot bot="TimeStamp" endspan i-checksum="12934" -->.</h5>

</form>

</body>

</html>
