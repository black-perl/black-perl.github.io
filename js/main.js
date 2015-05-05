var icon = document.getElementById("nav-menu");

// Toggle the "menu-open" class
function toggle() {
	  var nav = document.getElementById("nav");
	  var button = document.getElementById("menu");
	  var site = document.getElementById("wrap");
	  
	  if (nav.className == "menu-open") {
	  	  nav.className = "";
	  	  button.className = "";
	  	  site.className = "";
	  } else {
	  	  nav.className += "menu-open";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	    }
	}

// Ensures backward compatibility with IE old versions
function menuClick() {
	if (document.addEventListener) {
		icon.addEventListener('click', toggle);
	} else if (document.attachEvent) {
		icon.attachEvent('onclick', toggle);
	}
}

menuClick();

// disqus comments
var disqus_shortname  = 'black_perl',
    disqus_identifier = '{{ page.path | split:'/' | last | cgi_escape }}',
    disqus_url        = '{{ site.url }}{{ page.url | uri_escape }}'
;
(function() {
	var load = function(src){
		var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = src;
		var e = document.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
	};
	load('//' + disqus_shortname + '.disqus.com/count.js');
	if (document.getElementById('disqus_thread')) {
		load('//' + disqus_shortname + '.disqus.com/embed.js');
	}
})();
