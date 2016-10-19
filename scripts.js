(function(){
	var features = [{'modname':'boxsizing','name':'Box sizing'},
					{'modname':'cssanimations','name':'CSS animations'},
					{'modname':'cssgradients','name':'CSS gradients'},
					{'modname':'csstransforms','name':'CSS transforms'},
					{'modname':'csstransitions','name':'CSS transitions'},
					{'modname':'fileinput','name':'File input'},
					{'modname':'filereader','name':'File reader'},
					{'modname':'generatedcontent','name':'Generated content'},
					{'modname':'hashchange','name':'Hash change'},
					{'modname':'json','name':'JSON'},
					{'modname':'opacity','name':'Opacity'},
					{'modname':'xhr2','name':'XHR2'}],
		list = document.getElementById("list"),
		item,
		content;

	list.innerHTML = '';

	features.forEach(function(obj){
		item = document.createElement("li");
		content = document.createTextNode(obj.name);
		item.appendChild(content);

		if(Modernizr[obj.modname]){
			item.className = 'on';
		}
		else{
			item.className = 'off';
		}
		list.appendChild(item);
	})
})();