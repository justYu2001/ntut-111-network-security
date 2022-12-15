<?php
    $test = $_SERVER['QUERY_STRING'];
    parse_str($test, $params);
    echo ' Hi '.$params['t'];
?>