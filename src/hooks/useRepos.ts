import api from '../api/github';
import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { Repository } from './types';

async function fetchRepos(ctx: QueryFunctionContext) {
  const githubUsername = ctx.queryKey[1];
  const { data } = await api.get<Repository[]>(
    `/users/${githubUsername}/repos`
  );
  return data;
}

export function useFetchRepositories(githubUsername: string) {
  return useQuery({
    queryKey: ['repos', githubUsername],
    queryFn: fetchRepos,
  });
}
