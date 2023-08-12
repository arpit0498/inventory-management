## App Features:

Key features of this app includes:

- Inventory Dashboard: This dashboard provides an overview of inventory levels, including the total stock count, low-stock items, and items delivered till now. These cards are not clickable, they just show the data.

- Total Stock is total quantity of all the items that exist in the inventory.
Total Delivered is the total number of items delivered till now from the entire inventory.
Low stock items have a quantity less than or equal to 10.
<!--
  ![dashboard](https://github.com/arpit0498/inventory-management/assets/32380690/3c362a27-4932-443f-b7b9-4c99026872a3) -->

<img src="./public/ProjectFeatures/dashboard.png"/>

- Departments Page: In this page show different inventory departments within the business. User can view each department's inventory by clicking on the cards and navigating to that specific product lists.

  The different departments are:

        Kitchen
        Clothing
        Toys
        Departments

<!-- ![Department](https://github.com/arpit0498/inventory-management/assets/32380690/6bbfacab-e486-43b5-9e39-032afd6ed6ca) -->

<img src="./public/ProjectFeatures/Department.png"/>

- Product List Page: This page displays a list of products within a chosen department. User can filter and sort products based on different attributes.
<!--
![productsPage](https://github.com/arpit0498/inventory-management/assets/32380690/73336f45-8811-4420-9bf2-522a9642c329) -->

<img src="./public/ProjectFeatures/productsPage.png"/>

- Filter by department using dropdown - All departments, kitchen, clothing, toys

- Filter by low stock - Use checkbox to filter items for low stock. Low stock items have a quantity less than or equal to 10.
  <!-- ![filterLowStock](https://github.com/arpit0498/inventory-management/assets/32380690/6110b80f-7075-49bf-9763-0268cb9245b3)

     -->
  <img src="./public/ProjectFeatures/filterLowStock.png"/>

- Sort by Name, Price and Stock using dropdown On selecting from the dropdown, sort the items in ascending order.

- Product Management: Allows user to add new products to the inventory by clicking on the ‘New’ button on product list page. Allow to add attributes like department, product name, description, price, stock (quantity), SKU (stocking unit), supplier name, items delivered (keep 0 when adding new product) and item image url.
  <!-- ![AddNewProduct](https://github.com/arpit0498/inventory-management/assets/32380690/641fe195-d73a-4e65-9b51-70ab10ce1680) -->
  <img src="./public/ProjectFeatures/AddNewProduct.png"/>

Newly added item should persist in the product listing on page reload.

- Detailed Product Page: Clicking on a product from the list navigates user to a detailed product page. This page provides extensive information about the selected product, including its attributes, current stock level, and supplier name, etc.
<!--
- ![singleProduct](https://github.com/arpit0498/inventory-management/assets/32380690/920d6e95-5063-41f7-abdf-ca3f11e78ab1)
  -->

<img src="./public/ProjectFeatures/singleProduct.png"/>
