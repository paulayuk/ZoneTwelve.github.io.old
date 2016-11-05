<style type="text/css">
table,td{
    border-width:2px;	
    border-style:ridge;
}
</style>
<?php
$baseline=$_POST['baseline'];
$maxData=(int)$_POST['max'];
$link = $_POST['link'].'.json';

$i=0;
$dataFile = $link;
$json = file_get_contents($dataFile);
$obj=json_decode($json);
echo "產生模擬貸款資料URI：<b>$link </b>";
echo "<p>前五筆超過瘋顯門檻值之貸款資料：</p>";
echo '<table>';
echo '<table><tr><td>編號</td><td>年齡</td><td>收入</td><td>資產</td><td>負債</td><td>貸款金額</td></tr>';
foreach($obj as $data){
	$age = (int)$data->age;
	$income = (int)$data->income;
	$assets = (int)$data->assets;
	$liabilities = (int)$data->liabilities;
	$loan = (int)$data->loan;
	//$danger=(50*$age)/75;
	$danger = (50*(int)$age)/75-(50*(int)$income)/8000-(60*((int)$assets-(int)$liabilities))/60000+(40*(int)$loan)/50000;
	if(floor($danger)>=$baseline&&$maxData>$i){
		echo '<tr>';
		echo "<td>$data->id </td>";
		echo "<td>$data->age </td>";
		echo "<td>$data->income </td>";
		echo "<td>$data->assets </td>";
		echo "<td>$data->liabilities </td>";
		echo "<td>$data->loan </td>";
		echo '</tr>';
		//echo floor($danger).'<br/>';		
		$i++;
	}
}
echo '</table>';
?>