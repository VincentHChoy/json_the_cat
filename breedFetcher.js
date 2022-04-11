const request = require('request')

const fetchBreedDescription = function (breedName, callback) {
  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(website, (error, response, body) => {
    // console.log('DATA IS :',data)
    if(error){
      return callback(error,null)
    }
    const data = JSON.parse(body);
    const breed = data[0]
    if (breed) {
      callback(null,breed.description)
      // console.log('data:', data[0]);
    } else {
      callback(null,'breed not found')
      // console.log(`breed not found`);
    }
  });
};

module.exports = { fetchBreedDescription }