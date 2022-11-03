import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
  constructor(@InjectRepository(Note) private noteRepo: Repository<Note>) {}

  findAll(name : string): Promise<Note[]> {
    return this.noteRepo.find({where : {author : name}})
  }

  create(newNote : Note) {
    this.noteRepo.insert(newNote);
  }

  delete(id) {
    this.noteRepo.remove(id);
  }

  update(note : Note) {
    this.noteRepo.update(note.id, note);
  }
  
}
