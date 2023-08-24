const defaultValueOfCharacters:{} ={
  data:null,
  error:null,
  loader:true,
  page:0,
  totalPages:0,
  status:'',
  search:'',
  gender:'',
}

const CHARACTER_SUCCESS:string = 'CHARACTER_SUCCESS'
const CHARACTER_FAIL:string = 'CHARACTER_FAIL'
const CHARACTER_LOADING:string = 'CHARACTER_LOADING'
const CHARACTER_SET_PAGE:string = 'CHARACTER_SET_PAGE'
const CHARACTER_SET_STATUS:string = 'CHARACTER_SET_STATUS'
const CHARACTER_SET_GENDER:string = 'CHARACTER_SET_GENDER'
const CHARACTER_SET_FILTER:string = 'CHARACTER_SET_FILTER'

export const reducerCharacter = (state:{} = defaultValueOfCharacters, action:any) => {
  switch (action.type){
    case CHARACTER_SUCCESS:
      return {...state, loader: false, error:null, data:action.payload, totalPages:action.totalPages, }
    case CHARACTER_SET_FILTER:
      return {...state, search:action.payload}
    case CHARACTER_FAIL:
      return {...state, loader: false, error:action.payload,}
    case CHARACTER_SET_PAGE:
      return {...state, page:action.payload}
    case CHARACTER_LOADING:
      return {...state, loader: true, error:null,}
    case CHARACTER_SET_STATUS:
      return {...state, status:action.payload,}
    case CHARACTER_SET_GENDER:
      return {...state, gender:action.payload}
    default:
      return state
  }
}

export const action_characters_success = (data:any, totalPages:number) => ({type:CHARACTER_SUCCESS, payload:data, totalPages})
export const action_characters_failed = (e:any) => ({type:CHARACTER_FAIL, payload:e})
export const action_characters_set_status = (e:any) => ({type:CHARACTER_SET_STATUS, payload:e})
export const action_characters_set_gender = (e:any) => ({type:CHARACTER_SET_GENDER, payload:e})
export const action_characters_loading = ():any => ({type:CHARACTER_LOADING})
export const action_set_page_characters = (e:any) => ({type:CHARACTER_SET_PAGE, payload:e,})
export const action_set_filter_characters = (e:any) => ({type:CHARACTER_SET_FILTER, payload:e})
