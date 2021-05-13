USE ocm_lici;
DROP TABLE `ente`;

CREATE TABLE `ente` (
  `ente_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `codeHacienda` varchar(45) NOT NULL,
  `createdBy` varchar(45) NOT NULL DEFAULT 'prueba',
  PRIMARY KEY (`ente_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;