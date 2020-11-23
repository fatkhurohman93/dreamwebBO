module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("itemgroup", {
    name: {
      type: Sequelize.STRING
    },
    photo: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: false
    
  });

  return Tutorial;
};
