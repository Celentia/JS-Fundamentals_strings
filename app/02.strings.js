console.log('Topic: Strings');
// Task 01. padStart
// RU: Объявите три переменных: hour, minute, second.
//     Присвойте им следующие значения: 4, 35, 5.
//     Выведите в консоль время в формате 04:35:05.
// EN: Declare three variables: hour, minute, second.
//     Assign them the following values: 4, 35, 5.
//     Display the time in the format 04:35:05 in the console.

    const hour = 4, minute = 35, second = 5; 
    let time = '';
    time = `${hour.toString().padStart(2, '0')}:${minute.toString()}:${second.toString().padStart(2, '0')}`;
    console.log(`Task for recaping knowledge about methods ES2015, ES2017, ES2019 (padStart). Answer: ${time}`);

// Task 06. normalize
// RU: Создайте функцию, которая сравнивает юникод строки.
//     Сравните две строки
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';
// EN: Create a function that compares the unicode strings.
//     Compare 2 strings:
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';

    var str1 = '\u006d\u0061\u00f1';
    var str2 = '\u006d\u0061\u006e\u0303';

    function compareUnicode(str1, str2) {
        return str1.normalize() == str2.normalize();
    }

    console.log(`Task for recaping knowledge about comparing Unicode strings. Answer: ${compareUnicode(str1, str2)}`);

// Task 07. endsWIth
// RU: Создайте функцию, которая на вход получает массив имен фалов и расширение файла
//     и возвращает новый массив, который содержит файлы указанного расширения.
// EN: Create a function that gets an array of file names and a file extension as its parameters
//     and returns a new array that contains the files of the specified extension.

    const fileNames = ['file1.docx', 'fileName2.fb2', 'fileRandom3.docx'], extension = '.docx';
    function getFile(fileNames, extension) {
        let arrExt = [];
        for (prop of fileNames) {
            if (prop.endsWith(extension)) {
                arrExt.push(prop);
            }
        }
        return arrExt;
    }
    console.log('Task for recaping knowledge about methods ES2015, ES2017, ES2019 (endsWIth). Answer:');
    console.log(getFile(fileNames, extension));

// Task 10
// RU: Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой
//     и добавляет знак доллара перед числом в шаблонном литерале.
// EN: Create a currency tag function that forms numbers up to two decimal digits.
//     and adds a dollar sign before the number in the template literal.

    const arrNumbers = [1.003, 2.589, 5.1483, 14.11123, 9.285];
    function formCurrency(arr, arrNumbers) {
        const arrNumbersDecimal = [];
        for (prop of arrNumbers) {
            arrNumbersDecimal.push(arr[0] + prop.toFixed(2)).raw;
        }
        return arrNumbersDecimal;
    }
    console.log(`\nTask for recaping knowledge about tag functions. Answer:`);
    console.log(formCurrency`\$${arrNumbers}`);