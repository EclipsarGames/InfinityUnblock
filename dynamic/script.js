document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchResultTemplate = document.getElementById('searchResultTemplate').innerHTML;

  searchResults.innerHTML = 'Games are loading...';
  


  fetch('games.json')
      .then(response => response.json())
      .then(data => {
          const mockData = data; 

          
          function renderSearchResults(searchTerm = '') {
              searchResults.innerHTML = '';

              
              const filteredResults = mockData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

              
              filteredResults.forEach(result => {
                  const renderedTemplate = renderTemplate(searchResultTemplate, result);
                  searchResults.innerHTML += renderedTemplate;
              });
          }


          renderSearchResults();

          
          searchInput.addEventListener('input', function() {
              const searchTerm = searchInput.value.trim();
              renderSearchResults(searchTerm);
          });
      })
      .catch(error => console.error('Error fetching data:', error));
});

function renderTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, (match, key) => data[key.trim()]);
}
