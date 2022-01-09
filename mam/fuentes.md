1.- Me baso en:
https://github.com/ruslanguns/nestjs-myblog


2.- En lugar de usar la estructura de OCM-soli-back que usar carpetas por funcionalidades ( module, service, repository....) uso una estructura por componentes, tal como recomienda la documentación https://docs.nestjs.com/modules.


CRUD + TypeOrm + MySQL
https://www.youtube.com/watch?v=eL2tO9xPZLM&t=3039s
0:14 instal CLI
0:17 nest new
0:19 main.ts
0:20 package.json
0:27 logger
0:28 module
0:35 controller
0:46 @Body()
0:48 DTO
1:00 npm i class-validator class-transformer
1:04 Crear DTO 
1:05 Crea enum 
1:09 ValidationPipe 
1:27 ParseInPipe 
1:28 Put() 
1:30 Extend desde otra clase 
1:37 Compartir Interfaces entre back y front. 
1:40 OmitType. Omitir campos del DTO del que se extend.
1:43 Trabajar con Enum 
1:49 Injection de dependencias 
1:53 Crear service 
2:00 Usar TypeORM 
2:07 Monta mySQL desde Docker 
2:08 Añade TypeORM al module 
2:09 Crea entity 
2:12 Autogenerar fecha CreateDateColumn
2:14 Completa service
2:16 Promise y async-await
2:17 Para retornar un object que permite incluir un message
2:20 Retorna un error si no encuenta un registro
2:23 Antes de editar un registro lo busca para dar error si no lo encuentra.
2:24 Usa Object.assign para combinar los cambios en PUT.
2:26 Delete
2:27 Usa swagger 


CRUD Login JWT - Part 1
https://www.youtube.com/watch?v=lTmGLgtgjdM&t
0:30 clonar repositorio.
0:35 Instalar bcryptjs y @types/bcryptjs
0:37 Crea user => controller, module y service, uno por uno.
0:38 Crea class user con sus DTO
0:30 Crea user.entity. Crean index.ts aunque solo esxite un fichero en la carpeta.
0:42 Completa user.entity.ts
0:50 type: 'timestamp' para generar fecha en capos Date.
0:51 Metodo hashPassword() para encriptar password.
0:52 Completa user.service.ts
1:00 Completa user.controller.ts
1:03 Agrega en user.module.ts imports: [TypeOrmModule.forFeature([UserRepository])]
1:18 Evitar usuarios con el mismo email
1:20 Evitar mostrar password en la respuesta
1:23 editOne()
1:30 Aunthentication
1:33 Configuration


CRUD Login JWT - Part 2
https://www.youtube.com/watch?v=kjr54SpV_eQ
0:06 Clonar repositorio con el estado anterior.
0:10 Repaso sesiones anteriores.
0:19 Crea auth => controller, module y service, uno por uno.
0:24 Instala @nestjs/passport, passport, passport-local y @type/passport-local
0:26 En auth.module.ts importa  imports: [PassportModul]
0:27 Estrategias de authentication
0:28 Crea carpeta auth/strategies
0:30 Configura localstrategie.ts
0:32 Configura auth.service.ts
0:34 crea findOne en userService.ts
0:40 createQueryBuilder en userService.ts
0:46 AuthGuard
0:50 Comienza promoción curso @Anartz Mugika Ledo
1:11 Termina promoción curso @Anartz Mugika Ledo
1:12 Crea interface UserFindOne en user.service.ts
1:18 El sitema de login funciona con el password encriptado.
1:18 crea user.decorator.ts
1:19 Crea carpeta Common
1:20 Crea user.decorator.ts
1:21 Usa @User()
1:24 Comienza a implementar JWT
1:25 npm i -D @types/passport-jwt
1:25 Añade JWT a auth.module.ts
1:27 Uso variables de entorno
1:30 Crea login() en auth.service.ts
1:33 Crea jwt.strategy.ts
1:36 Utiliza jwt.strategy
1:36 Crea jwt-auth-guard.ts
1:38 Modifica login() en auth.controller.ts
1:40 Añade JWT strategy al auth.module.ts
1:41 En main.ts añade  const config = app.get(ConfigService) 
1:45 Prueba autentication con Postman
1:48 Corrige error en auth.controller.ts
1:49 Modifica authService.ts
1:50 Compueba token en https://jwt.io/
1:52 Prueba authentication de la ruta profile con Postman
1:54 en auth.module.ts registra strategy JWT
1:59 refreshToken()
1:





























Deploy de NestJS con migraciones en TypeORM en Heroku
https://www.youtube.com/watch?v=P2gvIQRXIuc





https://tecadmin.net/docker-compose-persistent-mysql-data/





Material de Jimmy:
https://github.com/jimyhdolores/curso-angular-11-server-fuckyncode