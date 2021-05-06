1.- Ante problemas en Migration:
     * borrar y crear de nuevo squema usamdo MySQL Workbench.
     * Borrar todas las migration existentes.
     * Borrar /dist
     * En src/config/database.config.ts
       // Activar SOLO MANUALMENTE en DESARROLLO SI ES NECESARIO (DESACTIVAR EN PRODUCCION).
          synchronize: false,

     * npm run start:dev
     * En otra terminal:
     * npm run db:migration:generate inicio


2.- Generar CRUD
     * https://docs.nestjs.com/recipes/crud-generator
     * cd src/entities
     * nest g resource users --no-spec
     * añadir a app.module.ts
     * 




npm run start:dev
localhost:3000/programas