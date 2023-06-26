var newRow = document.createElement("tr");

var cell1 = document.createElement("td");
cell1.textContent = "4";
var cell2 = document.createElement("td");
cell2.textContent = "Mukhriz Jamil Asoka";
var cell3 = document.createElement("td");
cell3.textContent = "mukhriz@corp.jo";
var cell4 = document.createElement("td");
cell4.textContent = "651181187223";

newRow.appendChild(cell1);
newRow.appendChild(cell2);
newRow.appendChild(cell3);
newRow.appendChild(cell4);

table.appendChild(newRow);
var headerRow = document.createElement("tr");
var headerCell1 = document.createElement("th");
headerCell1.textContent = "#";
var headerCell2 = document.createElement("th");
headerCell2.textContent = "Name";
var headerCell3 = document.createElement("th");
headerCell3.textContent = "Email";
var headerCell4 = document.createElement("th");
headerCell4.textContent = "Phone #";

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
headerRow.appendChild(headerCell4);

table.querySelector("thead").appendChild(headerRow);
var Rows = table.getElementByTagName("tr");

for(var i =0; i<rows.length; i++){
rows[i].addEventListener("click",function(){
    this.parentNode.removeChild(this);
});
}