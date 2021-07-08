.- diferencias entre GlobalExceptionFilter y HttpExceptionFilter
.- Declarar en main.ts o en module?
  @Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})

.- en programas.service.ts
   ¿Deberia tipar todas las respuestas de los metods?
