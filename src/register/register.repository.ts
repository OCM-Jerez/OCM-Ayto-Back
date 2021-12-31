import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user/entities/user.entity';

@EntityRepository(User)
export class RegisterRepository extends Repository<User> { }
