-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Sample";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "sample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
