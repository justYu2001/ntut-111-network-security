<?php
    $test = $_SERVER['QUERY_STRING'];
    parse_str($test, $params);
    $params_change = htmlspecialchars($params['t']);
    echo ' Hi '.$params_change;
?>