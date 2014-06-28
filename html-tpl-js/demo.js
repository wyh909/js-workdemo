var DEMO = (function(win,$){
	var JSON = [{
		'name' : '戴尔',
		'computer' : {
			'name' : 'XPS 13 触控超极本',
			'stock_num' : 5000,
			'price' : 8000,
			'channel' : '太平洋大厦',
			'detail' : {
				'name' : '睿智公司',
				'address' : '5-08号'
			}
		}
	},{
		'name' : 'Thinkpad',
		'computer' : {
			'name' : 'ThinkPad T440（20B6S00200）',
			'stock_num' : 3000,
			'price' : 7500,
			'channel' : '海龙大厦',
			'detail' : {
				'name' : '倾城公司',
				'address' : '3-12号'
			}
		}
	},{
		'name' : '苹果',
		'computer' : {
			'name' : '苹果MacBook Pro（ME865CH/A）',
			'stock_num' : 2000,
			'price' : 9000,
			'channel' : '海龙大厦',
			'detail' : {
				'name' : '名扬公司',
				'address' : '16-03号'
			}
		}
	}],
	itemReg = /\$\w+[.]?\w+\$/gi,
	detailReg = /\$\w+[.]?\w+[.]?\w+\$/gi;
	String.prototype.temp = function(reg, obj) {
	    return this.replace(reg, function(matchs) {
	        var returns = '',
	        getStr = matchs.replace(/\$/g, ""),
	        subArr = getStr.split('.');
	        len = subArr.length;
	        if(len == 1){ 
	        	returns = obj[getStr];
	        }else if(len > 1){ 
	        	returns = obj[subArr[0]];
	        	for(var i=1; i<len; i++){
		        	returns = returns[subArr[i]];
	        	}
	        }
	        return (returns + "") == "undefined"? "": returns;
	    });
	};
	var domRander = function(tpl, ele, reg){ 
		var showTpl = tpl.html(),
		showHtml = '';
		for(var i=0,len = JSON.length,jsonList=null; i<len; i++){
			jsonList = JSON[i] || {};
			showHtml += showTpl.temp(reg, jsonList);
		}
		$('tbody',ele).html(showHtml);
	};
	return {
		init : function(){
			domRander($('#shoptpl'), $('#shopitem'), itemReg);
			domRander($('#detailtpl'), $('#detailitem'), detailReg);
		}
	}
})(window, jQuery);
$(function(){
	DEMO.init();
})