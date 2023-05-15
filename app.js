const inputSearch = document.querySelector('.input-text');
const techContainer = document.querySelector('.tech-list');

let search = '';

const techs = ['Redux', 'React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Webpack', 'Storybook', 'Jest', 'ESLint', 'Mocha', 'Espruino'];

const renderTechs = (arr) => {
  techContainer.innerHTML = '';

  arr.forEach(item => {
    const techsElement = document.createElement('span');
    techsElement.innerHTML = `<span>${item}</span>`;
    techContainer.appendChild(techsElement.firstChild);
  });
};
renderTechs(techs);


const handleSearch = (e) => {
  const { value } = e.target;
  search = value;
  searching();
};
inputSearch.addEventListener('change', handleSearch);

const searching = () => {
  if (techs.includes(search)) {
    const searchResult = techs.filter(item => item === search);
    renderTechs(searchResult);
  }
  else if (inputSearch.value === '') {
    renderTechs(techs);
  }
  else {
    techContainer.innerHTML = `Tecnologia '${inputSearch.value}' não encontrada!`;
  }
};

