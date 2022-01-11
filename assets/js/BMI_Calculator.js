function calculate() {
			// body...
			var h = parseFloat(document.getElementById('heightbmi').value);
			var w = parseFloat(document.getElementById('weightbmi').value);
			//var r = document.getElementById('current_bmi_value').value;
			var r1 = h*h;
			var r = w / r1;
			 // r = String(r);
			r = r.toFixed(1);
			document.getElementById('current_bmi_value').value = r;

			var inputage = document.getElementById('currentage').value;

			if(inputage >= 20)
			{
				document.getElementById('prescribed_bmi_value').value = "18.0 - 22.9";

				if(r < 18.0){
					document.getElementById('bmi_category').value = "Under weight";
				}
				else if(r >= 18.0 && r <= 22.9){
					document.getElementById('bmi_category').value = "Normal";
				}
				else if(r >= 23.0 && r <= 24.9) {
					document.getElementById('bmi_category').value = "Over weight";
				}
				else if(r >= 25.0) {
					document.getElementById('bmi_category').value = "Obesity";
				}
				else if(r >= 32.5) {
					document.getElementById('bmi_category').value = "Morbidly Obese";
				}
			}

			else if(inputage >= 2 && inputage <= 19){
				document.getElementById('prescribed_bmi_value').value = " ";
				document.getElementById('bmi_category').value = " ";
			}
			
		}
function convert() {
	// body...
	var sh = document.getElementById("convertheight");
    var selectheight = sh.options[sh.selectedIndex].value;
	var sw = document.getElementById("convertweight");
	var selectweight = sw.options[sw.selectedIndex].value;

	if(selectheight == "mtr")
	{
		document.getElementById('heightbmi').value = document.getElementById('heightinput').value + " mtr";
	}
	else if(selectheight == "cm")
	{
		var ht = document.getElementById('heightinput').value / 100;
		document.getElementById('heightbmi').value = ht + " mtr";
	}
	else if(selectheight == "feet")
	{
		var ht = document.getElementById('heightinput').value / 3.28;
		var ht1 = ht.toFixed(2);
		document.getElementById('heightbmi').value = ht1 + " mtr";
	}
	else if(selectheight == "inch")
	{
		var ht = document.getElementById('heightinput').value / 39.3701;
		var ht1 = ht.toFixed(2);
		document.getElementById('heightbmi').value = ht1 + " mtr";
	}
	//weight
	if(selectweight == "kg")
	{
		document.getElementById('weightbmi').value = document.getElementById('weightinput').value + " kg";
	}
	else if(selectweight == "lbs")
	{
		var wt = document.getElementById('weightinput').value * 0.45359237;
		var wt1 = wt.toFixed(2);
		document.getElementById('weightbmi').value = wt1 + " kg";
	}
	else if(selectweight == "ounce")
	{
		var wt = document.getElementById('weightinput').value / 35.274;
		var wt1 = wt.toFixed(2);
		document.getElementById('weightbmi').value = wt1 + " kg";
	}
	else if(selectweight == "stone")
	{
		var wt = document.getElementById('weightinput').value * 6.35;
		var wt1 = wt.toFixed(2);
		document.getElementById('weightbmi').value = wt1 + " kg";
	}
}