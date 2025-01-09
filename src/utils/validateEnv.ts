import { z } from "zod";

function validateEnv(): void {
  const zodObject = z.object({
    PORT: z.preprocess((a) => parseInt(a as string, 10), z.number().positive().max(9999)),
    DB_HOST: z.string(),
    DB_PORT: z.preprocess((a) => parseInt(a as string, 10), z.number().positive().max(9999)),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    JWT_REFERSH_SECRET: z.string(),
    JWT_REFRESH_ACCESS: z.string(),
  });
  const parsed = zodObject.safeParse(process.env);

  if (!parsed.success) {
    console.error("❌ Invalid environment variables:", JSON.stringify(parsed.error.format(), null, 4));
    process.exit(1);
  }

  console.log("[CL] Successfully parsed env file");
}

export default validateEnv;
