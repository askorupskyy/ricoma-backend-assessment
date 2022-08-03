import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DateTimeResolver as DateTime } from 'graphql-scalars';
import * as path from 'path';

@Global()
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src', 'schema.graphql'),
      sortSchema: false, // always false as we want the inputs to come in the order provided
      installSubscriptionHandlers: true,
      resolvers: { DateTime },
      context: ({ req, res }) => ({ req, res }),
      cors: { origin: '*', credentials: true },
    }),
  ],
})
export class GraphQLProviderModule {}
