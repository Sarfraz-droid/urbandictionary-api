UrbanDictionary API (Unofficial) tha finds the defination of any word in the website

## How to Use 

`npm install urbandictionary-api --save`

#### Example

```
const getUrbanDictionary = require("urbandictionary-api");

getUrbanDictionary("air");
```

##### Output
```
[
  'Air is mostly nitrogen and oxygen and water vapor. We breathe it.',
  'To ignore. Dismiss something/someone',
  "Commonly used in coastal Georgia to describe marijuana that 
has no effects because of it's poor quality.",
  'Awesome French electronic band. Basically, two guys with a guitar, bass and a whole lot of computers and key boards.',     
  'The stuff you breathe in your lungs!',
  'In reference to a jumpshot in basketball, to make no contact whatsoever with the rim, net, or even backboard.\n' +
    '\n' +
    "Antonym of 'nothing but net'",
  "another phrase to express someone getting 'murked' usually used by mc's when there makin a dub against another mc"
]
```