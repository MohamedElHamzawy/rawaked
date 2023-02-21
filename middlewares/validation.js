const headers = ["body","params"]

const validationer = (schema) => {
    return (req,res,next) => {
        headers.forEach((key)=>{
            if (schema[key]) {
                const valid = schema[key].validate(req[key]);
                if (valid.error) {
                    res.status(400).json({Error:valid.error.details[0].message})
                } else {
                    next();
                }
            }
        })
    }
}

module.exports = validationer;