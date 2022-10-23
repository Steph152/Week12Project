
//some pieces of data that the mokAPI generated, hard coded
let data = [{"flowerType":"flowerType 1","quantity":70,"color":"sky blue","salePrice":"808.00","id":"1"},
            {"flowerType":"flowerType 2","quantity":27,"color":"lavender","salePrice":"961.00","id":"2"},
            {"flowerType":"flowerType 3","quantity":32,"color":"plum","salePrice":"43.00","id":"3"},
            {"flowerType":"flowerType 4","quantity":32,"color":"lime","salePrice":"137.00","id":"4"},
            ,{"flowerType":"flowerType 5","quantity":66,"color":"blue","salePrice":"599.00","id":"5"},
            {"flowerType":"flowerType 6","quantity":18,"color":"plum","salePrice":"841.00","id":"6"},]

//code that allows new data to be added to a table
        let id = 0;
        let table = document.getElementById('table');
        let flowerNameInput = document.getElementById('flowerName');
        let idInput = document.getElementById('ID');
        let colorInput = document.getElementById('color');
        let quantityInput = document.getElementById('quantity');

        document.getElementById('button').addEventListener('click', (event) => {
            event.preventDefault();
            if (flowerNameInput.value == '' || idInput.value == '' || colorInput =='' || quantityInput ==''){
                return
            }
           
            let row = table.insertRow(1);
            row.setAttribute('id', `item-${id}`);
    
            row.insertCell(0).innerHTML = flowerNameInput.value;
            row.insertCell(1).innerHTML = idInput.value;
            row.insertCell(2).innerHTML = colorInput.value;
            row.insertCell(3).innerHTML = quantityInput.value;
            //row.insertCell(4) = button?

            flowerNameInput.value = '';
            idInput.value = '';
            colorInput.value='';
            quantityInput.value='';
           
            id++; 
        });
       // function to fill the table with the hard coded data
        function makeTable() {
            console.log(data);
            var table = document.getElementById('table');
            for (var i = 0; i < data.length; i++) {
                var row = document.createElement('tr');
                for (var j = 0; j < data[i].length; j++) {
                    var cell = document.createElement('td');
                    cell.textContent = array[i][j];
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            return table;
        }


        function findFlower(id){
            // go through array and pull id

        
            
        }

        function deleteRow(){
            
        }

        makeTable();
         