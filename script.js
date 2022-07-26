let addButton = document.querySelector('.add');
let item = document.querySelector('#item');
let list = document.querySelector('.list');

addButton.addEventListener('click', (e) => {
    let newItem = document.createElement('li');
    newItem.innerText = item.value + " ";
    let delButton = document.createElement('button');
    delButton.innerText = 'x';
    delButton.style.borderRadius = '100%';
    delButton.style.padding = '1px 5px';
    delButton.style.cursor = 'pointer';
    delButton.style.color = '#c4c4c4';
    delButton.style.borderColor = '#c4c4c4';
    delButton.style.backgroundColor = 'white';
    newItem.append(delButton);
    list.append(newItem);

    delButton.addEventListener('click', (e) => e.target.parentElement.remove());
    item.value = '';
});

down.addEventListener('click', (e) => {    
    Array.from(list.getElementsByTagName("li"))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => list.appendChild(li));
});

up.addEventListener('click', (e) => {
    Array.from(list.getElementsByTagName("li"))
        .sort((a, b) => b.textContent.localeCompare(a.textContent))
        .forEach(li => list.appendChild(li));
});
