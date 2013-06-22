<?php
header("Content-Type: application/json");

if ($_GET['value'] == 'admin') {
    echo "false";
} else {
    echo "true";
}
