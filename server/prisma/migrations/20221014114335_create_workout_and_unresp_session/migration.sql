/*
  Warnings:

  - You are about to drop the column `description` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `trainingId` on the `Session` table. All the data in the column will be lost.
  - Added the required column `workoutId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_trainingId_fkey";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "trainingId",
ADD COLUMN     "workoutId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "trainingId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
