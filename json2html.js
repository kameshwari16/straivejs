// json2html.js
export default function json2html(data) {
    let table = '<table data-user="puranamkameshwari@gmail.com">';
    
    // Create table header
    table += '<thead><tr>';
    const headers = Object.keys(data[0]); // Get keys from the first object as table headers
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += '</tr></thead>';
    
    // Create table body
    table += '<tbody>';
    data.forEach(item => {
      table += '<tr>';
      headers.forEach(header => {
        table += `<td>${item[header] || ''}</td>`; // Handle missing values
      });
      table += '</tr>';
    });
    table += '</tbody>';
    
    table += '</table>';
    
    return table;
  }
  