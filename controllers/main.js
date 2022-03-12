// check username, password in post(login) request
// if exist create new JWT
// sned back to front-end

// setup authentication so only the request with JWT can access the dashboard
const JWT  = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res)=>{
    const {username, password} = req.body
    // mongoose validation  
    // Joi ( layers of validation package )
    // check in the controller
    if(!username || !password ){
        throw new CustomAPIError('Please provide username and password', 400)
    }
    // testing, normally provided by our DB !
    const id = new Date().getDate()

    // try to keep the payload small, better UX
    // in the production use complex, long and ungessable String value!
    const token = JWT.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})

    res.status(200).json({msg:'User is Created', token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
  
    res.status(200).json({
      msg: `Hello, ${req.user.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
  }
  

module.exports = {
    login, 
    dashboard
}