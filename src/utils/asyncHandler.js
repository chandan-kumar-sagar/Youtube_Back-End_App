const asyncHandler = (requestHandler) => {
    (req, res, next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=> next(err))
    }
}





export {asyncHandler}





// or eek tarika hai kii kaise aap try and catch ka use kr skte hai
// line 15 ka likhne ka tarika hai mtlb us function ko ees trah se explain kr skte hai.........

// const asyncHandler = ()=>{}
// const asyncHandler = (func)=>()={}
// const asyncHandler = (func)=> async()=>{}

// const asyncHandler = (fn)=> async(req, res, next) =>{

//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message:err.message
//         })
//     }
// }