#### Instructions: 
1. Download this project and extract the files
2. Open your terminal and go to the project diectory
3. Install dependencies by running `npm install`
4. For tasks 1 and 2, run `npm test`
5. For tasks 3-5, start selenium standalone server: 

   `java -jar selenium-server-standalone-3.5.3.jar`
6. Task 3 (infiniteScroll): `node utils/infiniteScroll.js`
7. Task 4 (click checkboxes): `node utils/checkboxes.js`
8. Task 5 (dropdown): `node utils/dropdown.js`


#### Note: 
For task 2, I had to come up with the set of test cases. 
The only functionality of the table is sorting the data, so I checked is that works properly. 
'Edit' and 'delete' links are not functional, otherwise I would also test if it is possible to edit/delete data and validate user input. 
