import React from 'react'
import {Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetSliderAction } from "../../redux/actions/CourseAction";

function Slider() {
let {course} = useSelector((state)=>state.course)
let dispatch  = useDispatch()
useEffect(()=>{
    dispatch(GetSliderAction())
},[])

console.log(course)
  return (

    <Swiper
    spaceBetween={50}
    slidesPerView = {3}
    >
        {
            course &&
            course.map(data=>(
                <SwiperSlide key={data.courseId}>
                    <img src={data.photoUrl} alt="" />

                </SwiperSlide>
            ))
        }
       
        </Swiper>
  )
}

export default Slider