/*
  Warnings:

  - A unique constraint covering the columns `[managerId]` on the table `Workshop` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Attendee` ADD COLUMN `phoneNumber` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Workshop_managerId_key` ON `Workshop`(`managerId`);
