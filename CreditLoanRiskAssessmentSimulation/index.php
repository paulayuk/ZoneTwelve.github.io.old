<?php
$d = dir(getcwd());

echo "Handle: " . $d->handle . "<br>";
echo "Path: " . $d->path . "<br>";
while (($file = $d->read()) !== false){
	if($file!=basename(__FILE__)){
		echo "<a href='./$file'>$file </a><br>";
	}
}
$d->close();
echo "<h1><a href='index.html'>產生資料</a>｜<a href='analysis.html'>判斷模擬資料</a></h1>";
?>