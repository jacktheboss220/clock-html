
<?php

for ($i = 1; $i <= 5; $i++) {
    for ($j = $i; $j < 5; $j++) {
        echo "_";
    }
    for ($j = 1; $j <= $i; $j++) {
        echo "$j";
    }
    echo "<br>";
}

?>
