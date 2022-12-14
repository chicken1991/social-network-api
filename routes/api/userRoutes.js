const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// Add a friend friendId to userId friends list
// /api/users/:userId/friends/:friendId 
router.route('/:userId/friends/:friendId').post(addFriend);

// delete friend 'friendId' from 'userId' friends list
// /api/users/:userId/friends/:friendId 
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
