import {MigrationInterface, QueryRunner} from "typeorm";

export class delegacion1625899494127 implements MigrationInterface {
    name = 'delegacion1625899494127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `capituloGasto` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `codCap` varchar(10) NOT NULL, `descripcionAyto` varchar(255) NULL, `descripcionOCM` varchar(255) NOT NULL, `WebOCM` varchar(255) NULL, `capCreatedDate` varchar(4) NULL, `capDeletedDate` varchar(4) NULL, `uso` varchar(255) NULL, `observaciones` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `capituloIngreso` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `codCap` varchar(10) NOT NULL, `descripcionAyto` varchar(255) NULL, `descripcionOCM` varchar(255) NOT NULL, `WebOCM` varchar(255) NULL, `capCreatedDate` varchar(4) NULL, `capDeletedDate` varchar(4) NULL, `uso` varchar(255) NULL, `observaciones` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `delegacion` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `nombre` varchar(255) NULL, `mandato` varchar(50) NULL, `WebOCM` varchar(255) NULL, `observacion` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `ecoIngreso` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `codEco` varchar(10) NOT NULL, `descripcionAyto` varchar(255) NULL, `descripcionOCM` varchar(255) NOT NULL, `WebOCM` varchar(255) NULL, `ecoCreatedDate` varchar(4) NULL, `ecoDeletedDate` varchar(4) NULL, `uso` varchar(255) NULL, `observaciones` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `ecoIngreso`");
        await queryRunner.query("DROP TABLE `delegacion`");
        await queryRunner.query("DROP TABLE `capituloIngreso`");
        await queryRunner.query("DROP TABLE `capituloGasto`");
    }

}
