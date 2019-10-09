/////////////////////////////////////////////////////////////////////
//функция создающая массив элементов(где элементы расположены в случайном
//порядке) из др массива
function createRandItemArr(arr, randFunc) {
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