const { models } = require('../../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function getDay(date) {
  const today = new Date(date || Date.now());
  today.setHours(0, 0, 0);
  return today
}
function getNextDay(date) {
  const tomorrow = getDay(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

module.exports = {
  event(root, { id }) {
    return models.Event.findById(id);
  },
  events(root, args, context) {
    console.log('events ====', args)
    const today = new Date();
    today.setHours(0, 0, 0);
    return models.Event.findAll({
      where: {
        dateStart: {
          [Op.gt]: getDay(args.dateStart),
          [Op.lt]: getNextDay(args.dateStart)
        }
      }
    }, context);
  },
  user(root, { id }) {
    return models.User.findById(id);
  },
  users(root, args, context) {
    return models.User.findAll({}, context);
  },
  room(root, { id }) {
    return models.Room.findById(id);
  },
  rooms(root, args, context) {
    console.log('rooms ====', args)
    const today = new Date();
    today.setHours(0, 0, 0);
    return models.Room.findAll({}, context);
  }
};
