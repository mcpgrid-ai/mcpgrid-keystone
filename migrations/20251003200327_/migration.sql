-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "identityId" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_identityId_key" ON "User"("identityId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");