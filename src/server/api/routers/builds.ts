import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(z.object({ champion: z.string(), build: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.buildOrder.create({
        data: { ...input },
      });
      return build;
    }),

  getAllBuilds: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.buildOrder.findMany();
  }),
});
