function convert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
  
    // Convert Celsius to Fahrenheit
    if (celsius) {
      fahrenheit = celsius * 9 / 5 + 32;
    }
  
    // Convert Fahrenheit to Celsius
    if (fahrenheit) {
      celsius = (fahrenheit - 32) * 5 / 9;
    }
  
    // Display the converted temperature
    document.getElementById("celsius").value = celsius;
    document.getElementById("fahrenheit").value = fahrenheit;
  }