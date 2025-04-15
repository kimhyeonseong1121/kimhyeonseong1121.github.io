<?php
// 삼각형
$width = 10;
$height = 5;
$triangle_area = ($width * $height) / 2;
echo "삼각형 넓이: $triangle_area<br>";

// 직사각형
$width = 10;
$height = 5;
$rect_area = $width * $height;
echo "직사각형 넓이: $rect_area<br>";

// 원
$radius = 7;
$circle_area = pi() * pow($radius, 2);
echo "원의 넓이: $circle_area<br>";

// 직육면체
$width = 5;
$length = 10;
$height = 4;
$cuboid_vol = $width * $length * $height;
echo "직육면체 부피: $cuboid_vol<br>";

// 원기둥
$radius = 3;
$height = 10;
$cylinder_vol = pi() * pow($radius, 2) * $height;
echo "원기둥 부피: $cylinder_vol<br>";

// 원뿔
$cone_vol = (pi() * pow($radius, 2) * $height) / 3;
echo "원뿔 부피: $cone_vol<br>";

// 구
$sphere_vol = (4/3) * pi() * pow($radius, 3);
echo "구의 부피: $sphere_vol<br>";
?>