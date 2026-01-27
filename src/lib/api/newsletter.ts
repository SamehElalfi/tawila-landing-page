import { apiClient } from './client'

export interface NewsletterSubscribeRequest {
  email: string
}

export interface NewsletterSubscribeResponse {
  message?: string
  success?: boolean
}

export const newsletterApi = {
  subscribe: async (data: NewsletterSubscribeRequest): Promise<NewsletterSubscribeResponse> => {
    const response = await apiClient.post<NewsletterSubscribeResponse>('/newsletter', data)
    return response.data
  },
}
