
var match_data = window.location.pathname.match(/^(\/[-_\w]+\/[-_\w]+\/)pull\/\d+\/commits/);
if (match_data) {
	var $commit = $('.commit-meta .sha');
	var commit_sha = $commit.text();
	var anchor_tag = '<a href="' + match_data[1] + 'commit/' + commit_sha + '">' + commit_sha + '</a>';
	$commit.html(anchor_tag);
}

