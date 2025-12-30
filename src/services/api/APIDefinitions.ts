import z from 'zod';



export interface IAPISearchPagination {
  limit: number
  page: number
}



const RESULTS_DEFAULT_LIMIT = 15;
const MAX_RESULTS_LIMIT = 30;

export const APISearchQueryParamsSchema = z.object({
  q: z.string(),
  limit: z.number().min(1).max(MAX_RESULTS_LIMIT).default(RESULTS_DEFAULT_LIMIT).optional(),
  page: z.number().min(1).default(1).optional()
});