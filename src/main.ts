import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { checkEngines } from "@/utils/check-engines.util";

async function bootstrap() {
  checkEngines();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((e) => console.error(e));
