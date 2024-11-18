import { useQuery } from '@tanstack/react-query';
import { instance } from 'services/config';
import { GetAllLecturesResponse } from './types';

const getAllLectures = async () => {
  const res = await instance.get<GetAllLecturesResponse>('/search/get-all');
  return res.data;
};

export const useGetAllLectures = () => {
  return useQuery({
    queryKey: ['getAllLectures'],
    queryFn: getAllLectures,
    initialData: [],
  });
};
