/////////////////////////////////////////////////////////////////////
//the function creates and returns an array of random elements(arranged
//in random order) from another array
//функция создает и возвращает массив элементов(где элементы расположены 
//в случайном порядке) из др массива
function createRandItemArr(arr, randFunc) {

	//checking arguments for errors
	if(!Array.isArray(arr)) {
		console.warn('the first argument is not an array!');
		return;
	}
	if( typeof randFunc !== 'function' ) {
		console.warn('the second argument is not a function!');
		return;
	}
	////////////////////

	const cache = [];
	const newArr = arr.slice();
	const length = newArr.length-1;

	for(let i = length; i >= 0; i--){
		let randNum = randFunc(i);
		cache.push(newArr[randNum]);
		newArr.splice(randNum, 1);
	}
	return cache;
}