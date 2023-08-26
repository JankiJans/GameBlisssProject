/*
  Warnings:

  - You are about to drop the column `secondImage` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `thirdImage` on the `images` table. All the data in the column will be lost.
  - You are about to drop the `requirement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `requirement` DROP FOREIGN KEY `Requirement_productId_fkey`;

-- AlterTable
ALTER TABLE `images` DROP COLUMN `secondImage`,
    DROP COLUMN `thirdImage`;

-- DropTable
DROP TABLE `requirement`;

-- CreateTable
CREATE TABLE `Requirements` (
    `id` VARCHAR(191) NOT NULL,
    `system` VARCHAR(191) NOT NULL,
    `processor` VARCHAR(191) NOT NULL,
    `graphics` VARCHAR(191) NOT NULL,
    `memory` VARCHAR(191) NOT NULL,
    `space` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Requirements` ADD CONSTRAINT `Requirements_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
