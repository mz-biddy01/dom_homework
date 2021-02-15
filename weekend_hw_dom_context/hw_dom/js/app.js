document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
  
  const endangeredAnimalsListItem = createEndangeredAnimalsListItem(event.target);
  const endangeredAnimalsList = document.querySelector('#endangered-animals-list');
  endangeredAnimalsList.appendChild(endangeredAnimalsListItem);
  
  event.target.reset();
}


const createEndangeredAnimalsListItem = function (form) {
    const endangeredAnimalsListItem = document.createElement('li');
    endangeredAnimalsListItem.classList.add('endangered-animals-list-item');

    const animals = document.createElement('h2');
    animals.textContent = form.animals.value;
    endangeredAnimalsListItem.appendChild(animals);

    const species = document.createElement('h3');
    species.textContent = form.species.value;
    endangeredAnimalsListItem.appendChild(species);

    const continent = document.createElement('p');
    continent.textContent = form.continent.value;
    endangeredAnimalsListItem.appendChild(continent);

    return endangeredAnimalsListItem;

}

const handleDeleteAllClick = function (event) {
    const endangeredAnimalsList = document.querySelector('#endangered-animals-list');
    endangeredAnimalsList.innerHTML = '';
}