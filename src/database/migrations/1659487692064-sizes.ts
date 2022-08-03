import { MigrationInterface, QueryRunner } from "typeorm";

export class sizes1659487692064 implements MigrationInterface {
    name = 'sizes1659487692064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`sizes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products_sizes_sizes\` (\`products_id\` int NOT NULL, \`sizes_id\` int NOT NULL, INDEX \`IDX_68fd0ccb95e9ef81fb2b806fd4\` (\`products_id\`), INDEX \`IDX_3302555fab82ccb6b4cbb7c58f\` (\`sizes_id\`), PRIMARY KEY (\`products_id\`, \`sizes_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`products_sizes_sizes\` ADD CONSTRAINT \`FK_68fd0ccb95e9ef81fb2b806fd43\` FOREIGN KEY (\`products_id\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_sizes_sizes\` ADD CONSTRAINT \`FK_3302555fab82ccb6b4cbb7c58fc\` FOREIGN KEY (\`sizes_id\`) REFERENCES \`sizes\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products_sizes_sizes\` DROP FOREIGN KEY \`FK_3302555fab82ccb6b4cbb7c58fc\``);
        await queryRunner.query(`ALTER TABLE \`products_sizes_sizes\` DROP FOREIGN KEY \`FK_68fd0ccb95e9ef81fb2b806fd43\``);
        await queryRunner.query(`DROP INDEX \`IDX_3302555fab82ccb6b4cbb7c58f\` ON \`products_sizes_sizes\``);
        await queryRunner.query(`DROP INDEX \`IDX_68fd0ccb95e9ef81fb2b806fd4\` ON \`products_sizes_sizes\``);
        await queryRunner.query(`DROP TABLE \`products_sizes_sizes\``);
        await queryRunner.query(`DROP TABLE \`sizes\``);
    }

}
