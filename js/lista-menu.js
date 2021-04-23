$(document).ready(function() {

	$("#Pizza").on('click',function() {
		$("#ListPizza").slideDown(1000);
		$("#Pizza").addClass('selec');

		$("#ListBurger").css('display', 'none');
		$("#Burger").removeClass('selec');
		$("#ListDrink").css('display', 'none');
		$("#Drink").removeClass('selec');
	});

	$("#Burger").on('click',function() {
		$("#ListBurger").slideDown(1000);
		$("#Burger").addClass('selec');

		$("#ListPizza").css('display', 'none');
		$("#Pizza").removeClass('selec');
		$("#ListDrink").css('display', 'none');
		$("#Drink").removeClass('selec');
	});

	$("#Drink").on('click',function() {
		$("#ListDrink").slideDown(1000);
		$("#Drink").addClass('selec');

		$("#ListBurger").css('display', 'none');
		$("#Burger").removeClass('selec');
		$("#ListPizza").css('display', 'none');
		$("#Pizza").removeClass('selec');
	});
});