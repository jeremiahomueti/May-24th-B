/*

var magic = function()
{
    return new Date();
}; 

*/



/* According to the teacher, this function above doesn't have
a name. It is assigned to the keyword 'magic', but there is no
name attached to the function, that is, there's no name typed 
at the left, just in before the function. 

Such functions are called anonymous functions. Whenever you have
anonymous functions, you can convert it into an arrow function.

*/

//So we do just that:

const magic = () => new Date();

//...the teacher said, to make it even nicer, he changed it to const instead of var.
