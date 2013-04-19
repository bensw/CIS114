
<?php # Script 13.3 - login.php
// Benjamin Swartz
// CIS 114 OL
// login.php
// Chapter 11
// Assignment 6
// 4-19-2013
if ( isset($_POST['email'], $_POST['password']) 
    && ($_POST['email'] == 'test@example.com') 
    && ($_POST['password'] == 'securepass') ) {
		echo 'VALID';
} else {
	echo 'INVALID';
}
?>