<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "ticket_db";
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) die("DB 연결 실패: " . $conn->connect_error);

$customer = $_POST['customer'];
$child_qtys = $_POST['child_qty'];
$adult_qtys = $_POST['adult_qty'];

$tickets = [
    ["입장권", 7000, 10000],
    ["BIG3", 12000, 16000],
    ["자유이용권", 21000, 26000],
    ["연간이용권", 70000, 90000]
];

$total_sum = 0;

foreach ($tickets as $i => $ticket) {
    $child_qty = (int)$child_qtys[$i];
    $adult_qty = (int)$adult_qtys[$i];

    if ($child_qty > 0) {
        $child_total = $ticket[1] * $child_qty;
        $conn->query("INSERT INTO tickets (customer_name, type, category, quantity, total_price) 
                      VALUES ('$customer', '{$ticket[0]}', '어린이', $child_qty, $child_total)");
        $total_sum += $child_total;
    }
    if ($adult_qty > 0) {
        $adult_total = $ticket[2] * $adult_qty;
        $conn->query("INSERT INTO tickets (customer_name, type, category, quantity, total_price) 
                      VALUES ('$customer', '{$ticket[0]}', '어른', $adult_qty, $adult_total)");
        $total_sum += $adult_total;
    }
}

echo "<h3>{$customer} 고객님 감사합니다.</h3>";
echo "<p>총합: " . number_format($total_sum) . "원입니다.</p>";
echo "<a href='list.php'>전체 주문 보기</a>";
?>