const Planets = require("../models/planets.models")
const asyncHandle = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')

// @desc    Planet find One
// @router  POST /api/v1/stars/findOne
// @access  Public
exports.planetGetById = asyncHandle(async (req,res,next)=>{
    const {id} = req.params
    const planet = await Planets.findById(id)
    res.status(200).json({
        success: true,
        star:planet
    })
})


// @desc    Star new User
// @router  POST /api/v1/stars/create
// @access  Public
exports.planetCreate = asyncHandle(async (req,res,next)=>{
    const {name,height,radius} = req.body;
    const planet = await Planets.create({name,height,radius});
    res.status(201).json({
        success:true,
        data:planet,
    })
})

// @desc    Star  all
// @router  POST /api/v1/stars/all
// @access  Public
exports.planetAll = asyncHandle(async (req,res,next)=>{
    const planet = await Planets.find()
    res.status(200).json({
        success: true,
        star:planet
    })
})

// @desc    Star  update
// @router  POST /api/v1/stars/update
// @access  Public
exports.planetUpdate = asyncHandle(async (req, res, next) => {
    const { id } = req.params; // req.params.id dan to'g'ri olish
    const { name, height, radius } = req.body; // req.body maydonlari

    // Maydonlar mavjudligini tekshirish
    if (!id || !name || !height || !radius) {
        return res.status(400).json({
            success: false,
            message: "ID va barcha maydonlar talab qilinadi",
        });
    }

    // Yangilanishni bajarish
    const update = await Planets.findByIdAndUpdate(
        id,
        { name, height, radius },
        { new: true, runValidators: true } // Yangilangan hujjatni qaytarish
    );

    // Agar yulduz topilmasa
    if (!update) {
        return res.status(404).json({
            success: false,
            message: "Yulduz topilmadi",
        });
    }

    // Muvaffaqiyatli javob
    res.status(201).json({
        success: true,
        star: update,
    });
});

// @desc    Star Delete
// @router  POST /api/v1/stars/delete
// @access  Public
exports.planetDelete = asyncHandle(async (req,res,next)=>{
    const {id} = req.params;
    const planet = await Planets.findByIdAndDelete(id);
    res.status(201).json({
        success:true,
        data:planet,
    })
})




