const defaultValueOfLocations:{} ={
  data:null,
  error:null,
  loader:true,
  page:0,
  totalPages:0,
  searchByName:'',
  searchByType:'',
  searchByDimension:''
}

const LOCATION_SUCCESS:string = 'LOCATION_SUCCESS'
const LOCATION_FAIL:string = 'LOCATION_FAIL'
const LOCATION_LOADING:string = 'LOCATION_LOADING'
const LOCATION_SET_PAGE:string = 'LOCATION_SET_PAGE'
const LOCATION_SET_FILTER_BY_NAME:string = 'LOCATION_SET_FILTER_BY_NAME'
const LOCATION_SET_FILTER_BY_TYPE:string = 'LOCATION_SET_FILTER_BY_TYPE'
const LOCATION_SET_FILTER_BY_DIMENSION:string = 'LOCATION_SET_FILTER_BY_DIMENSION'

export const reducerLocation = (state:{} = defaultValueOfLocations, action:any) => {
  switch (action.type){
    case LOCATION_SUCCESS:
      return {...state, loader: false, error:null, data:action.payload, totalPages:action.totalPages}
    case LOCATION_FAIL:
      return {...state, loader: false, error:action.payload,}
    case LOCATION_LOADING:
      return {...state, loader: true, error:null,}
    case LOCATION_SET_PAGE:
      return {...state, page: action.payload}
    case LOCATION_SET_FILTER_BY_NAME:
      return {...state, searchByName:action.payload}
    case LOCATION_SET_FILTER_BY_TYPE:
      return {...state, searchByType:action.payload}
    case LOCATION_SET_FILTER_BY_DIMENSION:
      return {...state, searchByDimension:action.payload}
    default:
      return state
  }
}

export const action_location_success = (data:any, totalPages:number) => ({type:LOCATION_SUCCESS, payload:data, totalPages})
export const action_location_failed = (e:any) => ({type:LOCATION_FAIL, payload:e})
export const action_location_loading = ():any => ({type:LOCATION_LOADING})
export const action_location_set_page = (e:any) => ({type:LOCATION_SET_PAGE, payload:e})
export const action_set_location_filter_by_name = (e:any) => ({type:LOCATION_SET_FILTER_BY_NAME, payload:e})
export const action_set_location_filter_by_type = (e:any) => ({type:LOCATION_SET_FILTER_BY_TYPE, payload:e})
export const action_set_location_filter_by_dimension = (e:any) => ({type:LOCATION_SET_FILTER_BY_DIMENSION, payload:e})
