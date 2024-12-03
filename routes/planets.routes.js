/**
 * @swagger
 * tags:
 *   name: Planets
 *   description: API for managing planets
 */

/**
 * @swagger
 * /planets/create:
 *   post:
 *     summary: Create a new planet
 *     tags: [Planets]
 *     description: Creates a new planet with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the planet
 *               height:
 *                 type: string
 *                 description: Size of the planet
 *               radius:
 *                 type: string
 *                 description: Distance of the planet from the sun
 *     responses:
 *       201:
 *         description: Planet created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 planet:
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
 * /planets/all:
 *   get:
 *     summary: Get all planets
 *     tags: [Planets]
 *     description: Retrieve a list of all planets
 *     responses:
 *       200:
 *         description: List of planets
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
 * /planets/update/{id}:
 *   put:
 *     summary: Update a planet
 *     tags: [Planets]
 *     description: Updates a planet's details by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the planet
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
 *         description: Planet updated successfully
 *       404:
 *         description: Planet not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /planets/delete/{id}:
 *   delete:
 *     summary: Delete a planet
 *     tags: [Planets]
 *     description: Deletes a planet by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the planet
 *     responses:
 *       200:
 *         description: Planet deleted successfully
 *       404:
 *         description: Planet not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /planets/getById/{id}:
 *   get:
 *     summary: Get a planet by ID
 *     tags: [Planets]
 *     description: Retrieve the details of a specific planet by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the planet
 *     responses:
 *       200:
 *         description: Planet details retrieved successfully
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
 *         description: Planet not found
 *       500:
 *         description: Internal server error
 */

const { Router } = require('express');
const router = Router();
const { planetCreate, planetAll, planetUpdate, planetDelete, planetGetById } = require('../controllers/planets.controller');

router.post('/create', planetCreate);
router.get('/all', planetAll);
router.put('/update/:id', planetUpdate);
router.delete('/delete/:id', planetDelete);
router.get('/getById/:id', planetGetById);

module.exports = router;
