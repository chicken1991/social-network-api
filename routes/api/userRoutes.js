const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
  // addAssignment,
  // removeAssignment,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).post(updateUser);

// /api/users/:userId/assignments
// router.route('/:userId/assignments').post(addAssignment); CHANGE THIS LINE?

// Add a friend friendId to userId friends list
// /api/users/:userId/friends/:friendId 
router.route('/:userId/friends/:friendId').post(addFriend);

// delete friend 'friendId' from 'userId' friends list
// /api/users/:userId/friends/:friendId 
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
