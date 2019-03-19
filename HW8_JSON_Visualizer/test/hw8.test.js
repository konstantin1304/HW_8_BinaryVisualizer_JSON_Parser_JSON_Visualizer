describe("parse(str)   -   parse JSON-string to object or throw ERROR", function () {

     const testData = [
          {    value: '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'},
          {    value: '{"name":"Alexandr","age":29,"gender":"male"}'},
          {    value: '{"info":{"seed":"19c6199928c19597","results":1,"page":1,"version":"1.2"}}'}
     ];
     
     testData.forEach((data) => {
          
          const {  value   } = data;
          
          it(`should return object ${JSON.parse(value)} from JSON-string str = "${value}"`, () => {
               const actual = parse(value);
               assert.deepEqual(actual, JSON.parse(value));
          });
     });

     describe("Throw ERRORS from parse JSON-string", function () {
          const testError = [
               {    value: { "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }},
               {    value: {"name":"Alexandr","age":29,"gender":"male"}},
               {    value: '{info:{"seed":"19c6199928c19597","results":1,"page":1,"version":"1.2"}}'}
          ];

          testError.forEach(function(data) {
               it('should throw Error if not the correct JSON-string ', () => {
                    const {  value  } = data;
                    assert.throws(() => {
                         parse(value);
                    }, Error, 'There was a syntax error in your JSON string.');
               });
          });
     });

});


describe("escapeHTML(str)   -   replace   /<, >, &, \", \' /g   to the object symbol reference", function () {

     const testData = [
          {    value: '<div>',     expected: "&lt;div&gt;" },
          {    value: '&<>"\'',    expected: "&amp;&lt;&gt;&quot;&#039;"},
          {    value: '',          expected: ""   },
          {    value: 5,          expected: "5"   },
          {    value: 'Some str',          expected: "Some str"   }
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return string with replace symbols "${expected}" from str "${value}"`, () => {
               const actual = escapeHTML(value);
               assert.deepEqual(actual, expected);
          });
     });
});


describe("renderTuples(value)   -   render tuples. Return HTML text to string", function () {

     const testData = [
          {    value: '{ "name":"Вася"}',     expected: "<tr class='tableRow' data-index='1'><td class='tableRow__cell'>name</td><td class='tableRow__cell' title='String'>Вася</td></tr>" },
          {    value: '{"friends":[1,2]}',    expected: "<tr class='tableRow' data-index='1'><td class='tableRow__cell'>friends</td><td class='tableRow__cell'><div class='array' data-index='1' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Array</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Index</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='2'><td class='tableRow__cell'>0</td><td class='tableRow__cell' title='Number'>1</td></tr><tr class='tableRow' data-index='3'><td class='tableRow__cell'>1</td><td class='tableRow__cell' title='Number'>2</td></tr></table></div></td></tr>"},
          {    value: '{ "prop":{"name":"Вася"}}',          expected: "<tr class='tableRow' data-index='1'><td class='tableRow__cell'>prop</td><td class='tableRow__cell'><div class='object' data-index='1' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Object</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Name</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='2'><td class='tableRow__cell'>name</td><td class='tableRow__cell' title='String'>Вася</td></tr></table></div></td></tr>"   }
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return HTML text to string "${expected}", ===> when JSON-string "${value}"`, () => {
               json2html(value);


               const actual = checkRenderTup;
               assert.deepEqual(actual, expected);
          });
     });
});

describe("renderArray(value)   -   render array. Return HTML text to string", function () {

     const testData = [
          {    value: '["name","Вася"]',     expected: "<div class='array' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Array</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Index</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>0</td><td class='tableRow__cell' title='String'>name</td></tr><tr class='tableRow' data-index='2'><td class='tableRow__cell'>1</td><td class='tableRow__cell' title='String'>Вася</td></tr></table></div>"},
          {    value: '["apple","lime","orange"]',    expected: "<div class='array' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Array</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Index</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>0</td><td class='tableRow__cell' title='String'>apple</td></tr><tr class='tableRow' data-index='2'><td class='tableRow__cell'>1</td><td class='tableRow__cell' title='String'>lime</td></tr><tr class='tableRow' data-index='3'><td class='tableRow__cell'>2</td><td class='tableRow__cell' title='String'>orange</td></tr></table></div>"},
          {    value: '["hello"]',          expected:  "<div class='array' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Array</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Index</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>0</td><td class='tableRow__cell' title='String'>hello</td></tr></table></div>"   }
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return HTML text to string "${expected}", ===> when JSON-string ${value}`, () => {
               json2html(value);
               clearPage();


               const actual = checkRenderArr;
               assert.deepEqual(actual, expected);
          });
     });
});

describe("renderObject(value)   -   render object. Return HTML text to string", function () {

     const testData = [
          {    value: '{"name":"Вася"}',     expected: "<div class='object' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Object</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Name</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>name</td><td class='tableRow__cell' title='String'>Вася</td></tr></table></div>"},
          {    value: '{"fruit":"orange"}',    expected:  "<div class='object' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Object</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Name</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>fruit</td><td class='tableRow__cell' title='String'>orange</td></tr></table></div>" },
          {    value: '{"say":"hello"}',          expected: "<div class='object' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Object</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Name</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>say</td><td class='tableRow__cell' title='String'>hello</td></tr></table></div>" }
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return HTML text to string "${expected}", ===> when JSON-string ${value}`, () => {
               json2html(value);
               clearPage();


               const actual = checkRenderObj;
               assert.deepEqual(actual, expected);
          });
     });
});

describe("json2html(value)   -   Basic function", function () {

     const testData = [
          {    value: '{"name":"Вася"}',     expected: true},
         
          {    value: 'null',          expected: false },
         
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return result function ${expected} ===> when JSON parsed ${value}`, () => {
               
               const actual = json2html(value);
               assert.deepEqual(actual, expected);
          });
     });

     describe("Throw ERRORS from json2html JSON-string", function () {
          const testError = [
               {    value: { "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }},
               {    value: {"name":"Alexandr","age":29,"gender":"male"}},
               {    value: 'undefined'}
          ];

          testError.forEach(function(data) {
               it('should throw Error if not the correct JSON-string ', () => {
                    const {  value  } = data;
                    assert.throws(() => {
                         json2html(value);
                    }, Error, 'There was a syntax error in your JSON string.');
               });
          });
     });
});

describe("render(value)   -   render JSON object. Return HTML text to string", function () {

     const testData = [
          {    value: '{"say":"hello"}',     expected: "<div class='object' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Object</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Name</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>say</td><td class='tableRow__cell' title='String'>hello</td></tr></table></div>"},
          {    value: '{"fruit":"orange"}',    expected: "<div class='object' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Object</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Name</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>fruit</td><td class='tableRow__cell' title='String'>orange</td></tr></table></div>" },
          {    value: '["say", "my", "name"]',          expected:  "<div class='array' data-index='0' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Array</h3><table class='table'><tr class='tableRow'><th class='tableRow__cell'>Index</th><th class='tableRow__cell'>Value</th></tr><tr class='tableRow' data-index='1'><td class='tableRow__cell'>0</td><td class='tableRow__cell' title='String'>say</td></tr><tr class='tableRow' data-index='2'><td class='tableRow__cell'>1</td><td class='tableRow__cell' title='String'>my</td></tr><tr class='tableRow' data-index='3'><td class='tableRow__cell'>2</td><td class='tableRow__cell' title='String'>name</td></tr></table></div>" }
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return HTML text to string "${expected}", ===> when JSON-string ${value}`, () => {
               json2html(value);

               const actual = checkRenderRen;
               assert.deepEqual(actual, expected);
          });
     });
});

describe("clearPage()   -   clear all data in page", function () {

     const testData = [
          {    value: '{ "name":"Вася"}',     expected: ''},
          {    value: '{"friends":[1,2]}',    expected: ''},
          {    value: '{ "prop":{"name":"Вася"}}',          expected:  ''}
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return clear page. Output =  "${expected}", after parsed JSON-string "${value}"`, () => {
               json2html(value);
               clearPage();
               const actual = document.getElementById('output').innerHTML;
               assert.deepEqual(actual, expected);
          });
     });
});

describe("doParse()   -   start parsing JSON-string, rename and disabled button 'Parse' ", function () {

     const testData = [
          {    value: '{ "name":"Вася"}',     expected: ["processing...", true]},
          {    value: '{"friends":[1,2]}',    expected: ["processing...", true]},
          {    value: '{ "prop":{"name":"Вася"}}',          expected:  ["processing...", true]}
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should start parsing, and change button condition: value = "${expected[0]}", disabled = "${expected[1]}" after parsed JSON-string "${value}"`, () => {
               const actual = doParse(value);
               assert.deepEqual(actual, expected);
          });
     });
});

describe("transformTree(value)   -   transform object or array for render ", function () {

     const testData = [
          {    value: '{ "name":"Вася"}',     expected: ["name", "Вася"]},
          {    value: '{"friends": "list"}',    expected: ["friends", "list"]},
          {    value: '{ "prop": "true"}',          expected:  ["prop", "true"]}
     ];

     testData.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return array of value of transform object ${value}  ===>  [${expected}]`, () => {
               json2html(value);

               const actual = [tree.map[0].tuples[0].name, tree.map[0].tuples[0].value.value];
               assert.deepEqual(actual, expected);
          });
     });

     const testData2 = [
          {    value: '{ "name":["Василий", "Программист"]}',     expected: ["name", "Василий", "Программист"]},
          {    value: '{"friends": ["Forever", "and ever"]}',    expected: ["friends", "Forever", "and ever"]}
     ];

     testData2.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return array of value of transform object ${value}  ===>  [${expected}]`, () => {
               json2html(value);

               const actual = [tree.map[0].tuples[0].name, tree.map[2].value, tree.map[3].value];
               assert.deepEqual(actual, expected);
          });
     });

     const testData3 = [
          {    value: '{ "currency": ["USD"]}',     expected: ["currency", "USD"]},
          {    value: '{"sum": ["zero"]}',    expected: ["sum", "zero"]}
     ];

     testData3.forEach((data) => {

          const {  value  ,    expected    } = data;

          it(`should return array of value of transform object ${value}  ===>  [${expected}]`, () => {
               json2html(value);

               const actual = [tree.map[0].tuples[0].name, tree.map[2].value];
               assert.deepEqual(actual, expected);
          });
     });
});









