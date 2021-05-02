import {MigrationInterface, QueryRunner} from "typeorm";

export class inicio1619947189685 implements MigrationInterface {
    name = 'inicio1619947189685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `ente` (`ente_id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NOT NULL, `tipo` varchar(45) NOT NULL, `WEB` varchar(255) NOT NULL, `createdBy` varchar(45) NOT NULL, `updatedBy` varchar(45) NOT NULL, `updatedBy1` varchar(45) NOT NULL, `updatedBy2` varchar(45) NOT NULL, `updatedBy3` varchar(45) NOT NULL, `prueba` varchar(45) NOT NULL, PRIMARY KEY (`ente_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `licitacion` (`ente_id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NOT NULL, `tipo` varchar(45) NOT NULL, `createdBy` varchar(45) NOT NULL, PRIMARY KEY (`ente_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `programa` (`id` varchar(36) NOT NULL, `createdBy` varchar(255) NULL, `createdDate` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `lastModifiedBy` varchar(255) NULL, `lastModifiedDate` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `codPro` varchar(10) NOT NULL, `descripcionAyto` varchar(255) NULL, `descripcionOCM` varchar(255) NOT NULL, `WebOCM` varchar(255) NULL, `Created` varchar(4) NULL, `Deleted` varchar(4) NULL, `uso` varchar(255) NULL, `observaciones` varchar(255) NULL, `codOrg` varchar(10) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `programa`");
        await queryRunner.query("DROP TABLE `licitacion`");
        await queryRunner.query("DROP TABLE `ente`");
    }

}
