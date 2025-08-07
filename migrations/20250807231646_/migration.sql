-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "isOfficial" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL DEFAULT '',
    "overview" TEXT NOT NULL DEFAULT '',
    "icon" JSONB,
    "category" TEXT,
    "homepage" TEXT NOT NULL DEFAULT '',
    "githubUrl" TEXT NOT NULL DEFAULT '',
    "githubOwner" TEXT NOT NULL DEFAULT '',
    "githubLicense" TEXT NOT NULL DEFAULT '',
    "githubLanguage" TEXT NOT NULL DEFAULT '',
    "githubPublishedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "tools" JSONB DEFAULT '{}',
    "settings" JSONB DEFAULT '{}',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServerCategory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "icon" JSONB,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServerCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Server_slug_key" ON "Server"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Server_githubUrl_key" ON "Server"("githubUrl");

-- CreateIndex
CREATE INDEX "Server_category_idx" ON "Server"("category");

-- CreateIndex
CREATE UNIQUE INDEX "ServerCategory_title_key" ON "ServerCategory"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ServerCategory_slug_key" ON "ServerCategory"("slug");

-- AddForeignKey
ALTER TABLE "Server" ADD CONSTRAINT "Server_category_fkey" FOREIGN KEY ("category") REFERENCES "ServerCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
