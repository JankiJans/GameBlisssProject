/*
  Warnings:

  - Added the required column `quantity` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `quantity` INTEGER NOT NULL;
