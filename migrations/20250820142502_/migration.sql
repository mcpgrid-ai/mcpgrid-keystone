-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "seoDescription" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seoIcon" JSONB,
ADD COLUMN     "seoKeywords" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seoTitle" TEXT NOT NULL DEFAULT '';
