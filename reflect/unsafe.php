<?php
    $test = $_SERVER['QUERY_STRING'];
    if ($test != NULL){
        parse_str($test, $params);
        echo ' Hi '.$params['t'];
    }
    else{
        echo "It's not safe here";
    }
?>