var table = document.getElementById("po-table");
numberCells();
function addRow() {
    
    var lastrow = table.rows.length;
	var lastcol = table.rows[0].cells.length;	
	var row = table.insertRow(lastrow);	
	for(i=0; i<lastcol;i++)
	{
		var cell1 = row.insertCell(i); 
	}
  numberCells();
}

function numberCells() {
  var oTable = document.getElementById('po-table');
  var rowLength = oTable.rows.length;   
  for (i = 0; i < rowLength; i++){
    var oCells = oTable.rows.item(i).cells;
    var cellLength = oCells.length;
    for(var j = 0; j < cellLength; j++) {
      oCells.item(j).innerHTML = parseInt(Math.random()*10);
   }
  }
}

function addCol() {
    
    var lastrow = table.rows.length;
	var lastcol = table.rows[0].cells.length;
	var headertxt = table.rows[0].cells[lastcol-1].innerHTML;
	var headernum = headertxt.slice(headertxt.indexOf("PO")+2);
	headernum = headernum.trim();
	
    //for each row add column
	for(i=0; i<lastrow;i++)
	{
		var cell1 = table.rows[i].insertCell(lastcol);	
	}
    numberCells();
}

function removeRow(){
	var lastrow = table.rows.length;
	if(lastrow<2){
		alert("You have reached the minimal required rows.");
		return;
	}
	table.deleteRow(lastrow-1);
}

function removeCol(){

	var lastcol = (table.rows[0].cells.length)-1;
	var lastrow = (table.rows.length);
	if(lastcol<3){
		alert("You have reached the minimal required columns.");
		return;
	}
	
	for(i=0; i<lastrow;i++)
	{
		table.rows[i].deleteCell(lastcol);
	}
}

function getSum() {
  var lastcol = (table.rows[0].cells.length)-1;
  var lastrow = (table.rows.length);
  var oTable = document.getElementById('po-table');
  var rowLength = oTable.rows.length;   
  var total = 0;
  for (i = 0; i < rowLength; i++){
    var oCells = oTable.rows.item(i).cells;
    var cellLength = oCells.length;
    for(var j = 0; j < cellLength; j++) {
      total = total + Number(oCells.item(j).innerHTML);
   }
  }
  alert(`The number of rows is ${lastrow} and number of columns is ${lastcol+1}. Sum of rows and columns is ${lastrow + lastcol + 1}. The total of numbers in all cells is ${total}`)
}