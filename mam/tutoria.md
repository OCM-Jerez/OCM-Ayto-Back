# 1.- ¿Donde guarda los archivos en local?

docker volume inspect ocm-ayto-back_dbdata
[
    {
        "CreatedAt": "2021-11-28T11:48:17Z",
        "Driver": "local",
        "Labels": {
            "com.docker.compose.project": "ocm-ayto-back",
            "com.docker.compose.version": "1.29.2",
            "com.docker.compose.volume": "dbdata"
        },
        "Mountpoint": "/var/lib/docker/volumes/ocm-ayto-back_dbdata/_data",
        "Name": "ocm-ayto-back_dbdata",
        "Options": null,
        "Scope": "local"
    }
]








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
