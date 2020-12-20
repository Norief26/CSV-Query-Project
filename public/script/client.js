window.addEventListener('beforeunload', function (e) {
	fetch('/backup');
});