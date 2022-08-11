const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  // addAssignment,
  // removeAssignment,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/assignments
// router.route('/:userId/assignments').post(addAssignment); CHANGE THIS LINE?

// /api/users/:userId/assignments/:assignmentId 
// router.route('/:userId/assignments/:assignmentId').delete(removeAssignment); CHANGE THIS LINE?

module.exports = router;
