"use strict"
// CONST

  const {sequelize} = require('../../admin/admin');
  const models =  sequelize.models;

// STRUCTURE
module.exports ={
  created: async(req,res)=>{
    const data = req.body;
    const category = await models.Category.findOne({where:{ name: data.name }});
    if( category ) return res.status(203).send({ message: 'Registro duplicado' });
    const newcategory = await models.Category.create(data);
    return res.status(201).json(newcategory);
  },
  find: async(req,res)=>{
    const category = await models.Category.findAll();
    return res.status(200).json(category);

  },
  findOne: async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const category = await models.Category.findByPk( id, { include: ['products'] } );
    return res.status(200).json(category);
  },
  updateCategory: async(req,res)=>{

  },
  delete: async()=>{

  }
}