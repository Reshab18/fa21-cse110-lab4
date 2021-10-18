1. values added: 20
2. final result: 20
3. values added: 20
4. returns an error. This is because using let makes the variable result as block space. Thus, outside the if block result is not defined.
5. returns an error(TypeError: Assignment is a constant variable). Since we declared the result as const. Thus, we cannot re-assign its value <br> 
   Trying to do so causes an error and the program crashes.
6. returns an error. The program crashes before it reaches line 13. This is because we declared the result as const. Thus, we cannot re-assign <br>
   its value. Trying to do so causes an error and the program crashes.