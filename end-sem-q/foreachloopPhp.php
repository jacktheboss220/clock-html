<!DOCTYPE html>
<html>

<head>
    <title>Student</title>
</head>

<body>
    <h1>Student Details</h1><br>
    <?php
    $std = array(202010101130077, "Mahesh", 8.22);
    foreach ($std as $val) {
        echo "$val <br>";
    }
    ?>
</body>

</html>