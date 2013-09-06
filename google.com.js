document.body.addEventListener("DOMSubtreeModified", function() {
	$fuckerTrimmedContent = $("div[role=button][data-tooltip='Show trimmed content']")
	if ($fuckerTrimmedContent.length > 0) {
		$fuckerTrimmedContent.click();
	}
});
