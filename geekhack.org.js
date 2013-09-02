(function() {
	var identifyModerators = function() {
		$(".poster li.membergroup").parents(".poster").addClass("moderator");
	}

	var identifyThreadStarters = function() {
		$(".poster li.threadstarter").parents(".poster").addClass("thread-starter");
	}

	$(function() {
		identifyThreadStarters();
		identifyModerators();
	})
})();

