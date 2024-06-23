import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from 'nestjs-pino'

const PORT = 4000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true })
  app.useLogger(app.get(Logger))
  await app.listen(PORT)
  console.log(`Application is running on: http://localhost:${PORT}`)
}
bootstrap()
