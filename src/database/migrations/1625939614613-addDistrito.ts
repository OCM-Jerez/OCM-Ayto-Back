import { MigrationInterface, QueryRunner } from "typeorm";

export class addDistrito1625939614613 implements MigrationInterface {
    name = 'addDistrito1625939614613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `distrito` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `nombre` varchar(255) NULL, `WebOCM` varchar(255) NULL, `observacion` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `ecoIngreso`");
        await queryRunner.query("DROP TABLE `distrito`");
        await queryRunner.query("DROP TABLE `capituloIngreso`");
        await queryRunner.query("DROP TABLE `capituloGasto`");
    }

}
