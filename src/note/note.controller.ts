import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Note } from './note.entity';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all/:author')
  async getAll(@Param('author') author : string): Promise<Note[]> {
    return this.noteService.findAll(author);
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addOne(@Body() newNote: Note) {
    this.noteService.create(newNote);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('del')
  async delete(@Body() noteId: number) {
    this.noteService.delete(noteId);
  }

  @Post('update')
  async update(@Body() note: Note) {
    this.noteService.update(note);
  }
}
