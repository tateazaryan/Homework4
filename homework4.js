//Put all your code into a directory called homework4 and your code in a file inside that directory called homework4.js



//2. Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. 
// So if we call your function with triangleStars(4), we should see:

const getStars = function (num) {
  let stars = "";
  while (num > 0) {
    num = num - 1;
    stars = stars + "*"
  };
  return stars;
};
const getSpace = function (num) {
  let space = "";
  while (num > 0) {
    num = num - 1;
    space = space + " "
  };
  return space;
};
const triangleStars = function (height){
  let line = "";
  let spaceNum = height
  while (height > 0){
    line = getSpace (spaceNum - height)+ getStars (height*2-1) ;
    height = height-1
    console.log(line);
    }
  }
triangleStars(4)


//3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.



function multiToSingle(multArr){

	let singArr = [];
	let x = multArr.length;
	let y = multArr[0].length;
	let y0 = multArr[0];
	let yi = 0;
	let z = multArr[1].length;
	let z0 = multArr[1];
	let zi = 0;
	let i = 0;
	
	while(x != 0){
	
		while(y != 0){
		
		singArr[i] = y0[yi];
		yi++;
		i++;
		y--;
		
		}
		
		while(z != 0){
		
		singArr[i] = z0[zi];
		zi++;
		i++;
		z--;
		
		}
		
		x--;	
	
	}
	
	console.log(singArr);

} 


multiToSingle([[1,2,3],[4,5,6]]);  //should return [1,2,3,4,5,6]




//4. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.
//  It returns the smallest number in the given array if the second argument is false.


function findMinMax(arraybol, bol) {
	
	if(bol === true){
		
		let lenOfAr = arraybol.length;
		let i = 0;
		let j = 0;
		
		while(lenOfAr != 0){
			
			lenOfAr--;
			j = arraybol[lenOfAr];
			
			if(i < j) {
			i = j;
			} 
			
		}
		console.log(i);
	}
	
	if(bol === false){
	
		let lenOfAr = arraybol.length;
		let x = 0;
		let y = 0;
		
		while(lenOfAr != 0){
			
			lenOfAr--;
			y = arraybol[lenOfAr];
			if(x === 0){
			
			x = arraybol[lenOfAr];
			
			}
			
			if(x > y) {
			x = y;
			} 
			
		}
		
		console.log(x);
	
	}
	
	
}

findMinMax([4,2,66,-44,8],true)   //should log 66
findMinMax([4,2,66,-44,8],false)   //should log -44


//5. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given arr//ay.


function forEach(arr01, functionval){
		leng = arr01.length;
		while(leng != 0){
			  leng--;
			  functionval(arr01[leng]);
		  }
	}
	  
	forEach([1,2,3], function (val){
		console.log(val);
	});



//(10 points)



//6. Create a function 'sum' that takes an array of numbers and returns their sum.


function sum(number) {
	
	let n = 0;
	let lengthh = number.length; 
	
	
	while(lengthh != 0){
    	lengthh = lengthh - 1;
		n = n + number[lengthh]; 
	}
	console.log(n)
}


sum([4,3,2]);
//7. Write a function 'reverse' that reverses the given string.  


function reverse(str){
		  let lengStr = str.length;
		  let x = "";
		  
		  while(lengStr != 0){
			  lengStr = lengStr - 1;
			  x = x + str[lengStr];
			  
		  }
		  console.log(x);
	  }
	  
	  reverse('abcd');


//8. Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.


	  function checkerboard(anum){
		  let t = anum;
		  let x1 = 1;
		  let txt = "";
		  let finalt = "";
		  
		  while(anum != 0){
			  
			  x1++;
			  
			  if (x1 % 2 === 0) {
				  while(t != 0){
					  t--;
					  txt = txt + "*";
				  } 
				  finalt = finalt + txt;
			  }
			  
				  else {
					  while(t != 0){
						  t--;
						  txt = txt + "*";
					  }
					  finalt = finalt + " " + txt;
				  }
			  
			  finalt = finalt + "\n";
			  anum = anum - 1;
					  
			  } console.log(finalt);
		  }
	  
	  checkerboard(5);
