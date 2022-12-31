<?php
    $test = $_SERVER['QUERY_STRING'];
    if ($test != NULL){
        parse_str($test, $params);
        $params_change = preg_replace('/<(.*)s(.*)c(.*)i(.*)p(.*)t/i','',$params['t']);
        echo ' Hi '.$params_change;
    }
    else{
        echo 'Nothing here';
    }
?>
<!-- 可用下列<img>標籤繞過 -->
<!-- <img src=xss onerror=alert(1)> -->