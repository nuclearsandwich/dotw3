$(function() {
	$("#instructor_register form[action='/site/student_signin'] button").click();

	$("#popup_body").on("DOMSubtreeModified", function() {
		if ($("#popup_body iframe").length > 0) {
			var url = $("#popup_body iframe").attr("src");
			$.get(url, function(contents) {
				$("#popup_body .right_essay").html(contents);
			});
		}
	});
});
