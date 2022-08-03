import { MigrationInterface, QueryRunner } from "typeorm";

export class colors1659492408247 implements MigrationInterface {
    name = 'colors1659492408247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`colors\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`hex_value\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products_colors_colors\` (\`products_id\` int NOT NULL, \`colors_id\` int NOT NULL, INDEX \`IDX_4306d07af9f5e8ad9dc65bd97d\` (\`products_id\`), INDEX \`IDX_ef4ed7d60424f96d3732237a20\` (\`colors_id\`), PRIMARY KEY (\`products_id\`, \`colors_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`products_colors_colors\` ADD CONSTRAINT \`FK_4306d07af9f5e8ad9dc65bd97dd\` FOREIGN KEY (\`products_id\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_colors_colors\` ADD CONSTRAINT \`FK_ef4ed7d60424f96d3732237a20f\` FOREIGN KEY (\`colors_id\`) REFERENCES \`colors\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products_colors_colors\` DROP FOREIGN KEY \`FK_ef4ed7d60424f96d3732237a20f\``);
        await queryRunner.query(`ALTER TABLE \`products_colors_colors\` DROP FOREIGN KEY \`FK_4306d07af9f5e8ad9dc65bd97dd\``);
        await queryRunner.query(`DROP INDEX \`IDX_ef4ed7d60424f96d3732237a20\` ON \`products_colors_colors\``);
        await queryRunner.query(`DROP INDEX \`IDX_4306d07af9f5e8ad9dc65bd97d\` ON \`products_colors_colors\``);
        await queryRunner.query(`DROP TABLE \`products_colors_colors\``);
        await queryRunner.query(`DROP TABLE \`colors\``);
    }

}
