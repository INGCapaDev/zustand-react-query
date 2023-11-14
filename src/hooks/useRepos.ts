import api from '../api/github';
import { useQuery } from '@tanstack/react-query';
import { Repository } from './types';

async function fetchRepos() {
  const { data } = await api.get<Repository[]>('/users/ingcapadev/repos');
  return data;
}

export function useFetchRepositories() {
  return useQuery({
    queryKey: ['repos'],
    queryFn: fetchRepos,
  });
}
