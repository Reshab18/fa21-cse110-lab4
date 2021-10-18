1.  3 is printed to the console. This is because after the iterations of the for loop the value of i has been incremented from 0 to 3.<br>
    Since i is function scope its value is accessible throughout the function.
2.  150 is printed to the console. This is because in the last iteration of the for loop the value of discountedPrice = 300 *(1 - 0.5) = 150. <br>
    Since discountedPrice is function scope its value is accessible throughout the function.
3.  150 is printed to the console. This is because in the last iteration of the for loop the value of finalPrice = Math.round(150 * 100)/100 which<br> 
    equals 150. Since finalPrice is function scope its value is accessible throughout the function.
4.  The function returns discounted array i.e discounted = [50, 100, 150]. This is because in each iteration of the for loop we count the finalPrice<br> 
    for each element of the prices array. The calculated finalPrice for each element of the prices array is then pushed onto the discounted array.
5.  Error(ReferenceError: i is not defined). Since i is block scope and is defined within the for loop. Therefore, trying to access it outside the for<br>
    loop results in an error.
6.  Error, since discountedPrice is block scope and is defined within the for loop. Therefore, trying to access it outside the for loop results in an error.<br>
7.  150 is printed to the console. This is because in the last iteration of the for loop the value of finalPrice = Math.round(150 * 100)/100 which equals 150.<br>
    Even though finalPrice is initialized in the for loop and it is block scope, it is still accessible because here its block is the whole function disountPrices.
8. The function returns discounted array i.e discounted = [50, 100, 150]. This is because in each iteration of the for loop we count the finalPrice for each element<br> of the prices array. The calculated finalPrice for each element of the prices array is then pushed onto the discounted array. Even though finalPrice is initialized in the for loop and it is block scope, it is still accessible because here its block is the whole function disountPrices.
9.  Error(ReferenceError: i is not defined)
10.  3 is printed to the console.
11. The function returns discounted array i.e discounted = [50, 100, 150]. Since adding to an array is not re-assigning or re-declaring the constant, the code runs
12.  A. student["name"];<br>
     B: student["Grad Year"];<br> 
     C. student.greeting();<br>
     D. student["Favorite Teacher"]["name"];<br>
     E. student["courseLoad"][0]);<br>
13.  A. "32", as 2 is converted to a string and concatenated with 3<br>
     B: 1, as 3 is converted to number and subtracted with 2.<br> 
     C. 3, as null is converted to 0 resulting in 3 + 0 <br>
     D. "3null", as null is converted to a string  and concatenated with 3<br>
     E. 4, as true is converted to 1 resultin in 1 + 3 <br>
     F. 0, both false and null are converted to 0 resulting in 0 + 0 <br> 
     G. "3undefined", as undefined is converted to a string and concatenated with 3<br>
     H. Nan(Not-A-Number), as 3 is converted to number 3 but subtracting it with undefined is undefined same as we cannot divide a number by 0<br>
14.  A.true, as "2" is converted to number and compared with 1 <br>
     B: false, as both "2" and "12" are converted to number and compared<br> 
     C. true, as "2" is converted to number and compared. Since it's a weak comparison it allows comparison of different data types<br> 
     D. false, as it's a strong comparison it doesn't allow comparison of different data types<br>
     E. false, as true is converted to number 1 and 1 is not equal to 2. Since it's a weak comparison it allows comparison of different data types <br>
     F. true, as Boolean(2) is evaluated to a boolean with the value true. Even though it's a strong comparison it allows the comparison because we are comparing boolean with boolean<br> 
15. “==” compares the two operands less strictly i.e it allows comparison between two different data types whereas "===" compares the two operands strictly and doesn't allow comparison between two different data types.<br>
16. Answered in part2-question16.js<br>
17. new Arr = [2, 4, 6] is returned. 
    Walkthrough:
    modifyArray function is invoked with an array [1, 2, 3] and doSomething as its arguments.
    Within the modifyArray function a constant newArr(array) is defined. Since it's a const reference to the array, new elements can be added to the array as long as the newArr is pointing to the same object.
    The for loop is iterated array.length number of times so that we can go through the whole array. Within the for loop, we call the function doSomething through callback with array[i](number) as its arguments.
    Within doSomething, the parameter num is multiplied by 2 and returned.
    The returned value is pushed to the new Arr
    Once the loop ends the newArr with updated values is returned.
18. Answered in part2-question18.js<br>
19. 1 4 3 2 is printed as console.log(1) is not restrained by setTimeout and is called before console.log(4). The other two console.log functions are based on<br> setTimeout where one of them has an interval of 0 and the other has 1000.Thus, colosol.log(3) with the shortest possible delay is executed before colosol.log(2).
