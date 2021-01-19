VK.init(function() {
	init();
  }, function() {
}, '5.126'); 

function init() {
	VK.api("users.get",{"fields":"photo_50,first_name,last_name","v":"5.73"}, function (data){
		username = data.response[0].first_name + ' ' + data.response[0].last_name
	});
}