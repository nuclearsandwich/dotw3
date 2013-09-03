(function() {
	var identifyModerators = function() {
		$(".poster li.membergroup").parents(".poster").addClass("moderator");
	}

	var identifyThreadStarters = function() {
		$(".poster li.threadstarter").parents(".poster").addClass("thread-starter");
	}

	var initKeyboardNavigation = function() {
		/* In order to use focus() and blur(), each post needs a tabindex. */
		$("#forumposts .post_wrapper").each(function(index) {
			$(this).attr("tabindex", 1000 + index);
		}).focus(function(event) {
			$(event.target).addClass("js-navigation-focus").addClass("navigation-focus");
		}).blur(function(event) {
			$(event.target).removeClass("js-navigation-focus").removeClass("navigation-focus");
		});
	}

	$(document).ready(function() {

		identifyThreadStarters();
		identifyModerators();
		initKeyboardNavigation();
	})
})();

