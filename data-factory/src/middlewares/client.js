import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { notification } from 'antd';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      notification.error({
        message: 'Error',
        description: `[GraphQL error]: Message: ${message},
        Location: ${JSON.stringify(locations)}, Path: ${path}`,
      })
    );
  }

  if (networkError) {
    notification.error({
      message: 'Error',
      description: `[Network error]: ${networkError}`,
    });
  }
});

const authLink = setContext((request, previousContext) => ({
  uri: process.env.REACT_APP_DATA_ENDPOINT,
  credentials: 'include',
}));

const httpLink = createHttpLink();

const link = ApolloLink.from([errorLink, authLink, httpLink]);

export default new ApolloClient({ link, cache: new InMemoryCache() });
