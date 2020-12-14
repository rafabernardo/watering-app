import api from './api'

export const postRegister = async ({ name,
   species,
   locate,
   humidity_level, acquisition_date}) => {
   const response = await api.post('/new_plant', {
      name,
      species,
      locate,
      humidity_level, acquisition_date
   })
   return response.data
}