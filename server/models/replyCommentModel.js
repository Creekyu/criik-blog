const mongoose = require('mongoose');

const replyCommentSchema = new mongoose.Schema({
  // 评论内容
  contents: {
    type: String,
    trim: true,
    required: [true, '请输入评论'],
    maxLength: [200, '评论最多可输入200个字符，请修改后提交！'],
  },
  // 点赞数
  likes: {
    type: Number,
    default: 0,
  },
  // 发布时间
  publishAt: {
    type: Date,
    default: Date.now(),
  },
  // 删除标志
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  // 所属用户 (parent ref)
  belongingUser: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  // 所属评论 (parent ref)
  belongingComment: {
    type: mongoose.Schema.ObjectId,
    ref: 'Comment',
  },
  username: {
    type: String,
    default: '匿名',
    maxLength: [20, '用户名最多20个字符，请修改后提交！'],
  },
  userRole: {
    type: String,
    default: 'visitor',
  },
  brief: {
    type: String,
    default: '这个人很懒，没有个人简介！',
    maxLength: [50, '个人简介最多50个字符，请修改后提交！'],
  },
});

replyCommentSchema.pre(/^(find)|(populate)|(count)/, function (next) {
  this.find({ active: { $ne: false } }).select('-__v');
  next();
});

const ReplyComment = mongoose.model('ReplyComment', replyCommentSchema);

module.exports = ReplyComment;
