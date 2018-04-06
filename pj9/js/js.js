/*function btn1(form1) {
	alert(form1["Message"].value);//取得本表單name為Message的欄位值
	alert(document.getElementById("ZIPcode").value);
}*/
const minlength = 1;
const maxlength = 32;
function Monblur(form_message,Message_ERROR) {
	if (form_message.value.length == 0) {
		//alert('請輸入message');
		if (Message_ERROR != null) {
			Message_ERROR.innerHTML = "請輸入message";
		}
		return false;
	}
	else{
		//如果輸入標語的長度小於一定長度和大於一定長度，會顯示錯誤訊息
		if ((minlength <= form_message.value.length) && (form_message.value.length <= maxlength)){
			if (Message_ERROR != null) {
				Message_ERROR.innerHTML = "";
			}
			return true;
		}
		else{
			if (Message_ERROR != null) {
				Message_ERROR.innerHTML = "請輸入正確格式";
			}
			return false;
		}
	}

	return true;
}
function Zonblur(form_ZIP,ZIP_ERROE) {
	if (form_ZIP.value.length == 0) {
		if (ZIP_ERROE != null) {
			ZIP_ERROE.innerHTML = "請輸入Zip code";
		}
		return false;
	}
	else{
		//偵測輸入的ZIP欄位值是否為數字
		if (isNaN(form_ZIP.value) != false) {
			ZIP_ERROE.innerHTML = "請輸入數字";
			return false;
		}
		else{
			ZIP_ERROE.innerHTML = "";
			return true;
		}
	}
}
function Fonblur(form_Fly,Fly_ERROR) {
	if (form_Fly.value.length == 0) {
		if (Fly_ERROR != null) {
			Fly_ERROR.innerHTML = "請輸入飛行日期";
		}
		return false;
	}
	return true;
}
function nonblur(form_name,name_ERROR) {
	if (form_name.value.length == 0) {
		if (name_ERROR != null) {
			name_ERROR.innerHTML = "請輸入姓名";
		}
		return false;
	}
	return true;
}
function Ponblur(form_Phone,Phone_ERROR) {
	if (form_Phone.value.length == 0) {
		if (Phone_ERROR != null) {
			Phone_ERROR.innerHTML = "請輸入電話";
		}
		return false;
	}
	return true;
}
function eonblur(form_email,email_ERROR) {
	if (form_email.value.length == 0) {
		if (email_ERROR != null) {
			email_ERROR.innerHTML = "請輸入email";
		}
	}
}
/*function Zonblur(form_ZIP) {
	if (form_ZIP.value.length == 0) {
		alert('請輸入ZIP code');
	}
}
function Fonblur(form_Fly) {
	if (form_Fly.value.length == 0) {
		alert('請輸入飛行日期');
	}
}
function nonblur(form_name) {
	if (form_name.value.length == 0) {
		alert('請輸入姓名');
	}
}
function Ponblur(form_Phone) {
	if (form_Phone.value.length == 0) {
		alert('請輸入電話');
	}
}
function eonblur(form_email) {
	if (form_email.value.length == 0) {
		alert('請輸入email');
	}
}*/