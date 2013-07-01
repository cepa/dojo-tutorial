<?php
if ($_POST['username'] == 'admin' && $_POST['password'] == 'secret') {
    echo json_encode(array(
        'status'  => 'success',
        'message' => 'Logged in'
    ));
    
} else {
    echo json_encode(array(
        'status'  => 'failure',
        'message' => 'Invalid login or password'
    ));
}
