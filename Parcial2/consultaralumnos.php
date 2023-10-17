<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultar alumnos</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="jquery-3.7.1.js"></script>
</head>
<body>
    <?php
    include 'menu.php';
    include 'conexion.php';

    $sql = "SELECT = FROM alumnos";
    $datos = $conexion =query($sql);

    ?>

    <div class="contariner">
        <div class="row">
            <div class="col-12">
                <?php if(datos->num_row>0){ ?>
                    <table class="table table-hover">
                    <thead>
                        <tr>
                            <tr>ID</tr>
                            <tr>Nombre</tr>
                            <tr>Numero de control</tr>
                            <tr>Semestres</tr>
                            <tr>Edad</tr>
                            <tr>Turno</tr>
                            <tr>Sexo</tr>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    </table>
                <?php } else { ?>
                        <h2>No existe datos de alumnos en la base de datos</h2>
                    <?php} ?>
                
            </div>
        </div>
    </div>
    
</body>
</html>