/*
  Warnings:

  - You are about to drop the column `date` on the `Serie` table. All the data in the column will be lost.
  - Added the required column `description` to the `Exercice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercice" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Serie" DROP COLUMN "date",
ALTER COLUMN "spoted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "description" TEXT NOT NULL;
