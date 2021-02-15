import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatType {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field(() => Int)
  age: number;
  @Field()
  breed: string;
}
