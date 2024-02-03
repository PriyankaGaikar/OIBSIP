function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const inputType = document.getElementById('inputType').value;
    const outputType = document.getElementById('outputType').value;
    let result;
  
    if (isNaN(inputTemperature)) {
      document.getElementById('resultArea').innerHTML = '<p>Please enter a valid temperature.</p>';
      return;
    }
  
    // Convert input temperature to Celsius
    let celsiusTemperature;
    switch (inputType) {
      case 'celsius':
        celsiusTemperature = inputTemperature;
        break;
      case 'fahrenheit':
        celsiusTemperature = (inputTemperature - 32) * 5/9;
        break;
      case 'kelvin':
        celsiusTemperature = inputTemperature - 273.15;
        break;
      default:
        document.getElementById('resultArea').innerHTML = '<p>Invalid input temperature type.</p>';
        return;
    }
  
    // Convert Celsius to output temperature
    switch (outputType) {
      case 'celsius':
        result = celsiusTemperature;
        break;
      case 'fahrenheit':
        result = (celsiusTemperature * 9/5) + 32;
        break;
      case 'kelvin':
        result = celsiusTemperature + 273.15;
        break;
      default:
        document.getElementById('resultArea').innerHTML = '<p>Invalid output temperature type.</p>';
        return;
    }
  
    document.getElementById('resultArea').innerHTML = `<p>Converted Temperature: <span>${result.toFixed(2)}</span> ${outputType}</p>`;
  }
  