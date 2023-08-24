const defaultValueOfEpisodes:{} ={
  data:null,
  error:null,
  loader:true,
  page:0,
  totalPages:0,
  search:'',
}

const EPISODES_SUCCESS:string = 'EPISODES_SUCCESS'
const EPISODES_FAIL:string = 'EPISODES_FAIL'
const EPISODES_LOADING:string = 'EPISODES_LOADING'
const EPISODES_SET_PAGE:string = 'EPISODES_SET_PAGE'
const EPISODES_SET_FILTER:string = 'EPISODES_SET_FILTER'


export const reducerEpisode = (state:{} = defaultValueOfEpisodes, action:any) => {
  switch (action.type){
    case EPISODES_SUCCESS:
      return {...state, loader: false, error:null, data:action.payload, totalPages:action.totalPages,}
    case EPISODES_FAIL:
      return {...state, loader: false, error:action.payload,}
    case EPISODES_SET_FILTER:
      return {...state, search:action.payload}
    case EPISODES_LOADING:
      return {...state, loader: true, error:null,}
    case EPISODES_SET_PAGE:
      return {...state, page:action.payload}
    default:
      return state
  }
}

export const action_episode_success = (data:any, totalPages:number) => ({type:EPISODES_SUCCESS, payload:data, totalPages})
export const action_episode_failed = (e:any) => ({type:EPISODES_FAIL, payload:e})
export const action_episode_loading = ():any => ({type:EPISODES_LOADING})
export const action_set_page_episodes = (e:any) => ({type:EPISODES_SET_PAGE, payload:e})
export const action_set_episodes_filter = (e:any) => ({type:EPISODES_SET_FILTER, payload:e})

