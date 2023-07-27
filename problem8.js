var arr = [ 6, 3, 5, 2, 9 ];
function secondSmallest(arr){
    let smallest = arr[0]; 
	let secondSmallest = arr[1]; 

		for(let i = 0; i < arr.length; i++) { 
			if(arr[i] < smallest) {  
				smallest = arr[i];  
			}  

			if(arr[i] > smallest && arr[i] < secondSmallest ) { 
				secondSmallest = arr[i]; 
			} 
		}
        return secondSmallest; 
}
		

		console.log(secondSmallest(arr));