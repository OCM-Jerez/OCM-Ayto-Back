import {
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateOrganoContratacionDto, UpdateOrganoContratacionDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganoContratacion } from './entities/organo-contratacion.entity';

@Injectable()
export class OrganoContratacionService {
  constructor(
    @InjectRepository(OrganoContratacion)
    private readonly OrganoContratacionRepository: Repository<OrganoContratacion>,
  ) { }

  create(createOrganoContratacionDto: CreateOrganoContratacionDto) {
    return this.OrganoContratacionRepository.save(createOrganoContratacionDto);
  }

  findAll() {
    return this.OrganoContratacionRepository
      .find({ order: { nombre: 'ASC' } })
      .catch((err) => console.log(err));
  }

  findOne(id: string) {
    return this.OrganoContratacionRepository.findOne(id);
  }

  update(id: string, updateOrganoContratacionDto: UpdateOrganoContratacionDto) {
    return this.OrganoContratacionRepository.update(id, updateOrganoContratacionDto);
  }

  remove(id: string) {
    return this.OrganoContratacionRepository.delete(id);
  }
}
