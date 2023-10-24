import dbClient from '../utils/db'
import { genCode } from '../utils/gen';
class GameController{
    /** code, type, mode, host, guest, host_score, guest_score, grid, status**/
    static async newGame(request, response){
        const code = genCode()
        const host_score = 0
        const guest_score = 0
        const grid = [["", "", ""], ["", "", ""], ["", "", ""]]
        const status = "not_started"
        const { type, mode } = request.body
        let host = ""
        let guest = ""
        if (type && mode) {
            host = request.body.host
            guest = "Invité(e)"
            if (mode === "solo") {
                guest = "xoxoIA"
            }
            const turn = host
            const game = {code, type, mode, host, guest, host_score, guest_score, grid, turn, status}
            const insert = await dbClient.createGame(game)
            const newGame = {id: insert.ops[0]._id, ...game }
            response.status(201).json(newGame).end()
        }else{
            response.status(400).json({'error': 'type and mode are required'}).end()
        }
    }

    static async getGame(request, response){
        const { id } = request.params
        const game = await dbClient.getGame(id)
        if(game){
            response.status(200).json(game).end()
            return
        }
        response.status(400).json({'error': 'game not found'}).end()
    }

    static async checkGame(request, response){
        const { code, username } = request.body
        const game = await dbClient.getGamebyCode(code)
        if(game){
            console.log(game.guest)
            console.log(username)
            if(username && game.mode === "solo"){
                if(game.host === username){
                    response.status(200).json(game).end()
                }else{
                    response.status(400).json({'error': 'Vous n\'êtes pas autorisé à accéder à cette partie !'}).end()
                }
            }
            if(username && game.guest === "Invité(e)" && username !== game.guest){
                const query = {_id: new require('mongodb').ObjectID(game._id)}
                const newValues = { $set: { guest: username, status: 'in_progress' } }
                await dbClient.updateDoc('games', query, newValues)
                response.status(200).json(game).end()
            }
            return
        }
        response.status(400).json({'error': 'Le code partie est incorrect !'}).end()
    }
}

module.exports = GameController;
