var topPadding = 60; /* Padding for scroll adjustment */

var identifyModerators = function() {
	$(".poster li.membergroup").parents(".poster").addClass("starred");
};

var identifyThreadStarters = function() {
	$(".poster li.threadstarter").parents(".poster").addClass("thread-starter");
};

var initKeyboardNavigation = function() {
	// mark each navigation container with the js-navigation-container class
	$("#forumposts").addClass("js-navigation-container");
	$("#messageindex").addClass("js-navigation-container");

	// Navigate messageindex rows.
	$(".js-navigation-container tbody tr").each(function(index) {
		// In order to use focus() and blur(), each post needs a tabindex.
		$(this).attr("tabindex", 1000 + index);
	}).addClass("js-navigation-target").focus(function(event) {
		var $target = $(event.target);
		var scrollTop = $target.offset().top - topPadding;

		$target.addClass("js-navigation-focus").addClass("navigation-focus")
		$("html").stop().animate({ scrollTop: scrollTop }, 600);

	}).blur(function(event) {
		$(event.target).removeClass("js-navigation-focus").removeClass("navigation-focus");
	}).first().focus();

	// Navigate forum posts.
	$(".js-navigation-container .post_wrapper").each(function(index) {
		// In order to use focus() and blur(), each post needs a tabindex.
		$(this).attr("tabindex", 1000 + index);
	}).addClass("js-navigation-target").focus(function(event) {
		var $target = $(event.target);
		var scrollTop = $target.offset().top - topPadding;

		$target.addClass("js-navigation-focus").addClass("navigation-focus")
		$("html").stop().animate({ scrollTop: scrollTop }, 600);

	}).blur(function(event) {
		$(event.target).removeClass("js-navigation-focus").removeClass("navigation-focus");
	}).first().focus();
};

var navigation = window.Navigation = {
	"keys": {
		"w": 87,
		"s": 83,
		"j": 74,
		"k": 75,
		"enter": 13,
		"space": 32
	},

	current: function() {
		return $(".js-navigation-container .js-navigation-focus")[0]
	},

	next: function() {
		var current = this.current();
		var $posts = $(".js-navigation-container .js-navigation-target");
		var index = $.inArray(current, $posts);
		if (typeof(current) === "undefined") {
			return $(".js-navigation-container .js-navigation-target").first()[0];
		} else if (index === $posts.length - 1) {
			return current;
		} else {
			return $posts[index + 1];
		}
	},

	previous: function() {
		var current = this.current();
		var $posts = $(".js-navigation-container .js-navigation-target");
		var index = $.inArray(current, $posts);
		if (typeof(current) === "undefined") {
			return $(".js-navigation-container .js-navigation-target").first()[0];
		} else if (index === 0) {
			return current;
		} else {
			return $posts[index - 1];
		}
	}
};

var enableKeys = function() {
	var activateInNewTab = function(navigationItem) {
	}

	var activateHere = function(navigationItem) {
		$(navigationItem).find(".lastpost a").click();
	}

	var activatableTargets = $("#messageindex").length > 0;

	$(document).keydown(function(e) {
		if (e.which === navigation.keys.w || e.which === navigation.keys.k) {
			navigation.previous().focus();
		} else if (e.which === navigation.keys.s || e.which === navigation.keys.j) {
			$(navigation.next()).focus();
		} else if (activatableTargets && e.which === navigation.keys.space) {
			activateInNewTab(navigation.current());
		} else if (activatableTargets && e.which === navigation.keys.enter) {
			$(navigation.current()).find(".lastpost a").click();
		}
	});
};

$(function() {
	identifyThreadStarters();
	identifyModerators();
	initKeyboardNavigation();
	enableKeys();
});

