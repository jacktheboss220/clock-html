<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FORM1</title>
</head>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $last = $_POST['last'];
    $option = $_POST['course'];
    $gender = $_POST['gender'];
    echo "$name " . " $last " . " $option " . " $gender";
}

?>

<body>
    <dev class="container" style="text-align: center;">
        <h2><u>Admission Form</u></h2>
        <hr>
        <form action="/class%203/form1.php" method="POST">
            <b>First Name</b><input type="text" class="name" placeholder="" name="name"><br><br>
            <b>Last Name</b><input type="text" class="name" placeholder="" name="last"><br><br>
            <b>Gender</b><input type="radio" name="gender" id="male" value="male"><label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"><label for="female">Female</label><br><br>
            <h3>Location</h3>
            <input type="checkbox" name="city" id="Lucknow"><label for="Lucknow">Lucknow</label>
            <input type="checkbox" name="city" id="Delhi"><label for="Delhi">Delhi</label>
            <input type="checkbox" name="city" id="Goa"><label for="Goa">Goa</label>
            <input type="checkbox" name="city" id="Pune"><label for="Pune">Pune</label><br>
            <h3>Select The Course</h3>
            <select name="course" id="course">
                <option value="BCA">BCA</option>
                <option value="B.Teach">B Teach</option>
                <option value="Civil">Civil</option>
                <option value="Doctor">Doctor</option>
            </select>
            <h3>Enter the Phone Number</h3>
            <input type="number" id="number"><br><br>
            <input type="submit" value="submit"><button>Reset</button>
        </form>
        <hr>
    </dev>
</body>

</html>