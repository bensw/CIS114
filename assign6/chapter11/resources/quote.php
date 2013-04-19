
<?php # Script 13.3 - quote.php
// Benjamin Swartz
// CIS 114 OL
// quote.php
// Chapter 11
// Assignment 6
// 4-19-2013
// Set the content type:
header('Content-Type: application/json');

// Setup cURL:
$curl = curl_init('http://www.google.com/finance/info?infotype=infoquoteall&q=AAPL');

// Want to assign the results to a variable:
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);

// Close it:
curl_close($curl);

// Cut off the first three characters:
print substr($result,3);
?>