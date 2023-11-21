<?php
// This file processes the form data, but for this example, it doesn't do much

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Additional processing if needed...

    // Redirect to another page
    header("Location: ./view/signForm.html");
    exit();
}

?>
