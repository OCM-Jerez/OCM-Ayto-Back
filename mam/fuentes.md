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
0:10 Configuracion.
=:



















Deploy de NestJS con migraciones en TypeORM en Heroku
https://www.youtube.com/watch?v=P2gvIQRXIuc





https://tecadmin.net/docker-compose-persistent-mysql-data/





Material de Jimmy:
https://github.com/jimyhdolores/curso-angular-11-server-fuckyncode