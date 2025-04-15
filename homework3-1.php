<?php
$n = 30;
$sum = 0;
$prod = 1;

echo "1부터 $n까지의 숫자를 출력하고 전체 합과 곱을 구합니다.<br>";
for ($i = 1; $i <= $n; $i++) {
    echo "$i ";
    $sum += $i;
    $prod *= $i;
}
echo "<br>합: $sum<br>";
echo "곱: $prod<br>";
?>