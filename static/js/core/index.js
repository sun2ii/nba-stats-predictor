$(document).ready(function() {
	const statsArray = [
		"reb", "ast", "fg", "ft", "3p",
		"vs-pts", "vs-reb", "vs-ast", "vs-fg", "vs-ft", "vs-3p"
	];

	statsArray.forEach(stat => {
		const valueSpan = `.${stat}-value-span`;
		const value = `#${stat}-slider`;
		let percentage;
		percentage = (
			stat === 'fg' || stat === 'ft' || stat === '3p' ||
			stat === 'vs-fg' || stat === 'vs-ft' || stat === 'vs-3p'
		) ? "%" : "";

		$(valueSpan).html($(value).val() + percentage);
		$(value).on('input change', () => {
			$(valueSpan).html($(value).val() + percentage);
		});
	})
  });

$(".main-card").on('click', (function(){
	if ( $(this).parent().find('.collapse').hasClass("show") ) {
		$(this).parent().removeClass('submenu');
	} else {
		$(this).parent().addClass('submenu');
	}
}));
