
	  var xhr = new XMLHttpRequest();
	  xhr.open('get', 'https://v1.hitokoto.cn');
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState === 4) {
	      var data = JSON.parse(xhr.responseText);
	      var hitokoto = document.getElementById('hitokoto');
	      hitokoto.innerText = data.hitokoto;
	    }
	  }
	  xhr.send();