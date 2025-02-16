// Get references to the tbody element, input field and button
var tbody = document.querySelector("tbody");
var datetimeInput = document.querySelector("#datetime");
var searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to data initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current ufoData object and its fields
    var ufoData = filteredData[i];
    var fields = Object.keys(ufoData);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the ufoData object, create a new cell at set its inner text to be the current value at the current ufoData's field
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = ufoData[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterdatetime = datetimeInput.value.trim().toLowerCase();

  // Set filteredData to an array of all ufoDataes whose "datetime" matches the filter
  filteredData = dataSet.filter(function(ufoData) {
    var ufodatetime = ufoData.datetime.toLowerCase();

    // If true, add the ufoData to the filteredData, otherwise don't add it to filteredData
    return ufodatetime === filterdatetime;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
