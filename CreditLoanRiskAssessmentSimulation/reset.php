<?php
$now = strtotime('now');
$one = strtotime('-1 week');
$_four = strtotime('-6 week');
$datetime=date('Y/m/d h:i:s');
$data = [];
$data[0]=['id'=>'1','year'=>'28','in'=>'24797','have'=>'1297','_out'=>'24597'];
$data = json_encode($data);
file_put_contents('./database.json',$data);
?>