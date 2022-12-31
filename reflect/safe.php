<?php
    $test = $_SERVER['QUERY_STRING'];
    if ($test != NULL){
        parse_str($test, $params);
    $params_change = htmlspecialchars($params['t']);
    echo ' Hi '.$params_change;
    }
    else{
        echo 'Nothing here';
    }
    
?>