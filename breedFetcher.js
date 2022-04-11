const request = require("request");
const breedID = process.argv[2].toLowerCase().slice(0, 4);

const website = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedID}`;

request(website, (error, response, body) => {
  if (error) {
    console.log(`failed to get a response: ${error}`);
  }

  const data = JSON.parse(body);

  if (!data[0]) {
    console.log(`breed not found`);
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('data:', data[0]);
    console.log('error: ', error);
  }
  
}
);