function findSquare(num){
    return num * num;
}

document.write(findSquare(10));

document.write("<br>");

function sumCubes (num1, num2){
    var cube1 = num1 * num1 * num1;
    var cube2 = num2 * num2 * num2;
    return cube1 + cube2;
}

document.write(sumCubes(4,6));

document.write("<br>");

function reverseNumber (number){
    var result = 0;
    while (number != 0){
        result = result * 10 + number % 10;
        number = Math.floor(number/10);
    }
    return result;
}

document.write(reverseNumber(12345));

document.write("<br>");

function divisibleNumber(z){
    for (var i = 1; i <= 100; i++){
        if (i % z == 0) {
            document.write(i);
        }
    }
}

divisibleNumber(50);


document.write("<br>");


function sumDigit (value){
    var sum = 0;
    while (value){
        sum += value % 10;
        value = Math.floor(value/10);
    }
    document.write(sum);
}

sumDigit(309);

document.write("<br>");

function power(x, y){
    if (y == 0){
        return 1;
    } else if (y < 0){
        return 1 / power(x, -y);
    } else {
        return x * power (x, y - 1);
    }
}

document.write(power(5, 5));

document.write("<br>");


var product = {
    productName: 'NoteBook',
    quantity: 15,
    price: 19.99 
};

document.write('<br>Product Name: ', product.productName);
document.write('<br>Quantity: ', product.quantity);
document.write('<br>Price: ', product.price);

document.write("<br>");


function book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
  }
  
  book.prototype.price = 89.99; 
  
  var book = new book('Phyton Programming ', 'Mohd');
  
  document.write('<br>Book Name:', book.bookName);
  document.write('<br>Author Name:', book.authorName);
  document.write('<br>Price:', book.price);


function employee(empName, empId, salary){
    this.empName = empName;
    this.empId = empId;
    this.salary = salary;
}

function manager(empName, empId, salary, managerName, branch){
    employee.call(this, empName, empId, salary);
    this.managerName = managerName;
    this.branch = branch;
}

manager.prototype = Object.create(employee.prototype);

var manager1 = new manager('Nuha Nordin', 'S0001', 4500, 'Amir', 'Puchong');

document.write('<br> Employee Name: ' + manager1.empName + 
'<br> Employee ID: ', manager1.empId +
'<br> Salary: ', manager1.salary + 
'<br> Manager Name: ', manager1.managerName +
'<br> Branch: ', manager1.branch);

