const express = require('express');
const replyCommentController = require('../controllers/replyCommentController');
const authController = require('../controllers/authController');

const router = express.Router();

// 回复评论
router.route('/post/reply').post(replyCommentController.addReply);

// 更新likes
router.route('/update/like/:id').patch(replyCommentController.updateComment);

// del
router.use(authController.protect, authController.restrictTo('admin'));

// 删除对应评论下的reply，id为所属评论的id
// router.delete(
//   '/delReplysOfComment/:id',
//   replyCommentController.delReplysOfComment
// );
router.delete('/delete/replys/:id', replyCommentController.delReplysOfComment);

router.route('/:id').delete(replyCommentController.deleteComment);

module.exports = router;
