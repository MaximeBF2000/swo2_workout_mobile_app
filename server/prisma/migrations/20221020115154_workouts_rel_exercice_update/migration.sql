-- CreateTable
CREATE TABLE "_ExerciceToWorkout" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ExerciceToWorkout_AB_unique" ON "_ExerciceToWorkout"("A", "B");

-- CreateIndex
CREATE INDEX "_ExerciceToWorkout_B_index" ON "_ExerciceToWorkout"("B");

-- AddForeignKey
ALTER TABLE "_ExerciceToWorkout" ADD CONSTRAINT "_ExerciceToWorkout_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciceToWorkout" ADD CONSTRAINT "_ExerciceToWorkout_B_fkey" FOREIGN KEY ("B") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
