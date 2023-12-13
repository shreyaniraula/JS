<?php

// $fruits = ["Apple", "Banana", "Watermelon", "Papaya", "Kiwi"];
// $fruits_string = implode('&nbsp', $fruits);
// echo $fruits_string;

// $fruits_string = "Apple, Banana, Watermelon, Papaya, Kiwi";
// $fruits_array = explode(', ', $fruits_string);
// print_r($fruits_array);

// $fruits = ["Banana", "Watermelon", "Papaya", "Kiwi", "Apple"];
// print("Before Sorting:<br>");
// print_r($fruits);
// print("<br>");

// sort($fruits);
// print("After Sorting:<br>");
// print_r($fruits);

$associative_array = [
    "Laila" => "Majnu",
    "Heer" => "Ranjha",
    "Romeo" => "Juliet",
    "Salim" => "Anarkali"
];

print("Before Sorting:<br>");
print_r($associative_array);
print("<br>");

// asort($associative_array);   //sorting on the basis of value
// arsort($associative_array);   //descending sorting on the basis of value
// ksort($associative_array);   //sorting on the basis of key
krsort($associative_array);   //descending sorting on the basis of key

print("After Sorting:<br>");
print_r($associative_array);
?>