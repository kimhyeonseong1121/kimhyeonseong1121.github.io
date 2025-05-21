<?php
$conn = new mysqli("localhost", "root", "", "ticket_db");
$result = $conn->query("SELECT * FROM tickets ORDER BY order_time DESC");

echo "<h2>전체 주문 내역</h2>";
echo "<table border='1'>";
echo "<tr><th>고객명</th><th>종류</th><th>구분</th><th>수량</th><th>합계</th><th>시간</th></tr>";

while ($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>{$row['customer_name']}</td>
            <td>{$row['type']}</td>
            <td>{$row['category']}</td>
            <td>{$row['quantity']}</td>
            <td>" . number_format($row['total_price']) . "</td>
            <td>{$row['order_time']}</td>
          </tr>";
}
echo "</table>";
?>