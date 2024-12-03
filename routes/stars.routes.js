/**
 * @swagger
 * tags:
 *   name: Stars
 *   description: API for managing stars
 */

/**
 * @swagger
 * /stars/create:
 *   post:
 *     summary: Create a new star
 *     tags: [Stars]
 *     description: Creates a new star with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the star
 *               height:
 *                 type: string
 *                 description: Height of the star
 *               radius:
 *                 type: string
 *                 description: Radius of the star
 *     responses:
 *       201:
 *         description: Star created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 star:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     height:
 *                       type: string
 *                     radius:
 *                       type: string
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /stars/all:
 *   get:
 *     summary: Get all stars
 *     tags: [Stars]
 *     description: Retrieve a list of all stars
 *     responses:
 *       200:
 *         description: List of stars
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   height:
 *                     type: string
 *                   radius:
 *                     type: string
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /stars/update/{id}:
 *   put:
 *     summary: Update a star
 *     tags: [Stars]
 *     description: Updates a star's details by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the star
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               height:
 *                 type: string
 *               radius:
 *                 type: string
 *     responses:
 *       200:
 *         description: Star updated successfully
 *       404:
 *         description: Star not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /stars/delete/{id}:
 *   delete:
 *     summary: Delete a star
 *     tags: [Stars]
 *     description: Deletes a star by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the star
 *     responses:
 *       200:
 *         description: Star deleted successfully
 *       404:
 *         description: Star not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /stars/getById/{id}:
 *   get:
 *     summary: Get a star by ID
 *     tags: [Stars]
 *     description: Retrieve the details of a specific star by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the star
 *     responses:
 *       200:
 *         description: Star details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 height:
 *                   type: string
 *                 radius:
 *                   type: string
 *       404:
 *         description: Star not found
 *       500:
 *         description: Internal server error
 */

const { Router } = require('express');
const router = Router();
const { starsCreate, starsAll, starsUpdate, starsDelete, starGetById } = require('../controllers/stars.controller');

router.post('/create', starsCreate);
router.get('/all', starsAll);
router.put('/update/:id', starsUpdate);
router.delete('/delete/:id', starsDelete);
router.get('/getById/:id', starGetById);

module.exports = router;
