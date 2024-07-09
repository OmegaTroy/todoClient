import {Router} from 'express';
import {taskAdd,taskView,taskDelete,taskUpdate} from '../controllers/Task.controller.js';
const router =Router();


router.get('/',(req,res)=>{
  res.send('Hello World!');
})

router.get('/task',taskView)

router.post('/task',taskAdd)

router.delete('/task/:id',taskDelete)
router.put('/task/:id',taskUpdate)

export default router