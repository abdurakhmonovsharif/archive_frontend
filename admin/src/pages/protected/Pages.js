import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Pages from '../../features/pages'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Sahifalar"}))
      }, [])


    return(
        <Pages />
    )
}

export default InternalPage