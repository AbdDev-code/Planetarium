const Stars = require("../models/stars.model")
const asyncHandle = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')

// @desc    Star find One
// @router  POST /api/v1/stars/findOne
// @access  Public
exports.starGetById = asyncHandle(async (req,res,next)=>{
    const {id} = req.params
    const star = await Stars.findById(id)
    res.status(200).json({
        success: true,
        star:star
    })
})


// @desc    Star new User
// @router  POST /api/v1/stars/create
// @access  Public
exports.starsCreate = asyncHandle(async (req,res,next)=>{
    const {name,height,radius} = req.body;
    const star = await Stars.create({name,height,radius});
    res.status(201).json({
        success:true,
        data:star,
    })
})

// @desc    Star  all
// @router  POST /api/v1/stars/all
// @access  Public
exports.starsAll = asyncHandle(async (req,res,next)=>{
    const star = await Stars.find()
    res.status(200).json({
        success: true,
        star:star
    })
})

// @desc    Star  update
// @router  POST /api/v1/stars/update
// @access  Public
exports.starsUpdate = asyncHandle(async (req, res, next) => {
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
    const update = await Stars.findByIdAndUpdate(
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
exports.starsDelete = asyncHandle(async (req,res,next)=>{
    const {id} = req.params;
    const star = await Stars.findByIdAndDelete(id);
    res.status(201).json({
        success:true,
        data:star,
    })
})




