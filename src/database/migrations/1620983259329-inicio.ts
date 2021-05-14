import {MigrationInterface, QueryRunner} from "typeorm";

export class inicio1620983259329 implements MigrationInterface {
    name = 'inicio1620983259329'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query("ALTER TABLE `licitacion-lote` ADD CONSTRAINT `FK_6cf772860b599e5c7faa6da58c1` FOREIGN KEY (`licitacioneId`) REFERENCES `licitacione`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `licitacion-lote` DROP FOREIGN KEY `FK_6cf772860b599e5c7faa6da58c1`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `createdBy`");
        await queryRunner.query("ALTER TABLE `ente` ADD `createdBy` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `lastUpdatedDate`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `lastUpdatedBy`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `createdDate`");
        await queryRunner.query("ALTER TABLE `ente` CHANGE `id` `ente_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `ente` ADD PRIMARY KEY (`ente_id`)");
        await queryRunner.query("ALTER TABLE `ente` CHANGE `ente_id` `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `ente_id`");
        await queryRunner.query("ALTER TABLE `ente` ADD `ente_id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `ente` ADD PRIMARY KEY (`ente_id`)");
        await queryRunner.query("ALTER TABLE `ente` CHANGE `ente_id` `ente_id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("DROP TABLE `tema`");
        await queryRunner.query("DROP TABLE `subvencione`");
        await queryRunner.query("DROP TABLE `programa`");
        await queryRunner.query("DROP TABLE `presupuesto`");
        await queryRunner.query("DROP TABLE `presupuesto_modificacion`");
        await queryRunner.query("DROP TABLE `presupuesto_capitulo`");
        await queryRunner.query("DROP TABLE `pmp`");
        await queryRunner.query("DROP TABLE `organo_contratacion`");
        await queryRunner.query("DROP TABLE `organico`");
        await queryRunner.query("DROP TABLE `licitacione`");
        await queryRunner.query("DROP TABLE `licitacion-lote`");
        await queryRunner.query("DROP TABLE `licitacion`");
        await queryRunner.query("DROP TABLE `legislacion`");
        await queryRunner.query("DROP TABLE `hemeroteca`");
        await queryRunner.query("DROP TABLE `ente`");
        await queryRunner.query("DROP TABLE `economico`");
        await queryRunner.query("DROP TABLE `deuda`");
        await queryRunner.query("DROP TABLE `delegacione`");
        await queryRunner.query("DROP TABLE `contrato_menor`");
        await queryRunner.query("DROP TABLE `comisione`");
        await queryRunner.query("DROP TABLE `biblioteca`");
        await queryRunner.query("DROP TABLE `barrio`");
    }

}
