import Task from '../models/Task.js';

export const taskAdd = (req,res)=>{
  const {name} = req.body
  const newTask = new Task({name})
  newTask.save()
  res.status(200).json({message:'Task added successfully'})
}

export const taskView =async (req,res)=>{
  const tasks = await Task.find()
  res.json(tasks)
}

export const taskDelete = (req,res)=>{
  const {id} = req.params
  Task.findByIdAndDelete(id)
    .then(task=>{
      res.status(200).json({message:`Task ${task.name} deleted successfully`})
    })
    .catch(err=>{
      res.status(500).json({message:err.message})
    })
}

export const taskUpdate = async(req,res)=>{
  const {id:_id} = req.params
  const {name,completed} = req.body
  console.log({name,completed})
  if(name === '') {
    await Task.findByIdAndUpdate({_id},{$set:{completed:completed}})
    res.status(200).json({message:`Task ${name} updated successfully`})
  }else{
    await Task.updateOne({id},name,completed)
    res.status(200).json({message:`Task ${name} updated successfully`})
  }
}