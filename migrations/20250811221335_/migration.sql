-- CreateEnum
CREATE TYPE "LogTypeType" AS ENUM ('HandleOnMcpFileCreatedUpdatedFailed');

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "type" "LogTypeType",
    "error" JSONB DEFAULT '{}',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
