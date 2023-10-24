import dbClient from '../utils/db'


class UserController{
    static async newUser(request, response){
        const { username, password } = request.body
        if (username && password) {
            const user = {username, password, points: 0, wins: 0, looses: 0, draws: 0}
            if(!(await dbClient.checkUsername(username))){
                const insert = await dbClient.createUser(user)
                const newUser = {id: insert.ops[0]._id, ...insert.ops[0]}
                delete newUser._id
                response.status(201).json(newUser).end()
            }else{
                response.status(400).json({'error': 'Cet username existe déja'}).end()
            }
        }else{
            response.status(400).json({'error': 'username && password are required'}).end()
        }
    }

    static async getUser(request, response){
        const { id } = request.params
        const User = await dbClient.getUser(id)
        if(User){
            response.status(200).json(User).end
            return
        }
        response.status(400).json({'error': 'User not found'}).end()
    }

    static async checkUser(request, response){
        const { username, password } = request.body
        if (username && password) {
            const check = await dbClient.checkUser(username, password)
            if(check){
                const user = {id: check._id, ...check}
                delete user._id
                response.status(201).json(user).end()
            }else{
                response.status(400).json({'error': 'Username ou password  incorrect'}).end()
            }
        }else{
            response.status(400).json({'error': 'username && password are required'}).end()
        }
    }
}

module.exports = UserController;
