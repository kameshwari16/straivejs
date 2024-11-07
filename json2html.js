// json2html.js
export default function json2html(data) {
    let table = '<table data-user="puranamkameshwari@gmail.com">';
    
    // Create table header
    table += '<thead><tr>';
    const headers = ['Name', 'Age', 'Gender']; // Define headers explicitly
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += '</tr></thead>';
    
    // Create table body
    table += '<tbody>';
    data.forEach(item => {
      table += '<tr>';
      
      // For each header, ensure there's a value, otherwise use an empty string
      headers.forEach(header => {
        table += `<td>${item[header] || ''}</td>`; // Handle missing values
      });
      
      table += '</tr>';
    });
    table += '</tbody>';
    
    table += '</table>';
    
    return table;
  }
  