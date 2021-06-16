import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../student/student.type';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string; // represent date as ISO string

  @Field()
  endDate: string;

  @Field((type) => [StudentType])
  students: string[];
}
