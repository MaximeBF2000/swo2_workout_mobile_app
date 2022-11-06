/*
  Warnings:

  - You are about to drop the column `sessionId` on the `Serie` table. All the data in the column will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExerciceToSession` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `description` on table `Exercice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Training` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Workout` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Serie" DROP CONSTRAINT "Serie_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_workoutId_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciceToSession" DROP CONSTRAINT "_ExerciceToSession_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciceToSession" DROP CONSTRAINT "_ExerciceToSession_B_fkey";

-- AlterTable
ALTER TABLE "Exercice" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Serie" DROP COLUMN "sessionId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "reps" SET DEFAULT 0,
ALTER COLUMN "weight" SET DEFAULT 0,
ALTER COLUMN "note" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Training" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Workout" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "_ExerciceToSession";
