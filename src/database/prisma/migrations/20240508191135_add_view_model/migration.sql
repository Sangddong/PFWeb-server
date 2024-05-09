-- CreateTable
CREATE TABLE "View" (
    "id" SERIAL NOT NULL,
    "todayView" INTEGER NOT NULL,
    "totalView" INTEGER NOT NULL,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);
