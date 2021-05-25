/*
https://docs.nestjs.com/middleware
hay que configurar el export de app.module
*/

import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    Logger.debug(
      `AppMiddleware dice: ${req.originalUrl}`,
      'AppMiddleware',
      false,
    );
    next();
  }
}
