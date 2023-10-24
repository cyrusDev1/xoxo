import { Router } from "express";
import UserController from "../controllers/UserController.js"
import GameController from "../controllers/GameController.js"
const router = Router()

router.post("/login", UserController.checkUser)
router.post("/register", UserController.newUser)
router.post("/newgame", GameController.newGame)
router.get("/game/:id", GameController.getGame)
router.get("/user/:id", UserController.getUser)
router.post("/game", GameController.checkGame)

module.exports = router;