
var totalSum = 0;
var sumPlots = 0;
var sumCurrent = 0;
var sumGasPipeline = 0;
var sumWaterSupply = 0;
var sumSewage = 0;




function openWindowPlots(){
	document.getElementById("purchase_plots_window").style.visibility = 'visible';
    document.getElementById("window_background").style.visibility = 'visible';
}
function addWindowPlots(){
    sumPlots = document.getElementById('province').value * document.getElementById('plot_size').value;
    document.getElementById('sum_plots_box_window').innerHTML = "Sum: "+sumPlots+" zł";
}
function closeWindowPlots(){
	document.getElementById("purchase_plots_window").style.visibility = 'hidden';
    document.getElementById("window_background").style.visibility = 'hidden';
    document.getElementById('sum_plots_box').innerHTML = "Sum: "+sumPlots+" zł";
    totalSum = sumPlots + sumCurrent + sumGasPipeline + sumWaterSupply + sumSewage;
	document.getElementById('sum_total').innerHTML = "Total sum: "+totalSum+" zł";
}


function openPowerWindow(){
	document.getElementById("window_current").style.visibility = 'visible';
    document.getElementById("window_background").style.visibility = 'visible';
}
function addPowerWindow(){
    sumCurrent = 175 * document.getElementById('current_distance').value;
    document.getElementById('sum_current_box_window').innerHTML = "Suma: "+sumCurrent+" zł";
}
function closePowerWindow(){
	document.getElementById("window_current").style.visibility = 'hidden';
    document.getElementById("window_background").style.visibility = 'hidden';
    document.getElementById('sum_current_box').innerHTML = "Sum: "+sumCurrent+" zł";
    totalSum = sumPlots + sumCurrent + sumGasPipeline + sumWaterSupply + sumSewage;
	document.getElementById('sum_total').innerHTML = "Total sum: "+totalSum+" zł";
}


function openWaterpipeWindow(){
	document.getElementById("water_supply_window").style.visibility = 'visible';
    document.getElementById("window_background").style.visibility = 'visible';
}
function addWaterpipeWindow(){
    sumWaterSupply = 300 * document.getElementById('water_supply_distance').value;
    sumWaterSupply += 1000;
    document.getElementById('sum_water_supply_box_window').innerHTML = "Sum: "+sumWaterSupply+" zł";
}
function closeWaterpipeWindow(){
	document.getElementById("water_supply_window").style.visibility = 'hidden';
    document.getElementById("window_background").style.visibility = 'hidden';
    document.getElementById('sum_water_supply_box').innerHTML = "Sum: "+sumWaterSupply+" zł";

    totalSum = sumPlots + sumCurrent + sumGasPipeline + sumWaterSupply + sumSewage;
	document.getElementById('sum_total').innerHTML = "Total sum: "+totalSum+" zł";
}


function openGasPipelineWindow(){
	document.getElementById("gas_pipeline_window").style.visibility = 'visible';
    document.getElementById("window_background").style.visibility = 'visible';
}
function addGasPipelineWindow(){
    sumGasPipeline = 50 * document.getElementById('gas_pipeline_distance').value;
    sumGasPipeline += 1750+1800+450+125;
    document.getElementById('sum_gas_pipeline_box_window').innerHTML = "Sum: "+sumGasPipeline+" zł";
}
function closeGasPipelineWindow(){
	document.getElementById("gas_pipeline_window").style.visibility = 'hidden';
    document.getElementById("window_background").style.visibility = 'hidden';
    document.getElementById('sum_gas_pipeline_box').innerHTML = "Sum: "+sumGasPipeline+" zł";

    totalSum = sumPlots + sumCurrent + sumGasPipeline + sumWaterSupply + sumSewage;
	document.getElementById('sum_total').innerHTML = "Total sum: "+totalSum+" zł";
}


function openSewerWindow(){
	document.getElementById("sewer_window").style.visibility = 'visible';
    document.getElementById("window_background").style.visibility = 'visible';
}
function addSewerWindow(){
    sumSewage = 300 * document.getElementById('sewer_distance').value;
    sumSewage += 1000;
    document.getElementById('sum_sewer_box_window').innerHTML = "Sum: "+sumSewage+" zł";
}
function closeSewerWindow(){
	document.getElementById("sewer_window").style.visibility = 'hidden';
    document.getElementById("window_background").style.visibility = 'hidden';
    document.getElementById('sum_sewer_box').innerHTML = "Sum: "+sumSewage+" zł";

    totalSum = sumPlots + sumCurrent + sumGasPipeline + sumWaterSupply + sumSewage;
	document.getElementById('sum_total').innerHTML = "Total sum: "+totalSum+" zł";
}
