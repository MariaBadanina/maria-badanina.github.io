'use strict';
document.body.onload = function(){
	setTimeout(function(){
		let preloader = document.getElementById('preloader');
		let body = document.getElementById('body');
		
		if (!preloader.classList.contains('done'))
			{
				preloader.classList.add('done');
				body.classList.remove('loading');
			} 
	},500);
	
};