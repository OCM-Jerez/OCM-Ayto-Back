1.- Ante problemas en Migration:
     * borrar y crear de nuevo squema usamdo MySQL Workbench.
     * DROP DATABASE `ayuntamiento`;
   * CREATE SCHEMA `ayuntamiento`
   * 
     * Borrar todas las migration existentes.
     * Borrar /dist
     * En src/config/database.config.ts
       // Activar SOLO MANUALMENTE en DESARROLLO SI ES NECESARIO (DESACTIVAR EN PRODUCCION).
          synchronize: false,

     * npm run start:dev
     * La bbdd no se actualiza hasta que se se haga lo siguiente:
     * En otra terminal:
     * npm run db:migration:generate inicio

L


2.- Generar CRUD
     * https://docs.nestjs.com/recipes/crud-generator
     * cd src/entities
     * nest g resource users --no-spec
     * añadir a app.module.ts
     * 




npm run start:dev
localhost:3000/api/v1/programas