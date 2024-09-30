const inputElement = document.getElementById('item-input')
const ulElement = document.getElementById('item-list')
const btnElement = document.getElementById('submit-btn')
// console.dir(btnElement)

let lists = []


//NOTE: This is a function to show the list(first method)
/*
const showList = function () {
    const value = inputElement.value
    // console.log(value);
    if (value !== '') {
        lists.push(value)
        // console.log(lists);
        // Clear the existing list
        ulElement.innerHTML = '';
        lists.forEach(list => {
            const li = document.createElement('li')
            li.innerText = list
            ulElement.appendChild(li)
        });
        inputElement.value = ''
    }
}
*/


//NOTE: This is a function to show the list(second method)
const showList = function () {
    const value = inputElement.value
    // console.log(value);
    if (value !== '') {
        lists.push(value)
        // console.log(lists);
        // Clear the existing list
        let html = ''
        for (let index = 0; index < lists.length; index++) {
            const list = lists[index];
            let htmlElement  = `
                <li>
                    <span>${list}</span>
                </li>
            `
            html += htmlElement
        }
        ulElement.innerHTML = html
        inputElement.value = ''
    }
}
    

btnElement.addEventListener('click', showList)
