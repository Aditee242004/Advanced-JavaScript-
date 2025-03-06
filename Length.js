<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Length</title>
</head>
<body>
    <h2>Enter a String and Get Its Length</h2>

    <input type="text" id="inputField" placeholder="Enter a string">
    <button onclick="displayLength()">Submit</button>

    <p id="output"></p>

    <script>
        function displayLength() {
            var str = document.getElementById('inputField').value;  // Get the string from the input field
            var length = str.length;  // Get the length of the string
            document.getElementById('output').innerText = "Length of the string: " + length;
        }
    </script>
</body>
</html>