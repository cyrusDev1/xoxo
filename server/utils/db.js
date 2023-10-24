import { MongoClient } from 'mongodb';
import { env } from 'process';
import { hashPassword } from './gen'
const bcrypt = require('bcrypt');
const ObjectId = require('mongodb').ObjectId;

class DBClient {
  constructor () {
    const host = env.HOST || 'localhost';
    const port = env.PORT || '27017';
    const dbName = env.dbName || 'xoxo_db';
    const url = `mongodb://${host}:${port}/${dbName}`;
    this.client = MongoClient(url);
    this.client.connect();
  }

  isAlive () {
    return this.client.isConnected();
  }

  async createGame(game){
    this.myDb = this.client.db()
    const games = this.myDb.collection('games')
    return games.insertOne(game)
  }

  async createUser(newUser){
    newUser.password = await hashPassword(newUser.password)
    this.myDb = this.client.db()
    const users = this.myDb.collection('users')
    return users.insertOne(newUser)
  }

  async getGame(id){
    this.myDb = this.client.db()
    const game = this.myDb.collection('games').findOne({_id: new ObjectId(id)})
    return game
  }

  async getGamebyCode(code){
    this.myDb = this.client.db()
    const game = this.myDb.collection('games').findOne({ code })
    return game
  }

  async getUser(id){
    this.myDb = this.client.db()
    const user = this.myDb.collection('users').findOne({_id: new ObjectId(id)})
    return user
  }

  async checkUser(username, password){
    this.myDb = this.client.db()
    const users = this.myDb.collection('users')
    const user = await users.findOne({ username })
    if(user){
      const isMatch = await bcrypt.compare(password, user.password)
      if(isMatch){
        return user
      }
    }
    return false
  }

  async checkUsername(username){
    this.myDb = this.client.db()
    const users = this.myDb.collection('users')
    return users.findOne({ username })
  }


  async updateDoc(collection, query, newValues){
    this.myDb = this.client.db()
    this.myDb.collection(collection).updateOne(query, newValues)
  }
}

const dbClient = new DBClient();
export default dbClient;
