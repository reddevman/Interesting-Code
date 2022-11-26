// Fix Documents breadcrumb padding on Safari IOS/MAC (renewed 2022 method)
const userAgent = navigator.userAgent; // not used in the new method
const body = document.querySelector('body');
const documents = body.classList.contains('path-documents');
const decisions = body.classList.contains('path-decisions');
const reports = body.classList.contains('path-reports');
const resources = body.classList.contains('path-resources');
const breadcrum = document.querySelector('nav[aria-label="breadcrumb"]');

const isSafari =
	/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari) {
	if (documents || decisions || reports || resources) {
		breadcrum.style.paddingTop = '0';
	}
}
