import { MigrationInterface, QueryRunner } from "typeorm";

export class addEnte1625985735954 implements MigrationInterface {
    name = 'addEnte1625985735954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `ente` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `nombre` varchar(255) NULL, `CIF` varchar(255) NULL, `WebOCM` varchar(255) NULL, `observacion` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `CIF`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `WebOCM`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `observacion`");
        await queryRunner.query("ALTER TABLE `ente` ADD `CIF` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `WebOCM` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `observacion` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `tipo` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `WEB` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `updatedBy` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `updatedBy1` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `updatedBy2` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `updatedBy3` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `prueba` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `nombre`");
        await queryRunner.query("ALTER TABLE `ente` ADD `nombre` varchar(45) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `nombre`");
        await queryRunner.query("ALTER TABLE `ente` ADD `nombre` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `prueba`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `updatedBy3`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `updatedBy2`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `updatedBy1`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `updatedBy`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `WEB`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `tipo`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `observacion`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `WebOCM`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `CIF`");
        await queryRunner.query("ALTER TABLE `ente` ADD `observacion` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `WebOCM` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `CIF` varchar(255) NULL");
        await queryRunner.query("DROP TABLE `ente`");
    }

}
