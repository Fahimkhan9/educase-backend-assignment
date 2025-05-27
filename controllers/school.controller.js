
import {catchAsync} from '../middlewares/error.middleware.js'
import School from '../models/School.model.js'
import { calculateDistance } from '../utils/calculateDistance.js';
/**
 * @desc Add a new school
 * @route POST /api/v1/school/addSchool
 * @access Public
 */
export const AddSchool =catchAsync(async (req,res)=>{
  try {
      const { name, address, latitude, longitude } = req.body;

  // Basic manual validation
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return AppError('Invalid or missing "name"', 400);
  }

  if (!address || typeof address !== 'string' || address.trim() === '') {
    return AppError('Invalid or missing "address"', 400);
  }

  if (typeof latitude !== 'number' || isNaN(latitude)) {
    return AppError('Invalid or missing "latitude"', 400);
  }

  if (typeof longitude !== 'number' || isNaN(longitude)) {
    return AppError('Invalid or missing "longitude"', 400);
  }

  const school = await School.create({ name, address, latitude, longitude });

  res.status(201).json({
    message: 'School added successfully',
    school,
  });
  } catch (error) {
    console.log(error);
    
  }
})
/**
 * @desc List all schools with distance from user location
 * @route GET /api/v1/school/listSchools
 * @access Public
 */
export const listSchools = catchAsync(async (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLon)) {
    return AppError('Invalid or missing "latitude/longitude"', 400);
  }

  const schools = await School.findAll();

  const schoolsWithDistance = schools.map((school) => {
    const distance = calculateDistance(
      userLat,
      userLon,
      school.latitude,
      school.longitude
    );

    return {
      ...school.toJSON(),
      distance: parseFloat(distance.toFixed(2)), // optional: round to 2 decimals
    };
  });

  // Sort by distance
  schoolsWithDistance.sort((a, b) => a.distance - b.distance);

  res.json(schoolsWithDistance);
});