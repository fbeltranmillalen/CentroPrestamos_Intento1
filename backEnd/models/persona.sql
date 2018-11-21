CREATE TABLE `centroprestamos_dev`.`persona` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `rut` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NULL,
  `castigado` TINYINT NULL,
  `id_carrera` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`));

insert into persona (rut, nombre, apellido, castigado, id_carrera) 
values ('17991048-9', 'Francisco Jose', 'Beltran Millalen', 0, 1);