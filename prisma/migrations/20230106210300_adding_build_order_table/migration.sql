-- CreateTable
CREATE TABLE "BuildOrder" (
    "id" TEXT NOT NULL,
    "champion" TEXT NOT NULL,
    "build" TEXT NOT NULL,

    CONSTRAINT "BuildOrder_pkey" PRIMARY KEY ("id")
);
