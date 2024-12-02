import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToysModule } from './toys/toys.module';

@Module({
  imports: [ToysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
