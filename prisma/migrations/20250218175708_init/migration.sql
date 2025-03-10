-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Nota" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "useDate" DATETIME,
    "location" TEXT,
    "checked" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Nota" ("checked", "createdAt", "description", "id", "location", "title", "useDate") SELECT "checked", "createdAt", "description", "id", "location", "title", "useDate" FROM "Nota";
DROP TABLE "Nota";
ALTER TABLE "new_Nota" RENAME TO "Nota";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
