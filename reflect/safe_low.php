<?php
    $test = $_SERVER['QUERY_STRING'];
    if ($test != NULL){
        parse_str($test, $params);
        $params_change = str_replace('<script>','',$params['t']);
        echo ' Hi '.$params_change;
    }
    else{
        echo 'Nothing here';
    }
?>
<!-- 可用大寫或雙標籤繞過 -->