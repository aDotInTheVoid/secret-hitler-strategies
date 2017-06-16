---
---

$( document ).ready(function() {
    $("h2,h3,h4").filter("[id]").each(function () {
        var linkText = '<a href="#' + $(this).attr("id") + '">'
        $(this).append(linkText + '<i class="fa fa-link"></i></a>');
    });

    let sectionSvg = `
        <svg class="secret-illustration" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="184.75px" width="346.5px" viewBox="0 0 277.2 147.8">
<g>
	<g>
		<path class="secret-illustration-fill-highlight" d="M2.9,71.8c-0.6,0-1-0.4-1-1v-0.1c0,0,0-0.1,0-0.1c0.1-0.5,0.5-0.9,1-0.9c0.6,0,1,0.5,1,1S3.5,71.8,2.9,71.8z"></path>
	</g>
</g>
<path class="secret-illustration-fill-highlight" d="M276.5,48.8c-1-1.4-2.7-1.8-4.3-1.2l-2.8,1.2c-0.3,0-0.6,0.1-0.8,0.2l-21.7,9.4c-1.8,0.6-3.2,1.6-4.3,3.1 c0,0-0.1,0.1-0.1,0.1l-8.1,12.2c-0.2,0-0.5,0.1-0.7,0.1l-4-10.9c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1l-2.4-4.3c-0.1-0.1-0.2-0.3-0.3-0.4 l-13.2-9.7c-0.3-0.2-0.8-0.3-1.2-0.1l-1.4,0.8c-0.2,0.1-0.4,0.4-0.5,0.7c-0.1,0.3,0,0.6,0.1,0.8l8.2,13.2l0.7,2.2l1.6,6.1 c-1.3-0.7-2-0.9-2.4-0.9c-3.3,0-6.1,2.7-6.1,6.1c0,0.6,0.1,1.2,0.3,1.8c0,0.1,0,0.2,0,0.3l1,6.1c0.1,0.4,0.4,0.7,0.7,0.9 c0.4,0.1,0.8,0,1.1-0.3l1.1-1.2l0.5,4.5c0,0.1,0,0.1,0,0.2c1.1,4,4.1,7,8,8.2l7.3,2.1c0.7,0.2,1.5,0.4,2.2,0.5l0.7,5.6 c0,0.5,0.1,1,0.3,1.5c0.1,0.1,0.1,0.2,0.2,0.3l0.3,2.3c0,0.3,0.2,0.6,0.5,0.8l7.3,4.9c0.2,0.1,0.4,0.2,0.6,0.2h4.1 c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.1,1.8-0.1,2.3-1.1l0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0.8,0.9,1.8,1.4,2.8,1.5c0.1,0,0.1,0,0.2,0 c0.1,0,0.1,0,0.2,0l3.7-0.8c0.6,0.1,1.2,0,1.6-0.4c0.3-0.1,0.5-0.3,0.6-0.6l0.1-0.2c0-0.1,0.1-0.2,0.1-0.4l1.4-4.4 c0.1-0.4,0-0.9-0.4-1.2l-0.6-0.4c-0.2-0.4-0.5-0.8-0.9-1.1l-11.7-11.4l-5.3-5.4l3.6-1.7c1.2-0.3,2.1-1.3,2.3-2.6L250,86l1.6-0.6 c0.9-0.3,1.5-1,1.8-1.9c0.2-0.5,0.2-1.1,0.1-1.6l1.9-0.9c1.7-0.8,2.5-2.6,2-4.4l0.3-0.4l1.8-0.9c1.3-0.6,2-2.1,1.7-3.6l1.4-1.8 l0.4-0.2c0.7-0.4,1.2-1.1,1.3-1.9l1.3-1.6l10.7-12.8C277.4,52,277.5,50.2,276.5,48.8z M274.8,52l-10.7,12.9l-1.5,1.8 c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.3-0.2,0.5-0.4,0.7l-0.5,0.3c-0.1,0.1-0.2,0.1-0.3,0.2l-1.9,2.4c-0.2,0.3-0.3,0.7-0.1,1.1 c0.2,0.5,0.1,1.2-0.5,1.5l-2,1c-0.1,0.1-0.3,0.2-0.4,0.3l-0.8,1c-0.2,0.3-0.3,0.7-0.1,1c0.4,0.9,0,2-0.8,2.4l-2.6,1.2 c-0.1,0.1-0.3,0.2-0.4,0.3l-0.1,0.1c-0.3,0.3-0.3,0.8-0.1,1.1c0.2,0.3,0.2,0.6,0.1,0.9c-0.1,0.3-0.3,0.5-0.6,0.6l-1.8,0.7 c-0.2,0.1-0.4,0.2-0.5,0.3l-0.8,1.1c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.4-0.2,0.9-0.8,1c-0.1,0-0.2,0-0.3,0.1l-4.9,2.3 c-0.3,0.1-0.5,0.4-0.6,0.8c-0.1,0.3,0.1,0.7,0.3,0.9l6.2,6.3l11.8,11.4c0.3,0.2,0.4,0.5,0.6,0.8c0.1,0.2,0.2,0.3,0.4,0.5l0.2,0.1 l-1.2,3.7c0,0.1,0,0.1,0,0.1c0,0,0,0,0,0c0,0-0.1,0-0.2,0c-0.2,0-0.3,0-0.5,0l-3.6,0.8c0,0-0.1,0-0.1,0c-0.2,0-0.8-0.2-1.3-0.7 l-1.9-3.2c-0.2-0.4-0.7-0.6-1.1-0.4c-0.4,0.1-0.7,0.5-0.7,1l0.1,2.3c-0.1,0-0.2,0-0.3,0H245l-6.7-4.5l-0.3-2.2 c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.1-0.1-0.2-0.2c0-0.2-0.1-0.3-0.1-0.4c0-0.1,0-0.2,0-0.3l-0.8-6.4c0-0.4-0.4-0.8-0.9-0.9 c-0.9-0.2-1.8-0.4-2.8-0.7l-7.2-2.1c-3.2-1-5.7-3.5-6.6-6.7l-0.7-6.5c0-0.4-0.3-0.8-0.7-0.9c-0.4-0.1-0.9,0-1.1,0.3l-1.2,1.3 l-0.6-3.6c0.1-0.2,0.1-0.5,0-0.7c-0.2-0.5-0.3-1-0.3-1.6c0-2.2,1.8-4.1,4-4.1c0.4,0.1,1.8,0.8,2.5,1.1c0.4,0.2,0.8,0.4,1,0.5 c0.4,0.2,0.8,0.1,1.1-0.2c0.3-0.2,0.4-0.7,0.3-1.1l-2.1-8.1l-0.7-2.4c0-0.1-0.1-0.2-0.1-0.3L213,50.5l0,0l12.6,9.3l2.3,4.1l4.3,11.6 c0.2,0.5,0.8,0.8,1.3,0.7c0.4-0.1,1-0.2,1.5-0.2c0.3,0,0.7-0.2,0.9-0.5l8.3-12.5c0,0,0,0,0,0c0.9-1.2,1.9-2,3.5-2.5l21.8-9.5 c0,0,0.1,0,0.1,0c0,0,0.1,0,0.2,0c0.1,0,0.3,0,0.4-0.1l2.9-1.2c0.9-0.4,1.5,0,1.9,0.5C275.2,50.5,275.4,51.3,274.8,52z"></path>
<path class="secret-illustration-fill-highlight" d="M27.2,92.9l-0.6-1.9c-0.3-1-1.2-1.6-2.2-1.6c0,0,0,0,0,0c-1,0-1.9,0.6-2.2,1.6l-0.1,0.4c0,0.1-0.1,0.2-0.1,0.2 l-0.4,1.2c-0.4,0.9-0.8,1.8-1.4,2.5c-0.9,0.8-1.4,2-1.4,3.3c0,2.3,1.5,4.1,3.3,4.1c0.9,0,1.7-0.4,2.3-1.1c0.6,0.7,1.4,1.1,2.3,1.1 c1.9,0,3.3-1.8,3.3-4.1c0-1.3-0.5-2.6-1.4-3.3C28,94.7,27.5,93.9,27.2,92.9z M26.7,100.8c-0.5,0-0.9-0.5-1.2-1.2l-0.2-0.5 c-0.1-0.4-0.5-0.7-0.9-0.7h0c-0.4,0-0.8,0.3-0.9,0.7l-0.2,0.5c-0.2,0.7-0.7,1.2-1.2,1.2c-0.6,0-1.3-0.8-1.3-2.1 c0-0.8,0.3-1.5,0.7-1.8c0,0,0.1-0.1,0.1-0.1c0.7-0.9,1.3-1.9,1.8-3.2l0.4-1.3c0,0,0-0.1,0-0.1l0.2-0.5c0.1-0.2,0.2-0.2,0.3-0.2 c0.1,0,0.2,0,0.3,0.2l0.6,1.9c0.4,1.2,1,2.2,1.8,3.1c0,0,0.1,0.1,0.1,0.1c0.5,0.4,0.7,1.1,0.7,1.8C28,99.9,27.3,100.8,26.7,100.8z"></path>
<path class="secret-illustration-fill-highlight" d="M19.6,91.1c1.5-1.3,3.3-2.8,3.3-5.1c0-1.1-0.9-4.7-1.1-5.4c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.3-0.4-0.6-0.6-0.8 c-2-2.2-5.2-2.5-7.8-2.5c-3,0-5.5,2.3-6.6,5.9l-0.3,1.5c0,0,0,0.1,0,0.1c-0.1,0.5-0.1,1-0.1,1.5c0,5,3.1,9,7,9 c1.8,0,3.3-1.3,4.8-2.7c0.2-0.2,0.5-0.5,0.8-0.7C19.1,91.5,19.3,91.3,19.6,91.1z M17.6,90.2c-0.3,0.2-0.5,0.5-0.8,0.7 c-1.3,1.2-2.4,2.2-3.4,2.2c-2.8,0-5-3.1-5-7c0-0.4,0-0.8,0.1-1.2l0.3-1.4c0.8-2.6,2.6-4.4,4.6-4.4c2.1,0,4.8,0.2,6.3,1.9 c0.1,0.1,0.2,0.2,0.3,0.4c0.4,1.7,1,4.2,1,4.8c0,1.4-1.2,2.4-2.6,3.5C18,89.8,17.8,90,17.6,90.2z"></path>
<path class="secret-illustration-fill-highlight" d="M35.4,77.1c-2.6,0-5.8,0.3-7.8,2.5c-1.7,1.9-1.8,5.7-1.8,6.5c0,2.3,1.7,3.8,3.3,5.1c0.2,0.2,0.5,0.4,0.7,0.6 c0.3,0.2,0.5,0.5,0.8,0.7c1.5,1.4,3,2.7,4.8,2.7c3.9,0,7-4,7-9C42.4,81.1,39.3,77.1,35.4,77.1z M35.4,93.1c-1.1,0-2.2-1-3.4-2.2 c-0.3-0.2-0.5-0.5-0.8-0.7c-0.2-0.2-0.5-0.4-0.7-0.6c-1.3-1.1-2.6-2.2-2.6-3.5c0-1.8,0.4-4.2,1.3-5.1c1.5-1.6,4.1-1.9,6.3-1.9 c2.8,0,5,3.1,5,7S38.2,93.1,35.4,93.1z"></path>
<path class="secret-illustration-fill-highlight" d="M46.1,85.7c-0.3-0.2-0.5-0.6-0.5-1v-1l0.9-8.4c0-0.3,0-0.6,0-0.9c0-0.3,0-0.6,0-0.8c0.1-0.7,0.1-1.4,0-2 c0-0.3,0-0.5,0-0.8c0,0,0,0,0,0C46.5,58.7,37,49,25.4,49h-1.6c-12,0-21.8,9.7-21.8,21.7c0,0.9,0.1,1.9,0.2,2.7l0,0.2 c0,0.2,0,0.4,0,0.7c0,0.3-0.1,0.7,0,1l0.5,8.4v1.1c0,0.5-0.3,1.1-0.8,1.5c-1.6,1.2-2.2,3.4-1.5,5.4L2,97.1c0.4,1.3,1.3,2.3,2.5,3 c1.3,0.7,2.8,0.8,4.2,0.3c0.9-0.3,1.9-0.1,2.7,0.6l0.7,0.6c0.2,0.1,0.2,0.3,0.2,0.5c-0.1,0.6-0.1,1.5-0.1,2c0,6.1,4.6,9.8,12.2,9.8 h0.3c7.6,0,12.2-3.7,12.2-9.8c0-0.4,0-1.2-0.1-1.8c0-0.2,0.1-0.5,0.2-0.7l0.6-0.6c0.7-0.7,1.8-0.9,2.6-0.7c1.4,0.5,2.9,0.4,4.2-0.3 c1.2-0.6,2.1-1.7,2.5-3l1.6-5.5C49.3,89.4,48.3,87,46.1,85.7z M46.7,91l-1.6,5.5c-0.2,0.8-0.8,1.4-1.5,1.8c-0.8,0.4-1.7,0.5-2.6,0.2 c-1.5-0.5-3.3-0.1-4.6,1.1l-0.6,0.6c-0.6,0.5-0.9,1.4-0.8,2.3c0,0.6,0.1,1.3,0.1,1.6c0,7-7.1,7.8-10.2,7.8h-0.3 c-3.1,0-10.2-0.8-10.2-7.8c0-0.4,0-1.3,0.1-1.8c0.1-0.8-0.3-1.6-0.9-2.2l-0.7-0.6c-0.9-0.8-2.1-1.3-3.2-1.3c-0.5,0-0.9,0.1-1.4,0.2 c-0.9,0.3-1.8,0.2-2.6-0.2c-0.7-0.4-1.3-1-1.5-1.8L2.2,91c-0.4-1.3,0-2.5,0.9-3.2c1-0.8,1.6-1.9,1.6-3l0-1.1l-0.5-8.5 c0-0.2,0-0.4,0-0.7c0-0.4,0.1-0.7,0-1.2l0-0.2c-0.1-0.8-0.2-1.6-0.2-2.4C3.9,59.8,12.8,51,23.8,51h1.6c10.8,0,19.2,8.8,19.2,19.9 c0,0,0,0,0,0.1c0,0.2,0,0.4,0,0.7c0,0.6,0,1.2,0,1.7c-0.1,0.4,0,0.8,0,1.1c0,0.2,0,0.5,0,0.7l-0.9,8.5c0,0,0,0.1,0,0.1v1.1 c0,1.1,0.6,2.1,1.5,2.7h0C46.5,88.2,47.2,89.7,46.7,91z"></path>
<path class="secret-illustration-fill-highlight" d="M194.4,0.3c-0.2-0.2-0.6-0.3-0.9-0.3c-0.3,0-0.6,0.2-0.8,0.5l-4.5,7.8l-17.9,17.9l-8.3-4.3 c-0.5-0.2-1.1-0.1-1.4,0.4l-5.9,9.2c-0.2,0.2-0.2,0.6-0.1,0.8c0.1,0.3,0.3,0.5,0.5,0.7l3,1.6l-25.4,25.4c-4.3-0.8-8.7-0.2-12.3,1.8 l-2.7-2.7c1.7,0,3.4-0.2,5-0.7l5.2-1.5c1.4-0.4,2.5-1.5,2.8-2.8c0.4-1.8-0.5-3.7-2.3-4.4l-5.7-2.3c-5.4-2.2-11.3-1.9-16.1,0.7 l-3.2-3.2c1.7,0,3.4-0.2,5-0.7l5.2-1.5c1.4-0.4,2.5-1.5,2.8-2.8c0.4-1.8-0.5-3.7-2.3-4.4l-5.7-2.3c-5.4-2.2-11.3-1.9-16.1,0.7 l-2.7-2.7c1.7,0,3.4-0.2,5-0.7l5.2-1.5c1.4-0.4,2.5-1.5,2.8-2.8c0.4-1.8-0.5-3.7-2.3-4.4L95,19.8c-5.4-2.2-11.3-1.9-16.1,0.7L63.4,5 c-0.4-0.4-1.1-0.4-1.5,0l-3.8,3.8c-0.2,0.2-0.3,0.5-0.3,0.8c0,0.3,0.1,0.6,0.3,0.8l15.5,15.5c-2.6,4.7-2.9,10.7-0.7,16.1l2.3,5.6 c0.6,1.5,2.1,2.5,3.7,2.4c1.6-0.1,3-1.2,3.4-2.7l1.6-5.4c0.5-1.6,0.7-3.3,0.7-5l2.7,2.7c-2.6,4.7-2.9,10.7-0.7,16.1l2.3,5.7 c0.6,1.4,2,2.4,3.5,2.4l0.2,0c1.6-0.1,3-1.2,3.4-2.7l1.6-5.4c0.5-1.6,0.7-3.3,0.7-5l3.2,3.2c-2.6,4.7-2.9,10.7-0.7,16.1l2.3,5.6 c0.6,1.5,2.1,2.5,3.7,2.4c1.6-0.1,3-1.2,3.4-2.7l1.6-5.4c0.5-1.6,0.7-3.3,0.7-5l2.7,2.7c-2.1,3.7-2.7,8-1.8,12.3L73.7,119 c-4.6,4.6-8.1,10.3-10.4,17l-3.5,10.4c0,0,0,0,0,0c-0.2,0.4-0.1,0.8,0.2,1.1c0.2,0.2,0.5,0.3,0.7,0.3c0.1,0,0.3,0,0.4-0.1 c0,0,0,0,0,0l10.5-3.7c6.4-2.3,12-5.7,16.4-10.2l39.3-39.3c0.2,1,0.6,2,1,3l2.3,5.7c0.6,1.4,2,2.4,3.5,2.4l0.2,0 c1.6-0.1,3-1.2,3.4-2.7l1.6-5.4c0.5-1.6,0.7-3.3,0.7-5l3.1,3.1c-2.4,4.4-2.6,9.9-0.6,14.9l2.1,5.2c0.6,1.4,2,2.4,3.5,2.4 c0.1,0,0.1,0,0.2,0c1.6-0.1,3-1.2,3.4-2.7l1.4-5c0.4-1.3,0.6-2.7,0.6-4.1l4.1,4.1c-2,4-2.2,8.7-0.4,13.2l1.9,4.6 c0.6,1.4,2,2.4,3.5,2.4c0,0,0,0,0,0c1.5,0,3.2-1.3,3.6-2.9l1.2-4.2c0.2-0.9,0.4-1.8,0.5-2.7l2.9,2.9c2.1,7.2,7.1,13.4,13.8,17 l7.3,3.9c0.5,0.3,1.2,0.4,1.8,0.4c1.2,0,2.3-0.6,3.1-1.6c0.8-1.2,0.9-2.8,0.2-4.1l-3.8-7.1c-3.6-6.7-9.7-11.7-16.9-13.8l-2.9-2.9 c0.9-0.1,1.8-0.3,2.6-0.5l4.2-1.2c1.4-0.4,2.5-1.5,2.8-2.8c0.4-1.8-0.5-3.7-2.3-4.4l-4.6-1.9c-4.5-1.8-9.2-1.7-13.2,0.4l-4-4 c1.4-0.1,2.7-0.3,4-0.6l4.8-1.4c1.4-0.4,2.5-1.5,2.8-2.8c0.4-1.8-0.5-3.7-2.3-4.4l-5.2-2.1c-5-2-10.5-1.8-14.9,0.6l-3.1-3.1 c1.7,0,3.4-0.2,5-0.7l5.2-1.5c1.4-0.4,2.5-1.5,2.8-2.8c0.4-1.8-0.5-3.7-2.3-4.4l-5.7-2.3c-1-0.4-2-0.7-3-1l25.2-25.2l1.8,3.2 c0.1,0.2,0.4,0.4,0.7,0.5c0.3,0.1,0.6,0,0.8-0.1l9.2-5.9c0.4-0.3,0.6-0.9,0.4-1.4l-4.3-8.3l17.9-17.9l7.8-4.5 c0.3-0.2,0.5-0.5,0.5-0.8c0-0.3-0.1-0.7-0.3-0.9L194.4,0.3z M117.1,67.7c0.2-0.4,0.2-1-0.1-1.3l-5-5c-0.2-0.2-0.5-0.3-0.7-0.3 c-0.2,0-0.3,0-0.5,0.1c-0.4,0.2-0.6,0.7-0.6,1.1c0.3,2.3,0.2,4.6-0.5,6.8l-1.6,5.4c-0.2,0.7-0.9,1.2-1.6,1.3c-0.7,0-1.4-0.5-1.7-1.2 l-2.3-5.6c-2.1-5.1-1.7-10.6,1-14.9c0.2-0.4,0.2-1-0.1-1.3l-5.5-5.5c-0.3-0.3-0.8-0.4-1.2-0.2c-0.4,0.2-0.6,0.7-0.6,1.1 c0.3,2.3,0.2,4.6-0.5,6.8L94,60.3c-0.2,0.7-0.9,1.2-1.7,1.3c-0.7,0-1.4-0.4-1.6-1.1l-2.3-5.7c-2.1-5.1-1.7-10.6,1-14.9 c0.2-0.4,0.2-1-0.1-1.3l-5-5c-0.3-0.3-0.8-0.4-1.2-0.2c-0.4,0.2-0.6,0.7-0.6,1.1c0.3,2.3,0.2,4.6-0.5,6.8l-1.6,5.4 c-0.2,0.7-0.9,1.2-1.6,1.3c-0.7,0-1.4-0.5-1.7-1.2l-2.3-5.6c-2.1-5.1-1.7-10.6,1-14.9c0.2-0.4,0.2-1-0.1-1.3L60.2,9.6l2.5-2.5 L78,22.5c0.3,0.3,0.9,0.4,1.3,0.2c4.3-2.6,9.8-3,14.9-0.9l5.7,2.3c0.8,0.3,1.3,1.2,1.1,2.1c-0.1,0.6-0.7,1.1-1.4,1.3l-5.2,1.5 c-1.4,0.4-2.9,0.6-4.5,0.6c-0.8,0-1.6-0.1-2.4-0.2c-0.4-0.1-0.8,0.2-1,0.5c-0.2,0.4-0.1,0.9,0.2,1.2l5.1,5.1 c0.3,0.3,0.9,0.4,1.3,0.2c4.3-2.6,9.8-3,14.9-0.9l5.7,2.3c0.8,0.3,1.3,1.2,1.1,2.1c-0.1,0.6-0.7,1.1-1.4,1.3l-5.2,1.5 c-1.4,0.4-2.9,0.6-4.5,0.6c-0.8,0-1.6-0.1-2.4-0.2c-0.4-0.1-0.8,0.2-1,0.5c-0.2,0.4-0.1,0.9,0.2,1.2l5.6,5.6 c0.3,0.3,0.9,0.4,1.3,0.2c4.3-2.6,9.8-3,14.9-0.9l5.7,2.3c0.8,0.3,1.3,1.2,1.1,2.1c-0.1,0.6-0.7,1.1-1.4,1.3l-5.2,1.5 c-1.4,0.4-2.9,0.6-4.5,0.6c-0.8,0-1.6-0.1-2.4-0.2c-0.4-0.1-0.8,0.2-1,0.5c-0.2,0.4-0.1,0.9,0.2,1.2l5.1,5.1 c0.3,0.3,0.9,0.4,1.3,0.2c3-1.8,6.5-2.6,10.2-2.2l-16,16C114.5,74.2,115.2,70.6,117.1,67.7z M65.2,136.6c2.2-6.4,5.5-11.8,9.9-16.2 l39.8-39.8c0,0,0,0,0,0c0,0,0,0,0,0l18.7-18.7c0,0,0,0,0,0c0,0,0,0,0,0l26.2-26.2l6.8,4.1L63,143.1L65.2,136.6z M149.8,77.2l5.7,2.3 c0.8,0.3,1.3,1.2,1.1,2.1c-0.1,0.6-0.7,1.1-1.4,1.3l-5.2,1.5c-1.4,0.4-2.9,0.6-4.5,0.6c-0.8,0-1.6-0.1-2.4-0.2 c-0.4-0.1-0.8,0.2-1,0.5c-0.2,0.4-0.1,0.9,0.2,1.2l5.5,5.5c0.3,0.3,0.9,0.4,1.3,0.1c4-2.4,9.1-2.7,13.8-0.8l5.2,2.1 c0.8,0.3,1.3,1.2,1.1,2.1c-0.1,0.6-0.7,1.1-1.4,1.3l-4.8,1.4c-1.3,0.4-2.8,0.6-4.2,0.6c-0.5,0-1,0-1.7-0.1c-0.4,0-0.8,0.2-1,0.6 c-0.2,0.4-0.1,0.8,0.2,1.1l6.3,6.3c0.3,0.3,0.9,0.4,1.3,0.2c3.6-2,8-2.3,12.1-0.6l4.6,1.9c0.8,0.3,1.3,1.2,1.1,2.1 c-0.1,0.6-0.7,1.1-1.4,1.3l-4.2,1.2c-1.3,0.4-2.8,0.6-4.2,0.5l-0.2,0c-0.4,0-0.8,0.2-1,0.6c-0.2,0.4-0.1,0.8,0.2,1.1l4.7,4.7 c0.1,0.1,0.3,0.2,0.5,0.3c6.8,1.9,12.6,6.6,15.9,12.8l3.8,7.1c0.4,0.7,0.4,1.5,0,2c-0.5,0.7-1.5,0.9-2.3,0.5l-7.3-3.9 c-6.3-3.4-11-9.2-12.8-15.9c0-0.2-0.1-0.4-0.3-0.5l-4.6-4.6c-0.3-0.3-0.8-0.4-1.2-0.2c-0.4,0.2-0.7,0.6-0.6,1 c0.1,1.5-0.1,2.9-0.5,4.3l-1.2,4.2c-0.2,0.7-1.1,1.4-1.8,1.5c-0.7,0-1.4-0.4-1.6-1.1l-1.9-4.6c-1.6-4.1-1.4-8.6,0.6-12.1 c0.2-0.4,0.2-1-0.2-1.3l-6.2-6.2c-0.3-0.3-0.8-0.4-1.2-0.2c-0.4,0.2-0.6,0.6-0.6,1.1c0.2,2,0,3.9-0.5,5.7l-1.4,5 c-0.2,0.7-0.9,1.2-1.7,1.3c-0.7,0-1.4-0.4-1.6-1.1l-2.1-5.2c-1.9-4.7-1.6-9.8,0.8-13.8c0.2-0.4,0.2-1-0.1-1.3l-5.4-5.4 c-0.3-0.3-0.8-0.4-1.2-0.2c-0.4,0.2-0.6,0.7-0.6,1.1c0.3,2.3,0.2,4.6-0.5,6.8l-1.6,5.4c-0.2,0.7-0.9,1.2-1.7,1.3 c-0.7,0-1.4-0.4-1.6-1.1l-2.3-5.7c-0.5-1.3-0.9-2.6-1.1-4l16.7-16.7C147.2,76.4,148.5,76.7,149.8,77.2z M144.9,74.3 C144.9,74.3,144.8,74.3,144.9,74.3C144.8,74.3,144.8,74.3,144.9,74.3l-17.5,17.5c0,0,0,0,0,0c0,0,0,0-0.1,0l-40.6,40.6 c-4.3,4.3-9.5,7.5-15.7,9.7l-6.5,2.3L168.1,41.2l3.6,6.2L144.9,74.3z M198.1,17.6c-0.1,0-0.1,0.1-0.2,0.2l-18.5,18.5 c-0.3,0.3-0.4,0.8-0.2,1.2l4.2,8.2l-7.7,4.9l-1.9-3.4c0,0,0,0,0,0c0,0,0,0,0,0l-4.6-7.9c0-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0,0 c0,0,0,0-0.1,0c0,0-0.1-0.1-0.1-0.1l-8.6-5.2c0,0,0,0-0.1,0c0,0,0,0-0.1,0l-3.2-1.7l4.9-7.7l8.1,4.2c0.4,0.2,0.9,0.1,1.2-0.2 l18.4-18.4c0.1-0.1,0.2-0.2,0.2-0.3l4-6.8L205,13.7L198.1,17.6z"></path>
        </svg>
        `

    $('h2').before(sectionSvg);
});
