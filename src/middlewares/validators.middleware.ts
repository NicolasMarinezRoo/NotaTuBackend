import { body } from 'express-validator';

export const registerValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').notEmpty().withMessage('Name is required')
]
export const loginValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required')
]
export const offerValidation = [
    body('title').isLength({min:4, max:40}).withMessage('Title is required'),
    body('contactEmail').optional().isEmail().withMessage('Invalid email'),
    body('published').optional().isISO8601().toDate().withMessage('Format invalid'),
    body('expired').isISO8601().toDate().withMessage('Format invalid')
]

export const categoryValidation = [
    body('name').notEmpty().withMessage('Name is required')
]

export const rateValidation = [
    body('value').isInt({min:0, max:5}).toInt().withMessage('Value is required')
]