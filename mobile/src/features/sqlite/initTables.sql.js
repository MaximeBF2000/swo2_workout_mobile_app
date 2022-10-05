export const initTables = sql => {
  sql(`CREATE TABLE IF NOT EXISTS trainings (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
  )`)

  sql(`CREATE TABLE IF NOT EXISTS sessions (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    trainingId INT FOREIGN KEY REFERENCES trainings(id)
  )`)

  sql(`CREATE TABLE IF NOT EXISTS exerciceCategories (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
  )`)

  sql(`CREATE TABLE IF NOT EXISTS allExercices (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
    categoryId INT FOREIGN KEY REFERENCES exerciceCategories(id)
  )`)

  sql(`CREATE TABLE IF NOT EXISTS exercices (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    sessionId INT FOREIGN KEY REFERENCES sessions(id)
    exerciceId INT FOREIGN KEY REFERENCES allExercices(id)
  )`)

  sql(`CREATE TABLE IF NOT EXISTS series (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    date DATE DEFAULT GETDATE(),
    reps INT DEFAULT 0,
    weight FLOAT(5) DEFAULT 0,
    note LONGTEXT,
    spotted BOOL,
    exerciceId INT FOREIGN KEY REFERENCES exercices(id)
  )`)
}
