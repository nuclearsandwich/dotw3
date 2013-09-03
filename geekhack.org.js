(function() {
	var identifyModerators = function() {
		$(".poster li.membergroup").parents(".poster").addClass("moderator");
	}

	var identifyThreadStarters = function() {
		$(".poster li.threadstarter").parents(".poster").addClass("thread-starter");
	}

	var initKeyboardNavigation = function() {
		console.log("Hookign up focus");

	}


	var selectFirstPost = function() {
		$("#forumposts .post_wrapper").first().focus();
	}

	var selectNextPost = function() {
		return;
	}

	$(document).ready(function() {
		$("#forumposts .post_wrapper").each(function(index) {
			$(this).attr("tabindex", 1000 + index);
		}).focus(function(event) {
			$(event.target).toggleClass("js-navigation-focus").toggleClass("navigation-focus");
		}).blur(function(event) {
			$(event.target).toggleClass("js-navigation-focus").toggleClass("navigation-focus");
		});

		identifyThreadStarters();
		identifyModerators();
		initKeyboardNavigation();
		selectFirstPost();
	})
})();

