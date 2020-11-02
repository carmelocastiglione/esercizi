<?php
$people = array(
  array(
    "name" => "Fabio Cortinovis",
    "birthdate" => "1993",
    "job" => "Sviluppatore"
  ),
  array(
    "name" => "Pippo Pluto",
    "birthdate" => "1980",
    "job" => "Comico"
  ),
  array(
    "name" => "Paolo Bitta",
    "birthdate" => "1965",
    "job" => "Addetto vendite"
  )
);
foreach ($people as $person) {
	echo $person["name"] . " " . $person["job"] . "<br>";
}
?>