-- CreateTable
CREATE TABLE "Config" (
    "id" INTEGER NOT NULL,
    "releaseDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("id")
);
