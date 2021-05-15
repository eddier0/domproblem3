/*Create a basic HTML page with a table and two rows in it.
Then, write a JavaScript function to add rows to a table.*/
/*
1. write a function that inserts a row to the table
2. write a variable that gets the element table
3. write a variable that inserts cell 1
4. write a variable that inserts cell 2
5. display inner text inside of the cells
*/

function insert_Row()
{
var x=document.getElementById('table').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell 1";
z.innerHTML="New Cell 2";
}