
import { Movie } from '@/types/main'
import { atom } from 'recoil'
export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie>({
  key: 'movieState',
  default: {} as Movie,
})
