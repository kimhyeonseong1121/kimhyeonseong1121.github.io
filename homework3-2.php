<?php
$n = 30;
$data = array();

for ($i = 0; $i < $n; $i++) {
    $data[$i] = rand(1, 100);
}

echo "생성된 랜덤 숫자들:<br>";
print_r($data);

sort($data);

echo "<br><br>오름차순으로 정렬된 숫자들:<br>";
print_r($data);
?>