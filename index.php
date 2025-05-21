<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>티켓 주문</title>
</head>
<body>
    <form method="post" action="submit.php">
        고객성명: <input type="text" name="customer"><br><br>
        <table border="1">
            <tr>
                <th>No</th><th>구분</th><th>어린이</th><th>어른</th><th>비고</th>
            </tr>
            <?php
            $tickets = [
                ["입장권", 7000, 10000, "입장"],
                ["BIG3", 12000, 16000, "입장+놀이3종"],
                ["자유이용권", 21000, 26000, "입장+놀이자유"],
                ["연간이용권", 70000, 90000, "입장+놀이자유"]
            ];

            foreach ($tickets as $i => $ticket) {
                echo "<tr>";
                echo "<td>" . ($i+1) . "</td>";
                echo "<td>{$ticket[0]}</td>";
                echo "<td>{$ticket[1]} <select name='child_qty[]'>";
                for ($j = 0; $j <= 10; $j++) echo "<option>$j</option>";
                echo "</select></td>";

                echo "<td>{$ticket[2]} <select name='adult_qty[]'>";
                for ($j = 0; $j <= 10; $j++) echo "<option>$j</option>";
                echo "</select></td>";

                echo "<td>{$ticket[3]}</td>";
                echo "</tr>";
            }
            ?>
        </table><br>
        <input type="submit" value="합계 계산 및 저장">
    </form>
</body>
</html>