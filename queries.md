# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT Productname, Categoryname FROM Products as p
JOIN Categories as c
ON p.CategoryID = c.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderId, Shippername, OrderDate FROM Orders as o
JOIN Shippers as s
ON o.shipperID = s.shipperId
where o.orderdate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

Select OrderId, CustomerName, LastName as EmployeesLastName from Orders as o
Join Employees as e
on o.employeeID = e.employeeId
Join Customers as c
on o.customerId = c.customerID;

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
