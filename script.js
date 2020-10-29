// Возвращает матрицу со столбцами key и value объекта
function entries (obj) {
    let arr = [];
    for(let item in obj) {
        arr.push([item, obj[item]])
    }
    return arr
}

const obj = {
    name: "Алексей",
    surname: "Данчин",
    age: 28
};
console.log(entries(obj));

/*
[
	["name", "Алексей"],
	["surname", "Данчин"],
	["age", 28],
]
 */