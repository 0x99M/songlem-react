export const fetchAlbums = () => {
  return fetch('https://songlem.onrender.com/graphql/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        {
          allAlbums {
            id
            title
            description
            dateCreated
          }
        }
      `
    })
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(json => {
      if (json.errors) {
        console.error('GraphQL errors:', json.errors);
        throw new Error('GraphQL query failed');
      }
      return json.data.allAlbums;
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return [];
    });
};
