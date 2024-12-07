/*
  Warnings:

  - A unique constraint covering the columns `[slot]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slot` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reservation` ADD COLUMN `slot` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Reservation_slot_key` ON `Reservation`(`slot`);
