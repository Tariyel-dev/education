import React from 'react'
import { useEffect } from 'react'
import { GetProductAction } from '../../redux/actions/CourseAction'
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

function Product() {
const {course} = useSelector((state)=>state.course)
    let dispatch = useDispatch()

    useEffect(()=> {
        dispatch(GetProductAction())
    },[])

  return (
    <div>
{course.map(e=>(
    <Link key = {e.courseId} to="/">{e.name}</Link>
))}

    </div>
  )
}

export default Product