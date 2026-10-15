import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';

export const { ObserveModule } = createObserveModule();

@Module({
  imports: [CatModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
