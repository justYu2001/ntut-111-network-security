<?php
    $test = $_SERVER['QUERY_STRING'];
    parse_str($test, $params);
    echo ' Hi '.$params['t'];
?>

<html>

<body>
    <form action="" method="post">
        <input type='text' id='name' name='name'>
        <input type='submit' value='submit'>
    </form>
</html>