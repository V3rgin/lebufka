$(document).ready(function () {
    $('#menu').click(function(e) {
        if ($('#sidebar').hasClass('closed'))  {
            $('#sidebar').animate({left: "0px"}, 300);
            $('#overlay-menu').show();
        }
        e.preventDefault();
    });
    $('#overlay-menu').click(function(e) {
        $('#overlay-menu').hide();
        $('#sidebar').animate({left: "-280px"}, 300);
        e.preventDefault();
    });
    $('#refresh').click(function(e) {
        loadData();
        e.preventDefault();
    });
	createMenu();
	loadView();
});

function createMenu() {
	$.getJSON('menu.json', function(json) {
		var menu = json.menu;
		htmlMenu = '';
		for(var i = 0; i < menu.length; i++) {
			if(menu[i].active) {
				htmlMenu = htmlMenu + '<li><a href="' + menu[i].url + '">' + menu[i].name + '</a></li>';
			}
		}
		$('.sidebar-menu').html(htmlMenu);
	});
}


function loadView() {
	$('.sidebar-menu').on('click', 'a', function (e) {
		var htmlFile = $(this).attr('href');
		$('#main-content').load('views/' + htmlFile);
		helperHideSidebar();
		e.preventDefault();
	});
}

function helperHideSidebar() {
    $('#overlay-menu').hide();
    $('#sidebar').animate({left: "-280px"}, 300);	
}