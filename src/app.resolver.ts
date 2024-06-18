import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql'

@ObjectType()
export class ApiVersion {
  @Field()
  version: string
}

@Resolver()
export class AppResolver {
  @Query(returns => ApiVersion)
  getApiInfo(): ApiVersion {
    return {
      version: '0.01',
    }
  }
}
