(function() {
	var topPadding = 60; /* Padding for scroll adjustment */

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
			var $target = $(event.target);
			var scrollTop = $target.offset().top - topPadding;

			$target.addClass("js-navigation-focus").addClass("navigation-focus")
			$("html").stop().animate({ scrollTop: scrollTop }, 600);

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

