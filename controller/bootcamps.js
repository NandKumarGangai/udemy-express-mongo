const Bootcamp = require('../models/Bootcamp');

// @desc    Get bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        });
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Get single bootcam
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.findById(req.params.id);

        if(!bootcamps) {
            return res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: bootcamps
        });
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  private
exports.createBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  private
exports.updateBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!bootcamps) {
            return res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: bootcamps
        });
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  private
exports.deleteBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamps) {
            return res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
}