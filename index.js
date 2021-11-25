const axios = require("axios");
const cheerio = require('cheerio');

function parseChildren(term) {
  const children = term.childNodes;
  // console.log(children);
  var meaning = "";



  children.forEach(function (value) {
    if (value.text.replace(/\n/g, "").replace(/\s\s+/g, " ").trim() !== "") {
      meaning +=
        value.text.replace(/\n/g, "").replace(/\s\s+/g, " ").trim()

        // console.log(meaning);


        console.log(value._attr)


    }
  });

  // console.log(meaning);

  return meaning;
}

async function getUrbanDictionary(term) {
  const result = await axios.get(
    `https://www.urbandictionary.com/define.php?term=${term}`
  );

  const { data } = result;

  const $ = cheerio.load(data);

  const meaning = $(".meaning");

  const defination = [];

  for(let i = 0; i < meaning.length; i++) {
    defination.push($(meaning.get(i)).text());
  }
  
  console.log(defination);

  return defination;

}

// getUrbanDictionary("sarfraz");

module.exports = getUrbanDictionary;
