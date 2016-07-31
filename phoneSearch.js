function search() {
	getData();
}
function getData () {
	var phoneNum = document.getElementById('phoneNum');
	var num = phoneNum.value;
	$.ajax({
		type : 'GET',
		dataType : 'jsonp',
		data : {
			shouji : num,
			appkey : '56f8e114bb51223d'
		},
		url : "http://api.jisuapi.com/shouji/query",
		success: function(data) {
			dispInfo(data);
	console.log(data);
		}
	})
}
function dispInfo(data) {
	var phoneNumber = document.getElementById('phoneNumber');
	var place = document.getElementById('place');
	var cardType = document.getElementById('cardType');
	var areaCode = document.getElementById('areaCode');
	var company = document.getElementById('company');
	phoneNumber.innerHTML = data.result.shouji;
	place.innerHTML = data.result.province + "--" + data.result.city;
	cardType.innerHTML = data.result.cardtype;
	areaCode.innerHTML = data.result.areacode;
	company.innerHTML = data.result.company;
}