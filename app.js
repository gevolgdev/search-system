const inputSearch = document.querySelector('.input-text');
const techContainer = document.querySelector('.tech-list');
// ---------------------------------------------------------

let search = '';

const techs = [
  'Redux', 'React', 'React Native', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Webpack', 'Storybook', 'Jest', 'ESLint', 'Mocha', 'Espruino'
].map(item => item.toUpperCase());

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
  search = value.toUpperCase();
  searching();
};
inputSearch.addEventListener('change', handleSearch);

const searching = () => {
  if (inputSearch.value === '') {
    renderTechs(techs);
  };
  let techsIncludesSearchs = [];
  for(let i = 0; i < techs.length; i++) {
    if(techs[i].includes(search)) {
      techsIncludesSearchs.push(techs[i]);
      renderTechs(techsIncludesSearchs);
    }
  };
  const notFound = () => techContainer.innerHTML = `Tecnologia '${inputSearch.value}' não encontrada!`
  techsIncludesSearchs.length === 0 && notFound();
};

