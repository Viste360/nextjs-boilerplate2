<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Viste AI Host Registration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h2>Register Your Property with Viste AI</h2>
    <form id="hostForm">
        <label>Full Name:</label>
        <input type="text" name="fullName" required>

        <label>Email:</label>
        <input type="email" name="email" required>

        <label>WhatsApp Number:</label>
        <input type="text" name="whatsapp" required>

        <label>Location (City & Country):</label>
        <input type="text" name="location" required>

        <label>Number of Properties:</label>
        <select name="properties">
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="11-20">11-20</option>
            <option value="21-50">21-50</option>
            <option value="51+">51+</option>
        </select>

        <label>Channel Manager:</label>
        <select name="channelManager">
            <option value="Icnea">Icnea</option>
            <option value="Guesty">Guesty</option>
            <option value="Smoobu">Smoobu</option>
            <option value="Hostaway">Hostaway</option>
            <option value="Rentals United">Rentals United</option>
            <option value="Other">Other (Specify Below)</option>
        </select>

        <label>If "Other", specify:</label>
        <input type="text" name="otherCM">

        <button type="submit">Submit</button>
    </form>

    <script>
        document.getElementById("hostForm").addEventListener("submit", function(event) {
            event.preventDefault();

            let formData = new FormData(this);
            let data = {};
            formData.forEach((value, key) => { data[key] = value; });

            fetch("https://script.google.com/macros/s/AKfycbzg92d2dUIIX1IhLtQgFCM-qjZTZc9elqamgaGUSKKuMpOFMQCe6hAh0wt4GkmKx0g/exec", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(data => {
                alert("Thank you for registering! 🎉");
                document.getElementById("hostForm").reset();
            })
            .catch(error => console.error("Error:", error));
        });
    </script>

</body>
</html>
