import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/guards';
import { ACGuard, Role, UseRoles } from 'nest-access-control';
import { JwtAuthGuard } from 'src/logic/auth/guards';


// export function Auth(...roles: Role[]) {
export function Auth() {
  return applyDecorators(
    // UseGuards(JwtAuthGuard, ACGuard),
    UseGuards(JwtAuthGuard),
    // UseRoles(...roles),
    ApiBearerAuth(),
  );
}
