"use strict";

function parse(string) {
  try {
    return JSON.parse(string);
  } catch (error) {
    if (error instanceof SyntaxError) {
      alert("There was a syntax error in your JSON string.\n" + error.message + "\nPlease check your syntax and try again.");
      throw new Error('There was a syntax error in your JSON string.');
    } else {
      alert("There was an unknown error. Perhaps the JSON string contained a deep level of nesting.");
      throw new Error('Unknown error. Perhaps JSON string contained a deep level of nesting.');
    }
  }
}

function escapeHTML(unsafeString) {
  let inStr = unsafeString;
  if (inStr == null) return "";
  inStr = inStr.toString()
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");
  return inStr;
}

let renderCount = 0;
let elementCount = 0;
let arrayCount = 0;
let objectCount = 0;
let tree = null;


let checkRenderArr = '';
let checkRenderObj = '';
let checkRenderTup = '';
let checkRenderRen = '';

function render(value) {
  elementCount = 0;
  arrayCount = 0;
  objectCount = 0;
  renderCount = 0;

  if (value.type == "array") {
    return checkRenderRen = renderArray(value);
  }
  if (value.type == "object") {
    return checkRenderRen = renderObject(value);
  }
  elementCount++;
}

function renderTuples(tuples) {
  let out = "";

  tuples.forEach(function (tuple) {
    let value = tuple.value;
    out += "<tr class='tableRow' data-index='" + value.index + "'><td class='tableRow__cell'>" + escapeHTML(tuple.name) + "</td>";
    out += "<td class='tableRow__cell'" + (value.simple ? " title='" + value.typeLabel + "'" : "") + ">";

    if (value.simple) {
      elementCount++;
      out += escapeHTML(value.value);
    } else if (value.type == "array") {
      out += renderArray(value);
    } else if (value.type == "object") {
      out += renderObject(value);
    }
    out += "</td></tr>";
  });
  checkRenderTup = out;
  return out;
}

function renderArray(array) {
  elementCount++;
  arrayCount++;
  renderCount++;
  if (!array.tuples.length) return "<div data-index='" + array.index + "'>(empty Array)</div>";

  let out = "<div class='array" + "' data-index='" + array.index + "' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Array</h3>";
  out += "<table class='table'><tr class='tableRow'><th class='tableRow__cell'>Index</th><th class='tableRow__cell'>Value</th></tr>";
  out += renderTuples(array.tuples);
  out += "</table></div>";
  checkRenderArr = out;
  return out;
}

function renderObject(object) {
  elementCount++;
  objectCount++;
  renderCount++;
  if (!object.tuples.length) return "<div data-index='" + object.index + "'>(empty Object)</div>";

  let out = "<div class='object" + "' data-index='" + object.index + "' onmouseover=''><div class='widget'></div><h3 class='tableTitle'>Object</h3>";
  out += "<table class='table'><tr class='tableRow'><th class='tableRow__cell'>Name</th><th class='tableRow__cell'>Value</th></tr>";
  out += renderTuples(object.tuples);
  out += "</table></div>";
  checkRenderObj = out;
  return out;
}

function json2html(strParse) {
  let flag = true;
  if (flag) {
    let parseTree = parse(strParse);
    if (!parseTree) {
      flag = false;
    } else {
      tree = transformTree(parseTree);
      let result = render(tree.root);
      let btnParse = document.getElementById('submit');
      let outTable = document.getElementById('output');
      outTable.innerHTML = result;
      btnParse.value = "Parse";
      btnParse.disabled = null;
      outTable.scrollIntoView();
    }
  }
  return flag;
}

function doParse(value) {
  let textArea = document.getElementById('text');
  if (!value) value = textArea.value;
  let btnParse = document.getElementById('submit');
  json2html(value);
  btnParse.value = "processing...";
  btnParse.disabled = true;
  return [btnParse.value, btnParse.disabled]
}

function clearPage() {
  let outTable = document.getElementById('output').innerHTML = "";
  let inputJSON = document.getElementById('text').value = '';
}
