<?php
    include 'conexion.php';

    $id = $_GET('id');

    $sql = "DELETE FROM alumnos WHERE id = ".$id;

    if($conexion->query($sql) === TRUE){
        header("Location: consultaralumnos.php")
        $conexion->close();
        exit;
    }else{
        echo "<h2>Ocurrio un error</h2> <p>Error: ".$sql . "<br>" . $conexion->error . "</p>";
        echo "<h3><a href='consultaralumnos.php'>Regresar a alumnos</a></h3>";
        $conexion->close();
    }