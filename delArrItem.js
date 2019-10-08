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
function delArrItem(arr, type, meaning, mutable) {
	let returnObj = {};
	/////////error handling
	if(arguments.length !== 4){
		console.warn('wrong number of arguments');
		return;		
	}

	if(type !== 'index' && type !== 'value'){
		console.warn('"type" must be "index" or "value"');
		return;		
	}

	if(type === 'index' && meaning >= arr.length || 
	   type === 'index' && meaning < 0 ||
	   type === 'index' && isNaN(meaning)) {
		console.warn('"meaning"(index of "arr") must be positive number or 0!' );
		return;
	}

	if(mutable !== 'y' && mutable !== 'n'){
		console.warn('"mutable" parameter must be "y" or "n"');
		return;
	}

	const isAbsent = () => {console.warn('the array value is absent!' )};
	//////////////////////

	//delete by index (unmutable)
	if(type === 'index' && mutable === 'n') {
		returnObj.newArray = arr.filter( (val, ind) => ind !== meaning );
		returnObj.removedIndex = meaning;
		returnObj.removedValue = arr[meaning];	
	}

	//delete by value (unmutable)
	if(type === 'value' && mutable === 'n') {
		let isPresent = 0;
		returnObj.newArray = arr.filter( (val, ind) => {
			if(val === meaning)	{
				returnObj.removedIndex = ind;//достаю удаляемый индекс
				returnObj.removedValue = meaning;//достаю удаляемое value
				isPresent = 1;
			}
			return val !== meaning;
		} );
		if(isPresent === 0){
			isAbsent();	
			return;
		}
	}

	//delete by index (mutable)
	if(type === 'index' && mutable === 'y') {
		returnObj.removedIndex = meaning;
		returnObj.removedValue = arr[meaning];
		arr.splice(meaning, 1);
		returnObj.newArray = arr;
	}

	//delete by value (mutable)		
	if(type === 'value' && mutable === 'y') {
		let isPresent = 0;	
		returnObj.newArray = arr.filter( (val, ind) => {
			if(val === meaning)	{
				returnObj.removedIndex = ind;//достаю удаляемый индекс
				returnObj.removedValue = meaning//достаю удаляемое value
				isPresent = 1;
			}						
			return val !== meaning;
		} );
		if(isPresent === 0){
			isAbsent();	
			return;
		}
		arr.splice(returnObj.removedIndex, 1);
	}

	return returnObj;
}