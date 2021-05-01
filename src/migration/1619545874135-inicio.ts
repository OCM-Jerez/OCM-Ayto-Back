import {MigrationInterface, QueryRunner} from "typeorm";

export class inicio1619545874135 implements MigrationInterface {
    name = 'inicio1619545874135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `createdBy`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `codeHacienda`");
        await queryRunner.query("ALTER TABLE `ente` ADD `codeHacienda` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `createdBy` varchar(45) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `createdBy`");
        await queryRunner.query("ALTER TABLE `ente` DROP COLUMN `codeHacienda`");
        await queryRunner.query("ALTER TABLE `ente` ADD `codeHacienda` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `ente` ADD `createdBy` varchar(45) NOT NULL");
    }

}
