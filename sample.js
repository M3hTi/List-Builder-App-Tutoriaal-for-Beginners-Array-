const inputElement = document.getElementById('item-input')
const ulElement = document.getElementById('item-list')
const btnElement = document.getElementById('submit-btn')

let lists = []


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
    

btnElement.addEventListener('click', showList)
