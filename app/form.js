<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Host Registration - Viste AI</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h2>Host Registration – Automate Communication with WhatsApp AI</h2>
    <form id="hostForm">
        
        <h3>🛠️ Basic Information</h3>
        <label>Full Name:</label>
        <input type="text" name="fullName" required>

        <label>Email:</label>
        <input type="email" name="email" required>

        <label>WhatsApp Number:</label>
        <input type="text" name="whatsapp" required>

        <label>Location (City & Country):</label>
        <input type="text" name="location" required>

        <h3>🏡 Rental Business Information</h3>
        <label>How many properties do you manage?</label>
        <select name="properties">
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="11-20">11-20</option>
            <option value="21-50">21-50</option>
            <option value="51+">51+</option>
        </select>

        <label>Which Channel Manager do you use?</label>
        <select name="channelManager">
            <option value="Icnea">Icnea</option>
            <option value="Guesty">Guesty</option>
            <option value="Smoobu">Smoobu</option>
            <option value="Hostaway">Hostaway</option>
            <option value="Rentals United">Rentals United</option>
            <option value="Other">Other (Specify below)</option>
        </select>

        <label>If "Other," please specify:</label>
        <input type="text" name="otherCM">

        <h3>💡 Messaging Needs</h3>
        <label>What features would you like to automate?</label><br>
        <input type="checkbox" name="features" value="Check-in & Check-out WhatsApp"> WhatsApp Check-in & Check-out<br>
        <input type="checkbox" name="features" value="AI FAQ Messaging"> AI FAQ Messaging<br>
        <input type="checkbox" name="features" value="Troubleshooting"> Troubleshooting & Escalation<br>
        <input type="checkbox" name="features" value="Upselling"> Upselling (late checkout, transport, etc.)<br>
        
        <label>When do you want to start with Viste AI?</label>
        <select name="startDate">
            <option value="Immediately">Immediately</option>
            <option value="In 1 month">In 1 month</option>
            <option value="Just Exploring">Just Exploring</option>
        </select>

        <label>Would you like a demo call?</label>
        <select name="demoCall">
            <option value="Yes">Yes, send me the link</option>
            <option value="No">No, I prefer to explore on my own</option>
        </select>

        <label>Any additional comments?</label>
        <textarea name="comments"></textarea>

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
