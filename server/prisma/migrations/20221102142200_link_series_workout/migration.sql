/*
  Warnings:

  - Added the required column `workoutId` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Serie" ADD COLUMN     "workoutId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
