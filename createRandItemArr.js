/////////////////////////////////////////////////////////////////////
//the function creates and returns an array of random elements(arranged
//in random order) from another array
//функция создает и возвращает массив элементов(где элементы расположены 
//в случайном порядке) из др массива
function createRandItemArr(arr, randFunc) {
	//checking arguments for errors
	if(arguments.length !== 2){
		console.warn('function createRandItemArr: wrong number of arguments');
		return;		
	}
	if( !Array.isArray(arr) ) {
		console.warn('function createRandItemArr: the first argument is not an array!');
		return;
	} 
	if( arr.length === 0 ) {
		console.warn('function createRandItemArr: array(first argument) is empty!'); 
		return;
	}
	if( typeof randFunc !== 'function' ) {
		console.warn('function createRandItemArr: the second argument is not a function!');
		return;
	}
	const sendMessArrElIsEmpty = () => {
		console.warn('function createRandItemArr: array has empty element! The empty element removed from the new array!' )
	};	
	const sendMessRandFuncForNum = () => {	
			console.warn('function createRandItemArr: randFunc(second argument) don`t return number!');		
	};
	////////////////////
	const cache = [];
	const newArr = arr.slice();
	const length = newArr.length-1;

	for( let i = length; i >= 0; i-- ) {
		let randNum = randFunc(i);
		//checking randFunc(second argument) for number
		if( typeof randNum !== 'number' ) {
			sendMessRandFuncForNum();
			return;
		}
		//checking elements of the incoming array for emptiness
		if( typeof newArr[randNum] === 'undefined' ) {
			sendMessArrElIsEmpty();
			continue;
		}
		cache.push(newArr[randNum]);
		console.log(newArr[randNum]);
		newArr.splice(randNum, 1);
	}
	return cache;
}