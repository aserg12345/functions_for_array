//Удаляет один элемент массива(мутируя/не мутируя сущ массив)   
// и возвращает объект с удаленным индексом, удаленным значением элемента 
//массива и новым массивом.
//параметры:
//arr(array) - исходный массив;
//type(string) - ('index' / 'value') - ищем в исх массиве по 
//индексу или значению;
//meaning(number/string/object/etc) - если type = 'index' - только число(
//значение index элемента массива, если type = 'value' - значение 
//value элемента массива;
//mutable(string) - ('y' / 'n') - 'y'(мутировать исходный массив)
//'n'(не мутировать исходный массив).
function removeArrItem(arr, type, meaning, mutable) {
	let returnObj = {};
	/////////error handling
	if(arguments.length !== 4){
		console.warn('function removeArrItem: wrong number of arguments');
		return;		
	}
	if( !Array.isArray(arr) ) {
		console.warn('function removeArrItem: arr(first argument) is not an array!');
		return;
	}
	if( arr.length === 0 ) {
		console.warn('function removeArrItem: arr(first argument) is empty!'); 
		return;
	}
	if(type !== 'index' && type !== 'value'){
		console.warn('function removeArrItem: "type" must be "index" or "value"');
		return;		
	}
	if(type === 'index' && meaning >= arr.length || 
	   type === 'index' && meaning < 0 ||
	   type === 'index' && isNaN(meaning)) {
		console.warn('function removeArrItem: "meaning"(index of "arr") must be positive number less than the length of the arr or 0!' );
		return;
	}
	if(mutable !== 'y' && mutable !== 'n'){
		console.warn('function removeArrItem: "mutable" parameter must be "y" or "n"');
		return;
	}
	const sendMessArrValIsEmpty = () => {console.warn('function removeArrItem: the array value is empty!' )};
	//////////////////////

	//remove by index (unmutable)
	if(type === 'index' && mutable === 'n') {
		returnObj.newArray = arr.filter( (val, ind) => ind !== meaning );
		returnObj.removedIndex = meaning;
		returnObj.removedValue = arr[meaning];	
	}

	//remove by value (unmutable)
	if(type === 'value' && mutable === 'n') {
		let isCurrent = 0;
		returnObj.newArray = arr.filter( (val, ind) => {
			if(val === meaning)	{
				returnObj.removedIndex = ind;//save removed index
				returnObj.removedValue = meaning;//save removed value
				isCurrent = 1;
			}
			return val !== meaning;
		} );
		if(isCurrent === 0){
			sendMessArrValIsEmpty();	
			return;
		}
	}

	//remove by index (mutable)
	if(type === 'index' && mutable === 'y') {
		returnObj.removedIndex = meaning;
		returnObj.removedValue = arr[meaning];
		arr.splice(meaning, 1);
		returnObj.newArray = arr;
	}

	//remove by value (mutable)		
	if(type === 'value' && mutable === 'y') {
		let isCurrent = 0;	
		returnObj.newArray = arr.filter( (val, ind) => {
			if(val === meaning)	{
				returnObj.removedIndex = ind;//save removed index
				returnObj.removedValue = meaning//save removed value
				isCurrent = 1;
			}						
			return val !== meaning;
		} );
		if(isCurrent === 0){
			sendMessArrValIsEmpty();	
			return;
		}
		arr.splice(returnObj.removedIndex, 1);
	}

	return returnObj;
}