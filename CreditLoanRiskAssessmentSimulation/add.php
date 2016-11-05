<style type="text/css">
table,td{
    border-width:2px;	
    border-style:ridge;
}
</style>
<?php
$fileName='/data/'.$_POST['fileName'];
$show=(int)$_POST['show'];
$N=(int)$_POST['N'];
echo '產生模擬貸款資料 URI：.<b>'.$fileName.'</b>';
echo '<table><tr><td>編號</td><td>年齡</td><td>收入</td><td>資產</td><td>負債</td><td>貸款金額</td></tr>';
for($i=1;$i<=$show;$i++){
	$age = 25+(($i+47*$i)%45);
	$income = 15000+((9797*$i)%65000);
	$assets = 500+((797*$i*$i)%950000);
	$liabilities = 2000+((97*$i*$i*$i+97*$i*$i)%950000);
	$loan = 4500+((20000+97*$i*$i)%35000);
	echo '<tr>';  
	echo '<td>'.$i.'</td>';
	echo '<td>'.$age.'</td>';
	echo '<td>'.$income.'</td>';
	echo '<td>'.$assets.'</td>';
	echo '<td>'.$liabilities.'</td>';
	echo '<td>'.$loan.'</td>';
	echo '</tr>';
}
echo '</table>';
$database=[];
for($i=1;$i<=$N;$i++){
	$age = 25+(($i+47*$i)%45);
	$income = 15000+((9797*$i)%65000);
	$assets = 500+((797*$i*$i)%950000);
	$liabilities = 2000+((97*$i*$i*$i+97*$i*$i)%950000);
	$loan = 4500+((20000+97*$i*$i)%35000);
	$database[]=implode(',',["$i","$age","$income","$assets","$liabilities","$loan"]);
	//echo implode(",",$database);
//array_push($database,"$age","$income","$assets","$liabilities","$loan");
}
$JSON_Database=[];
for($i=1;$i<=$N;$i++){
	$age = 25+(($i+47*$i)%45);
	$income = 15000+((9797*$i)%65000);
	$assets = 500+((797*$i*$i)%950000);
	$liabilities = 2000+((97*$i*$i*$i+97*$i*$i)%950000);
	$loan = 4500+((20000+97*$i*$i)%35000);
	array_push($JSON_Database,['id'=>"$i",'age'=>"$age",'income'=>"$income",'assets'=>"$assets",'liabilities'=>"$liabilities",'loan'=>"$loan"]);
}
//print_r($JSON_Database);
$showDatabase=[];
for($i=1;$i<=$show;$i++){
	$age = 25+(($i+47*$i)%45);
	$income = 15000+((9797*$i)%65000);
	$assets = 500+((797*$i*$i)%950000);
	$liabilities = 2000+((97*$i*$i*$i+97*$i*$i)%950000);
	$loan = 4500+((20000+97*$i*$i)%35000);
	$showDatabase[]=implode(',',["$i","$age","$income","$assets","$liabilities","$loan"]);
}
echo '<br/>產生模擬貸款資料 URI：.<b>'.$fileName.'</b>';
echo '<p>資料前五筆</p>';
print(implode("<br/>",$showDatabase));

$database=implode("\r\n",$database);
//print_r($database);
//echo implode(",",$database);
$fileName='./'.$fileName;
file_put_contents($fileName,$database);
$fileName=$fileName.'.json';
file_put_contents($fileName,json_encode($JSON_Database));

?>