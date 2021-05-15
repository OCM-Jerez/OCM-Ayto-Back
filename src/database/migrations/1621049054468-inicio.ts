import {MigrationInterface, QueryRunner} from "typeorm";

export class inicio1621049054468 implements MigrationInterface {
    name = 'inicio1621049054468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `barrio` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `biblioteca` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `comisione` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `contrato_menor` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `delegacione` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `deuda` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `economico` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `codEco` varchar(10) NOT NULL, `descripcionAyto` varchar(255) NULL, `descripcionOCM` varchar(255) NOT NULL, `WebOCM` varchar(255) NULL, `ecoCreatedDate` varchar(4) NULL, `ecoDeletedDate` varchar(4) NULL, `uso` varchar(255) NULL, `observaciones` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `ente` (`ente_id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NOT NULL, `tipo` varchar(45) NOT NULL, `WEB` varchar(255) NOT NULL, `createdBy` varchar(45) NOT NULL, `updatedBy` varchar(45) NOT NULL, `updatedBy1` varchar(45) NOT NULL, `updatedBy2` varchar(45) NOT NULL, `updatedBy3` varchar(45) NOT NULL, `prueba` varchar(45) NOT NULL, PRIMARY KEY (`ente_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `hemeroteca` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `legislacion` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `licitacion` (`ente_id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NOT NULL, `tipo` varchar(45) NOT NULL, `createdBy` varchar(45) NOT NULL, PRIMARY KEY (`ente_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `licitacione` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `year` varchar(4) NULL, `expediente` varchar(12) NOT NULL, `fechaAnuncio` datetime NULL, `fechaPresentacionOfertas` datetime NULL, `organoContratacion` varchar(150) NOT NULL, `licitadoresPresentados` int NULL, `estado` varchar(20) NOT NULL, `objeto` varchar(255) NOT NULL, `presupuestoBase` int NULL, `valorEstimado` int NULL, `importeAdjudicacion` int NULL, `IVA` int NULL, `tipoContrato` varchar(50) NOT NULL, `codigoCPV` int NULL, `procedimientoContratacion` varchar(150) NOT NULL, `resultado` varchar(50) NULL, `URL` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `licitacion-lote` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `numero` int NULL, `descripcion` varchar(255) NOT NULL, `fechaAdjudicacion` datetime NULL, `adjudicatario` varchar(255) NULL, `observaciones` varchar(255) NULL, `licitacioneId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `organico` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `organo_contratacion` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `nombre` varchar(120) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `pmp` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `presupuesto_capitulo` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `presupuesto_modificacion` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `presupuesto` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `programa` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `codPro` varchar(10) NOT NULL, `descripcionAyto` varchar(255) NULL, `descripcionOCM` varchar(255) NOT NULL, `WebOCM` varchar(255) NULL, `proCreatedDate` datetime NULL, `proDeletedDate` datetime NULL, `uso` varchar(255) NULL, `observaciones` varchar(255) NULL, `codOrg` varchar(10) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `subvencione` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tema` (`id` varchar(36) NOT NULL, `createdBy` varchar(36) NULL DEFAULT 'mam', `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastUpdatedBy` varchar(36) NULL DEFAULT 'mam', `lastUpdatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");

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
        await queryRunner.query("DROP TABLE `licitacion-lote`");
        await queryRunner.query("DROP TABLE `licitacione`");
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
