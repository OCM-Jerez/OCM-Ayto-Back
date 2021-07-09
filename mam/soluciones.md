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

       A partir del 09/05/2021 tengo que  cambiar tambien, de lo contrario daba error.
        migrationsRun: false,   

     * npm run build
     * npm run start:dev
     * Swagger si refleja los cambios en los DTO.
     * La bbdd no se actualiza hasta que se se haga lo siguiente:
     * En otra terminal:
     * npm run db:migration:generate inicio
     * npm run db:migration:create modificacion
     * npm run db:migration:run  

PARA QUE LOS dto FUNCIONEN TIENEN QUE TENER VALIDACIONES.


2.- Generar CRUD
     * https://docs.nestjs.com/recipes/crud-generator
     * cd src/entities
     * nest g resource users --no-spec  (si no reconoce comando nest => npm install -g @nestjs/cli  )
     * añadir user.repository.ts (en singular)
     * Añadir codigo que no crea automaticamente en entity:
     * Usar class validator.
     * Usar capitulo-ingreso.entity como ejemplo más avanzado.


import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('organico')
export class Organico extends BaseEntity {}
     * 




npm run start:dev
localhost:3000/api/v1/programas
http://localhost:3000/docs/

nest info
