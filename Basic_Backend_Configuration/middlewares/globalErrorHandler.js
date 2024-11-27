const globalErrorHandler = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        message:"Something went wrong",
        err: err.stack
    })
}
export default globalErrorHandler;